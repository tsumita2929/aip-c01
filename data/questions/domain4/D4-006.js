window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-006",
  "domain": 4,
  "task": "4.1",
  "skill": "4.1.2",
  "type": "single",
  "difficulty": "easy",
  "question": "ある企業が社内ヘルプデスク向けに AI アシスタントを構築しています。質問は「パスワードリセット手順」「VPN 接続方法」「経費精算の流れ」など定型的な内容で、社内 Wiki の既存ドキュメントに回答が含まれています。月間約20,000件の質問が見込まれ、回答品質は十分に確保しつつ推論コストを最小限に抑え、運用チームの負担も最小限にする必要があります。最も適切なアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Claude 3 Opus を使用し、社内 Wiki の全文をシステムプロンプトに含めて回答を生成する。Amazon CloudWatch でレイテンシーを監視する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock Knowledge Bases で社内 Wiki ドキュメントをインデックス化し、Claude 3 Haiku を推論モデルとして RAG 構成で質問に回答する。Amazon S3 にドキュメントを格納し、Amazon OpenSearch Serverless をベクトルストアとして使用する"
    },
    {
      "id": "C",
      "text": "Amazon Titan Text Premier をファインチューニングして社内用語に特化させ、Amazon SageMaker のリアルタイムエンドポイントにデプロイする。Auto Scaling で負荷に応じてスケールする"
    },
    {
      "id": "D",
      "text": "Amazon Lex でルールベースのチャットボットを構築し、定型質問のインテント・スロットを手動で定義する。対応できない質問は Amazon Connect 経由でオペレーターに転送する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。Amazon Bedrock Knowledge Bases と Claude 3 Haiku による RAG 構成は、この要件に最適です。Haiku は定型的な質問応答に十分な品質を提供しながら推論コストが最も低く、Knowledge Bases がドキュメントのインデックス化と検索を自動管理するため運用負荷も最小です。S3 + OpenSearch Serverless のマネージド構成により、インフラ管理も不要です。Aは Opus の高コストに加え、全文をプロンプトに含めると1リクエストあたりのトークン数が膨大になり、月間20,000件でコストが大幅に超過します。Cはファインチューニングと SageMaker エンドポイントの運用コスト・管理負荷が高く、定型 FAQ 対応には過剰です。DはLex のルールベースアプローチでは質問の表現の多様性に対応が困難であり、インテント・スロットの手動定義と継続的な更新が運用負荷となります。",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Claude 3 Opus は定型的な FAQ 対応には過剰な性能であり、社内 Wiki 全文をシステムプロンプトに含めると1リクエストあたりのトークン数が膨大になります。月間20,000件では推論コスト最小化の要件を大幅に逸脱します。"
    },
    "B": {
      "correct": true,
      "text": "正解です。Bedrock Knowledge Bases + Haiku の RAG 構成は、推論コスト最小化・回答品質確保・運用負荷最小化のすべてを満たします。Knowledge Bases がドキュメントのチャンク化・埋め込み・検索を自動管理し、Haiku が低コストで十分な品質の回答を生成します。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Titan Text Premier のファインチューニングは社内用語への適応は可能ですが、ファインチューニングのデータ準備・学習コスト、SageMaker エンドポイントの常時稼働コストが発生し、定型 FAQ 対応には過剰な投資と運用負荷になります。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Amazon Lex のルールベースアプローチは構造化された対話には有効ですが、自然言語の質問表現の多様性に対応するにはインテント・スロットの手動定義と継続的な更新が必要であり、運用チームの負担最小化の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock のナレッジベース",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
    },
    {
      "title": "Amazon Bedrock の料金",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-pricing.html"
    }
  ]
});
