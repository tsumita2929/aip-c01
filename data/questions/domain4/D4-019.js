window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-019",
  "domain": 4,
  "task": "4.3",
  "skill": "4.3.3",
  "type": "single",
  "difficulty": "medium",
  "question": "あるヘルスケア企業が Amazon Bedrock ベースの医療相談 AI アシスタントを運用しています。規制要件により、各ユーザーインタラクションの完全なトレーサビリティが必要です。入力プロンプト、モデルの応答、使用されたコンテキスト、応答時間をすべて追跡し、監査可能な形で一元的に可視化する必要があります。最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "月次で担当者がモデルの応答をサンプリングして手動でレビューする"
    },
    {
      "id": "B",
      "text": "アプリケーションコード内で各リクエストのログをコンソールに出力する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のモデル呼び出しログを Amazon S3 と CloudWatch Logs に送信し、各リクエストにトレースIDを付与して CloudWatch ダッシュボードで統合的に可視化する"
    },
    {
      "id": "D",
      "text": "Amazon Kinesis Data Streams でリクエストデータをストリーミングし、Amazon Redshift に保存する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解はCです。Amazon Bedrock のモデル呼び出しログは、入力プロンプト、モデル応答、メタデータ（レイテンシー、トークン数等）を自動的に記録できます。S3への保存で長期的な監査ログを確保し、CloudWatch Logs への送信でリアルタイムの分析と可視化が可能になります。トレースIDにより各インタラクションを一意に追跡でき、CloudWatch ダッシュボードで統合的なフォレンジックトレーサビリティを実現できます。Aの手動レビューは規制要件の「完全なトレーサビリティ」を満たしません。Bのコンソール出力は構造化されておらず、永続化・監査に不適切です。DのKinesis + Redshift は実現可能ですが、Bedrock のネイティブログ機能と CloudWatch の統合に比べて過剰に複雑です。（スキル: 4.3.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。月次のサンプリングレビューは品質改善の参考にはなるものの、すべてのインタラクションを追跡する「完全なトレーサビリティ」の要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。コンソールへのログ出力はデバッグ時には有用なものの、構造化されておらず永続化や監査用途には不適切であり、完全なトレーサビリティの要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。Bedrock のモデル呼び出しログと CloudWatch ダッシュボードの統合は、完全なトレーサビリティと一元的な可視化の両方を直接満たします。特に入力プロンプト、モデル応答、メタデータを自動的に記録し、トレースIDで各インタラクションを一意に追跡できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Kinesis + Redshift の構成は技術的に実現可能なものの、Bedrock のネイティブログ機能と CloudWatch の統合に比べて過剰に複雑であり、一元的な可視化の要件に対して運用負荷が高くなります。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock モデル呼び出しログ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html"
    },
    {
      "title": "Amazon CloudWatch Logs",
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html"
    }
  ]
});
