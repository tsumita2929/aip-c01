window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-005",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.4",
  "type": "single",
  "difficulty": "medium",
  "question": "ある SaaS 企業が Amazon Bedrock を使用したカスタマーサポートチャットボットを運用しています。問い合わせの80%は「パスワードリセット方法」「料金プラン確認」などの定型的な質問で、残り20%は複雑な技術的トラブルシューティングです。現在すべてのリクエストを Claude 3.5 Sonnet で処理していますが、月間の推論コストが予算を大幅に超過しています。回答品質を維持しつつコストを削減するために最も適切なアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "すべてのリクエストを Claude 3 Haiku に切り替え、プロンプトエンジニアリングで品質を維持する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のインテリジェントプロンプトルーターを使用して、クエリの複雑さに基づき定型質問は Claude 3 Haiku に、複雑な質問は Claude 3.5 Sonnet に自動ルーティングする"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のプロビジョンドスループットを購入して、トークンあたりの単価を下げる"
    },
    {
      "id": "D",
      "text": "Amazon Lex でルールベースのチャットボットを構築し、すべての問い合わせをインテントマッチングで処理する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解は B です。Amazon Bedrock のインテリジェントプロンプトルーターは、クエリの複雑さを分析して適切なモデルに自動ルーティングするマネージド機能です。定型質問（80%）を低コストの Haiku に、複雑な質問（20%）を高性能の Sonnet にルーティングすることで、品質を維持しつつ大幅なコスト削減が可能です。A はすべてを Haiku に切り替えると複雑な技術的質問の回答品質が低下します。C のプロビジョンドスループットは安定したスループット確保が目的であり、トラフィックパターンに基づくコスト最適化には直接寄与しません。D の Amazon Lex はルールベースのインテントマッチングであり、複雑な技術的トラブルシューティングには生成AI の柔軟性が必要なため品質が低下します。（スキル2.1.4）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Claude 3 Haiku への全面切り替えはコスト削減に効果があるものの、複雑な技術的トラブルシューティング（20%）の回答品質が低下し、回答品質の維持の要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。インテリジェントプロンプトルーターによるクエリ複雑さベースの自動ルーティングは、コスト削減と回答品質維持の両方を直接満たします。定型質問の80%を低コストモデルで処理することで大幅なコスト削減を実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。プロビジョンドスループットは一貫したスループット確保に有効であるものの、問い合わせの複雑さに基づくモデル使い分けによるコスト最適化には対応せず、根本的なコスト削減の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Amazon Lex のルールベースチャットボットは定型質問の処理に効果的であるものの、複雑な技術的トラブルシューティングにはインテントの事前定義が困難で、生成AIの柔軟な推論による回答品質の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock model access",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html"
    },
    {
      "title": "Amazon Bedrock inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    }
  ]
});
