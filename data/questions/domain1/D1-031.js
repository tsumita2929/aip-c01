window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-031",
  "domain": 1,
  "task": "1.4",
  "skill": "1.4.1",
  "type": "single",
  "difficulty": "easy",
  "question": "ある企業が、Amazon Bedrock のナレッジベース機能を使用して RAG システムを構築しています。ベクトルストアの選定にあたり、サーバーレスでインフラ管理不要、かつ Bedrock ナレッジベースの作成時にベクトルストアを自動作成できるオプションを希望しています。最も適切なベクトルストアはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon OpenSearch Serverless のベクトル検索コレクション"
    },
    {
      "id": "B",
      "text": "Amazon Aurora PostgreSQL の pgvector 拡張"
    },
    {
      "id": "C",
      "text": "Amazon OpenSearch Service のマネージドクラスター"
    },
    {
      "id": "D",
      "text": "Amazon Neptune のグラフベクトル検索"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Amazon OpenSearch Serverless は、Bedrock ナレッジベースの作成時にベクトル検索コレクションを自動作成でき、サーバーレスでインフラ管理が不要です。Aurora PostgreSQL pgvector（B）も Bedrock ナレッジベースと統合可能ですが、Aurora クラスターのプロビジョニングが必要でサーバーレスの要件を完全には満たしません（Aurora Serverless v2 を使用する場合でもデータベースの作成と pgvector 拡張の設定が必要）。OpenSearch Service のマネージドクラスター（C）は Bedrock ナレッジベースのベクトルストアとして直接サポートされておらず、OpenSearch Serverless が推奨されます。Neptune Analytics は Bedrock ナレッジベースの GraphRAG 用として統合可能ですが、ナレッジベース作成時のベクトルストア自動作成には対応しておらず、サーバーレスでの自動構成という要件を満たしません。（スキル1.4.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。OpenSearch Serverless は、サーバーレスでのインフラ管理不要とナレッジベース作成時の自動作成の要件を直接満たします。特にベクトル検索コレクションの自動構成を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Aurora PostgreSQL pgvector は Bedrock と統合可能な点はあるものの、クラスターのプロビジョニングと pgvector 拡張の設定が必要で、サーバーレスとインフラ管理不要の要件を完全に満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。OpenSearch Service のマネージドクラスターは検索機能を提供できる点はあるものの、Bedrock ナレッジベースのベクトルストアとして直接サポートされておらず、自動作成の要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Neptune Analytics は Bedrock ナレッジベースの GraphRAG 用として統合可能な点はあるものの、ナレッジベース作成時のベクトルストア自動作成には対応しておらず、サーバーレスでの自動構成要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ナレッジベースのベクトルストア",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html"
    },
    {
      "title": "Amazon OpenSearch Serverless",
      "url": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless.html"
    }
  ]
});
