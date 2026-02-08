window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-039",
  "domain": 2,
  "task": "2.4",
  "skill": "2.4.3",
  "type": "ordering",
  "difficulty": "medium",
  "question": "Amazon Bedrock API 呼び出しで ThrottlingException が発生した場合のエクスポネンシャルバックオフによるリトライ戦略の実装ステップを正しい順序に並べ替えてください。",
  "options": [
    {
      "id": "A",
      "text": "リトライ回数が最大値に達した場合はエラーをログに記録し、フォールバック処理を実行する"
    },
    {
      "id": "B",
      "text": "API 呼び出しを実行し、ThrottlingException を検出する"
    },
    {
      "id": "C",
      "text": "待機時間を指数的に増加させ（例：1秒→2秒→4秒）、ジッターを加えて次のリトライまで待機する"
    },
    {
      "id": "D",
      "text": "リトライカウンターをインクリメントし、最大リトライ回数を超えていないか確認する"
    }
  ],
  "correctOrder": [
    "B",
    "D",
    "C",
    "A"
  ],
  "explanation": "エクスポネンシャルバックオフの正しい実装順序は、まずAPIを呼び出し(B)、リトライ回数を確認し(D)、指数的に増加する待機時間を計算して待機し(C)、最大リトライ回数に達した場合はエラーをログに記録してフォールバック処理を実行する(A)です。エクスポネンシャルバックオフでは待機時間を指数的に増加させることで、サービスの過負荷を防ぎつつリトライの成功確率を高めます。（スキル2.4.3）",
  "optionExplanations": {
    "B": {
      "correct": true,
      "text": "ステップ1: API 呼び出しを実行し、ThrottlingException を検出します。エラーの検出がリトライ戦略の起点です。"
    },
    "D": {
      "correct": true,
      "text": "ステップ2: リトライカウンターをインクリメントし、最大リトライ回数を超えていないか確認します。上限に達していなければリトライを続行します。"
    },
    "C": {
      "correct": true,
      "text": "ステップ3: 待機時間を指数的に増加させ（1秒→2秒→4秒）、ジッターを加えて次のリトライまで待機します。サービスの過負荷を防ぎます。"
    },
    "A": {
      "correct": true,
      "text": "ステップ4: リトライ回数が最大値に達した場合はエラーをログに記録し、フォールバック処理を実行します。最終的な安全策です。"
    }
  },
  "references": [
    {
      "title": "AWS error retries and exponential backoff",
      "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/retry-backoff.html"
    },
    {
      "title": "Amazon Bedrock API throttling",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html"
    }
  ]
});
