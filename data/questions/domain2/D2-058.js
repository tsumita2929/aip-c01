window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-058",
  "domain": 2,
  "task": "2.3",
  "skill": "2.3.2",
  "type": "single",
  "difficulty": "hard",
  "question": "ある医療テクノロジー企業が、SageMaker でホストした医用画像診断支援モデルを外部のパートナー病院システムに REST API として公開する必要があります。以下の要件があります。(1) API キーによる認証とリクエストスロットリングでパートナーごとのアクセスを制御する、(2) リクエスト/レスポンスのペイロード変換（パートナー固有の JSON 形式から SageMaker が受け付ける形式へ）を行う、(3) API のバージョン管理とステージ（dev/staging/prod）の分離を実現する、(4) 運用負荷を最小限に抑える。これらの要件を満たすアーキテクチャとして最も適切なものはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon API Gateway の REST API を作成し、Lambda 関数をバックエンドとしてペイロード変換を行い、Lambda から SageMaker エンドポイントを呼び出す。API キーと使用量プランでアクセス制御し、ステージ機能でバージョン管理する"
    },
    {
      "id": "B",
      "text": "Application Load Balancer（ALB）の前段に WAF を配置し、ALB のターゲットグループとして SageMaker エンドポイントを直接登録する。パートナー認証は WAF の IP ベースルールで制御する"
    },
    {
      "id": "C",
      "text": "Amazon CloudFront ディストリビューションを作成し、オリジンとして SageMaker エンドポイントを設定する。CloudFront Functions でペイロード変換を行い、署名付き URL でアクセス制御する"
    },
    {
      "id": "D",
      "text": "Amazon EC2 上に Nginx リバースプロキシを構築し、カスタム認証モジュールで API キー検証を行い、プロキシ設定でペイロード変換と SageMaker エンドポイントへのルーティングを実装する"
    }
  ],
  "correctAnswers": ["A"],
  "explanation": "正解は A です。API Gateway + Lambda + SageMaker の統合アーキテクチャは、全ての要件をマネージドサービスの組み合わせで実現します。API Gateway は API キー・使用量プラン・ステージ管理をネイティブに提供し、Lambda でペイロード変換を柔軟に行えます。B の ALB は API キー認証やステージ管理機能がありません。C の CloudFront Functions はペイロード変換の処理能力に制限があり、ステージ管理機能もありません。D の EC2 ベースは運用負荷が最も高くなります。（スキル2.3.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。API Gateway は API キー認証、使用量プランによるスロットリング、ステージ管理（dev/staging/prod）をネイティブ機能として提供し、Lambda によるペイロード変換も柔軟に実装できます。全てマネージドサービスで構成されるため運用負荷を最小限に抑えられます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。ALB + WAF はロードバランシングと IP ベースのアクセス制御が可能であるものの、API キーによるパートナーごとの認証、リクエストスロットリング、ペイロード変換、API のステージ管理機能を提供しません。結果として、これらの機能をカスタム実装する必要があり運用負荷が増加します。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。CloudFront はコンテンツ配信の高速化に優れているものの、CloudFront Functions は実行時間やメモリの制限が厳しく、複雑なペイロード変換には不適です。また、API のステージ管理やパートナーごとのスロットリング機能がなく、署名付き URL は API キーベースの認証とは異なる仕組みです。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。EC2 上の Nginx リバースプロキシは全ての機能をカスタム実装できる柔軟性はあるものの、EC2 インスタンスの管理、Nginx の設定・パッチ適用、認証モジュールの開発・保守が必要であり、運用負荷を最小限に抑える要件を全く満たしません。"
    }
  },
  "references": [
    {
      "title": "Call an Amazon SageMaker endpoint using Amazon API Gateway and AWS Lambda",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model-api-gateway.html"
    },
    {
      "title": "Amazon API Gateway REST API",
      "url": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-rest-api.html"
    }
  ]
});
