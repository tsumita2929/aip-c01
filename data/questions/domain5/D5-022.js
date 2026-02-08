window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-022",
  "domain": 5,
  "task": "5.2",
  "skill": "5.2.5",
  "type": "multiple",
  "difficulty": "easy",
  "question": "ある企業が生成AIアプリケーションの本番環境での問題を体系的に診断するためのオブザーバビリティ基盤を構築しています。プロンプトテンプレートのレンダリング、モデル呼び出し、応答処理の各段階でのログ収集と診断を実現するために、適切なAWSサービスの組み合わせを2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "AWS Artifact でコンプライアンスレポートを取得して診断に使用する"
    },
    {
      "id": "B",
      "text": "Amazon CloudWatch Logs でモデルのリクエスト・レスポンスログを記録し、CloudWatch Logs Insights でクエリ分析を行い、異常パターンを特定する"
    },
    {
      "id": "C",
      "text": "Amazon Kinesis Data Firehose でログをリアルタイムストリーミングし、Amazon Redshift にのみ保存する"
    },
    {
      "id": "D",
      "text": "AWS X-Ray でアプリケーションのトレースを取得し、各処理段階のレイテンシーやエラー率を可視化してボトルネックを特定する"
    },
    {
      "id": "E",
      "text": "Amazon Macie でモデルの応答に含まれる個人情報のみを検出する"
    }
  ],
  "correctAnswers": [
    "B",
    "D"
  ],
  "explanation": "正解はBとDです。BのCloudWatch Logs はモデルのリクエスト・レスポンスログを記録し、Logs Insights でクエリ分析を行うことで、プロンプトテンプレートの展開結果やモデルの応答内容を詳細に分析できます。異常パターンの特定やエラーの傾向分析にも活用できます。DのX-Ray は分散トレーシングにより、プロンプトテンプレートの構築からモデル呼び出し、応答処理までの各段階のレイテンシーやエラー率を可視化し、パフォーマンスボトルネックの特定に有用です。CloudWatch Logs と X-Ray の組み合わせは、ログベースの診断とトレースベースの診断を補完的に提供します。AのArtifact はAWSのコンプライアンスドキュメントを提供するサービスであり、アプリケーション診断には使用しません。CのKinesis Data Firehose + Redshift はデータウェアハウスへのログ蓄積には使用できますが、リアルタイムの診断やトラブルシューティングには CloudWatch Logs の方が適しています。EのMacie は機密データの検出サービスであり、アプリケーションのオブザーバビリティには適していません。（スキル5.2.5）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Artifact は AWS のコンプライアンスドキュメントを提供するサービスであるものの、アプリケーション診断には使用しません。オブザーバビリティ基盤の構築という要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。CloudWatch Logs と Logs Insights は、ログ収集と異常パターンの特定の両要件を直接満たします。特にモデルのリクエスト・レスポンスログの記録とクエリ分析による診断を最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Kinesis Data Firehose + Redshift はデータウェアハウスへのログ蓄積には使えるものの、リアルタイムの診断やトラブルシューティングには CloudWatch Logs の方が適しています。体系的な診断の要件を十分に満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。X-Ray は分散トレーシングにより、各処理段階のレイテンシーやエラー率の可視化とボトルネック特定の両要件を直接満たします。特に CloudWatch Logs と補完的に機能し、オブザーバビリティ基盤を最小の運用負荷で実現できます。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。Macie は機密データの検出サービスであるものの、アプリケーションのオブザーバビリティには適していません。ログ収集と診断の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon CloudWatch Logs Insights",
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html"
    },
    {
      "title": "AWS X-Ray 開発者ガイド",
      "url": "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"
    },
    {
      "title": "Amazon Bedrock モデル呼び出しログ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html"
    }
  ]
});
