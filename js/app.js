/* === App: メインアプリケーション === */
const App = (() => {
  let allQuestions = [];
  let currentMode = null; // 'exam' | 'study' | 'domain' | 'review'

  const DOMAIN_NAMES = {
    1: 'FM統合・データ管理・コンプライアンス',
    2: '実装と統合',
    3: 'AI安全性・セキュリティ・ガバナンス',
    4: '運用効率と最適化',
    5: 'テスト・検証・トラブルシューティング'
  };

  const DOMAIN_WEIGHTS = { 1: 0.31, 2: 0.26, 3: 0.20, 4: 0.12, 5: 0.11 };

  function init() {
    loadQuestions();
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.head.appendChild(script);
    });
  }

  function collectQuestionsFromGlobals() {
    return [
      ...(window.DOMAIN1_QUESTIONS || []),
      ...(window.DOMAIN2_QUESTIONS || []),
      ...(window.DOMAIN3_QUESTIONS || []),
      ...(window.DOMAIN4_QUESTIONS || []),
      ...(window.DOMAIN5_QUESTIONS || [])
    ];
  }

  function loadQuestionFilesFromManifest() {
    const manifest = window.QUESTION_FILE_MANIFEST;
    if (!manifest) {
      return Promise.reject(new Error('QUESTION_FILE_MANIFEST is not defined'));
    }
    window.DOMAIN1_QUESTIONS = [];
    window.DOMAIN2_QUESTIONS = [];
    window.DOMAIN3_QUESTIONS = [];
    window.DOMAIN4_QUESTIONS = [];
    window.DOMAIN5_QUESTIONS = [];
    const files = Object.values(manifest).flat();
    return Promise.all(files.map((src) => loadScript(src)));
  }

  function loadQuestions() {
    loadQuestionFilesFromManifest()
      .then(() => {
        allQuestions = collectQuestionsFromGlobals();
        document.getElementById('loading').classList.add('hidden');
        showScreen('home-screen');
        showRecentScore();
      })
      .catch((error) => {
        console.error(error);
        document.getElementById('loading').classList.add('hidden');
        showScreen('home-screen');
      });
  }

  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(id);
    if (!screen) return;
    screen.classList.add('active');
    window.scrollTo(0, 0);
    const heading = screen.querySelector('h1, h2, h3');
    if (heading) heading.focus();
  }

  function goHome() {
    QuizEngine.cleanup();
    showScreen('home-screen');
    showRecentScore();
  }

  function showRecentScore() {
    const history = Storage.getExamHistory();
    const el = document.getElementById('recent-score');
    if (history.length === 0) {
      el.classList.add('hidden');
      return;
    }
    el.classList.remove('hidden');
    const last = history[history.length - 1];
    const escDate = escapeHtml(String(last.date));
    const escScore = escapeHtml(String(last.score));
    const escCorrect = escapeHtml(String(last.correct));
    const escTotal = escapeHtml(String(last.total));
    document.getElementById('recent-score-content').innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span>${escDate}</span>
        <span style="font-weight:700;color:${last.score >= 750 ? 'var(--green)' : 'var(--red)'};">
          ${escScore} 点（${last.score >= 750 ? '合格' : '不合格'}）
        </span>
        <span style="color:var(--text-muted);">${escCorrect}/${escTotal} 問正解</span>
      </div>
    `;
  }

  // === モード開始 ===

  function startExam() {
    currentMode = 'exam';
    const questions = selectExamQuestions(65);
    QuizEngine.start({
      mode: 'exam',
      questions: questions,
      timeLimit: 205 * 60, // 205分
      title: '模擬試験'
    });
    showScreen('quiz-screen');
  }

  function startStudy() {
    currentMode = 'study';
    const questions = shuffle([...allQuestions]);
    QuizEngine.start({
      mode: 'study',
      questions: questions,
      timeLimit: 0,
      title: '学習モード'
    });
    showScreen('quiz-screen');
  }

  function showDomainSelect() {
    const el = document.getElementById('domain-select');
    el.classList.toggle('hidden');
  }

  function startDomainStudy(domain) {
    currentMode = 'domain';
    document.getElementById('domain-select').classList.add('hidden');
    const questions = shuffle(allQuestions.filter(q => q.domain === domain));
    QuizEngine.start({
      mode: 'study',
      questions: questions,
      timeLimit: 0,
      title: `分野${domain}: ${DOMAIN_NAMES[domain]}`
    });
    showScreen('quiz-screen');
  }

  function startReview() {
    currentMode = 'review';
    const wrongIds = Storage.getWrongQuestions();
    if (wrongIds.length === 0) {
      alert('復習する問題がありません。まず模擬試験や学習モードを試してください。');
      return;
    }
    const questions = shuffle(allQuestions.filter(q => wrongIds.includes(q.id)));
    QuizEngine.start({
      mode: 'study',
      questions: questions,
      timeLimit: 0,
      title: '復習モード'
    });
    showScreen('quiz-screen');
  }

  function retryWrong() {
    const wrongIds = Results.getLastWrongIds();
    if (!wrongIds || wrongIds.length === 0) return;
    const questions = shuffle(allQuestions.filter(q => wrongIds.includes(q.id)));
    QuizEngine.start({
      mode: 'study',
      questions: questions,
      timeLimit: 0,
      title: '復習モード'
    });
    showScreen('quiz-screen');
  }

  // === 模擬試験用の問題抽出 ===

  function selectExamQuestions(total) {
    const selected = [];
    const domainCounts = {
      1: Math.round(total * DOMAIN_WEIGHTS[1]),
      2: Math.round(total * DOMAIN_WEIGHTS[2]),
      3: Math.round(total * DOMAIN_WEIGHTS[3]),
      4: Math.round(total * DOMAIN_WEIGHTS[4]),
      5: Math.round(total * DOMAIN_WEIGHTS[5])
    };
    // 端数調整
    let sum = Object.values(domainCounts).reduce((a, b) => a + b, 0);
    while (sum < total) { domainCounts[1]++; sum++; }
    while (sum > total) { domainCounts[1]--; sum--; }

    for (let d = 1; d <= 5; d++) {
      const pool = shuffle(allQuestions.filter(q => q.domain === d));
      selected.push(...pool.slice(0, domainCounts[d]));
    }
    return shuffle(selected);
  }

  // === ダイアログ ===

  function confirmExit() {
    showDialog('試験を終了しますか？', '未回答の問題は不正解として扱われます。', () => {
      if (currentMode === 'exam') {
        QuizEngine.finishExam();
      } else {
        goHome();
      }
    });
  }

  let _dialogEscHandler = null;
  let _dialogTabHandler = null;
  let _previousFocus = null;

  function showDialog(title, message, onConfirm) {
    _previousFocus = document.activeElement;
    const overlay = document.getElementById('confirm-dialog');
    document.getElementById('dialog-title').textContent = title;
    const msgEl = document.getElementById('dialog-message');
    msgEl.textContent = message;
    const btn = document.getElementById('dialog-confirm');
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', () => {
      closeDialog();
      onConfirm();
    });
    overlay.classList.remove('hidden');

    // aria-hidden on main content
    const main = document.getElementById('main-content');
    if (main) main.setAttribute('aria-hidden', 'true');

    newBtn.focus();

    // Escキーで閉じる
    if (_dialogEscHandler) document.removeEventListener('keydown', _dialogEscHandler);
    _dialogEscHandler = (e) => {
      if (e.key === 'Escape') closeDialog();
    };
    document.addEventListener('keydown', _dialogEscHandler);

    // フォーカストラップ
    if (_dialogTabHandler) document.removeEventListener('keydown', _dialogTabHandler);
    _dialogTabHandler = (e) => {
      if (e.key !== 'Tab') return;
      const dialog = overlay.querySelector('.dialog');
      const focusable = dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', _dialogTabHandler);

    // オーバーレイクリックで閉じる
    overlay.onclick = (e) => {
      if (e.target === overlay) closeDialog();
    };
  }

  function closeDialog() {
    document.getElementById('confirm-dialog').classList.add('hidden');

    // aria-hidden 解除
    const main = document.getElementById('main-content');
    if (main) main.removeAttribute('aria-hidden');

    if (_dialogEscHandler) {
      document.removeEventListener('keydown', _dialogEscHandler);
      _dialogEscHandler = null;
    }
    if (_dialogTabHandler) {
      document.removeEventListener('keydown', _dialogTabHandler);
      _dialogTabHandler = null;
    }

    // フォーカスを元の要素に戻す
    if (_previousFocus && _previousFocus.focus) {
      _previousFocus.focus();
      _previousFocus = null;
    }
  }

  // === ユーティリティ ===

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  return {
    init, goHome, showScreen,
    startExam, startStudy, showDomainSelect, startDomainStudy, startReview, retryWrong,
    confirmExit, showDialog, closeDialog,
    DOMAIN_NAMES, DOMAIN_WEIGHTS,
    getAllQuestions: () => allQuestions,
    shuffle
  };
})();

/* === Storage: localStorage ラッパー === */
const Storage = (() => {
  const KEYS = {
    EXAM_HISTORY: 'aip-c01-exam-history',
    WRONG_QUESTIONS: 'aip-c01-wrong-questions'
  };

  function getExamHistory() {
    try {
      return JSON.parse(localStorage.getItem(KEYS.EXAM_HISTORY)) || [];
    } catch { return []; }
  }

  function saveExamResult(result) {
    const history = getExamHistory();
    history.push({
      date: new Date().toLocaleDateString('ja-JP'),
      score: result.score,
      correct: result.correct,
      total: result.total,
      rate: result.rate
    });
    // 最新10件だけ保持
    if (history.length > 10) history.shift();
    localStorage.setItem(KEYS.EXAM_HISTORY, JSON.stringify(history));
  }

  function getWrongQuestions() {
    try {
      return JSON.parse(localStorage.getItem(KEYS.WRONG_QUESTIONS)) || [];
    } catch { return []; }
  }

  function addWrongQuestions(ids) {
    const existing = new Set(getWrongQuestions());
    ids.forEach(id => existing.add(id));
    localStorage.setItem(KEYS.WRONG_QUESTIONS, JSON.stringify([...existing]));
  }

  function removeWrongQuestions(ids) {
    const existing = new Set(getWrongQuestions());
    ids.forEach(id => existing.delete(id));
    localStorage.setItem(KEYS.WRONG_QUESTIONS, JSON.stringify([...existing]));
  }

  return {
    getExamHistory, saveExamResult,
    getWrongQuestions, addWrongQuestions, removeWrongQuestions
  };
})();
