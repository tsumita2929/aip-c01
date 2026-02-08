window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-020",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.2",
  "type": "multiple",
  "difficulty": "medium",
  "question": "ある企業が、Amazon Bedrock を使用した顧客対応 AI チャットボットを運用しています。顧客とのチャット履歴には個人情報や機密性の高い会話内容が含まれるため、CISO から以下の要件が提示されました。(1) チャット履歴の保管時にカスタマー管理の暗号化キーで暗号化すること、(2) モデルの入出力に含まれる PII（氏名、クレジットカード番号等）をリアルタイムで検出しマスキングすること、(3) Bedrock のプロンプト・レスポンスデータがモデルプロバイダーに共有されないことを確認すること。これらの要件を満たすために実装すべき対策を2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "チャット履歴を保存する Amazon S3 バケットに SSE-KMS（AWS KMS カスタマー管理キー）によるサーバーサイド暗号化を設定し、バケットポリシーで暗号化されていないオブジェクトの PUT を拒否する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock ガードレールの機密情報フィルターで PII タイプ（NAME、CREDIT_DEBIT_NUMBER 等）を個別に指定し、モデルの入力と出力の両方に対して PII の自動検出とマスキングを有効化する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のモデル呼び出しログを有効化し、全リクエスト・レスポンスを CloudWatch Logs に記録して、CloudWatch Logs Insights でPII を含むログエントリを検出するクエリを定期実行する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock の VPC エンドポイント（PrivateLink）を設定し、エンドポイントポリシーでモデルプロバイダーへのデータ共有を制限する条件を追加する"
    },
    {
      "id": "E",
      "text": "Amazon Macie を有効化して S3 バケット内のチャット履歴を定期スキャンし、PII を含むオブジェクトを検出して暗号化ステータスを検証する"
    }
  ],
  "correctAnswers": [
    "A",
    "B"
  ],
  "explanation": "A の SSE-KMS（カスタマー管理キー）暗号化は、保管時のデータ暗号化要件を直接満たします。カスタマー管理キーによりキーのローテーション、アクセスポリシー、使用履歴の監査が可能で、バケットポリシーで非暗号化オブジェクトの PUT を拒否することで暗号化の強制を実現します。B の Bedrock ガードレール機密情報フィルターは、PII タイプを個別に指定してモデルの入出力からリアルタイムで PII を検出・マスキングでき、要件(2)を直接満たします。要件(3)については、Amazon Bedrock のデータプライバシーポリシーにより、顧客のプロンプト・レスポンスデータはデフォルトでモデルプロバイダーに共有されないため、追加の技術的対策は不要です。C のモデル呼び出しログによる PII 検出は事後的な検出であり、PII がモデルに渡された後に検出する仕組みのため、リアルタイムのマスキングという要件を満たしません。また、ログ自体に PII が記録されるためセキュリティリスクが生じます。D の VPC エンドポイントはネットワーク経路のプライベート化を提供しますが、モデルプロバイダーへのデータ共有はエンドポイントポリシーで制御する対象ではなく、Bedrock のデータプライバシーポリシー（サービスレベルの保証）により対応されます。E の Macie は S3 内の PII 検出と暗号化ステータスの検証に有用ですが、事後的なスキャンであり、モデルの入出力に対するリアルタイムの PII マスキングには対応しません。（スキル3.2.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。SSE-KMS のカスタマー管理キーによる暗号化とバケットポリシーによる暗号化強制で、チャット履歴の保管時暗号化要件を直接満たします。キーポリシーで暗号化キーのアクセス制御と使用履歴の監査も可能です。"
    },
    "B": {
      "correct": true,
      "text": "正解です。ガードレールの機密情報フィルターで PII タイプを個別に指定し、モデルの入出力両方でリアルタイムの PII 検出・マスキングを実現することで、PII のリアルタイムマスキング要件を直接満たします。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。モデル呼び出しログによる PII 検出は事後的であり、PII がモデルに渡された後の検出となるため、リアルタイムマスキングの要件を満たしません。さらにログ自体に PII が記録されるセキュリティリスクがあります。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。VPC エンドポイントはネットワーク経路のプライベート化を提供しますが、モデルプロバイダーへのデータ共有は Bedrock のサービスレベルのプライバシーポリシーで保証されており、エンドポイントポリシーで制御する対象ではありません。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。Macie は S3 内の事後的な PII スキャンであり、モデルの入出力に対するリアルタイムの PII マスキングには対応せず、リアルタイム検出・マスキングという要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Data Protection",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html"
    },
    {
      "title": "Amazon Bedrock Guardrails Sensitive Information Filters",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html"
    },
    {
      "title": "Amazon S3 Server-Side Encryption with AWS KMS",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html"
    }
  ]
});
