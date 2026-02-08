window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-015",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.3",
  "type": "multiple",
  "difficulty": "hard",
  "question": "ある人材紹介会社が、Amazon Bedrock を使用して求職者の履歴書を分析し、求人とのマッチングを行うAIシステムを構築しています。求職者のプライバシーを保護するため、モデルに渡す前に履歴書の個人情報を匿名化し、さらにモデルの出力にも個人情報が含まれないようにする必要があります。実装すべきプライバシー保護対策を2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "Amazon S3 のサーバーサイド暗号化（SSE-KMS）で履歴書データを暗号化し、AWS KMS のキーポリシーでアクセスを制限する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のモデル呼び出しログを無効化して、推論データが S3 や CloudWatch に記録されないようにする"
    },
    {
      "id": "C",
      "text": "Amazon Comprehend の PII 検出・墨消し API を使用して、履歴書内の氏名、住所、電話番号などの PII エンティティを検出し、Bedrock への入力前にプレースホルダーに置換する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock ガードレールの機密情報フィルターで PII タイプ（NAME、ADDRESS、PHONE 等）を指定し、モデルの出力に求職者の個人情報が含まれる場合にマスキングまたはブロックする"
    },
    {
      "id": "E",
      "text": "Amazon Bedrock の VPC エンドポイント（PrivateLink）を使用して、履歴書データがインターネットを経由しないようにする"
    }
  ],
  "correctAnswers": [
    "C",
    "D"
  ],
  "explanation": "プライバシー保護 AI の実現には、入力データと出力データの両方で PII 保護を行う必要があります。C の Comprehend PII 検出・墨消し API は、テキスト内の PII エンティティ（氏名、住所、電話番号、メールアドレス等）を検出し、プレースホルダーに置換することで、モデルに不要な個人情報が渡ることを入力段階で防ぎます。D の Bedrock ガードレール機密情報フィルターは、PII タイプ（NAME、ADDRESS、PHONE 等）を個別に指定してモデルの出力をフィルタリングし、モデルが出力に PII を含めてしまう場合のセーフティネットとして機能します。A の SSE-KMS 暗号化はデータ保存時の保護（暗号化）であり、AI 分析時のプライバシー保護（PII の検出・マスキング）とは異なります。B のログ無効化はデータ記録を防ぎますが、モデルへの入力とモデルからの出力に含まれる PII を検出・マスキングする機能ではありません。E の VPC エンドポイントはネットワーク経路の保護であり、データ内容のプライバシー保護（PII の匿名化）ではありません。（スキル3.2.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。SSE-KMS 暗号化はデータ保存時の保護であるものの、モデルに渡す際には復号されるため AI 分析時の PII マスキングにはならず、個人情報の匿名化という要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。ログ無効化はデータ記録を防げるものの、モデルへの入出力に含まれる PII を検出・マスキングする機能ではなく、個人情報の匿名化と出力からの除去という要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。Comprehend PII 検出・墨消し API で入力データの PII をプレースホルダーに置換し、モデルに不要な個人情報が渡ることを防ぐことで、入力段階のプライバシー保護を直接満たします。"
    },
    "D": {
      "correct": true,
      "text": "正解です。Bedrock ガードレールの機密情報フィルターで PII タイプを指定し、モデル出力に個人情報が含まれる場合にマスキングまたはブロックすることで、出力段階のプライバシー保護を直接満たします。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。VPC エンドポイントはネットワーク経路の保護であるものの、履歴書データ内の PII の匿名化・マスキングには対応しておらず、個人情報の匿名化という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Guardrails Sensitive Information Filters",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html"
    },
    {
      "title": "Amazon Comprehend PII Detection",
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html"
    }
  ]
});
