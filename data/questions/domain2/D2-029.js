window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-029",
  "domain": 2,
  "task": "2.3",
  "skill": "2.3.2",
  "type": "matching",
  "difficulty": "medium",
  "question": "以下の AWS サービスと、生成 AI 機能の統合における最も典型的な役割を正しく対応させてください。",
  "prompts": [
    {
      "id": "1",
      "text": "Amazon API Gateway"
    },
    {
      "id": "2",
      "text": "AWS Lambda"
    },
    {
      "id": "3",
      "text": "Amazon EventBridge"
    },
    {
      "id": "4",
      "text": "Amazon SQS"
    }
  ],
  "answers": [
    {
      "id": "A",
      "text": "生成 AI エンドポイントの REST/HTTP インターフェースの公開とリクエストのスロットリング"
    },
    {
      "id": "B",
      "text": "イベント駆動型アーキテクチャで AI 処理のトリガーとなるイベントのルーティング"
    },
    {
      "id": "C",
      "text": "生成 AI の非同期処理リクエストのバッファリングとデカップリング"
    },
    {
      "id": "D",
      "text": "Bedrock API の呼び出しやレスポンスの変換を行うサーバーレスコンピューティング"
    }
  ],
  "correctMatches": {
    "1": "A",
    "2": "D",
    "3": "B",
    "4": "C"
  },
  "explanation": "API Gateway（1→A）は REST/HTTP エンドポイントの公開とレート制限を提供します。Lambda（2→D）はサーバーレスで Bedrock API の呼び出しやレスポンスの変換を実行します。EventBridge（3→B）はイベント駆動型アーキテクチャでイベントに基づいて AI 処理をトリガーします。SQS（4→C）は非同期処理リクエストをキューイングしてプロデューサーとコンシューマーを分離します。（スキル2.3.2）",
  "optionExplanations": {
    "1": {
      "correct": true,
      "text": "Amazon API Gateway → A: REST/HTTP エンドポイントの公開とリクエストのスロットリング（レート制限）を提供し、生成 AI エンドポイントのインターフェースとして機能します。"
    },
    "2": {
      "correct": true,
      "text": "AWS Lambda → D: サーバーレスコンピューティングとして Bedrock API の呼び出しやレスポンスの変換を実行します。"
    },
    "3": {
      "correct": true,
      "text": "Amazon EventBridge → B: イベント駆動型アーキテクチャで AI 処理のトリガーとなるイベントのルーティングを行います。"
    },
    "4": {
      "correct": true,
      "text": "Amazon SQS → C: 非同期処理リクエストのバッファリングとプロデューサー・コンシューマーのデカップリングを提供します。"
    }
  },
  "references": [
    {
      "title": "Amazon API Gateway",
      "url": "https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html"
    },
    {
      "title": "AWS Lambda overview",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
    },
    {
      "title": "Amazon EventBridge",
      "url": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html"
    }
  ]
});
