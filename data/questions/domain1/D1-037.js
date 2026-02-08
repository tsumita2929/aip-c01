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
      "text": "ステップ1: S3 バケットへのドキュメントアップロードがパイプライン全体のトリガーとなります。S3 イベント通知により、後続の処理を自動的に開始できます。データの到着が起点となるイベント駆動型アーキテクチャの最初のステップです。"
    },
    "D": {
      "correct": true,
      "text": "ステップ2: Lambda 関数がS3イベントを受信し、ドキュメントのメタデータ（ファイル形式、サイズ、必須属性の有無等）を検証します。不正なファイルがベクトルストアに取り込まれることを防ぐ品質チェックのステップであり、同期開始の前に実施する必要があります。"
    },
    "A": {
      "correct": true,
      "text": "ステップ3: メタデータ検証を通過したドキュメントに対して、Bedrock ナレッジベースの StartIngestionJob API を呼び出して増分同期を開始します。このAPIはデータソースの変更を検出し、新規・更新されたドキュメントのみをベクトル化してベクトルストアに取り込みます。"
    },
    "C": {
      "correct": true,
      "text": "ステップ4: 同期完了後に CloudWatch メトリクスで取り込み結果（成功件数・失敗件数・処理時間等）を確認します。取り込みの成否を監視し、失敗があった場合はアラートで通知する運用監視のステップであり、パイプラインの最終段階に位置します。"
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
