window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-002",
  "domain": 1,
  "task": "1.1",
  "skill": "1.1.1",
  "type": "single",
  "difficulty": "medium",
  "question": "あるスタートアップが、リアルタイムのカスタマーサポートチャットボットを構築しています。ユーザーからの問い合わせに対して2秒以内に応答を開始する必要があり、月間コストは $5,000 以内という制約があります。チャットボットは過去の問い合わせ履歴を参照せず、単発の質問応答形式で動作します。Amazon Bedrock を使用したアーキテクチャとして最も適切なのはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon API Gateway WebSocket API と AWS Lambda を使用し、Lambda から Bedrock の Converse API でClaude 3.5 Sonnet をオンデマンドで呼び出す。レスポンスストリーミングを有効にして、最初のトークンが生成され次第 WebSocket 経由でユーザーに返す"
    },
    {
      "id": "B",
      "text": "Amazon API Gateway REST API と AWS Lambda を使用し、Lambda から Bedrock の Converse API で Claude 3 Opus をプロビジョニングスループットで呼び出す。レスポンス全体を生成してからまとめてユーザーに返す"
    },
    {
      "id": "C",
      "text": "Amazon SQS キューと AWS Lambda を使用し、ユーザーの問い合わせをキューに投入してから Lambda で Bedrock のバッチ推論 API を呼び出す。処理完了後に結果を DynamoDB に保存し、クライアント側でポーリングして取得する"
    },
    {
      "id": "D",
      "text": "Amazon ECS 上にカスタムコンテナをデプロイし、Application Load Balancer 経由でリクエストを受け付ける。コンテナ内で Bedrock の Converse API を呼び出し、WebSocket でユーザーにストリーミング応答を返す"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "WebSocket API + Lambda + Claude 3.5 Sonnet のストリーミング構成は、2秒以内の応答開始とコスト制約の両方を満たします。WebSocket により双方向通信が確立され、ストリーミングで最初のトークンが生成され次第ユーザーに返せるため体感レイテンシーが大幅に低減します。Claude 3.5 Sonnet はコストパフォーマンスに優れ、月間 $5,000 の予算内で運用可能です。REST API + Opus + プロビジョニングスループット（B）は、REST API ではストリーミングの長寿命接続に不向きであり、Opus のプロビジョニングスループットは最低契約額が高く月間 $5,000 を超える可能性が高いです。SQS + バッチ推論（C）は、キューイングとバッチ処理の仕組み上リアルタイム応答に対応できず、ポーリングによる追加レイテンシーも発生します。ECS カスタムコンテナ（D）は技術的には実現可能ですが、コンテナのスケーリング・デプロイ・監視などの運用負荷が高く、スタートアップの限られたリソースでは非効率です。（スキル1.1.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。WebSocket API による双方向通信と Claude 3.5 Sonnet のストリーミングにより、最初のトークンが生成され次第ユーザーに返せるため、2秒以内の応答開始要件を満たします。Claude 3.5 Sonnet のオンデマンド料金はコストパフォーマンスに優れ、月間 $5,000 以内で運用できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。REST API はリクエスト-レスポンス型の通信であり、ストリーミングの長寿命接続に不向きです。また Opus のプロビジョニングスループットは最低契約額が高く、月間 $5,000 の予算を超える可能性が高いため、コスト要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。SQS によるキューイングはメッセージのポーリング処理を前提としており、リアルタイム応答には不向きです。バッチ推論は複数リクエストをまとめて処理する方式のため、個別の問い合わせに対する即座の応答が必要なチャットボットの要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。ECS カスタムコンテナは技術的にはストリーミング応答を実現できますが、コンテナイメージの管理、ECS タスク定義の設定、オートスケーリングの構成など運用負荷が高く、サーバーレス構成（API Gateway + Lambda）と比較してスタートアップのリソース制約には不適切です。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock のレスポンスストリーミング",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference-streaming.html"
    },
    {
      "title": "Amazon Bedrock の料金",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-pricing.html"
    }
  ]
});
