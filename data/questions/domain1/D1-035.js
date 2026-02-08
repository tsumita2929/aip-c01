window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-035",
  "domain": 1,
  "task": "1.4",
  "skill": "1.4.3",
  "type": "multiple",
  "difficulty": "medium",
  "question": "ある金融機関が、5つの部門（リテール、法人、投資、リスク管理、コンプライアンス）で共有する大規模RAGシステムを Amazon Bedrock ナレッジベースと OpenSearch Serverless で構築しています。各部門のドキュメント数は5万〜20万件で合計50万件を超えます。要件として、(1) 各部門のデータが他部門の検索クエリに影響を与えないパフォーマンス分離、(2) 部門ごとのアクセス制御（コンプライアンス部門のデータはリテール部門から参照不可）、(3) 検索レイテンシーを100ms以内に維持すること、が求められています。これらの要件を満たすために有効な方法を2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "部門ごとに個別の OpenSearch Serverless ベクトル検索コレクションを作成し、各コレクションにデータアクセスポリシーでIAMロールベースの部門別アクセス制御を設定する。各コレクションは独立した OCU でスケーリングされ、特定部門の負荷増加が他部門に影響しない"
    },
    {
      "id": "B",
      "text": "すべての部門のデータを1つの OpenSearch Serverless コレクション内の単一インデックスに格納し、各ドキュメントに department フィールドを追加してクエリ時に filter 句でフィルタリングする。OpenSearch のドキュメントレベルセキュリティ（DLS）で部門間のアクセスを制御する"
    },
    {
      "id": "C",
      "text": "HNSW インデックスの ef_search パラメータを現在のデフォルト値から段階的に調整し、各部門のユースケースに応じた検索精度と速度のバランスを最適化する。recall 90%以上を維持しつつ100ms以内のレイテンシーを達成する値に設定する"
    },
    {
      "id": "D",
      "text": "OpenSearch Serverless の代わりに Amazon Kendra Enterprise Edition を使用し、Kendra のアクセス制御リスト（ACL）で部門ごとの文書アクセスを管理する。Kendra のマネージドインデックスにより運用負荷を削減する"
    },
    {
      "id": "E",
      "text": "部門ごとに独立した Bedrock ナレッジベースを作成し、各ナレッジベースに異なる埋め込みモデルを割り当てて部門固有の用語に最適化する。アプリケーション層でユーザーの部門を判定し、対応するナレッジベースにルーティングする"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "A: 部門ごとの OpenSearch Serverless コレクション作成により、各コレクションが独立した OCU で動作するため、特定部門の検索負荷増加が他部門のレイテンシーに影響しません（パフォーマンス分離）。データアクセスポリシーでIAMロールベースのアクセス制御を設定でき、コンプライアンス部門のデータを他部門から参照不可にできます。C: HNSW の ef_search パラメータはベクトル検索時に探索するノード数を制御し、値の最適化により recall を維持しつつ検索レイテンシーを削減できます。50万件規模のデータセットでは適切な ef_search 値の設定が100ms以内のレイテンシー達成に重要です。単一インデックス + フィルタリング（B）は50万件規模では filter 句によるドキュメントスキャンのオーバーヘッドが大きく、部門間のパフォーマンス分離ができません。ある部門への大量クエリが共有 OCU のリソースを消費し、他部門のレイテンシーに影響します。また、OpenSearch Serverless はドキュメントレベルセキュリティ（DLS）をサポートしていません。Kendra Enterprise（D）はACLベースのアクセス制御が可能ですが、Bedrock ナレッジベースのベクトルストアとして直接統合できず、ベクトル検索パラメータの細かな最適化もできないため、100ms以内のレイテンシー制御が困難です。部門ごとの異なる埋め込みモデル（E）は、ナレッジベース間でベクトル空間が異なるため部門横断検索が不可能になります。また、部門固有の用語最適化にはファインチューニングが必要で、Bedrock の埋め込みモデルはファインチューニングに対応していません。（スキル1.4.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。部門ごとの OpenSearch Serverless コレクションは、独立した OCU によるパフォーマンス分離とデータアクセスポリシーによる部門別アクセス制御の要件を直接満たします。特定部門の負荷増加が他部門に影響しない設計です。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。50万件規模の単一インデックスでは filter 句のオーバーヘッドが大きく、共有 OCU のリソース競合により部門間のパフォーマンス分離ができません。また、OpenSearch Serverless はドキュメントレベルセキュリティ（DLS）をサポートしておらず、アクセス制御要件を満たせません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。HNSW の ef_search パラメータ最適化により、recall を維持しつつ検索レイテンシーを100ms以内に制御できます。50万件規模のベクトルストアでは、このパラメータの設定がレイテンシー要件の達成に直接影響します。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Kendra はACLベースのアクセス制御が可能ですが、Bedrock ナレッジベースのベクトルストアとして直接統合できません。また、HNSWパラメータのようなベクトル検索の細かな最適化ができず、100ms以内のレイテンシー制御が困難です。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。部門ごとに異なる埋め込みモデルを割り当てるとベクトル空間が異なるため部門横断検索が不可能になります。また、Bedrock の埋め込みモデルはファインチューニングに対応しておらず、部門固有の用語最適化は実現できません。"
    }
  },
  "references": [
    {
      "title": "Amazon OpenSearch Serverless コレクション",
      "url": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html"
    },
    {
      "title": "Amazon OpenSearch Service k-NN 検索",
      "url": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/knn.html"
    }
  ]
});
