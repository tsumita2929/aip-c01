/* === Results: 結果画面 === */
const Results = (() => {
  let lastResults = null;

  function show(results, mode) {
    lastResults = results;
    const { correct, total, rate, score, domainStats, wrongIds, questions, answers } = results;

    // バッジ
    const badge = document.getElementById('result-badge');
    const isPass = score >= 750;
    badge.className = `result-badge ${isPass ? 'pass' : 'fail'}`;
    badge.textContent = isPass ? '合格' : '不合格';

    // スコア
    document.getElementById('result-score').textContent = score;
    document.getElementById('result-correct').textContent = correct;
    document.getElementById('result-total').textContent = total;
    document.getElementById('result-rate').textContent = `${rate}%`;

    // タイトル
    document.getElementById('result-title').textContent =
      mode === 'exam' ? '模擬試験結果' : '学習結果';

    // 分野別バー
    renderDomainBars(domainStats);

    // 間違えた問題
    renderWrongList(wrongIds, questions, answers);

    // 模擬試験の場合は履歴保存
    if (mode === 'exam') {
      Storage.saveExamResult(results);
      Storage.addWrongQuestions(wrongIds);
    }
  }

  function renderDomainBars(domainStats) {
    const container = document.getElementById('domain-bars');
    let html = '';
    for (let d = 1; d <= 5; d++) {
      const stat = domainStats[d];
      if (stat.total === 0) continue;
      const pct = Math.round((stat.correct / stat.total) * 100);
      const colorClass = pct >= 75 ? 'high' : pct >= 50 ? 'mid' : 'low';
      html += `
        <div class="domain-bar-item">
          <div class="domain-bar-label">
            <span>分野${d}: ${escapeHtml(App.DOMAIN_NAMES[d])}</span>
            <span>${stat.correct}/${stat.total} (${pct}%)</span>
          </div>
          <div class="domain-bar-track">
            <div class="domain-bar-fill ${colorClass}" style="width:${pct}%"></div>
          </div>
        </div>`;
    }
    container.innerHTML = html;
  }

  function renderWrongList(wrongIds, questions, answers) {
    const container = document.getElementById('wrong-list');
    const title = document.getElementById('wrong-title');

    if (wrongIds.length === 0) {
      title.textContent = '全問正解!';
      container.innerHTML = '<p style="color:var(--green);text-align:center;">素晴らしい結果です!</p>';
      return;
    }

    title.textContent = `間違えた問題 (${wrongIds.length}問)`;

    const wrongQuestions = questions.filter(q => wrongIds.includes(q.id));
    container.innerHTML = wrongQuestions.map(q => {
      const userAns = answers[q.id];
      const userAnsStr = formatAnswer(q, userAns);
      const correctStr = formatCorrectAnswer(q);
      return `
        <div class="wrong-item" tabindex="0" role="button" onclick="Results.showWrongDetail('${escapeHtml(q.id)}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();Results.showWrongDetail('${escapeHtml(q.id)}');}">
          <div>
            <span class="wrong-item-id">${escapeHtml(q.id)} | 分野${q.domain} タスク${escapeHtml(q.task)}</span>
            <div style="margin-top:4px;font-size:0.85rem;">
              ${escapeHtml(truncate(q.question, 80))}
            </div>
            <div style="margin-top:4px;font-size:0.8rem;color:var(--text-muted);">
              あなたの解答: <span style="color:var(--red)">${escapeHtml(userAnsStr)}</span>
              → 正解: <span style="color:var(--green)">${escapeHtml(correctStr)}</span>
            </div>
          </div>
        </div>`;
    }).join('');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function buildWrongDetailHtml(q) {
    let html = `<div style="white-space:pre-wrap;max-height:60vh;overflow-y:auto;font-size:0.85rem;color:var(--text);">`;
    html += `【${escapeHtml(q.id)}】 分野${q.domain} タスク${escapeHtml(q.task)}\n\n`;
    html += `${escapeHtml(q.question)}\n\n`;
    html += `正解: ${escapeHtml(formatCorrectAnswer(q))}\n\n`;
    html += `【解説】\n${escapeHtml(q.explanation || '解説なし')}`;

    // 選択肢別解説
    if (q.optionExplanations) {
      html += '\n\n<div class="option-explanations" style="margin-top:12px;">';
      for (const [key, val] of Object.entries(q.optionExplanations)) {
        const cls = val.correct ? 'correct' : 'wrong';
        html += `<div class="option-explanation ${cls}">` +
          `<span class="option-exp-id">${escapeHtml(key)}</span>` +
          `<span>${escapeHtml(val.text)}</span>` +
          `</div>`;
      }
      html += '</div>';
    }

    // 参照リンク
    if (q.references && q.references.length > 0) {
      html += '<div class="references" style="margin-top:12px;">';
      html += '<div class="references-title">AWS ドキュメント参照</div>';
      q.references.forEach(ref => {
        html += `<a class="reference-link" href="${escapeHtml(ref.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(ref.title)}</a>`;
      });
      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  function showWrongDetail(id) {
    if (!lastResults) return;
    const q = lastResults.questions.find(q => q.id === id);
    if (!q) return;

    App.showDialog('問題の解説', '', () => {});
    const msgEl = document.getElementById('dialog-message');
    msgEl.innerHTML = buildWrongDetailHtml(q);
  }

  function formatAnswer(q, answer) {
    if (!answer) return '未回答';
    if (Array.isArray(answer)) return answer.join(', ');
    if (typeof answer === 'object') {
      return Object.entries(answer).map(([k, v]) => `${k}→${v}`).join(', ');
    }
    return String(answer);
  }

  function formatCorrectAnswer(q) {
    if (q.correctAnswers) return q.correctAnswers.join(', ');
    if (q.correctOrder) return q.correctOrder.join(' → ');
    if (q.correctMatches) {
      return Object.entries(q.correctMatches).map(([k, v]) => `${k}→${v}`).join(', ');
    }
    return '';
  }

  function truncate(str, len) {
    if (!str) return '';
    return str.length > len ? str.substring(0, len) + '...' : str;
  }

  function getLastWrongIds() {
    return lastResults ? lastResults.wrongIds : [];
  }

  return { show, showWrongDetail, getLastWrongIds };
})();
