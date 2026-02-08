window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-013",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある金融機関が、Amazon Bedrock を使用した社内文書分析システムを構築しています。規制要件により、AIモデルへのリクエストとレスポンスがインターネットを経由しないことが必須です。また、モデルへのアクセスは特定のIAMロールに限定する必要があります。これらの要件を満たすアーキテクチャとして、最も適切なものはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "VPC 内の AWS Lambda 関数から Amazon Bedrock API を呼び出し、Lambda 関数の実行ロールの IAM ポリシーで特定のモデルへのアクセスのみを許可する"
    },
    {
      "id": "B",
      "text": "AWS Direct Connect を使用してオンプレミスから AWS に専用接続し、Direct Connect のパブリック仮想インターフェース（Public VIF）経由で Bedrock にアクセスする"
    },
    {
      "id": "C",
      "text": "Amazon API Gateway のプライベート API を作成し、API Gateway から Bedrock のパブリックエンドポイントにプロキシリクエストを転送する"
    },
    {
      "id": "D",
      "text": "VPC エンドポイント（PrivateLink）を使用して Amazon Bedrock に接続し、エンドポイントポリシーで許可するアクションとリソースを制限し、IAMポリシーで特定のロールからのアクセスのみを許可する"
    }
  ],
  "correctAnswers": [
    "D"
  ],
  "explanation": "VPC エンドポイント（AWS PrivateLink）を使用すると、トラフィックが AWS ネットワーク内にとどまり、インターネットを経由せずに Amazon Bedrock にアクセスできます。エンドポイントポリシーで許可するアクション（bedrock:InvokeModel 等）とリソース（特定モデル ARN）を制限し、IAM ポリシーと組み合わせてアクセスを特定のロールに限定できます。A の Lambda を VPC に配置しても、VPC エンドポイントを設定しなければ、Bedrock への通信はインターネット経由（NAT Gateway 経由）となるため、インターネット非経由の要件を満たしません。IAM ポリシーだけではネットワーク経路の制御はできません。B の Direct Connect のパブリック VIF は AWS パブリックサービスのエンドポイントにアクセスするためのもので、トラフィックは AWS のバックボーンを通りますが、パブリックエンドポイントへのアクセスであり、VPC エンドポイントのようなエンドポイントポリシーによるきめ細かなアクセス制御はできません。C の API Gateway プライベート API は VPC 内からのアクセスに限定できますが、API Gateway から Bedrock への通信がパブリックエンドポイント経由であればインターネットを経由するため、エンドツーエンドのプライベート通信にはなりません。（スキル3.2.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Lambda を VPC に配置して IAM ポリシーでアクセスを制限できるものの、VPC エンドポイントなしでは Bedrock への通信はインターネット経由（NAT Gateway 経由）となるため、インターネット非経由という要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Direct Connect のパブリック VIF はパブリックエンドポイントへのアクセスであるものの、エンドポイントポリシーによるきめ細かなアクセス制御ができず、特定ロールへのアクセス制限という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。API Gateway プライベート API は VPC 内からのアクセスに限定できるものの、API Gateway から Bedrock パブリックエンドポイントへの通信はインターネットを経由するため、エンドツーエンドのプライベート通信にならずインターネット非経由という要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。VPC エンドポイント（PrivateLink）で AWS ネットワーク内にトラフィックがとどまり、エンドポイントポリシーと IAM ポリシーの組み合わせにより、インターネット非経由と特定ロールへのアクセス制限を直接満たします。特にプライベート通信を最小の運用負荷で実現できます。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock VPC Endpoint (PrivateLink)",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html"
    },
    {
      "title": "Amazon Bedrock Security",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/security.html"
    }
  ]
});
