window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-019",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.1",
  "type": "single",
  "difficulty": "hard",
  "question": "ある金融機関が、Amazon Bedrock を使用した融資審査支援 AI システムを構築しています。規制要件として、(1) AI モデルへのリクエスト・レスポンスがインターネットを経由しないこと、(2) 特定の部門の IAM ロールのみが Bedrock の特定モデル（Claude 3 Sonnet）を呼び出せること、(3) 融資審査に関連しないモデル操作（モデルのカスタマイズ、ナレッジベースの作成等）を部門レベルで禁止すること、(4) すべての API 操作を監査証跡として記録すること、の4つが求められています。これらの要件を最小限の運用負荷で満たすアーキテクチャとして、最も適切なものはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock 用の VPC エンドポイント（PrivateLink）を作成し、エンドポイントポリシーで bedrock:InvokeModel アクションと対象モデル ARN のみを許可する。IAM ロールのポリシーで bedrock:InvokeModel のみを許可し Condition キーで VPC エンドポイント経由のアクセスに限定する。AWS CloudTrail で Bedrock の全 API 操作を記録する"
    },
    {
      "id": "B",
      "text": "AWS Direct Connect でオンプレミスから AWS に専用接続し、NAT Gateway 経由で Bedrock のパブリックエンドポイントにアクセスする。IAM ロールの信頼ポリシーで送信元 IP アドレスを制限し、サービスコントロールポリシー（SCP）でモデルカスタマイズ操作を拒否する。CloudWatch Logs でアクセスログを記録する"
    },
    {
      "id": "C",
      "text": "Amazon API Gateway のプライベート API を作成して Bedrock へのプロキシとし、API Gateway のリソースポリシーでアクセス元 VPC を制限する。Lambda オーソライザーで IAM ロールの検証とモデル呼び出し権限のチェックを実装する。API Gateway のアクセスログで監査証跡を記録する"
    },
    {
      "id": "D",
      "text": "VPC エンドポイント（PrivateLink）を作成し、セキュリティグループで特定のサブネットからのアクセスのみを許可する。AWS Organizations の SCP で Bedrock の全アクションを許可し、IAM ロールでモデル呼び出し権限を付与する。AWS Config で Bedrock リソースの設定変更を記録する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "A は4つの要件すべてを最小限の運用負荷で満たします。VPC エンドポイント（PrivateLink）によりトラフィックが AWS ネットワーク内にとどまりインターネット非経由の要件を満たします。エンドポイントポリシーで bedrock:InvokeModel と対象モデル ARN のみを許可することでエンドポイントレベルで操作を制限し、IAM ロールのポリシーでも同様の制限と VPC エンドポイント条件キー（aws:sourceVpce）を組み合わせることで、特定ロールによる特定モデルの呼び出しのみを許可し、モデルカスタマイズ等の不要な操作を禁止できます。CloudTrail で全 API 操作の監査証跡を記録します。B の Direct Connect + NAT Gateway 経由はパブリックエンドポイントへのアクセスであり、トラフィックがインターネットを経由する可能性があります。また IP アドレスベースの制限は VPC エンドポイントポリシーほど精密ではなく、CloudWatch Logs は API 操作の監査証跡として CloudTrail ほど包括的ではありません。C の API Gateway プロキシ方式は Lambda オーソライザーの開発・管理が必要で運用負荷が高く、API Gateway から Bedrock への通信がプライベートであることを保証するには追加の VPC エンドポイント設定が必要です。D はセキュリティグループによるサブネット制限と SCP で全アクションを許可する構成ですが、SCP で全アクションを許可してしまうとモデルカスタマイズ禁止の要件を満たしません。また AWS Config はリソース設定変更の記録であり、API 操作の監査証跡には CloudTrail が適切です。（スキル3.2.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。VPC エンドポイント（PrivateLink）によるプライベート接続、エンドポイントポリシーと IAM ポリシーの組み合わせによる精密なアクセス制御、CloudTrail による監査証跡の記録により、4つの要件すべてを最小の運用負荷で直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Direct Connect + NAT Gateway 経由はパブリックエンドポイントへのアクセスとなりインターネット非経由の要件を確実に満たせず、IP アドレスベースの制限はエンドポイントポリシーほど精密ではなく、CloudWatch Logs は API 操作の監査証跡として不十分です。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。API Gateway プロキシと Lambda オーソライザーは開発・管理の運用負荷が高く、API Gateway から Bedrock への通信のプライベート性確保に追加設定が必要であり、最小限の運用負荷という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。SCP で Bedrock の全アクションを許可する構成ではモデルカスタマイズ禁止の要件を満たさず、AWS Config はリソース設定変更の記録であり API 操作の監査証跡としては不十分です。"
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
    },
    {
      "title": "AWS CloudTrail User Guide",
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"
    }
  ]
});
