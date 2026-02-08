window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-024",
  "domain": 3,
  "task": "3.3",
  "skill": "3.3.2",
  "type": "single",
  "difficulty": "medium",
  "question": "あるヘルスケア企業が、複数の外部データプロバイダーと社内データレイクからデータを収集し、Amazon Bedrock のカスタムモデルのファインチューニングに使用しています。規制当局の監査要件として、どのデータソースがどのモデルバージョンのトレーニングに使用されたかを追跡可能にし、データの出所（リネージュ）を証明する必要があります。また、データソースの追加・変更時に自動的にメタデータが更新され、トレーニングパイプラインとの関連付けも維持される必要があります。最も運用効率の高いアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "AWS Glue Data Catalog でデータソースのスキーマ・プロパティ・タグを一元管理し、Glue クローラーでデータソースの変更を自動検出してカタログを更新する。SageMaker AI Experiments のトライアルコンポーネントでトレーニングジョブとデータソースの関連付けを記録し、CloudTrail でデータアクセスの監査ログを取得する"
    },
    {
      "id": "B",
      "text": "Amazon S3 のオブジェクトタグとバージョニングでデータソース情報を記録し、S3 イベント通知と Lambda でタグの自動更新を実装する。Bedrock のファインチューニングジョブの入力データ ARN をもとに、Lambda で DynamoDB にモデルバージョンとデータの対応表を自動記録する"
    },
    {
      "id": "C",
      "text": "AWS Lake Formation でデータレイク内のデータソースのアクセス権限とメタデータを管理し、Lake Formation のデータフィルターでトレーニングに使用されるデータを制御する。CloudTrail Lake で長期的なデータアクセス履歴をクエリ可能な形式で保持する"
    },
    {
      "id": "D",
      "text": "Amazon DataZone でデータソースのカタログとメタデータを管理し、ビジネスコンテキスト（データオーナー、品質スコア、使用目的）を記録する。DataZone のリネージュ機能でデータフローを可視化し、Amazon EventBridge でデータソース変更イベントを検出してカタログを自動更新する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "AWS Glue Data Catalog は、データレイク内のデータソースに関するメタデータ（スキーマ、プロパティ、タグ）を一元管理するカタログサービスです。Glue クローラーによりデータソースの変更を自動検出してカタログを更新できるため、手動管理が不要です。SageMaker AI Experiments のトライアルコンポーネントは、トレーニングジョブで使用されたデータセット、ハイパーパラメータ、評価メトリクスを自動追跡し、データソースとモデルバージョンの関連付けを構造的に記録します。CloudTrail との組み合わせにより、データアクセスの完全な監査証跡も確保できます。B の S3 タグ + Lambda + DynamoDB の組み合わせは実装可能ですが、Lambda 関数と DynamoDB テーブルの開発・保守が必要であり、Glue Data Catalog + Experiments のマネージド機能と比較して運用負荷が高くなります。また、S3 タグではデータ間の関係性やスキーマ情報の管理が困難です。C の Lake Formation はデータレイクのアクセス制御とガバナンスに優れていますが、データリネージュの追跡（どのデータがどのモデルトレーニングに使用されたか）の機能はなく、ML パイプラインとの統合は Experiments の方が適しています。D の DataZone はデータガバナンスとカタログ管理に有用ですが、ML トレーニングパイプラインとの直接的な統合機能は SageMaker AI Experiments ほど成熟しておらず、ヘルスケア企業の規制監査対応には SageMaker エコシステム内での一貫した追跡が運用効率面で優れています。（スキル3.3.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Glue Data Catalog によるメタデータ一元管理 + Glue クローラーによる自動更新 + SageMaker AI Experiments によるトレーニングジョブとデータの関連付け + CloudTrail の監査ログにより、データリネージュの追跡と監査対応を直接満たします。特にマネージド機能の組み合わせで運用負荷を最小化できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。S3 タグ + Lambda + DynamoDB でデータとモデルの対応表を管理できるものの、Lambda 関数と DynamoDB テーブルの開発・保守が必要で運用負荷が高く、S3 タグではスキーマ情報やデータ間関係性の管理も困難なため、最も運用効率が高いという要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Lake Formation はデータレイクのアクセス制御・ガバナンスに優れるものの、どのデータがどのモデルトレーニングに使用されたかのリネージュ追跡機能がなく、ML パイプラインとの統合もないため、データリネージュの証明という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。DataZone はデータガバナンスとビジネスコンテキスト管理に有用であるものの、ML トレーニングパイプラインとの直接統合は SageMaker Experiments ほど成熟しておらず、SageMaker エコシステムとの一貫性の面で運用効率が劣ります。"
    }
  },
  "references": [
    {
      "title": "AWS Glue Data Catalog",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html"
    },
    {
      "title": "Amazon SageMaker Experiments",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/experiments.html"
    }
  ]
});
