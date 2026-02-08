window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-009",
  "domain": 4,
  "task": "4.2",
  "skill": "4.2.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業がリアルタイムの顧客対応チャットボットを Amazon Bedrock 上で運用しています。ユーザーがメッセージを送信してから最初のレスポンスが表示されるまでに平均8秒かかっており、ユーザー体験の改善が求められています。バックエンドは Amazon API Gateway + AWS Lambda で構成されており、Lambda 関数が Bedrock の InvokeModel API を同期的に呼び出しています。最初のトークンまでの体感時間（TTFT）を短縮しつつ、既存のアーキテクチャへの変更を最小限に抑える必要があります。最も効果的なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Lambda 関数の InvokeModel 呼び出しを InvokeModelWithResponseStream に変更し、API Gateway を WebSocket API に移行してストリーミングレスポンスをクライアントにリアルタイム送信する"
    },
    {
      "id": "B",
      "text": "Lambda 関数のメモリを10,240 MB に引き上げて処理速度を向上させ、API Gateway のタイムアウトを30秒に延長する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のプロンプトキャッシュを有効化して共通のシステムプロンプト部分をキャッシュし、Lambda 関数のプロビジョンド同時実行を設定してコールドスタートを排除する"
    },
    {
      "id": "D",
      "text": "Bedrock の呼び出しを Amazon SQS キューに非同期で送信し、結果を Amazon DynamoDB に保存してクライアントがポーリングで取得する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解はAです。InvokeModelWithResponseStream API を使用すると、モデルが最初のトークンを生成した時点でクライアントへの送信が開始されるため、体感的な TTFT が大幅に短縮されます。WebSocket API への移行によりサーバーからクライアントへのプッシュ型通信が可能になり、ユーザーはレスポンスの生成をリアルタイムで確認できます。Lambda 関数の API 呼び出し変更と API Gateway の WebSocket 移行のみで実現でき、アーキテクチャの根本的な変更は不要です。Bは Lambda のメモリ増加やタイムアウト延長ではボトルネックが Bedrock 側の推論時間にあるため TTFT は改善せず、タイムアウト延長はエラー防止に過ぎません。Cはプロンプトキャッシュとコールドスタート排除で全体的なレイテンシーは若干改善しますが、8秒のうち大部分を占める推論生成時間の体感短縮には寄与しません。Dの非同期処理はリアルタイムチャットボットの即時応答要件に反し、ポーリングによる遅延が追加されます。（スキル: 4.2.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。InvokeModelWithResponseStream + WebSocket API の組み合わせは、TTFT の体感短縮とアーキテクチャ変更最小化の両方を満たします。モデルが最初のトークンを生成した時点でクライアントに送信が開始され、ユーザーの体感待ち時間が大幅に改善されます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Lambda のメモリ増加は Lambda 自体の処理速度を上げますが、ボトルネックは Bedrock 側の推論時間にあるため TTFT は改善しません。タイムアウト延長はタイムアウトエラーの防止に過ぎず、レイテンシーそのものは変わりません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。プロンプトキャッシュはシステムプロンプト部分の処理を高速化し、プロビジョンド同時実行はコールドスタートを排除しますが、8秒のうち大部分を占めるモデル推論の生成時間に対する体感改善には寄与しません。TTFT 短縮の要件を十分に満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。SQS + DynamoDB による非同期処理はバッチ処理には適していますが、リアルタイムチャットボットではポーリング間隔分の遅延が追加され、TTFT がむしろ悪化します。即時応答の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ランタイムのストリーミング",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference-streaming.html"
    },
    {
      "title": "Amazon API Gateway WebSocket API",
      "url": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html"
    }
  ]
});
