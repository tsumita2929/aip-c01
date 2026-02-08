window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-046",
  "domain": 2,
  "task": "2.5",
  "skill": "2.5.4",
  "type": "single",
  "difficulty": "easy",
  "question": "金融機関の開発チームが Java で構築された取引処理システムのコードベース（約50万行）をリファクタリングしています。コードの可読性向上、パフォーマンスのボトルネック特定、OWASP Top 10 に基づくセキュリティ脆弱性の検出を同時に行いたいと考えています。チームは IDE（IntelliJ IDEA）上で作業しており、コードを外部サービスにアップロードすることなく、ローカルでのスキャンと改善提案を求めています。最も適切な AWS のツールはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Q Developer を IDE プラグインとして導入し、コードレビュー機能でリファクタリング提案とセキュリティスキャン（Amazon Q Developer セキュリティスキャン）を実行する"
    },
    {
      "id": "B",
      "text": "AWS CodeGuru Reviewer で プルリクエストベースのコードレビューを実行し、CodeGuru Profiler でランタイムのパフォーマンスプロファイリングを行い、Inspector でセキュリティスキャンを実施する"
    },
    {
      "id": "C",
      "text": "Amazon CodeWhisperer のインラインコード補完機能のみを使用し、補完候補からリファクタリングのヒントを得つつ、AWS Config ルールでセキュリティコンプライアンスを確認する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock の基盤モデルに対してコードスニペットをプロンプトとして送信し、リファクタリング提案とセキュリティ脆弱性の分析を依頼し、結果を手動で IDE に反映する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Amazon Q Developer は IntelliJ IDEA を含む主要 IDE にプラグインとして統合され、コードレビュー機能によるリファクタリング提案と、セキュリティスキャン機能による OWASP Top 10 等の脆弱性検出を IDE 上で直接実行できます。コードを外部サービスにアップロードする必要がなく、開発ワークフローに自然に統合されます。（スキル2.5.4）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Amazon Q Developer の IDE プラグインは、リファクタリング提案とセキュリティスキャンの両方を IDE 上で直接実行でき、全要件を満たします。Java コードの分析に対応し、改善提案がインラインで表示されるため開発効率を最大化できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。CodeGuru Reviewer はプルリクエストベースのレビューのためコードリポジトリへのプッシュが必要であり、IDE 上でのローカルスキャンの要件を満たしません。また、CodeGuru Profiler はデプロイ済みアプリケーションのランタイムプロファイリングツールであり、コードベースの静的分析ではありません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。CodeWhisperer は Amazon Q Developer に統合されており、インラインコード補完は開発支援の一部ですが、体系的なリファクタリング提案やセキュリティスキャン機能はコード補完とは別の機能です。また、AWS Config はインフラリソースの設定管理ツールであり、アプリケーションコードのセキュリティスキャンとは無関係です。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Bedrock の基盤モデルへのコードスニペット送信は分析が可能であるものの、50万行のコードベースを手動でスニペット化して送信・結果を反映する作業は非効率です。また、IDE との統合がないためインラインでの改善提案表示の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Q Developer",
      "url": "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html"
    }
  ]
});
