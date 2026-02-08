window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-037",
  "domain": 1,
  "task": "1.4",
  "skill": "1.4.5",
  "type": "ordering",
  "difficulty": "hard",
  "question": "ある企業が、新しいドキュメントがS3にアップロードされた際に、ベクトルストアを自動的に更新するパイプラインを構築しています。以下のステップを正しい処理順序に並べ替えてください。",
  "options": [
    {
      "id": "A",
      "text": "Bedrock ナレッジベースの StartIngestionJob API を呼び出して増分同期を開始する"
    },
    {
      "id": "B",
      "text": "S3 バケットにドキュメントがアップロードされ、S3 イベント通知が発行される"
    },
    {
      "id": "C",
      "text": "同期完了後、CloudWatch メトリクスで取り込み結果（成功・失敗件数）を確認する"
    },
    {
      "id": "D",
      "text": "Lambda 関数がイベントを受信し、ドキュメントのメタデータを検証する"
    }
  ],
  "correctOrder": [
    "B",
    "D",
    "A",
    "C"
  ],
  "explanation": "正しい処理順序は以下の通りです。1) S3 へのドキュメントアップロードとイベント通知の発行（B）、2) Lambda がイベントを受信しメタデータを検証（D）、3) Bedrock ナレッジベースの増分同期 API を呼び出し（A）、4) CloudWatch で取り込み結果を確認（C）。データの到着から検証、同期、監視という自然な流れです。（スキル1.4.5）",
  "optionExplanations": {
    "B": {
      "correct": true,
      "text": "ステップ1: S3 バケットへのドキュメントアップロードとイベント通知の発行。パイプラインのトリガー。"
    },
    "D": {
      "correct": true,
      "text": "ステップ2: Lambda がイベントを受信しドキュメントのメタデータを検証する。品質チェック。"
    },
    "A": {
      "correct": true,
      "text": "ステップ3: Bedrock ナレッジベースの StartIngestionJob API で増分同期を開始する。ベクトルストアへの取り込み。"
    },
    "C": {
      "correct": true,
      "text": "ステップ4: CloudWatch メトリクスで取り込み結果（成功・失敗件数）を確認する。結果の監視。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ナレッジベースのデータ取り込み",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ingest.html"
    },
    {
      "title": "Amazon S3 イベント通知",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html"
    }
  ]
});
