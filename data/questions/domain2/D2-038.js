window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-038",
  "domain": 2,
  "task": "2.4",
  "skill": "2.4.2",
  "type": "single",
  "difficulty": "medium",
  "question": "オンライン教育プラットフォームが Amazon Bedrock を使用したリアルタイム授業 Q&A 機能を構築しています。生徒が質問を投稿すると、AI の回答がストリーミングで画面に表示される必要があります。現在の構成は CloudFront + S3（フロントエンド）+ API Gateway REST API + Lambda + Bedrock です。しかし、テスト段階で API Gateway REST API がストリーミングレスポンスをサポートしていないことが判明し、回答全体が生成されるまで5〜10秒の待ち時間が発生しています。既存のフロントエンドとバックエンドのコード変更を最小限に抑えつつ、ストリーミング体験を実現する最も適切なアーキテクチャ変更はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "API Gateway REST API を API Gateway WebSocket API に変更し、Lambda 関数を WebSocket のメッセージハンドラーとして再構成して、Bedrock の InvokeModelWithResponseStream API からトークンを受信するたびにクライアントにプッシュする"
    },
    {
      "id": "B",
      "text": "API Gateway REST API はそのまま維持し、Lambda 関数を Lambda 関数 URL に切り替えてレスポンスストリーミングモードを有効にし、CloudFront 経由でフロントエンドから Lambda 関数 URL を呼び出す"
    },
    {
      "id": "C",
      "text": "API Gateway REST API の背後に ALB を配置し、ALB のターゲットグループに Lambda 関数を登録して、ALB のHTTP/2 サポートを利用してストリーミングレスポンスを返す"
    },
    {
      "id": "D",
      "text": "API Gateway REST API はそのまま維持し、Lambda 関数内で Bedrock のレスポンスを DynamoDB に逐次書き込み、フロントエンドが DynamoDB Streams 経由で変更をポーリングしてトークンを表示する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。API Gateway WebSocket API は双方向通信をネイティブにサポートしており、Lambda 関数が Bedrock の InvokeModelWithResponseStream API からトークンを受信するたびにクライアントにリアルタイムでプッシュできます。WebSocket は低レイテンシーの双方向通信に最適化されており、ストリーミング体験の要件を直接満たします。（スキル2.4.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。WebSocket API への変更は、リアルタイムのトークンストリーミングと API Gateway の認証・管理機能の維持の両方を直接満たします。サーバーからクライアントへのプッシュ通信により、トークン受信の即座の転送が可能です。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Lambda 関数 URL のレスポンスストリーミングは技術的にストリーミングを実現できるものの、API Gateway の認証機能（API キー管理、Cognito オーソライザー、WAF 統合）が失われます。Lambda 関数 URL の認証は IAM 認証のみであり、フロントエンドからの直接呼び出しには追加の認証実装が必要です。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。ALB は Lambda 関数をターゲットとして登録可能であるものの、ALB のレスポンスも同期的に返されるため Lambda からのストリーミングレスポンスを中継する機能はなく、ストリーミング体験の要件を満たしません。また、REST API + ALB の二重構成は不必要な複雑さを追加します。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。DynamoDB への逐次書き込みとポーリングはデータの受け渡しが可能であるものの、DynamoDB Streams の伝搬遅延（通常数百ミリ秒〜数秒）により真のリアルタイムストリーミング体験は実現できません。また、DynamoDB への大量書き込みコストと書き込みキャパシティの管理が追加の運用負荷となります。"
    }
  },
  "references": [
    {
      "title": "API Gateway WebSocket APIs",
      "url": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html"
    },
    {
      "title": "Amazon Bedrock streaming inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference-streaming.html"
    }
  ]
});
