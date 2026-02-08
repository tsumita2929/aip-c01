window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-043",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.1",
  "type": "single",
  "difficulty": "hard",
  "question": "ある製薬会社が、患者の臨床データを使用して Amazon SageMaker でモデルをトレーニングおよびホスティングしています。セキュリティチームから以下の要件が提示されました。(1) トレーニングデータとモデルアーティファクトがインターネット経由で転送されないこと、(2) SageMaker のトレーニングジョブとエンドポイントが VPC 内でのみ通信すること、(3) S3 へのアクセスもインターネットを経由しないこと。これらの要件をすべて満たすために、最も適切なネットワーク構成はどれですか？",
  "options": [
    {
      "id": "A",
      "text": "SageMaker のトレーニングジョブとエンドポイントを VPC 内のプライベートサブネットに配置し、S3 用の VPC エンドポイント（ゲートウェイ型）と SageMaker API 用の VPC エンドポイント（インターフェース型、PrivateLink）を作成する"
    },
    {
      "id": "B",
      "text": "SageMaker のトレーニングジョブとエンドポイントを VPC 内のプライベートサブネットに配置し、NAT ゲートウェイ経由で S3 と SageMaker API にアクセスする"
    },
    {
      "id": "C",
      "text": "SageMaker のトレーニングジョブとエンドポイントをデフォルトの VPC 設定で実行し、S3 バケットポリシーで特定の VPC からのアクセスのみを許可する"
    },
    {
      "id": "D",
      "text": "SageMaker のトレーニングジョブとエンドポイントを VPC 内のパブリックサブネットに配置し、セキュリティグループでインバウンドトラフィックを制限して外部からのアクセスを遮断する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "SageMaker のトレーニングジョブとエンドポイントをプライベートサブネットに配置し、S3 用のゲートウェイ型 VPC エンドポイントと SageMaker API 用のインターフェース型 VPC エンドポイント（PrivateLink）を構成することで、すべての通信が AWS ネットワーク内で完結し、インターネットを経由しません。これにより、3つのセキュリティ要件をすべて満たせます。B の NAT ゲートウェイ経由のアクセスは、トラフィックがインターネットゲートウェイを経由するため、インターネット経由で転送されないという要件を満たしません。C のデフォルト VPC 設定では SageMaker がインターネット経由で通信するため、VPC 内のみの通信という要件を満たしません。D のパブリックサブネット配置はインターネットゲートウェイへのルートを持つため、インターネット経由の通信を完全に排除できず、要件を満たしません。（スキル3.2.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。プライベートサブネット配置と VPC エンドポイント（S3 用ゲートウェイ型 + SageMaker API 用 PrivateLink）の組み合わせは、インターネット非経由・VPC 内通信・S3 へのプライベートアクセスの3要件を直接満たします。特に AWS PrivateLink によりすべての通信が AWS ネットワーク内で完結します。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。NAT ゲートウェイはプライベートサブネットからのインターネットアクセスを可能にするものの、トラフィックがインターネットゲートウェイを経由するため、データがインターネット経由で転送されないという要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。デフォルトの VPC 設定では SageMaker がインターネット経由で通信するため、S3 バケットポリシーで VPC 制限をかけても、SageMaker のトレーニングジョブ自体の通信が VPC 内に限定されず、VPC 内のみの通信という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。パブリックサブネットはインターネットゲートウェイへのルートを持つため、セキュリティグループでインバウンドを制限してもアウトバウンド通信がインターネットを経由する可能性があり、インターネット非経由という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker - VPC でのトレーニングジョブの実行",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html"
    },
    {
      "title": "Amazon SageMaker - VPC エンドポイント（PrivateLink）",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/interface-vpc-endpoint.html"
    },
    {
      "title": "Amazon S3 の VPC エンドポイント",
      "url": "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html"
    }
  ]
});
