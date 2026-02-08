window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-010",
  "domain": 4,
  "task": "4.2",
  "skill": "4.2.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある法律事務所が Amazon Bedrock と Amazon OpenSearch Service を使用した RAG（Retrieval-Augmented Generation）ベースの法的文書検索システムを運用しています。弁護士から「検索結果の関連性が低い」「古い判例が上位に表示される」というフィードバックが寄せられています。検索パフォーマンスと関連性を改善するために最も効果的なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "OpenSearch のシャード数を増やしてクラスターのスループットを向上させる"
    },
    {
      "id": "B",
      "text": "ハイブリッド検索とカスタムスコアリングを実装し、セマンティック類似度・キーワード一致度・文書の新しさを組み合わせたランキングを行う"
    },
    {
      "id": "C",
      "text": "検索結果の返却件数を100件に増やして、より多くの候補をモデルに渡す"
    },
    {
      "id": "D",
      "text": "OpenSearch インスタンスタイプをより大きなものにアップグレードする"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。ハイブリッド検索とカスタムスコアリングにより、ベクトル検索（セマンティック類似度）とキーワード検索の結果を組み合わせ、さらに文書の新しさ（recency）をスコアリングファクターに追加することで、関連性の高い最新の文書を上位に表示できます。これは検索結果の品質を直接改善するアプローチです。Aのシャード数増加はスループット向上に寄与しますが、検索結果の関連性は改善しません。Cの結果件数増加は、関連性の低い文書も含めて大量にモデルに渡すことになり、コスト増加と品質低下を招きます。Dのインスタンスアップグレードは処理能力の問題であり、検索品質の改善にはなりません。（スキル: 4.2.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。OpenSearch のシャード数増加はクラスターのスループット向上には寄与するものの、検索結果の関連性やランキング品質は改善せず、検索パフォーマンス改善の要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。ハイブリッド検索とカスタムスコアリングは、検索関連性の向上と最新文書の優先表示の両方を直接満たします。特にセマンティック類似度・キーワード一致度・文書の新しさを組み合わせたランキングを最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。検索結果の返却件数を100件に増やすとリコール率は向上するものの、関連性の低い文書も含めて大量にモデルに渡すことになり、検索関連性向上の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。インスタンスタイプのアップグレードは処理能力の向上には寄与するものの、検索結果の関連性やランキング品質の改善にはならず、検索パフォーマンス改善の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon OpenSearch Service のハイブリッド検索",
      "url": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/hybrid-search.html"
    },
    {
      "title": "Amazon Bedrock のナレッジベース",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
    }
  ]
});
