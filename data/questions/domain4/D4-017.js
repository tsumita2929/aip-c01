window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-017",
  "domain": 4,
  "task": "4.3",
  "skill": "4.3.1",
  "type": "single",
  "difficulty": "easy",
  "question": "ある企業が Amazon Bedrock を利用した GenAI アプリケーションを本番環境にデプロイしました。アプリケーションは API Gateway + Lambda + Bedrock の構成で、1日あたり約10,000件のリクエストを処理しています。運用チームは、アプリケーションの健全性をリアルタイムで把握し、レイテンシー悪化やエラー率上昇などの問題を早期に検出して、オンコールエンジニアに自動通知する仕組みを構築したいと考えています。運用負荷を最小限に抑えつつ、最初に実装すべき最も適切なオブザーバビリティアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon CloudWatch で Bedrock のモデル呼び出しメトリクス（InvocationLatency、InvocationErrors、ThrottledCount）を収集し、異常値を検出する CloudWatch Alarms を設定する。アラームのトリガー時に Amazon SNS 経由でオンコールチームに通知する"
    },
    {
      "id": "B",
      "text": "AWS X-Ray でアプリケーション全体のトレースを収集し、Lambda 関数内にカスタムメトリクスの送信ロジックを実装する。Amazon OpenSearch Service にトレースデータを保存し、Kibana ダッシュボードで可視化する"
    },
    {
      "id": "C",
      "text": "Amazon Kinesis Data Firehose でリクエストログをストリーミングし、Amazon Redshift に保存する。Amazon QuickSight でダッシュボードを構築し、毎日の定例会議でレビューする"
    },
    {
      "id": "D",
      "text": "Lambda 関数にカスタムのヘルスチェックエンドポイントを追加し、Amazon EC2 上の Prometheus サーバーでメトリクスをスクレイピングして Grafana で可視化する。PagerDuty と統合してアラートを送信する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解はAです。CloudWatch は Bedrock のネイティブメトリクス（InvocationLatency、InvocationErrors、ThrottledCount）を追加設定なしで自動収集できます。CloudWatch Alarms で閾値ベースの異常検出を設定し、SNS 経由でオンコールチームに自動通知する構成は、最小の運用負荷でリアルタイムモニタリングと自動通知を実現できます。Bの X-Ray + OpenSearch + Kibana は詳細なトレース分析には有効ですが、OpenSearch クラスターの運用管理が必要であり、「最初に実装すべき基本的なオブザーバビリティ」としては過剰です。Cの Kinesis + Redshift + QuickSight はデータ分析基盤としては優れていますが、リアルタイムのアラート機能がなく、毎日の定例会議でのレビューでは問題の早期検出要件を満たしません。Dの EC2 上の Prometheus + Grafana は強力なモニタリングスタックですが、EC2 インスタンスの運用管理が必要であり、CloudWatch のネイティブ統合と比較して運用負荷が大幅に高くなります。",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。CloudWatch + Alarms + SNS は、Bedrock のネイティブメトリクスの自動収集・リアルタイム異常検出・自動通知のすべてを最小の運用負荷で実現します。マネージドサービスの組み合わせで追加のインフラ管理が不要です。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。X-Ray によるトレース収集と OpenSearch + Kibana による可視化は詳細な分析には有効ですが、OpenSearch クラスターの運用管理が必要であり、最初のオブザーバビリティ基盤としては運用負荷最小化の要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Kinesis + Redshift + QuickSight はバッチ分析とダッシュボード構築には適していますが、リアルタイムのアラート通知機能が欠如しており、問題の早期検出・自動通知の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Prometheus + Grafana は強力なモニタリングスタックですが、EC2 インスタンスの運用管理（パッチ適用、スケーリング、可用性確保）が必要であり、CloudWatch のネイティブ統合と比較して運用負荷が大幅に高くなります。"
    }
  },
  "references": [
    {
      "title": "Amazon CloudWatch による Amazon Bedrock のモニタリング",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-cw.html"
    },
    {
      "title": "Amazon CloudWatch アラーム",
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html"
    }
  ]
});
