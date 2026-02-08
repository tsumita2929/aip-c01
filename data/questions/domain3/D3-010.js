window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-010",
  "domain": 3,
  "task": "3.1",
  "skill": "3.1.4",
  "type": "single",
  "difficulty": "hard",
  "question": "ある保険会社が、Amazon Bedrock を使用した保険金請求処理の自動化システムを構築しています。請求内容の分析から支払い判断の推奨まで、複数の生成AIステップで構成されています。請求書には顧客の個人情報が含まれており、AIの出力には支払い金額の推奨が含まれます。入力から出力まで一貫した安全性を確保する多層防御アーキテクチャとして、最も適切な構成はどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock ガードレールのコンテンツフィルターと拒否トピックで入出力を制御 → CloudWatch メトリクスでガードレール介入率を監視 → 介入率が閾値を超えた場合に SNS 通知を送信する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock ガードレールの PII フィルターと コンテンツフィルターで入力前処理 → Bedrock 基盤モデルで分析 → AWS Lambda で後処理検証（支払い金額の上限チェック、必須フィールドの完全性確認）を実施し、ビジネスルール逸脱時はフォールバック応答を返す"
    },
    {
      "id": "C",
      "text": "AWS WAF で SQL インジェクションとレートリミットルールを適用 → Amazon Bedrock ガードレールでコンテンツフィルタリング → API Gateway のレスポンステンプレートで出力形式を標準化する"
    },
    {
      "id": "D",
      "text": "Amazon Comprehend で PII 検出・マスキング → Amazon Bedrock ガードレールでコンテンツフィルタリング → モデル呼び出しログを S3 に保存し Amazon Athena で週次コンプライアンスレポートを生成する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "多層防御アーキテクチャでは、各処理段階にコンテンツの安全性を確保する独立したレイヤーを配置します。B は Bedrock ガードレールによる PII フィルターとコンテンツフィルターでの入力前処理に加え、Lambda での後処理でビジネスロジック検証（支払い金額の上限チェック等）を行い、ビジネスルール逸脱時のフォールバック対応も含む包括的な構成です。A はガードレールによる入出力制御と CloudWatch 監視を提供しますが、後処理でのビジネスロジック検証（支払い金額の妥当性等）が欠落しており、保険金請求処理の安全性として不十分です。C の WAF は Web アプリケーション攻撃の防御用であり、保険請求のコンテンツ安全性には直接寄与しません。API Gateway のレスポンステンプレートも出力形式の標準化であり、コンテンツの安全性検証ではありません。D は入力の PII 保護とコンテンツフィルタリングは適切ですが、出力の後処理検証がなく、週次レポートは事後的な監査であるため、リアルタイムの多層防御として不十分です。（スキル3.1.4）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。ガードレールと CloudWatch 監視は提供するものの、後処理でのビジネスロジック検証（支払い金額の妥当性チェック等）が欠落しており、入力から出力まで一貫した安全性という要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。ガードレールの PII フィルター・コンテンツフィルターでの入力前処理と、Lambda でのビジネスロジック後処理検証（支払い金額上限チェック等）を組み合わせることで、入力から出力まで一貫した安全性と多層防御を直接満たします。特に包括的な多層防御を最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。WAF は Web アプリケーション攻撃の防御用であるものの、保険請求コンテンツの安全性には直接寄与せず、API Gateway のレスポンステンプレートもコンテンツ安全性検証ではないため、多層防御という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。入力の PII 保護とコンテンツフィルタリングは適切であるものの、出力の後処理検証がなく、週次レポートは事後的監査であるため、リアルタイムの多層防御という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Guardrails",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    },
    {
      "title": "Amazon Comprehend PII Detection",
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html"
    },
    {
      "title": "AWS Well-Architected Framework - Security Pillar",
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html"
    }
  ]
});
