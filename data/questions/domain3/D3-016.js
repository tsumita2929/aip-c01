window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-016",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.1",
  "type": "single",
  "difficulty": "hard",
  "question": "ある大手製造企業が、Amazon Bedrock と Amazon SageMaker AI を使用した AI 分析プラットフォームを構築しています。3つの事業部門（品質管理、サプライチェーン、研究開発）がプラットフォームを共有し、各部門のデータは他部門からアクセスできないようにする必要があります。さらに、すべての AI 操作（Bedrock のモデル呼び出し、SageMaker のトレーニングジョブ実行等）の監査ログを一元管理し、コンプライアンス監査に対応する必要があります。最も適切なアーキテクチャはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "各部門に個別の AWS アカウントを作成して AWS Organizations で管理し、アカウント間のデータ共有には Amazon S3 のクロスアカウントアクセスポリシーを設定する。各アカウントで CloudTrail を個別に有効化して監査ログを記録する"
    },
    {
      "id": "B",
      "text": "Amazon S3 のバケットポリシーで部門ごとにプレフィックスベース（s3:prefix 条件キー）のアクセス制御を設定し、IAM ロールの Condition で部門タグを検証する。CloudTrail で S3 データイベントのみを記録して監査に使用する"
    },
    {
      "id": "C",
      "text": "AWS Lake Formation を使用してデータレイクの列レベル・行レベルのアクセス制御を設定し、各部門の IAM ロールにデータフィルター付きの Lake Formation パーミッションを付与する。AWS CloudTrail の組織トレイルで Bedrock・SageMaker を含む全 AI 操作の監査ログを一元的に記録し、Amazon Athena で監査クエリを実行する"
    },
    {
      "id": "D",
      "text": "AWS Glue Data Catalog のリソースポリシーで部門ごとにデータベースレベルのアクセス制御を設定し、Glue ETL ジョブの実行ロールを部門ごとに分離する。Amazon CloudWatch Logs で Glue ジョブのログを集約して監査に使用する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "AWS Lake Formation は、データレイクに対する列レベル・行レベルのきめ細かなアクセス制御（データフィルター）を提供し、IAM ロールと統合してマルチテナント環境でのデータ分離を実現します。部門ごとにアクセス可能なテーブル、列、行を精密に制御でき、単一のデータレイクで3部門のデータ分離が可能です。CloudTrail の組織トレイルにより、Bedrock のモデル呼び出しや SageMaker のジョブ実行を含む全 AI 操作の監査ログを一元管理でき、Athena で監査クエリを効率的に実行できます。A の個別アカウント方式はデータ分離は確実ですが、3部門分のアカウント管理オーバーヘッドが大きく、監査ログもアカウントごとに分散するため一元管理の運用負荷が高くなります。クロスアカウントアクセスポリシーの管理も複雑です。B の S3 プレフィックスベースの制御は Lake Formation ほど精緻なアクセス制御（列・行レベル）が不可能で、S3 データイベントのみの記録では Bedrock や SageMaker の API 操作が監査対象に含まれません。D の Glue Data Catalog のリソースポリシーはデータベースレベルの制御に限定され、列・行レベルの制御はできません。また CloudWatch Logs の Glue ジョブログでは Bedrock や SageMaker の API 操作が記録されず、全 AI 操作の監査には不十分です。（スキル3.2.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。個別アカウント方式はデータ分離は確実であるものの、3部門分のアカウント管理オーバーヘッドとクロスアカウントポリシーの複雑さ、監査ログの分散により、効率的なデータ分離と監査ログ一元管理という要件を最小の運用負荷で満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。S3 プレフィックスベースの制御は列・行レベルのきめ細かな分離ができず、S3 データイベントのみの記録では Bedrock・SageMaker の API 操作が監査対象に含まれないため、全 AI 操作の監査ログ一元管理という要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。Lake Formation の列レベル・行レベルのアクセス制御で精緻なデータ分離を実現し、CloudTrail 組織トレイルで Bedrock・SageMaker を含む全 AI 操作の監査ログを一元管理できるため、データ分離と監査ログ一元管理を直接満たします。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Glue Data Catalog のリソースポリシーはデータベースレベルの制御に限定され列・行レベルの分離ができず、CloudWatch Logs の Glue ジョブログでは Bedrock・SageMaker の API 操作が含まれないため、全 AI 操作の監査という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "AWS Lake Formation",
      "url": "https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html"
    },
    {
      "title": "AWS CloudTrail User Guide",
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"
    }
  ]
});
