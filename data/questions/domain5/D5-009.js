window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-009",
  "domain": 5,
  "task": "5.1",
  "skill": "5.1.9",
  "type": "single",
  "difficulty": "hard",
  "question": "ある保険会社が、生成AIを活用した保険請求処理システムを本番環境にデプロイしました。デプロイ後の品質検証として、ハルシネーション率とセマンティックドリフトを継続的にモニタリングする仕組みを構築したいと考えています。合成ユーザーワークフローを使用して定期的に品質チェックを自動実行し、異常検出時にアラートを送信する最も適切なアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon CloudWatch Logs のログパターンマッチングのみで、ハルシネーションを含む応答を自動検出する"
    },
    {
      "id": "B",
      "text": "Amazon EventBridge Scheduler で定期的に AWS Lambda を起動し、事前定義した合成テストケースを Bedrock エンドポイントに送信して応答を取得する。応答を評価用 LLM で自動スコアリングし、ハルシネーション率が閾値を超えた場合に Amazon SNS でアラートを送信する"
    },
    {
      "id": "C",
      "text": "AWS Trusted Advisor のチェック結果を定期的に確認して、モデルの品質問題を検出する"
    },
    {
      "id": "D",
      "text": "Amazon GuardDuty の脅威検出機能を使用して、モデル応答のセマンティックドリフトを検出する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。EventBridge Scheduler + Lambda + 合成テストケース + 評価用LLM + SNS の組み合わせは、定期的な合成ユーザーワークフローによる品質チェックの自動化に最適です。合成テストケースにはグラウンドトゥルースを含めることで、ハルシネーション率の定量的な測定が可能です。セマンティックドリフトは、過去の応答との埋め込みベクトルの類似度変化を追跡することで検出できます。AのCloudWatch Logs のパターンマッチングはテキストパターンの検出には有効ですが、ハルシネーション（事実と異なる内容の生成）の検出には意味理解が必要であり、ログパターンマッチングでは不十分です。CのTrusted Advisor はAWSのベストプラクティスに基づくインフラ最適化の推奨事項を提供するサービスであり、生成AIモデルの品質監視機能はありません。DのGuardDuty はセキュリティ脅威の検出サービスであり、モデル出力の品質やセマンティックドリフトの検出には対応していません。（スキル5.1.9）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。CloudWatch Logs のログパターンマッチングはテキストパターンの検出には有効であるものの、ハルシネーション（事実と異なる内容の生成）の検出には意味理解が必要であり、合成ワークフローによる品質チェックの要件を満たせません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。EventBridge Scheduler + Lambda + 合成テストケース + 評価用 LLM + SNS の組み合わせは、定期的な品質チェック自動化と異常検出時のアラート送信の両要件を直接満たします。特に合成ユーザーワークフローによるハルシネーション率の定量測定を最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Trusted Advisor は AWS のベストプラクティスに基づくインフラ最適化の推奨事項を提供するサービスであるものの、生成AIモデルの品質監視機能はなく、ハルシネーション率やセマンティックドリフトの検出要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。GuardDuty はセキュリティ脅威の検出サービスであるものの、モデル出力の品質やセマンティックドリフトの検出には対応していません。品質モニタリングの要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon EventBridge Scheduler",
      "url": "https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduler.html"
    },
    {
      "title": "Amazon Bedrock モデルモニタリング",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html"
    }
  ]
});
