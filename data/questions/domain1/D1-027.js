window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-027",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.4",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、カスタマーサポート用の生成AIチャットボットを構築しています。ユーザーがチャットで送信するテキストに含まれる PII（氏名、メールアドレス、クレジットカード番号）を FM に送信する前にリアルタイムで検出・マスキングする必要があります。Bedrock ガードレール以外の AWS サービスを使用して前処理パイプラインを構築する場合、最も適切な組み合わせはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Comprehend の PII 検出 API をリアルタイムで呼び出して PII を特定し、Lambda 関数でマスキング処理を行ってから Bedrock FM に送信する"
    },
    {
      "id": "B",
      "text": "Amazon Macie を使用してリアルタイムのテキストストリームから PII を検出し、SNS 通知でアラートを発行する"
    },
    {
      "id": "C",
      "text": "Amazon Comprehend のカスタムエンティティ認識モデルをトレーニングして、業界固有の PII パターンを検出する"
    },
    {
      "id": "D",
      "text": "AWS Glue の Sensitive Data Detection を使用して、入力テキストの PII を検出・分類する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Amazon Comprehend の PII 検出 API（DetectPiiEntities）はリアルタイムのテキスト処理に対応しており、氏名・メールアドレス・クレジットカード番号などの PII を即座に検出できます。Lambda と組み合わせてマスキング処理を行うことで、リアルタイムの前処理パイプラインを構築できます。Macie（B）は S3 バケット内の保存データに対する PII 検出に特化したサービスで、リアルタイムのテキストストリーム処理には対応していません。Comprehend のカスタムエンティティ認識（C）は業界固有のエンティティ検出に有効ですが、標準的な PII（氏名、メールアドレス等）の検出には組み込みの PII 検出 API の方が迅速に利用でき、モデルトレーニングの工数が不要です。Glue の Sensitive Data Detection（D）は ETL パイプライン内のバッチ処理でデータを分類するサービスであり、リアルタイムのチャット入力処理には適していません。（スキル1.3.4）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Comprehend の PII 検出 API と Lambda の組み合わせは、リアルタイムでの PII 検出とマスキング処理の要件を直接満たします。特に組み込み API で標準的な PII を即座に検出し最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Macie は S3 バケット内の保存データの PII 検出に有効な点はあるものの、リアルタイムのテキストストリーム処理には非対応で、チャット入力のリアルタイム処理要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。カスタムエンティティ認識は業界固有の検出に有効な点はあるものの、標準 PII（氏名、メールアドレス等）には組み込み API の方が迅速でトレーニング不要であり、効率性の要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Glue の Sensitive Data Detection はデータ分類に有用な点はあるものの、ETL バッチ処理向けであり、リアルタイムのチャット入力処理要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Comprehend PII 検出",
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html"
    },
    {
      "title": "AWS Lambda 開発者ガイド",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
    }
  ]
});
