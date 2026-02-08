window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-014",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.2",
  "type": "single",
  "difficulty": "medium",
  "question": "あるヘルスケア企業が、患者の医療記録を分析するAIシステムを構築しています。分析のために Amazon S3 に保存された医療データに個人識別情報（PII）が含まれている可能性があります。S3 バケット内のどのオブジェクトに PII が含まれているかを特定し、AI 処理前にテキスト内の PII をマスキングする必要があります。最も効果的なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock ガードレールの機密情報フィルターを設定し、AI モデルへの入力時に PII を自動検出・マスキングする"
    },
    {
      "id": "B",
      "text": "Amazon Macie を有効化して S3 バケット内の PII を自動検出・分類し、検出結果に基づいて Amazon Comprehend の PII 検出 API でテキストデータ内の PII を特定・マスキングする"
    },
    {
      "id": "C",
      "text": "Amazon S3 の SSE-KMS 暗号化と S3 Object Lock を有効化し、データの機密性と不変性を確保する"
    },
    {
      "id": "D",
      "text": "AWS Glue の機密データ検出変換を使用して ETL ジョブ内で PII を検出し、検出結果を AWS Glue Data Catalog のテーブルプロパティに記録する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "Amazon Macie は S3 に保存されたデータ内の PII を機械学習とパターンマッチングで自動検出・分類するサービスであり、どのオブジェクトにどの種類の PII が含まれているかを特定できます。Amazon Comprehend の PII 検出 API はテキストデータ内の具体的な PII エンティティ（氏名、住所、電話番号、社会保障番号等）の位置を特定し、マスキング（墨消し）する機能を提供します。両サービスの組み合わせにより、保存データの検出と処理データのマスキングの両方を実現できます。A の Bedrock ガードレール PII フィルターはモデルの入出力時の PII 検出・マスキングに有効ですが、S3 バケット内のどのオブジェクトに PII が含まれているかの特定はできません。C の暗号化と Object Lock はデータの保護と不変性確保に有効ですが、PII の検出・特定・マスキングは行えません。D の Glue 機密データ検出は ETL パイプライン内での PII 検出に対応しますが、S3 バケット全体のスキャンと PII のマスキングの両方を包括的に行うには Macie + Comprehend の組み合わせの方が適切です。（スキル3.2.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Bedrock ガードレールの PII フィルターはモデル入出力時の PII 検出に有効であるものの、S3 バケット内のどのオブジェクトに PII が含まれているかの特定ができず、PII の特定という要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。Macie による S3 内 PII 自動検出・分類と、Comprehend PII 検出 API によるテキスト内 PII 特定・マスキングの組み合わせで、PII の特定とマスキングを直接満たします。特に保存データの検出と処理データのマスキングを最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。SSE-KMS 暗号化と Object Lock はデータの保護と不変性確保に有効であるものの、PII の検出・特定・マスキングを行う機能ではなく、PII マスキングという要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Glue の機密データ検出は ETL パイプライン内での検出に対応するものの、S3 バケット全体のスキャンとテキストデータのマスキングを包括的に行うには不十分であり、PII の特定とマスキングの両方という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Macie User Guide",
      "url": "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html"
    },
    {
      "title": "Amazon Comprehend PII Detection",
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html"
    }
  ]
});
