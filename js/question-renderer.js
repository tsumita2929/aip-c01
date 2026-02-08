/* === QuestionRenderer: 問題表示（4形式対応） === */
const QuestionRenderer = (() => {

  function render(question, index, total, userAnswer) {
    const area = document.getElementById('question-area');
    const meta = renderMeta(question, index, total);
    let body = '';

    switch (question.type) {
      case 'single':
        body = renderSingleChoice(question, userAnswer);
        break;
      case 'multiple':
        body = renderMultipleChoice(question, userAnswer);
        break;
      case 'ordering':
        body = renderOrdering(question, userAnswer);
        break;
      case 'matching':
        body = renderMatching(question, userAnswer);
        break;
      default:
        body = renderSingleChoice(question, userAnswer);
    }

    area.innerHTML = meta + `<div class="question-text">${escapeHtml(question.question)}</div>` + body;

    // ordering の場合はイベント設定
    if (question.type === 'ordering') {
      setupOrderingEvents();
    }
  }

  function renderMeta(question, index, total) {
    const diffClass = `difficulty-${question.difficulty}`;
    const diffLabel = { easy: '易', medium: '中', hard: '難' }[question.difficulty] || '';
    return `
      <div class="question-meta">
        <span class="meta-tag">問${index + 1} / ${total}</span>
        <span class="meta-tag">分野${question.domain}</span>
        <span class="meta-tag">タスク ${escapeHtml(question.task)}</span>
        <span class="meta-tag ${diffClass}">${escapeHtml(diffLabel)}</span>
        <span class="meta-tag">${escapeHtml(typeLabel(question.type))}</span>
      </div>
    `;
  }

  function typeLabel(type) {
    return { single: '択一選択', multiple: '複数選択', ordering: '並べ替え', matching: '内容一致' }[type] || '';
  }

  // === 択一選択 ===
  function renderSingleChoice(q, userAnswer) {
    const selected = userAnswer || [];
    return `<div class="options-list">${
      q.options.map(o => {
        const isSelected = selected.includes(o.id);
        return `
          <div class="option-item ${isSelected ? 'selected' : ''}"
               tabindex="0" role="radio" aria-checked="${isSelected}"
               onclick="QuestionRenderer.selectSingle('${escapeHtml(o.id)}')"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();QuestionRenderer.selectSingle('${escapeHtml(o.id)}');}">
            <span class="option-id">${escapeHtml(o.id)}</span>
            <span class="option-text">${escapeHtml(o.text)}</span>
          </div>`;
      }).join('')
    }</div>`;
  }

  function selectSingle(id) {
    // Ignore clicks after explanation is shown
    const expArea = document.getElementById('explanation-area');
    if (expArea && !expArea.classList.contains('hidden')) return;

    document.querySelectorAll('.option-item').forEach(el => {
      const oid = el.querySelector('.option-id').textContent;
      const isMatch = oid === id;
      el.classList.toggle('selected', isMatch);
      el.setAttribute('aria-checked', String(isMatch));
    });
    QuizEngine.setAnswer([id]);
  }

  // === 複数選択 ===
  function renderMultipleChoice(q, userAnswer) {
    const selected = userAnswer || [];
    const numCorrect = q.correctAnswers ? q.correctAnswers.length : 2;
    return `<p class="multi-hint">${numCorrect}つ選択してください</p>
    <div class="options-list">${
      q.options.map(o => {
        const isSelected = selected.includes(o.id);
        return `
          <div class="option-item ${isSelected ? 'selected' : ''}"
               tabindex="0" role="checkbox" aria-checked="${isSelected}"
               onclick="QuestionRenderer.toggleMultiple('${escapeHtml(o.id)}')"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();QuestionRenderer.toggleMultiple('${escapeHtml(o.id)}');}">
            <span class="option-id">${escapeHtml(o.id)}</span>
            <span class="option-text">${escapeHtml(o.text)}</span>
          </div>`;
      }).join('')
    }</div>`;
  }

  function toggleMultiple(id) {
    // Ignore clicks after explanation is shown
    const expArea = document.getElementById('explanation-area');
    if (expArea && !expArea.classList.contains('hidden')) return;

    const items = document.querySelectorAll('.option-item');
    items.forEach(el => {
      if (el.querySelector('.option-id').textContent === id) {
        el.classList.toggle('selected');
      }
    });
    const selected = [];
    items.forEach(el => {
      const isSelected = el.classList.contains('selected');
      el.setAttribute('aria-checked', String(isSelected));
      if (isSelected) {
        selected.push(el.querySelector('.option-id').textContent);
      }
    });
    QuizEngine.setAnswer(selected);
  }

  // === 並べ替え ===
  function renderOrdering(q, userAnswer) {
    const order = userAnswer || q.options.map(o => o.id);
    // 初回表示時にデフォルト順を解答として保存
    if (!userAnswer) {
      QuizEngine.setAnswer(order);
    }
    const optionMap = {};
    q.options.forEach(o => optionMap[o.id] = o.text);

    return `<div class="ordering-list" id="ordering-list">${
      order.map((id, i) => `
        <div class="ordering-item" data-id="${escapeHtml(id)}">
          <span class="order-num">${i + 1}</span>
          <span class="option-text" style="flex:1">${escapeHtml(optionMap[id])}</span>
          <div class="ordering-controls">
            <button onclick="QuestionRenderer.moveOrder(${i}, -1)" ${i === 0 ? 'disabled' : ''} aria-label="上に移動">&#x25B2;</button>
            <button onclick="QuestionRenderer.moveOrder(${i}, 1)" ${i === order.length - 1 ? 'disabled' : ''} aria-label="下に移動">&#x25BC;</button>
          </div>
        </div>
      `).join('')
    }</div>`;
  }

  function moveOrder(index, direction) {
    const list = document.getElementById('ordering-list');
    const items = list.querySelectorAll('.ordering-item');
    const order = Array.from(items).map(el => el.dataset.id);
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= order.length) return;
    [order[index], order[newIndex]] = [order[newIndex], order[index]];
    QuizEngine.setAnswer(order);
    // Re-render ordering
    const q = QuizEngine.getCurrentQuestion();
    const area = document.getElementById('question-area');
    const metaHtml = area.querySelector('.question-meta').outerHTML;
    const qText = area.querySelector('.question-text').outerHTML;
    const orderHtml = renderOrdering(q, order);
    area.innerHTML = metaHtml + qText + orderHtml;
  }

  function setupOrderingEvents() {
    // Touch / drag events could be added here for mobile
  }

  // === 内容一致 ===
  function renderMatching(q, userAnswer) {
    const matches = userAnswer || {};
    return `<div class="matching-area">${
      q.prompts.map(p => {
        const selectedVal = matches[p.id] || '';
        return `
          <div class="matching-row" data-prompt-id="${escapeHtml(p.id)}">
            <div class="matching-prompt" id="prompt-${escapeHtml(p.id)}">${escapeHtml(p.text)}</div>
            <span class="matching-arrow">&#x2192;</span>
            <select class="matching-select" aria-labelledby="prompt-${escapeHtml(p.id)}" onchange="QuestionRenderer.setMatch('${escapeHtml(p.id)}', this.value)">
              <option value="">-- 選択 --</option>
              ${q.answers.map(a => `<option value="${escapeHtml(a.id)}" ${selectedVal === a.id ? 'selected' : ''}>${escapeHtml(a.id)}. ${escapeHtml(a.text)}</option>`).join('')}
            </select>
          </div>`;
      }).join('')
    }</div>`;
  }

  function setMatch(promptId, answerId) {
    const q = QuizEngine.getCurrentQuestion();
    const current = { ...(QuizEngine.getAnswer() || {}) };
    if (answerId) {
      current[promptId] = answerId;
    } else {
      delete current[promptId];
    }
    QuizEngine.setAnswer(current);
  }

  // === 構造化解説HTML生成 ===
  function buildStructuredExplanation(question) {
    let html = '';

    // 選択肢別解説
    if (question.optionExplanations) {
      html += '<div class="option-explanations">';
      for (const [key, val] of Object.entries(question.optionExplanations)) {
        const cls = val.correct ? 'correct' : 'wrong';
        html += `<div class="option-explanation ${cls}">` +
          `<span class="option-exp-id">${escapeHtml(key)}</span>` +
          `<span>${escapeHtml(val.text)}</span>` +
          `</div>`;
      }
      html += '</div>';
    }

    // 参照リンク
    if (question.references && question.references.length > 0) {
      html += '<div class="references">';
      html += '<div class="references-title">AWS ドキュメント参照</div>';
      question.references.forEach(ref => {
        html += `<a class="reference-link" href="${escapeHtml(ref.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(ref.title)}</a>`;
      });
      html += '</div>';
    }

    return html;
  }

  // === 解説表示 ===
  function showExplanation(question, userAnswer, isCorrect) {
    const area = document.getElementById('explanation-area');
    const resultEl = document.getElementById('explanation-result');
    const textEl = document.getElementById('explanation-text');

    resultEl.className = `explanation-result ${isCorrect ? 'correct' : 'incorrect'}`;
    resultEl.textContent = isCorrect ? '正解!' : '不正解';

    // 構造化解説がある場合はHTML、なければプレーンテキスト
    const structured = buildStructuredExplanation(question);
    if (structured) {
      textEl.innerHTML = `<div style="white-space:pre-wrap;margin-bottom:12px;">${escapeHtml(question.explanation || '')}</div>` + structured;
    } else {
      textEl.textContent = question.explanation || '';
    }

    area.classList.remove('hidden');

    // Mark correct/incorrect on options
    if (question.type === 'single' || question.type === 'multiple') {
      const items = document.querySelectorAll('.option-item');
      items.forEach(el => {
        el.classList.add('disabled');
        const oid = el.querySelector('.option-id').textContent;
        if (question.correctAnswers && question.correctAnswers.includes(oid)) {
          el.classList.add('correct');
        } else if (Array.isArray(userAnswer) && userAnswer.includes(oid)) {
          el.classList.add('incorrect');
        }
      });
    }

    if (question.type === 'ordering') {
      const items = document.querySelectorAll('.ordering-item');
      items.forEach((el, i) => {
        const id = el.dataset.id;
        if (question.correctOrder && question.correctOrder[i] === id) {
          el.classList.add('correct');
        } else {
          el.classList.add('incorrect');
        }
        // Disable move buttons
        el.querySelectorAll('button').forEach(btn => btn.disabled = true);
      });
    }

    if (question.type === 'matching') {
      document.querySelectorAll('.matching-select').forEach(sel => {
        sel.disabled = true;
        const promptId = sel.closest('.matching-row').dataset.promptId;
        if (promptId && question.correctMatches) {
          const correctAns = question.correctMatches[promptId];
          if (sel.value === correctAns) {
            sel.classList.add('correct');
          } else if (sel.value) {
            sel.classList.add('incorrect');
          }
        }
      });
    }
  }

  function hideExplanation() {
    document.getElementById('explanation-area').classList.add('hidden');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  return {
    render, showExplanation, hideExplanation,
    selectSingle, toggleMultiple, moveOrder, setMatch
  };
})();
