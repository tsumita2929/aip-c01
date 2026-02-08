window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-032",
  "domain": 1,
  "task": "1.4",
  "skill": "1.4.1",
  "type": "multiple",
  "difficulty": "medium",
  "question": "ある製造業の企業が、Amazon Bedrock ナレッジベースを使用して、10年分・50万件の技術マニュアルと品質管理レポートを対象とした社内RAGシステムを構築しています。要件として、(1) サーバーの管理やクラスターのプロビジョニングを行わずにベクトル検索基盤を運用すること、(2) 部門コードや文書分類などのメタデータによるフィルタリング検索が可能であること、の2点が求められています。これらの要件を満たすベクトルストアの構成を2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "Amazon OpenSearch Serverless のベクトル検索コレクションを作成し、Bedrock ナレッジベースのベクトルストアとして統合する。OCU の自動スケーリングによりサーバー管理が不要で、メタデータフィールドをインデックスに追加してフィルタリング検索を実行する"
    },
    {
      "id": "B",
      "text": "Amazon DynamoDB テーブルをパーティションキー設計で構築し、Global Secondary Index でメタデータ検索を実現する。DynamoDB Streams で変更をキャプチャし、Lambda 経由で Bedrock にベクトルを送信する"
    },
    {
      "id": "C",
      "text": "Amazon Aurora PostgreSQL Serverless v2 で pgvector 拡張を有効化し、Bedrock ナレッジベースのベクトルストアとして統合する。Serverless v2 の自動スケーリングでキャパシティ管理が不要になり、SQL のWHERE句でメタデータフィルタリングが可能"
    },
    {
      "id": "D",
      "text": "Amazon Neptune のグラフデータベースを使用し、ドキュメント間の関係性をグラフ構造でモデル化する。SPARQL クエリでメタデータ検索を実行し、Lambda 関数経由で Bedrock と統合する"
    },
    {
      "id": "E",
      "text": "Amazon Redshift Serverless にベクトルデータを格納し、SQL ベースの分析クエリでメタデータフィルタリングを実行する。Redshift ML と連携して埋め込みの生成と検索を一元管理する"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "A: OpenSearch Serverless はサーバーレスでベクトル検索コレクションを提供し、Bedrock ナレッジベースとネイティブに統合されています。OCU の自動スケーリングによりクラスター管理が不要で、インデックスのメタデータフィールドによるフィルタリング検索も可能です。C: Aurora PostgreSQL Serverless v2 の pgvector 拡張も Bedrock ナレッジベースとネイティブに統合されており、Serverless v2 により手動のキャパシティプロビジョニングが不要です。SQL のWHERE句で部門コードや文書分類によるフィルタリングが容易に実現できます。DynamoDB（B）はキーバリューストアとして高スループットですが、ベクトル類似度検索（コサイン類似度やHNSW等）をネイティブにサポートしておらず、Bedrock ナレッジベースのベクトルストアとして統合できません。Neptune（D）はグラフ構造のトラバーサルに最適化されていますが、高次元ベクトルの類似度検索向けには設計されておらず、Bedrock ナレッジベースとのネイティブ統合もありません。Redshift Serverless（E）は大規模データの分析ワークロードに最適化されていますが、リアルタイムのベクトル近傍検索のレイテンシー要件を満たせず、Bedrock ナレッジベースのベクトルストアとしてもサポートされていません。（スキル1.4.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。OpenSearch Serverless のベクトル検索コレクションは、Bedrock ナレッジベースとネイティブに統合され、OCU 自動スケーリングによりサーバー管理不要の要件を満たします。インデックスのメタデータフィールドによるフィルタリング検索も可能で、両方の要件を直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。DynamoDB はキーバリュー操作やGSIによるメタデータ検索は高速ですが、ベクトル類似度検索（コサイン類似度、HNSW等のANNアルゴリズム）をネイティブにサポートしておらず、Bedrock ナレッジベースのベクトルストアとして統合できないため、ベクトル検索基盤の要件を満たせません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。Aurora PostgreSQL Serverless v2 の pgvector 拡張は、Bedrock ナレッジベースとネイティブに統合され、Serverless v2 の自動スケーリングでキャパシティ管理不要の要件を満たします。SQL のWHERE句でメタデータフィルタリングが可能で、両方の要件を直接満たします。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Neptune はグラフデータベースとしてエンティティ間の関係性分析に優れていますが、高次元ベクトルの近傍検索向けには設計されておらず、Bedrock ナレッジベースのベクトルストアとしてのネイティブ統合もないため、サーバー管理不要のベクトル検索基盤という要件を満たせません。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。Redshift Serverless は大規模なOLAP分析ワークロードに最適化されていますが、ミリ秒単位のリアルタイムベクトル近傍検索には適しておらず、Bedrock ナレッジベースのベクトルストアとしてもサポートされていないため、ベクトル検索基盤の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ナレッジベースのベクトルストア",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html"
    },
    {
      "title": "Aurora PostgreSQL pgvector",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Extensions.html"
    }
  ]
});
