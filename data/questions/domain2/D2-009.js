window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-009",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.2",
  "type": "ordering",
  "difficulty": "medium",
  "question": "ReAct パターンを使用した AI エージェントが、ユーザーから「東京の明日の天気に基づいて適切な服装を提案して」というリクエストを受けた場合の処理ステップを正しい順序に並べ替えてください。",
  "options": [
    {
      "id": "A",
      "text": "天気情報ツールを呼び出して東京の明日の天気データを取得する（行動）"
    },
    {
      "id": "B",
      "text": "ユーザーの質問を分析し、天気情報の取得が必要だと判断する（思考）"
    },
    {
      "id": "C",
      "text": "天気データと服装の知識を組み合わせて最終的な服装提案を生成する（思考と出力）"
    },
    {
      "id": "D",
      "text": "取得した天気データ（気温、降水確率など）を確認する（観察）"
    }
  ],
  "correctOrder": [
    "B",
    "A",
    "D",
    "C"
  ],
  "explanation": "ReAct パターンの正しい順序は、B（思考：質問分析と計画）→ A（行動：ツール呼び出し）→ D（観察：結果の確認）→ C（思考と出力：最終回答生成）です。まずユーザーの意図を理解し（思考）、必要なツールを呼び出し（行動）、結果を確認し（観察）、最終的な回答を生成します。この「思考→行動→観察」のサイクルが ReAct パターンの基本構造です。（スキル2.1.2）",
  "optionExplanations": {
    "B": {
      "correct": true,
      "text": "ステップ1: ユーザーの質問を分析し、天気情報の取得が必要だと判断する「思考」フェーズです。ReAct パターンではまず推論を行い、次のアクションを決定します。"
    },
    "A": {
      "correct": true,
      "text": "ステップ2: 天気情報ツールを呼び出して東京の明日の天気データを取得する「行動」フェーズです。思考で決定したアクションを実行します。"
    },
    "D": {
      "correct": true,
      "text": "ステップ3: 取得した天気データ（気温、降水確率など）を確認する「観察」フェーズです。行動の結果を評価します。"
    },
    "C": {
      "correct": true,
      "text": "ステップ4: 天気データと服装の知識を組み合わせて最終的な服装提案を生成する「思考と出力」フェーズです。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Agents",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"
    },
    {
      "title": "Amazon Bedrock agent action groups",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-action-create.html"
    }
  ]
});
