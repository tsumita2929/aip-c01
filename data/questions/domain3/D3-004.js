window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-004",
  "domain": 3,
  "task": "3.1",
  "skill": "3.1.4",
  "type": "multiple",
  "difficulty": "hard",
  "question": "ある大手小売企業が、Amazon Bedrock を使用した商品レコメンデーションチャットボットを構築しています。セキュリティチームは、プロンプトインジェクション攻撃や不適切なコンテンツの入出力に対して、単一障害点のない多層防御アーキテクチャを実装する必要があります。コンテンツの安全性を確保する多層防御として適切なレイヤーを2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "AWS WAF の SQL インジェクションルールと XSS ルールを API Gateway に適用し、悪意のある入力パターンを検出する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock ガードレールでコンテンツフィルター、拒否トピック、プロンプト攻撃フィルターを設定し、モデルの入出力の両方を制御する"
    },
    {
      "id": "C",
      "text": "Amazon CloudWatch Logs Insights でモデルの応答ログをリアルタイム分析し、不適切な出力パターンを検出してアラームを発火させる"
    },
    {
      "id": "D",
      "text": "Amazon Comprehend の PII 検出と毒性検出 API を使用した前処理フィルターで、モデル呼び出し前に不適切な入力をブロックする Lambda 関数を実装する"
    },
    {
      "id": "E",
      "text": "Amazon Bedrock のモデル呼び出しログを有効化し、全リクエスト・レスポンスを S3 に保存して事後監査に使用する"
    }
  ],
  "correctAnswers": [
    "B",
    "D"
  ],
  "explanation": "多層防御アーキテクチャでは、複数の独立したレイヤーでコンテンツの安全性を確保します。D の Amazon Comprehend による前処理フィルターは、モデル呼び出し前の第一防御レイヤーとして機能し、PII 検出で個人情報を除去し、毒性検出 API で有害コンテンツを早期にブロックします。B の Bedrock ガードレールは、モデルの入出力に対する中核的な安全コントロールとして、コンテンツフィルター（暴力・性的コンテンツ等のカテゴリ別制御）、拒否トピック（ビジネス固有の禁止トピック）、プロンプト攻撃フィルター（インジェクション検出）を提供します。この2つを組み合わせることで、前処理段階とモデル呼び出し段階の2層で防御できます。A の WAF の SQL インジェクション・XSS ルールはウェブアプリケーション攻撃の防御用であり、自然言語によるプロンプトインジェクションや不適切コンテンツの検出には対応していません。C の CloudWatch Logs Insights によるログ分析は事後的な検出であり、リアルタイムのコンテンツブロックはできません。E のモデル呼び出しログの保存は監査に有用ですが、不適切コンテンツの防止（ブロック）機能ではありません。（スキル3.1.4）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。WAF の SQL インジェクション・XSS ルールはウェブアプリケーション攻撃の防御用であるものの、自然言語によるプロンプトインジェクションや不適切コンテンツの検出には対応しておらず、コンテンツの安全性確保という要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。Bedrock ガードレールのコンテンツフィルター、拒否トピック、プロンプト攻撃フィルターはモデルの入出力両方を制御する中核的な安全コントロールであり、多層防御の重要なレイヤーとしてコンテンツの安全性を直接満たします。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。CloudWatch Logs Insights によるログ分析は事後的な検出であるものの、不適切コンテンツのリアルタイムブロックはできず、多層防御のレイヤーという要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。Amazon Comprehend の PII 検出と毒性検出 API による前処理フィルターは、モデル呼び出し前の第一防御レイヤーとして不適切な入力を早期にブロックし、多層防御の独立したレイヤーとしてコンテンツの安全性を直接満たします。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。モデル呼び出しログの S3 保存は事後監査に有用であるものの、不適切コンテンツの防止（リアルタイムブロック）機能ではなく、多層防御のレイヤーという要件を満たしません。"
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
    }
  ]
});
