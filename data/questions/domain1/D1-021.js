window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-021",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、Amazon Bedrock の FM をファインチューニングするためのトレーニングデータセット（約50万件の顧客対応Q&Aペア、JSONL形式）の品質を検証する自動化パイプラインを構築しています。要件として、(1) 必須フィールド（question, answer, category）の欠損検出、(2) 重複Q&Aペアの検出と除去、(3) answer フィールドの最低文字数チェックを行い、品質基準を満たさないレコードの割合が5%を超えた場合にパイプラインを自動停止する必要があります。最も運用負荷の低いアーキテクチャはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "AWS Glue ETL ジョブで S3 上の JSONL ファイルを処理し、Glue Data Quality のルールセット（Completeness、Uniqueness、ColumnLength ルール）で品質チェックを実行する。品質スコアが閾値を下回った場合に CloudWatch アラーム経由で Step Functions のパイプラインを自動停止する"
    },
    {
      "id": "B",
      "text": "AWS Lambda 関数で S3 上の JSONL ファイルを行ごとに読み込み、カスタムバリデーションロジックで品質チェックを実行する。結果を DynamoDB に記録し、品質スコアが閾値を下回った場合に SNS で運用チームに通知する"
    },
    {
      "id": "C",
      "text": "Amazon Athena で S3 上の JSONL ファイルに対して SQL クエリを実行し、欠損・重複・文字数を集計する。Amazon QuickSight でダッシュボードを作成して品質トレンドを可視化し、運用チームが定期的に確認してパイプラインの継続可否を判断する"
    },
    {
      "id": "D",
      "text": "Amazon EMR 上で Apache Spark ジョブを開発し、PySpark で欠損検出・重複除去・文字数チェックのロジックを実装する。品質レポートを S3 に出力し、Step Functions で後続のファインチューニングジョブとの連携を管理する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Glue Data Quality は Completeness（欠損検出）、Uniqueness（重複検出）、ColumnLength（文字数チェック）などの組み込みルールをルールセットとして定義でき、カスタムコードなしで品質検証を自動化できます。CloudWatch との連携で品質スコアの閾値ベース自動停止も実現できます。Lambda での行ごとバリデーション（B）は50万件のデータに対して処理時間とコストが増大し、Lambda の実行時間制限（最大15分）に抵触する可能性があります。また、カスタムバリデーションロジックの開発・維持が必要で、SNS 通知は手動対応を前提としており自動停止の要件を満たしません。Athena + QuickSight（C）はデータ分析と可視化に優れていますが、品質チェックの自動化ではなく人間が定期的に確認する運用であり、パイプラインの自動停止要件を満たしません。EMR + Spark（D）は大規模データ処理に適していますが、EMR クラスターの管理と PySpark コードの開発・維持が必要であり、Glue Data Quality の組み込みルールで実現可能な機能に対して運用負荷が過剰です。（スキル1.3.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Glue Data Quality の組み込みルールセットにより、カスタムコードなしで欠損・重複・文字数の品質検証を自動化できます。CloudWatch アラームとの連携により、品質スコアが閾値を下回った場合のパイプライン自動停止も実現でき、運用負荷が最小限です。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Lambda での行ごとバリデーションは50万件のデータに対して処理時間が長く、Lambda の15分実行時間制限に抵触する可能性があります。カスタムバリデーションロジックの開発・維持も必要で、SNS 通知は手動対応を前提としておりパイプライン自動停止の要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Athena + QuickSight はデータ分析と可視化に優れていますが、運用チームの定期的な確認に依存しており、品質基準違反時のパイプライン自動停止という自動化要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。EMR + Spark はカスタムの大規模データ処理に適していますが、EMR クラスターの起動・管理コストと PySpark コードの開発・テスト・維持が必要です。Glue Data Quality の組み込みルールで実現可能な品質チェックに対して運用負荷が過剰です。"
    }
  },
  "references": [
    {
      "title": "AWS Glue Data Quality",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-data-quality.html"
    },
    {
      "title": "Amazon Bedrock モデルのファインチューニング",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization.html"
    }
  ]
});
