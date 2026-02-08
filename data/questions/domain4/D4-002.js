window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-002",
  "domain": 4,
  "task": "4.1",
  "skill": "4.1.2",
  "type": "single",
  "difficulty": "medium",
  "question": "あるスタートアップが Amazon Bedrock を利用して3つのユースケースに対応する GenAI アプリケーションを構築しています。ユースケースは (1) 社内 FAQ チャットボット（1日あたり約5,000件の定型的な質問応答）、(2) 契約書ドキュメントの要約（1日あたり約200件、各10ページ程度）、(3) コードレビュー支援（1日あたり約50件、複雑なロジック分析が必要）の3種類です。月間予算は3,000 USDに制限されており、各ユースケースで必要な品質を維持しながらコストを最適化する必要があります。最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "すべてのユースケースで Claude 3 Opus を使用し、Amazon CloudWatch でトークン使用量をモニタリングして予算超過時にアラートを発報する"
    },
    {
      "id": "B",
      "text": "すべてのユースケースで Claude 3 Haiku を使用し、品質不足が報告された場合にプロンプトエンジニアリングで対応する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のインテリジェントプロンプトルーティングを活用し、リクエストの複雑さに応じて自動的に適切なモデル（Haiku/Sonnet/Opus）にルーティングする。CloudWatch でモデル別のトークン使用量とコストを追跡する"
    },
    {
      "id": "D",
      "text": "Amazon SageMaker 上にオープンソースの Llama モデルをデプロイし、3つのユースケースすべてを単一エンドポイントで処理する。Auto Scaling で負荷に応じてインスタンス数を調整する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解はCです。Amazon Bedrock のインテリジェントプロンプトルーティングは、受信したプロンプトの複雑さを自動的に評価し、適切なモデルにルーティングします。定型的な FAQ は軽量モデル（Haiku）で低コストかつ高速に処理し、契約書要約は中位モデル（Sonnet）で、複雑なコードレビューは高性能モデル（Opus）で処理することで、予算内で各ユースケースの品質要件を満たせます。CloudWatch によるモデル別コスト追跡で予算管理も可能です。Aは全リクエストに Opus を使うため、1日5,000件の FAQ だけで予算を大幅に超過します。Bは全リクエストに Haiku を使うため、複雑なコードレビューで品質が不足します。DはSageMaker のインスタンス運用コスト（GPU インスタンスの常時稼働）が発生し、3,000 USD の予算制約を満たすのが困難です。",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。全ユースケースで Opus を使用すると、1日5,000件の定型FAQ だけで月間のトークンコストが予算を大幅に超過します。CloudWatch によるアラートは超過を通知するだけで、コスト最適化にはなりません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。全ユースケースで Haiku を使用するとコストは最小化できますが、複雑なコードレビューや長文契約書の要約では品質が不足し、プロンプトエンジニアリングだけでは Haiku のモデル性能の限界を補えません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。インテリジェントプロンプトルーティングにより、リクエストの複雑さに応じた自動的なモデル選択が可能になり、予算制約内でのコスト最適化と各ユースケースの品質維持を両立できます。手動でのルーティングロジック実装が不要なため運用負荷も最小です。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。SageMaker 上での Llama モデルのデプロイは、GPU インスタンスの常時稼働コスト、モデル管理、スケーリング設定の運用負荷が発生します。3,000 USD の月間予算制約の下では、インフラコストだけで予算の大部分を消費する可能性があります。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock インテリジェントプロンプトルーティング",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/intelligent-prompt-routing.html"
    },
    {
      "title": "Amazon Bedrock の料金",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-pricing.html"
    }
  ]
});
