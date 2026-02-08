window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-007",
  "domain": 1,
  "task": "1.1",
  "skill": "1.1.1",
  "type": "single",
  "difficulty": "medium",
  "question": "あるヘルスケア企業が、患者の医療記録を要約する生成 AI アプリケーションを設計しています。HIPAA 準拠が必須要件であり、患者の PII（氏名、社会保障番号、診断コード）が FM の入出力に含まれる可能性があります。データがインターネットを経由しないことと、PII の漏洩防止の両方を満たすアーキテクチャ設計として最も適切なのはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock を VPC エンドポイント経由で使用し、ガードレールの機密情報フィルターで PII を検出・マスキングする"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock を VPC エンドポイント経由で使用し、入力データを Lambda 関数で事前に暗号化してから FM に送信する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock を AWS PrivateLink 経由で使用し、Amazon Comprehend の PII 検出で入力データを前処理してから FM に送信する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock を VPC エンドポイント経由で使用し、AWS KMS のカスタマーマネージドキーでモデルの入出力データを暗号化する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "VPC エンドポイント経由でデータがインターネットを経由しないプライベート接続を確保し、Bedrock ガードレールの機密情報フィルター（Sensitive Information Filter）で PII を検出・マスキングすることで、両方の要件を効率的に満たせます。Lambda で事前暗号化（B）すると FM がデータを理解できなくなり、医療記録の要約が不可能になります。Comprehend による前処理（C）は PII 検出に有効ですが、出力側の PII 漏洩を防止できず、追加のカスタムコードが必要になります。Bedrock ガードレールなら入出力の両方で PII をフィルタリングできます。KMS 暗号化（D）はデータの保存時・転送時の暗号化であり、FM の入出力における PII の検出・マスキングは行いません。（スキル1.1.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。VPC エンドポイントとガードレールの機密情報フィルターの組み合わせは、データのプライベート接続と PII 漏洩防止の両方の要件を直接満たします。特に入出力の両方で PII を検出・マスキングする機能を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。VPC エンドポイントでプライベート接続は確保できる点はあるものの、入力データを暗号化すると FM がデータを理解できず医療記録の要約が不可能になります。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Comprehend の PII 検出は入力側の処理に有効な点はあるものの、出力側の PII 漏洩防止には追加のカスタムコードが必要であり、運用負荷が増加します。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。KMS 暗号化はデータの保存時・転送時の暗号化に有効な点はあるものの、FM の入出力における PII の検出・マスキングは行わず、PII 漏洩防止の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock のセキュリティとコンプライアンス",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/security.html"
    },
    {
      "title": "Amazon Bedrock ガードレール",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    }
  ]
});
