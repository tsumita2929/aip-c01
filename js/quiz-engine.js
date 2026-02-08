/* === QuizEngine: 試験エンジン === */
const QuizEngine = (() => {
  let config = null;
  let questions = [];
  let currentIndex = 0;
  let answers = {};   // { questionId: answer }
  let flags = {};     // { questionId: true }
  let timerInterval = null;
  let timeRemaining = 0;

  function start(cfg) {
    cleanup();
    config = cfg;
    questions = cfg.questions;
    currentIndex = 0;
    answers = {};
    flags = {};
    _finished = false;
    timeRemaining = cfg.timeLimit || 0;

    // UI セットアップ
    document.getElementById('quiz-mode-label').textContent = cfg.title;

    // タイマー
    const timerEl = document.getElementById('quiz-timer');
    if (config.mode === 'exam' && timeRemaining > 0) {
      timerEl.classList.remove('hidden');
      startTimer();
    } else {
      timerEl.classList.add('hidden');
    }

    // ボタン表示制御
    updateButtons();

    // ナビグリッド生成
    buildNavGrid();

    // 最初の問題表示
    showQuestion(0);
  }

  function cleanup() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
  }

  // === タイマー ===
  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeRemaining--;
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        timeRemaining = 0;
        updateTimerDisplay();
        finishExam();
        return;
      }
      updateTimerDisplay();
    }, 1000);
  }

  function updateTimerDisplay() {
    const el = document.getElementById('quiz-timer');
    const min = Math.floor(timeRemaining / 60);
    const sec = timeRemaining % 60;
    el.textContent = `${String(min).padStart(3, ' ')}:${String(sec).padStart(2, '0')}`;
    el.classList.toggle('warning', timeRemaining < 300); // 5分以下で赤
  }

  // === 問題表示 ===
  function showQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    currentIndex = index;
    const q = questions[index];
    const userAnswer = answers[q.id] || null;

    QuestionRenderer.hideExplanation();
    QuestionRenderer.render(q, index, questions.length, userAnswer);

    // Progress
    document.getElementById('quiz-progress').textContent =
      `問題 ${index + 1} / ${questions.length}`;

    updateButtons();
    updateNavGrid();
  }

  // === 解答管理 ===
  function setAnswer(answer) {
    const q = questions[currentIndex];
    answers[q.id] = answer;
    updateNavGrid();
  }

  function getAnswer() {
    const q = questions[currentIndex];
    return answers[q.id] || null;
  }

  function getCurrentQuestion() {
    return questions[currentIndex];
  }

  // === ナビゲーション ===
  function prev() {
    if (currentIndex > 0) showQuestion(currentIndex - 1);
  }

  function next() {
    if (config.mode === 'study') {
      // 学習モードで解説表示中なら次へ進む
      const expArea = document.getElementById('explanation-area');
      if (!expArea.classList.contains('hidden')) {
        if (currentIndex < questions.length - 1) {
          showQuestion(currentIndex + 1);
        }
        return;
      }
    }
    if (currentIndex < questions.length - 1) {
      showQuestion(currentIndex + 1);
    }
  }

  function goTo(index) {
    showQuestion(index);
  }

  // === フラグ ===
  function toggleFlag() {
    const q = questions[currentIndex];
    if (flags[q.id]) {
      delete flags[q.id];
    } else {
      flags[q.id] = true;
    }
    updateButtons();
    updateNavGrid();
  }

  // === 解答確認（学習モード） ===
  function checkAnswer() {
    // 解説表示中は再実行しない
    const expArea = document.getElementById('explanation-area');
    if (expArea && !expArea.classList.contains('hidden')) return;

    const q = questions[currentIndex];
    const userAnswer = answers[q.id];
    const isCorrect = checkCorrectness(q, userAnswer);

    QuestionRenderer.showExplanation(q, userAnswer, isCorrect);

    // 間違えた問題を記録
    if (!isCorrect) {
      Storage.addWrongQuestions([q.id]);
    } else {
      Storage.removeWrongQuestions([q.id]);
    }
  }

  // === 試験終了 ===
  let _finished = false;

  function finishExam() {
    if (_finished) return;
    _finished = true;
    cleanup();
    const results = calculateResults();
    Results.show(results, config.mode);
    App.showScreen('result-screen');
  }

  function calculateResults() {
    let correct = 0;
    let wrongIds = [];
    const domainStats = {};

    for (let d = 1; d <= 5; d++) {
      domainStats[d] = { correct: 0, total: 0 };
    }

    questions.forEach(q => {
      const userAnswer = answers[q.id];
      const isCorrect = checkCorrectness(q, userAnswer);
      domainStats[q.domain].total++;
      if (isCorrect) {
        correct++;
        domainStats[q.domain].correct++;
      } else {
        wrongIds.push(q.id);
      }
    });

    const total = questions.length;
    const rate = total > 0 ? Math.round((correct / total) * 100) : 0;
    // 換算スコア: 正答率を100-1000にマッピング
    const score = Math.round(100 + (rate / 100) * 900);

    return {
      correct, total, rate, score,
      domainStats, wrongIds,
      questions, answers
    };
  }

  function checkCorrectness(q, userAnswer) {
    if (!userAnswer) return false;

    switch (q.type) {
      case 'single':
        return Array.isArray(userAnswer) &&
               userAnswer.length === 1 &&
               userAnswer[0] === q.correctAnswers[0];
      case 'multiple':
        if (!Array.isArray(userAnswer)) return false;
        const sorted1 = [...userAnswer].sort();
        const sorted2 = [...q.correctAnswers].sort();
        return sorted1.length === sorted2.length &&
               sorted1.every((v, i) => v === sorted2[i]);
      case 'ordering':
        if (!Array.isArray(userAnswer)) return false;
        return userAnswer.length === q.correctOrder.length &&
               userAnswer.every((v, i) => v === q.correctOrder[i]);
      case 'matching':
        if (!userAnswer || typeof userAnswer !== 'object' || Array.isArray(userAnswer)) return false;
        const cm = q.correctMatches;
        const cmKeys = Object.keys(cm);
        const uaKeys = Object.keys(userAnswer);
        return cmKeys.length === uaKeys.length &&
               cmKeys.every(k => userAnswer[k] === cm[k]);
      default:
        return false;
    }
  }

  // === UI 更新 ===
  function updateButtons() {
    const q = questions[currentIndex];
    const isExam = config.mode === 'exam';

    document.getElementById('btn-prev').disabled = currentIndex === 0;
    document.getElementById('btn-flag').classList.toggle('flagged', !!flags[q.id]);

    // 学習モード: 解答確認ボタン表示
    const btnCheck = document.getElementById('btn-check');
    const btnFinish = document.getElementById('btn-finish');

    if (isExam) {
      btnCheck.classList.add('hidden');
      btnFinish.classList.remove('hidden');
    } else {
      btnCheck.classList.remove('hidden');
      btnFinish.classList.add('hidden');
    }
  }

  function buildNavGrid() {
    const grid = document.getElementById('nav-grid');
    grid.innerHTML = questions.map((q, i) =>
      `<div class="nav-cell" data-index="${i}" onclick="QuizEngine.goTo(${i})">${i + 1}</div>`
    ).join('');
  }

  function updateNavGrid() {
    const cells = document.querySelectorAll('.nav-cell');
    cells.forEach((cell, i) => {
      const q = questions[i];
      cell.className = 'nav-cell';
      if (i === currentIndex) cell.classList.add('current');
      if (answers[q.id]) cell.classList.add('answered');
      if (flags[q.id]) cell.classList.add('flagged');
    });
  }

  function toggleNav() {
    const grid = document.getElementById('nav-grid');
    const isHidden = grid.style.display === 'none';
    grid.style.display = isHidden ? 'flex' : 'none';
    const toggle = document.querySelector('.nav-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', String(isHidden));
  }

  return {
    start, cleanup, prev, next, goTo,
    setAnswer, getAnswer, getCurrentQuestion,
    toggleFlag, checkAnswer, finishExam, toggleNav
  };
})();
