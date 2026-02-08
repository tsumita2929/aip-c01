#!/usr/bin/env node
import { readFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const DOMAINS = [1, 2, 3, 4, 5];
const VALID_TYPES = ['single', 'multiple', 'ordering', 'matching'];
const VALID_DIFFICULTIES = ['easy', 'medium', 'hard'];
const SINGLE_LABELS = ['A', 'B', 'C', 'D'];
const MULTIPLE_LABELS = ['A', 'B', 'C', 'D', 'E'];

const errors = [];
const warnings = [];
function error(file, msg) { errors.push(`[ERROR] ${file}: ${msg}`); }
function warn(file, msg) { warnings.push(`[WARN]  ${file}: ${msg}`); }

function extractQuestion(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const match = content.match(/\.push\((\{[\s\S]*\})\);?\s*$/);
  if (!match) return null;
  try { return new Function(`return (${match[1]})`)(); } catch (e) { return null; }
}

function validateQuestion(filePath, q, domainNum) {
  const file = basename(filePath);
  if (!q) { error(file, 'パースエラー'); return; }

  const expectedIdPattern = new RegExp(`^D${domainNum}-\\d{3}$`);
  if (!q.id) error(file, 'id未設定');
  else {
    if (!expectedIdPattern.test(q.id)) error(file, `id "${q.id}" パターン不一致`);
    if (q.id !== file.replace('.js', '')) error(file, `id "${q.id}" ファイル名不一致`);
  }
  if (q.domain !== domainNum) error(file, `domain=${q.domain} フォルダ不一致`);
  if (!q.task || !/^\d+\.\d+$/.test(q.task)) error(file, `task "${q.task}" 形式不正`);
  else if (parseInt(q.task.split('.')[0]) !== domainNum) error(file, `task "${q.task}" ドメイン不一致`);
  if (!q.skill || !/^\d+\.\d+\.\d+$/.test(q.skill)) error(file, `skill "${q.skill}" 形式不正`);
  else if (q.task && !q.skill.startsWith(q.task + '.')) error(file, `skill "${q.skill}" task "${q.task}" 不整合`);
  if (!VALID_TYPES.includes(q.type)) { error(file, `type "${q.type}" 不正`); return; }
  if (!VALID_DIFFICULTIES.includes(q.difficulty)) error(file, `difficulty "${q.difficulty}" 不正`);
  if (!q.question || q.question.trim().length === 0) error(file, 'question空');
  if (!q.explanation || q.explanation.trim().length === 0) error(file, 'explanation空');
  if (!Array.isArray(q.references)) error(file, 'references非配列');

  if (q.type === 'single' || q.type === 'multiple') {
    const expectedLabels = q.type === 'single' ? SINGLE_LABELS : MULTIPLE_LABELS;
    const expectedCount = q.type === 'single' ? 4 : 5;
    if (!Array.isArray(q.options)) { error(file, 'options非配列'); return; }
    if (q.options.length !== expectedCount) error(file, `${q.type}: options ${q.options.length}個 (期待${expectedCount})`);
    const ids = q.options.map(o => o.id);
    for (let i = 0; i < q.options.length; i++) {
      if (q.options[i].id !== expectedLabels[i]) error(file, `options[${i}].id="${q.options[i].id}" (期待${expectedLabels[i]})`);
      if (!q.options[i].text || q.options[i].text.trim().length === 0) error(file, `options[${i}] text空`);
    }
    if (!Array.isArray(q.correctAnswers)) { error(file, 'correctAnswers非配列'); return; }
    if (q.type === 'single' && q.correctAnswers.length !== 1) error(file, `single: correctAnswers ${q.correctAnswers.length}個`);
    if (q.type === 'multiple' && q.correctAnswers.length < 2) error(file, `multiple: correctAnswers ${q.correctAnswers.length}個`);
    q.correctAnswers.forEach(a => { if (!ids.includes(a)) error(file, `correctAnswers不正ID "${a}"`); });
    if (!q.optionExplanations || typeof q.optionExplanations !== 'object') { error(file, 'optionExplanations無し'); return; }
    ids.forEach(id => { if (!q.optionExplanations[id]) error(file, `optionExplanations[${id}]無し`); });
    Object.keys(q.optionExplanations).forEach(key => {
      if (!ids.includes(key)) error(file, `optionExplanations "${key}" options外`);
      const exp = q.optionExplanations[key];
      if (!exp || typeof exp.correct !== 'boolean') error(file, `optionExplanations[${key}].correct非boolean`);
      if (!exp || !exp.text) error(file, `optionExplanations[${key}].text空`);
      if (exp && typeof exp.correct === 'boolean') {
        const shouldBeCorrect = q.correctAnswers.includes(key);
        if (exp.correct !== shouldBeCorrect) error(file, `optionExplanations[${key}].correct=${exp.correct} 不整合`);
      }
    });
    if (q.type === 'multiple') {
      const n = q.correctAnswers.length;
      if (!new RegExp(`${n}つ選択|${n}つ選んで|${n} つ選択|${n} つ選んで`).test(q.question))
        warn(file, `multiple(正答${n}個)に「${n}つ選択」明記なし`);
    }
  } else if (q.type === 'ordering') {
    if (!Array.isArray(q.options)) { error(file, 'ordering: options非配列'); return; }
    if (!Array.isArray(q.correctOrder)) { error(file, 'ordering: correctOrder非配列'); return; }
    const ids = q.options.map(o => o.id);
    const s1 = [...ids].sort(), s2 = [...q.correctOrder].sort();
    if (s1.length !== s2.length || !s1.every((v, i) => v === s2[i])) error(file, 'ordering: correctOrder不一致');
  } else if (q.type === 'matching') {
    if (!Array.isArray(q.prompts)) { error(file, 'matching: prompts非配列'); return; }
    if (!Array.isArray(q.answers)) { error(file, 'matching: answers非配列'); return; }
    if (!q.correctMatches || typeof q.correctMatches !== 'object') { error(file, 'matching: correctMatches無し'); return; }
    const pids = q.prompts.map(p => p.id), aids = q.answers.map(a => a.id);
    pids.forEach(pid => { if (!q.correctMatches[pid]) error(file, `matching: correctMatches[${pid}]無し`); });
    Object.entries(q.correctMatches).forEach(([k, v]) => { if (!aids.includes(v)) error(file, `matching: correctMatches[${k}]="${v}" answers外`); });
  }
}

let totalFiles = 0;
for (const d of DOMAINS) {
  const dir = join(ROOT, `data/questions/domain${d}`);
  let files;
  try { files = readdirSync(dir).filter(f => f.endsWith('.js')).sort(); } catch (e) { error(`domain${d}`, `読み込みエラー`); continue; }
  for (const file of files) { totalFiles++; validateQuestion(join(dir, file), extractQuestion(join(dir, file)), d); }
}

console.log(`\n=== 最終検証結果 ===`);
console.log(`検査: ${totalFiles}ファイル | エラー: ${errors.length} | 警告: ${warnings.length}`);
if (errors.length > 0) { console.log(`\n--- エラー ---`); errors.forEach(e => console.log(e)); }
if (warnings.length > 0) { console.log(`\n--- 警告 ---`); warnings.forEach(w => console.log(w)); }
if (errors.length === 0 && warnings.length === 0) console.log('\n全問題クリア。');
