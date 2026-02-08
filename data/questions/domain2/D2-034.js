window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-034",
  "domain": 2,
  "task": "2.4",
  "skill": "2.4.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ヘルスケア企業が患者向けの AI チャットボットを構築しています。ユーザーが質問を送信すると、Amazon Bedrock の基盤モデルによる回答が1トークンずつリアルタイムに表示される必要があります。バックエンドは API Gateway と Lambda で構成されており、患者の個人情報を含むため認証情報がクライアント側に露出してはなりません。レスポンスの初回トークン表示までの待ち時間を最小化するアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "API Gateway WebSocket API を使用し、Lambda が Bedrock の InvokeModelWithResponseStream API でトークンを受信するたびに WebSocket 接続経由でクライアントにプッシュする"
    },
    {
      "id": "B",
      "text": "API Gateway REST API を使用し、Lambda が Bedrock の InvokeModel API で完全なレスポンスを取得した後、レスポンスを分割して複数の HTTP レスポンスチャンクとして返す"
    },
    {
      "id": "C",
      "text": "API Gateway REST API を使用し、Lambda が Bedrock の InvokeModelWithResponseStream API でストリーミング受信するが、REST API の制約によりレスポンス全体をバッファリングしてから一括で返す"
    },
    {
      "id": "D",
      "text": "クライアントから Lambda 関数 URL を直接呼び出し、Lambda のレスポンスストリーミング機能で Bedrock のストリーミングレスポンスをそのまま転送する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。API Gateway WebSocket API は双方向通信をサポートしており、Lambda が Bedrock の InvokeModelWithResponseStream API からトークンを受信するたびにリアルタイムでクライアントにプッシュできます。認証は API Gateway の認証機能（Cognito オーソライザー等）で処理されるため、クライアント側に AWS 認証情報が露出しません。（スキル2.4.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。WebSocket API + InvokeModelWithResponseStream の組み合わせは、リアルタイムのトークン表示とセキュアなバックエンド認証の両方を直接満たします。WebSocket の双方向通信によりトークン単位の即時プッシュが可能で、初回トークン表示の待ち時間を最小化できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。InvokeModel（非ストリーミング）API はレスポンス全体が生成されるまで待機するため、初回トークン表示までの待ち時間が大幅に増加します。レスポンスの分割返却は HTTP/1.1 の REST API では標準的にサポートされていません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。API Gateway REST API はストリーミングレスポンスをネイティブにサポートしておらず、Lambda がストリーミングで受信してもレスポンス全体をバッファリングして一括返却するため、リアルタイムのトークン表示の要件を満たしません。初回トークン表示の待ち時間は非ストリーミングと同等になります。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Lambda 関数 URL のレスポンスストリーミングは技術的にトークン転送が可能であるものの、API Gateway のような統合認証（Cognito オーソライザー、API キー管理）を利用できず、認証・認可の実装を Lambda 関数内で独自に行う必要があるため、セキュリティ管理の運用負荷が増加します。"
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
