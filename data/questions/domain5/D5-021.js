window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-021",
  "domain": 5,
  "task": "5.2",
  "skill": "5.2.3",
  "type": "single",
  "difficulty": "easy",
  "question": "あるカスタマーサポート企業が、Amazon Bedrock の Claude モデルを使用した問い合わせ対応チャットボットを開発しています。開発チーム5名がプロンプトの改良を並行して進めていますが、現在プロンプトの変更履歴が管理されておらず、以下の課題が発生しています。\n\n・どのバージョンのプロンプトが最も高い顧客満足度スコアを出したかが不明\n・チームメンバー間でプロンプトの共有と比較ができていない\n・プロンプトの変更が本番環境の応答品質に与える影響を事前にテストできていない\n\nこれらの課題を最も運用負荷が低い方法で解決するアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "プロンプトテキストを AWS Lambda の環境変数に格納し、バージョンごとに Lambda 関数のバージョンを発行する。各バージョンを個別に呼び出して応答結果を手動で比較する"
    },
    {
      "id": "B",
      "text": "Amazon DynamoDB テーブルにプロンプトテキストとバージョン番号を保存し、TTL を設定して古いバージョンを自動削除する。AWS Lambda で各バージョンを呼び出して結果を Amazon S3 にエクスポートする"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のプロンプト管理機能でプロンプトのバージョンを作成・管理し、各バージョンを異なるモデルやパラメータ設定でテスト実行して結果を比較する。最良のバージョンをプロンプトフローに統合してデプロイする"
    },
    {
      "id": "D",
      "text": "プロンプトテキストを AWS CodeCommit リポジトリに格納して Git でバージョン管理する。AWS CodePipeline でプロンプト変更のたびに Amazon SageMaker Processing ジョブを実行してカスタム評価スクリプトで品質を検証する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解はCです。Amazon Bedrock のプロンプト管理機能（Prompt Management）は、プロンプトのバージョニング、変数管理、モデル設定の保存を統合的にサポートしています。チームメンバーがコンソールから各バージョンのプロンプトを確認・比較でき、異なるモデルやパラメータ設定でテスト実行して結果を比較できます。最良のバージョンをプロンプトフローに統合することで、本番への影響も最小化できます。AのLambda環境変数によるプロンプト管理は、バージョン発行のたびにLambda関数の設定変更が必要であり、チーム間でのプロンプト比較も手動になるため運用負荷が高くなります。BのDynamoDB + TTLの構成では、TTLにより古いバージョンが自動削除されるため、過去の最良バージョンとの比較ができなくなります。また、テスト実行のためにLambdaでのカスタム統合が必要です。DのCodeCommit + CodePipeline + SageMaker Processing の構成は、バージョン管理とCI/CD統合は実現できますが、カスタム評価スクリプトの開発・保守が必要であり、Bedrock のネイティブ機能と比較して運用負荷が大幅に高くなります。（スキル5.2.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Lambda 環境変数によるプロンプト管理はバージョン発行のたびに関数設定の変更が必要であり、チーム間での共有・比較も手動作業になります。運用負荷の最小化という要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。DynamoDB + TTL の構成では古いバージョンが自動削除されるため、過去の最良バージョンとの比較ができなくなります。また、テスト実行のために Lambda でのカスタム統合が必要であり、運用負荷が増加します。"
    },
    "C": {
      "correct": true,
      "text": "正解です。Amazon Bedrock のプロンプト管理機能は、バージョン管理、チーム間共有、テスト実行と比較、本番デプロイまでを統合的にサポートするマネージド機能であり、3つの課題すべてを最小の運用負荷で解決できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。CodeCommit + CodePipeline + SageMaker Processing の構成はバージョン管理とCI/CD統合を実現できますが、カスタム評価スクリプトの開発・保守が必要であり、Bedrock のネイティブ機能と比較して運用負荷が大幅に高くなります。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock プロンプト管理",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html"
    },
    {
      "title": "Amazon Bedrock プロンプトフロー",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html"
    }
  ]
});
