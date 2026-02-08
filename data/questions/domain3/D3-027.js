window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-027",
  "domain": 3,
  "task": "3.3",
  "skill": "3.3.1",
  "type": "single",
  "difficulty": "easy",
  "question": "あるスタートアップ企業が、Amazon Bedrock を使用した複数のAIアプリケーション（チャットボット、文書要約、コード生成）を運用しています。各アプリケーションで使用されているモデル、バージョン、環境（開発/ステージング/本番）を一元的に把握し、コスト配分レポートの自動生成とリソースのグループ管理を実現する必要があります。最も運用負荷の低い方法はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "AWS リソースにメタデータタグ（Application、Environment、ModelVersion、Owner 等）を付与し、AWS Resource Groups でタグベースのリソースグループを作成する。AWS Cost Explorer のコスト配分タグを有効化して、アプリケーション別・環境別のコストレポートを自動生成する"
    },
    {
      "id": "B",
      "text": "Amazon DynamoDB にリソース管理台帳テーブルを作成し、Lambda 関数で Bedrock リソースの変更を検知して台帳を自動更新する。DynamoDB のデータを Amazon QuickSight に接続してコスト配分ダッシュボードを作成する"
    },
    {
      "id": "C",
      "text": "AWS CloudFormation のスタックごとにアプリケーションを管理し、テンプレートの Metadata セクションにモデルバージョンや環境情報を記載する。CloudFormation のドリフト検出でリソースの変更を監視する"
    },
    {
      "id": "D",
      "text": "AWS Systems Manager の Parameter Store にアプリケーション別のリソース情報を JSON 形式で保存し、Systems Manager Inventory でリソース一覧を収集する。EventBridge のスケジュールルールで定期的にインベントリレポートを S3 に出力する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "AWS リソースへのメタデータタグ付けは、リソース管理の最も基本的かつ運用負荷の低い方法です。タグを使用することで、アプリケーション名、環境、モデルバージョン、オーナーなどの情報をリソースに直接紐づけて管理できます。Resource Groups によるタグベースのグループ管理と、Cost Explorer のコスト配分タグによる自動レポート生成はいずれもマネージド機能であり、カスタム実装が不要です。B の DynamoDB + Lambda + QuickSight の組み合わせはリソース管理とダッシュボード作成が可能ですが、Lambda 関数と DynamoDB テーブルの開発・保守が必要で、タグベースの管理と比較して運用負荷が高くなります。C の CloudFormation スタック管理はIaC のベストプラクティスですが、Metadata セクションの記載は実行中のリソースからの直接参照が困難であり、コスト配分レポートの自動生成機能も提供しません。D の Systems Manager Parameter Store + Inventory の組み合わせはリソース情報の管理に使用できますが、Parameter Store への JSON 保存はカスタム実装が必要で、Inventory は EC2 インスタンスのソフトウェア情報収集が主目的であり、Bedrock リソースの管理には適していません。（スキル3.3.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。AWS タグ + Resource Groups + Cost Explorer コスト配分タグの組み合わせにより、リソースのグループ管理とコスト配分レポートの自動生成をマネージド機能のみで実現でき、一元的な把握とコスト配分を最も低い運用負荷で直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。DynamoDB + Lambda + QuickSight でリソース管理とダッシュボードを実現できるものの、Lambda 関数と DynamoDB テーブルの開発・保守が必要であり、タグベースのマネージド機能と比較して運用負荷が高く、最も運用負荷の低い方法という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。CloudFormation のスタック管理は IaC として有用であるものの、Metadata セクションは実行中リソースからの直接参照が困難で、コスト配分レポートの自動生成機能も提供せず、コスト配分レポートの自動生成という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Systems Manager Parameter Store + Inventory はリソース情報の管理に使用できるものの、Parameter Store への JSON 保存はカスタム実装が必要で、Inventory は EC2 インスタンス向けのため Bedrock リソース管理には不適切であり、最も運用負荷の低い方法という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "AWS Resource Tagging Best Practices",
      "url": "https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html"
    },
    {
      "title": "AWS Resource Groups",
      "url": "https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html"
    }
  ]
});
