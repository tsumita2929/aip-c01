window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-044",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業の ML プラットフォームチームが、Amazon SageMaker 環境のセキュリティを強化しています。要件は以下の通りです。(1) データサイエンティストが SageMaker ノートブックインスタンスからトレーニングジョブを起動できること、(2) トレーニングジョブが使用できるインスタンスタイプを ml.m5.xlarge と ml.m5.2xlarge に制限すること、(3) データサイエンティストがエンドポイントを直接作成・削除できないようにすること。これらの要件を IAM ポリシーで実現するために、最も適切なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "sagemaker:CreateTrainingJob を Allow し、Condition で sagemaker:InstanceTypes を ml.m5.xlarge と ml.m5.2xlarge に制限する。sagemaker:CreateEndpoint と sagemaker:DeleteEndpoint を明示的に Deny する"
    },
    {
      "id": "B",
      "text": "AmazonSageMakerFullAccess マネージドポリシーをアタッチし、SCP（サービスコントロールポリシー）でインスタンスタイプとエンドポイント操作を制限する"
    },
    {
      "id": "C",
      "text": "sagemaker:* を Allow し、NotAction で sagemaker:CreateEndpoint と sagemaker:DeleteEndpoint を除外してエンドポイント操作を制限する"
    },
    {
      "id": "D",
      "text": "sagemaker:CreateTrainingJob を Allow し、リソースベースポリシーでインスタンスタイプを制限する。エンドポイント操作については SageMaker のサービスロールで制御する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "IAM ポリシーで sagemaker:CreateTrainingJob を Allow し、Condition 要素の sagemaker:InstanceTypes 条件キーで使用可能なインスタンスタイプを ml.m5.xlarge と ml.m5.2xlarge に限定することで、インスタンスタイプの制限を実現します。さらに sagemaker:CreateEndpoint と sagemaker:DeleteEndpoint を明示的に Deny することで、エンドポイントの直接操作を禁止します。これにより3つの要件すべてを最小権限の原則に従って満たせます。B の AmazonSageMakerFullAccess は過剰な権限を付与するため最小権限の原則に反し、SCP はアカウント全体に適用されるため個別のデータサイエンティストへの細かい制御には適しません。C の NotAction は指定したアクション以外を許可する構文であり、sagemaker:* を Allow した上で NotAction を使用すると意図しない権限が付与される可能性があります。D の SageMaker にはリソースベースポリシーがなく、サービスロールはユーザーの IAM 権限とは異なる目的で使用されます。（スキル3.2.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。sagemaker:CreateTrainingJob の Allow と sagemaker:InstanceTypes 条件キーによるインスタンスタイプ制限、および sagemaker:CreateEndpoint/DeleteEndpoint の明示的 Deny は、3つの要件を最小権限の原則に従って直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。AmazonSageMakerFullAccess は SageMaker の全操作を許可する過剰な権限であり、最小権限の原則に反します。また SCP はアカウントまたは OU 全体に適用されるため、個別ユーザーへの細かい制御という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。sagemaker:* を Allow した上で NotAction を使用する構成は、意図しない権限が付与される可能性があり、インスタンスタイプの制限も実現できないため、要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。SageMaker にはリソースベースポリシーの概念がなく、サービスロールはトレーニングジョブが AWS リソースにアクセスするための権限であり、ユーザーの操作制限とは目的が異なるため、要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker - IAM 条件キー",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/security-iam.html"
    },
    {
      "title": "Amazon SageMaker - Identity-based Policy Examples",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html"
    }
  ]
});
