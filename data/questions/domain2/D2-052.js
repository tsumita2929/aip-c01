window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-052",
  "domain": 2,
  "task": "2.5",
  "skill": "2.5.4",
  "type": "single",
  "difficulty": "easy",
  "question": "開発チーム（5名）が Python と TypeScript で構築された生成 AI アプリケーションのコードベースを管理しています。最近、コードレビューの工数が増大しており、以下の課題を解決したいと考えています。(1) プルリクエスト時のコード品質の自動チェック、(2) セキュリティ脆弱性（ハードコードされた認証情報、SQL インジェクション等）の自動検出、(3) 開発者の IDE 上でのリアルタイムなコード補完とリファクタリング提案。これらを統一的に提供する AWS のツールとして最も適切なものはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Q Developer を IDE プラグインとして導入してリアルタイムのコード補完とリファクタリング提案を提供し、Q Developer のセキュリティスキャン機能でプルリクエスト時の脆弱性検出を自動化する"
    },
    {
      "id": "B",
      "text": "Amazon CodeGuru Reviewer をリポジトリに統合してプルリクエストのコードレビューを自動化し、別途 SonarQube をセルフホストしてセキュリティスキャンを行い、IDE にはサードパーティのコード補完ツールを導入する"
    },
    {
      "id": "C",
      "text": "AWS CodeBuild のビルドフェーズでカスタム Lint スクリプトを実行してコード品質をチェックし、Snyk の CLI を統合してセキュリティスキャンを行い、IDE にはローカルの Lint プラグインを導入する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock の基盤モデルを使用してプルリクエストの差分をプロンプトで分析するカスタム Lambda 関数を構築し、IDE にはオープンソースのコード補完ツールを導入する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Amazon Q Developer は、IDE プラグインとしてのリアルタイムコード補完・リファクタリング提案と、セキュリティスキャン機能によるプルリクエスト時の脆弱性自動検出を統一的に提供します。Python と TypeScript の両方に対応し、3つの課題すべてを単一のツールで解決できます。（スキル2.5.4）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Amazon Q Developer はコード補完、リファクタリング提案、セキュリティスキャンの3要件を統一的に提供し、全課題を直接満たします。単一のツールで統一されるため、チームの学習コストと管理負荷が最小化されます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。CodeGuru Reviewer + SonarQube + サードパーティツールの組み合わせは各機能を提供可能であるものの、3つの異なるツールの導入・管理が必要であり、統一的に提供する要件を満たしません。SonarQube のセルフホスティングには EC2 インスタンスの管理も追加されます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。CodeBuild + Snyk + ローカル Lint の構成はCI/CD パイプラインでの品質チェックが可能であるものの、カスタム Lint スクリプトの保守、Snyk のライセンス管理、IDE プラグインの個別設定が必要であり、統一的なソリューションの要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Bedrock + カスタム Lambda の構成は柔軟な分析が可能であるものの、プルリクエスト分析の Lambda 関数を独自開発する必要があり、検出精度の保証やセキュリティルールの更新も手動管理となります。IDE のコード補完も別ツールが必要で、統一的な提供の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Q Developer",
      "url": "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html"
    }
  ]
});
