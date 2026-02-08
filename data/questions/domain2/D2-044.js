window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-044",
  "domain": 2,
  "task": "2.5",
  "skill": "2.5.2",
  "type": "single",
  "difficulty": "medium",
  "question": "スタートアップ企業が Amazon Bedrock を使用した生成 AI チャットボットのフルスタック Web アプリケーションを2週間以内に MVP として立ち上げたいと考えています。要件は、React フロントエンド、ユーザー認証（ソーシャルログイン対応）、チャット履歴の永続化、Bedrock API へのセキュアなバックエンド呼び出し、Git プッシュによる自動デプロイです。開発チームは2名で、インフラ管理の経験が限られています。これらの要件を最小の開発工数で実現するアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "AWS Amplify を使用して React フロントエンドのホスティングと CI/CD を構成し、Amplify Auth（Cognito）でソーシャルログインを実装し、Amplify Data（AppSync + DynamoDB）でチャット履歴を永続化し、Lambda リゾルバーから Bedrock API を呼び出す"
    },
    {
      "id": "B",
      "text": "Amazon ECS Fargate でコンテナ化した Node.js バックエンドをデプロイし、ALB でフロントエンドとバックエンドをルーティングし、Cognito で認証を実装し、RDS PostgreSQL でチャット履歴を保存し、CodePipeline で CI/CD を構築する"
    },
    {
      "id": "C",
      "text": "S3 + CloudFront で React フロントエンドを配信し、API Gateway + Lambda でバックエンドを構築し、Cognito で認証を実装し、DynamoDB でチャット履歴を保存し、GitHub Actions で CI/CD パイプラインを構成する"
    },
    {
      "id": "D",
      "text": "AWS CDK でインフラを定義し、EC2 インスタンスに Next.js アプリケーションをデプロイし、ALB で負荷分散し、Cognito で認証を実装し、Aurora Serverless でチャット履歴を保存する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。AWS Amplify は React フロントエンドのホスティング、認証（ソーシャルログイン対応の Cognito 統合）、データベース（AppSync + DynamoDB）、Git プッシュによる自動デプロイを統合的に提供します。インフラの個別構築が不要で、2名のチームが2週間以内に MVP を立ち上げるのに最適です。（スキル2.5.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。AWS Amplify はフロントエンドホスティング、認証、データベース、CI/CD、バックエンド統合の全要件を統合的に提供し、最小の開発工数で MVP の立ち上げを直接満たします。インフラ管理の経験が限られたチームでも迅速に構築できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。ECS Fargate + ALB + RDS + CodePipeline の構成は本番運用に適したアーキテクチャであるものの、コンテナイメージの構築、ALB の設定、RDS のスキーマ設計、CodePipeline の構成など個別のインフラ設定が多く、2名のチームが2週間以内に MVP を立ち上げる要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。S3 + CloudFront + API Gateway + Lambda + Cognito + DynamoDB の構成はサーバーレスで運用負荷が低いものの、各サービスの個別設定（CloudFront ディストリビューション、API Gateway のリソース定義、Lambda 関数の権限設定等）が必要であり、Amplify と比較して開発工数が大幅に増加します。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。CDK + EC2 + ALB + Aurora Serverless の構成はインフラのコード化が可能であるものの、CDK のスキル習得、EC2 インスタンスの管理（パッチ適用、セキュリティグループ設定）が必要であり、インフラ管理経験が限られたチームには不適切です。開発工数も最小化の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "AWS Amplify",
      "url": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html"
    },
    {
      "title": "Amazon Bedrock inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    }
  ]
});
