window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-005",
  "domain": 1,
  "task": "1.1",
  "skill": "1.1.3",
  "type": "multiple",
  "difficulty": "medium",
  "question": "ある企業が、Amazon Bedrock を使用した生成 AI チャットボットを本番環境にデプロイする準備をしています。AWS Well-Architected Framework の Generative AI Lens に基づいて、運用上の優秀性（Operational Excellence）の柱のベストプラクティスとして適切なものを2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "Bedrock のモデル呼び出しログを有効にし、CloudTrail でAPI呼び出しを記録して、障害発生時のトラブルシューティングに活用する"
    },
    {
      "id": "B",
      "text": "CloudWatch でモデルの推論レイテンシー、スループット、エラー率を継続的にモニタリングし、閾値超過時のアラームを設定する"
    },
    {
      "id": "C",
      "text": "VPC エンドポイントを使用して Bedrock API へのプライベートアクセスを確保し、データがインターネットを経由しないようにする"
    },
    {
      "id": "D",
      "text": "予測可能なワークロードに対してプロビジョンドスループットを使用し、オンデマンド料金と比較してコストを最適化する"
    },
    {
      "id": "E",
      "text": "プロンプトテンプレートとモデル設定を Bedrock のプロンプト管理でバージョン管理し、変更履歴を追跡可能にする"
    }
  ],
  "correctAnswers": [
    "B",
    "E"
  ],
  "explanation": "B: CloudWatch によるメトリクス監視とアラーム設定は、運用上の優秀性の柱における継続的モニタリング（可観測性）の重要なプラクティスです。E: プロンプトテンプレートとモデル設定のバージョン管理は、変更の追跡・再現性確保・ロールバック可能性を担保する運用上のベストプラクティスです。モデル呼び出しログと CloudTrail（A）はトラブルシューティングに有用ですが、監査とコンプライアンスの観点からセキュリティの柱に主に該当します。VPC エンドポイント（C）はネットワークセキュリティに関するセキュリティの柱のプラクティスです。プロビジョンドスループット（D）はコスト最適化の柱のプラクティスです。（スキル1.1.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。モデル呼び出しログと CloudTrail はトラブルシューティングに有用な点はあるものの、監査・コンプライアンスの観点からセキュリティの柱に主に該当し、運用上の優秀性の柱のプラクティスではありません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。CloudWatch によるメトリクス監視とアラーム設定は、運用上の優秀性の柱における継続的モニタリング（可観測性）の要件を直接満たします。特にリアルタイムの異常検知を最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。VPC エンドポイントによるプライベートアクセスはネットワーク保護に有効な点はあるものの、セキュリティの柱のプラクティスであり、運用上の優秀性の柱には該当しません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。プロビジョンドスループットによるコスト最適化は予算管理に有効な点はあるものの、コスト最適化の柱のプラクティスであり、運用上の優秀性の柱には該当しません。"
    },
    "E": {
      "correct": true,
      "text": "正解です。プロンプトテンプレートとモデル設定のバージョン管理は、変更追跡・再現性確保・ロールバック可能性の要件を直接満たします。特に運用上の変更管理を最小の運用負荷で実現できます。"
    }
  },
  "references": [
    {
      "title": "AWS Well-Architected Framework - Generative AI Lens",
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/generative-ai-lens.html"
    },
    {
      "title": "Amazon CloudWatch によるモニタリング",
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"
    }
  ]
});
