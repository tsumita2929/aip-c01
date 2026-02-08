window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-033",
  "domain": 3,
  "task": "3.4",
  "skill": "3.4.3",
  "type": "single",
  "difficulty": "hard",
  "question": "ある企業が、Amazon Bedrock を使用した複数のAIアプリケーションを運用しています。各アプリケーションが企業のAI利用ポリシーに準拠していることを自動的にチェックし、違反が検出された場合は即座に対応する仕組みを構築する必要があります。最も適切なアーキテクチャはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock ガードレールで企業ポリシーに基づくコンテンツフィルター・拒否トピック・PII フィルターを設定してリアルタイムでポリシー違反をブロックし、CloudWatch メトリクスで違反率を監視してアラーム発火時に SNS + Lambda で自動対応する"
    },
    {
      "id": "B",
      "text": "AWS Config のマネージドルールで Bedrock リソースの設定（暗号化、VPC エンドポイント等）のコンプライアンスを評価し、非準拠リソースを自動修復する AWS Systems Manager Automation を設定する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のモデル評価機能で品質メトリクス（正確性、毒性）の自動評価ジョブを毎日実行し、メトリクスがベースラインを下回った場合に EventBridge 経由で運用チームに通知する"
    },
    {
      "id": "D",
      "text": "AWS CloudTrail で Bedrock API 呼び出しを記録し、CloudTrail Insights で異常なアクティビティパターンを検出して、検出時に SNS でセキュリティチームに通知する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "AI ポリシー準拠の自動チェックと即座の対応には、Bedrock ガードレールによるリアルタイムのポリシー違反ブロックと、CloudWatch + Lambda による自動対応の組み合わせが最も適切です。A はガードレールでコンテンツフィルター（暴力・性的コンテンツ等）、拒否トピック（ビジネス固有の禁止事項）、PII フィルター（個人情報保護）をリアルタイムで適用し、違反をブロックします。さらに CloudWatch メトリクスで違反率の監視と異常検出アラームを設定し、SNS + Lambda で自動対応（通知、スロットリング等）を実現します。B の AWS Config はリソースの設定コンプライアンス（暗号化、ネットワーク設定等）の評価であり、AI モデルの出力コンテンツのポリシー準拠は評価できません。C のモデル評価ジョブは品質のベースライン比較に有用ですが、日次バッチ実行であるため違反の即座の検出・対応ができません。D の CloudTrail Insights は API 呼び出しパターンの異常検出であり、コンテンツレベルのポリシー違反（不適切な応答内容、PII 漏洩等）は検出できません。（スキル3.4.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。ガードレールでリアルタイムにポリシー違反をブロックし、CloudWatch + SNS + Lambda で違反率の監視と自動対応を実現することで、自動チェックと即座の対応を直接満たします。特にポリシー準拠の自動化を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。AWS Config はリソース設定のコンプライアンス評価（暗号化、ネットワーク設定等）であるものの、AI モデルの出力コンテンツのポリシー準拠は評価できず、AI利用ポリシーの自動チェックという要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。モデル評価ジョブは品質ベースライン比較に有用であるものの、日次バッチ実行のため違反の即座の検出・対応ができず、即座に対応するという要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。CloudTrail Insights は API 呼び出しパターンの異常検出であるものの、不適切な応答内容や PII 漏洩などのコンテンツレベルのポリシー違反は検出できず、AI利用ポリシーの自動チェックという要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Guardrails",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    },
    {
      "title": "Amazon CloudWatch Monitoring",
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"
    }
  ]
});
