window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-040",
  "domain": 3,
  "task": "3.4",
  "skill": "3.4.3",
  "type": "single",
  "difficulty": "easy",
  "question": "ある企業のAIチームが、新しい Amazon Bedrock ベースのアプリケーションを本番環境にデプロイする前に、企業のAI利用ポリシーへの準拠を確認したいと考えています。ポリシーでは、ガードレールの設定、PII フィルターの有効化、モデル呼び出しログの有効化が必須要件として定義されています。デプロイ前のコンプライアンスチェックとして、最も適切な方法はどれですか？",
  "options": [
    {
      "id": "A",
      "text": "AWS Config のカスタムルールを作成し、Bedrock リソースのガードレール設定、PII フィルター、ログ記録の設定コンプライアンスを継続的に評価する"
    },
    {
      "id": "B",
      "text": "CI/CD パイプライン（AWS CodePipeline）に Lambda ベースの自動コンプライアンスチェックステージを組み込み、Bedrock API でガードレール設定・PII フィルター・ログ記録の有効化を検証し、未準拠の場合はデプロイを自動的にブロックする"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のモデル評価ジョブをデプロイ前に実行し、応答品質メトリクス（正確性、毒性スコア）がベースラインを満たしていることを確認する"
    },
    {
      "id": "D",
      "text": "AWS CloudFormation のスタックポリシーで Bedrock リソースの更新を制限し、ガードレール設定を含むテンプレートのみをデプロイ可能にする"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "CI/CD パイプラインへの自動コンプライアンスチェックステージの組み込みは、デプロイ前の段階でポリシー準拠を体系的かつ自動的に検証するベストプラクティスです。Lambda 関数が Bedrock API（GetGuardrail、GetModelInvocationLoggingConfiguration 等）を呼び出してガードレール設定、PII フィルター、ログ記録の有効化を検証し、未準拠の場合はデプロイを自動的にブロックすることで、ポリシー違反のアプリケーションが本番環境にデプロイされることを確実に防止できます。A の AWS Config カスタムルールは継続的なコンプライアンス評価に有用ですが、デプロイを自動的にブロックする機能はなく、非準拠の検出と通知にとどまります。C のモデル評価ジョブは応答品質の検証に有用ですが、ガードレール設定や PII フィルターの有無、ログ記録の設定といったインフラレベルのポリシー準拠を検証する機能ではありません。D の CloudFormation スタックポリシーはリソースの更新制限に使用しますが、ガードレール設定の内容（PII フィルターの有効化等）を検証する機能はなく、テンプレートの構造制約のみです。（スキル3.4.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。AWS Config はコンプライアンスの継続評価に有用であるものの、デプロイの自動ブロック機能がなく非準拠の検出・通知にとどまり、デプロイ前のコンプライアンスチェックという要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。CI/CD パイプラインの自動チェックステージで Bedrock API を使用してポリシー準拠を検証し、未準拠時にデプロイを自動ブロックすることで、デプロイ前のコンプライアンスチェックとポリシー違反の防止を直接満たします。特にデプロイ前の確実なゲートキーピングを最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。モデル評価ジョブは応答品質検証用であるものの、ガードレール設定・PII フィルター・ログ記録といったインフラレベルのポリシー準拠検証ではなく、ポリシー準拠の確認という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。CloudFormation スタックポリシーはリソース更新の制限に使用できるものの、ガードレール設定の内容を検証する機能はなくテンプレート構造の制約のみであり、ポリシー準拠の検証という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Guardrails",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    },
    {
      "title": "AWS Prescriptive Guidance - ML Governance",
      "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/ml-governance/introduction.html"
    }
  ]
});
