window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-018",
  "domain": 4,
  "task": "4.3",
  "skill": "4.3.2",
  "type": "multiple",
  "difficulty": "medium",
  "question": "ある企業が Amazon Bedrock を利用した GenAI チャットボットの運用コストが予想を大幅に超過していることに気づきました。コストの可視化と異常検出を実装して、コスト管理を強化したいと考えています。効果的なアプローチを2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "Amazon CloudWatch のカスタムメトリクスでトークン使用量を追跡し、異常な使用パターンを検出するアラームを設定する"
    },
    {
      "id": "B",
      "text": "AWS Budgets と AWS Cost Anomaly Detection を使用して、Bedrock サービスのコスト異常を自動検出し、SNS 通知を設定する"
    },
    {
      "id": "C",
      "text": "毎月末に AWS Cost Explorer で手動でコストを確認する"
    },
    {
      "id": "D",
      "text": "すべてのユーザーのチャットボット使用を1日10回に制限する"
    },
    {
      "id": "E",
      "text": "Bedrock のモデル呼び出しログを無効化してログ保存コストを削減する"
    }
  ],
  "correctAnswers": [
    "A",
    "B"
  ],
  "explanation": "正解はAとBです。Aの CloudWatch カスタムメトリクスによるトークン使用量追跡は、GenAI特有のコスト要因であるトークン消費をリアルタイムで監視し、通常パターンからの逸脱を即座に検出できます。BのAWS Budgets と Cost Anomaly Detection は、サービスレベルでの予算管理と機械学習ベースのコスト異常検出を提供し、予期しないコスト増加を自動的に通知します。Cの月末の手動確認は遅延が大きく、異常の早期検出に不適切です。Dの一律使用制限はビジネスへの影響が大きく、コスト管理としては粗雑です。Eのログ無効化はトラブルシューティング能力を失わせ、コスト異常の原因分析が困難になります。（スキル: 4.3.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。CloudWatch カスタムメトリクスによるトークン使用量追跡は、コスト可視化と異常検出の両方を直接満たします。特に GenAI 特有のコスト要因であるトークン消費をリアルタイムで監視し、通常パターンからの逸脱を最小の運用負荷で検出できます。"
    },
    "B": {
      "correct": true,
      "text": "正解です。AWS Budgets と Cost Anomaly Detection は、コスト可視化と異常検出の両方を直接満たします。特にサービスレベルでの予算管理と機械学習ベースのコスト異常自動検出を最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。毎月末に手動でコストを確認する方法はコスト把握には有用なものの、遅延が大きく異常検出の要件を満たしません。月内に大幅な超過が発生しても気づけません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。すべてのユーザーの使用を一律制限する方法はコスト抑制には寄与するものの、ビジネスへの影響が大きく、コスト可視化・異常検出の要件とは異なるアプローチです。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。モデル呼び出しログを無効化するとログ保存コストはわずかに削減されるものの、トラブルシューティング能力を失い、コスト異常の原因分析が困難になるため、異常検出の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon CloudWatch による Amazon Bedrock のモニタリング",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-cw.html"
    },
    {
      "title": "AWS Cost Anomaly Detection",
      "url": "https://docs.aws.amazon.com/cost-management/latest/userguide/manage-ad.html"
    },
    {
      "title": "AWS Budgets",
      "url": "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"
    }
  ]
});
