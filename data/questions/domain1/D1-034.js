window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-034",
  "domain": 1,
  "task": "1.4",
  "skill": "1.4.3",
  "type": "single",
  "difficulty": "hard",
  "question": "ある大企業が、100万件以上の技術文書を含むベクトルストアを Amazon OpenSearch Serverless で運用し、Amazon Bedrock ナレッジベースと統合した RAG システムを提供しています。最近、ユーザーから検索応答が遅いという報告が増えており、CloudWatch メトリクスで検索レイテンシーが平均250msとなっていることが判明しました。要件は100ms以内のレイテンシーで、かつ検索の再現率（recall）を90%以上に維持する必要があります。最も効果的な改善アプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "OpenSearch Serverless の検索用 OCU（OpenSearch Compute Unit）の最大値を引き上げてコンピュートリソースを拡充し、HNSW インデックスの ef_search パラメータを現在の値から段階的に下げて、recall 90%以上を維持しつつレイテンシーを最小化する"
    },
    {
      "id": "B",
      "text": "OpenSearch Serverless から Amazon Aurora PostgreSQL Serverless v2 + pgvector に移行し、IVFFlat インデックスを使用してベクトル検索を実行する。Aurora の自動スケーリングでコンピュートリソースを動的に拡張する"
    },
    {
      "id": "C",
      "text": "埋め込みモデルの出力次元数を現在の1024から256に削減して、ベクトル検索のインデックスサイズとメモリ使用量を抑え、検索計算量を削減する。全ドキュメントを再ベクトル化してインデックスを再構築する"
    },
    {
      "id": "D",
      "text": "OpenSearch Serverless のインデクシング用 OCU を増やしてドキュメントの取り込み速度を向上させ、インデックスの更新頻度を上げることで検索時のセグメントマージによるレイテンシーを削減する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "検索用 OCU の増加により、検索クエリに利用可能なコンピュートリソースが拡充され、同時検索のスループットとレイテンシーが改善されます。HNSW の ef_search パラメータは検索時に探索するノード数を制御し、値を下げるとレイテンシーが改善しますが recall が低下するトレードオフがあります。段階的に調整して recall 90%を維持しつつ100ms以内を達成するのが最適です。Aurora PostgreSQL + pgvector（B）は100万件規模のベクトル検索では OpenSearch Serverless の HNSW と比較して検索パフォーマンスが劣る傾向があり、既存システムからの移行コスト・リスクも高く、IVFFlat は HNSW より recall が低くなりやすいため、recall 90%維持の要件が困難です。埋め込み次元数の削減（C）は検索速度を改善できますが、1024次元から256次元への大幅な削減は意味的表現力の損失が大きく recall の低下を招きやすく、さらに全50万件の再ベクトル化に膨大な時間とコストがかかります。インデクシング用 OCU の増加（D）はドキュメントの取り込み速度に影響しますが、検索クエリのレイテンシーに直接的な効果はありません。検索レイテンシーの改善には検索用 OCU の調整が必要です。（スキル1.4.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。検索用 OCU の拡充による検索リソースの増加と、ef_search パラメータの段階的最適化により、recall 90%以上を維持しつつ100ms以内のレイテンシーを達成できます。OpenSearch Serverless のネイティブ機能で設定変更のみで改善でき、運用負荷も最小限です。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Aurora PostgreSQL + pgvector は Bedrock ナレッジベースと統合可能ですが、100万件規模では OpenSearch の HNSW インデックスと比較して検索パフォーマンスが劣る傾向があります。また IVFFlat は HNSW より recall が低くなりやすく、既存システムからの移行にもコストとリスクが伴います。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。埋め込み次元数の1024から256への大幅な削減は、ベクトルの意味的表現力が大きく損なわれ recall の低下を招きやすく、90%以上の recall 維持要件と矛盾します。さらに全ドキュメントの再ベクトル化に膨大な時間とコストが必要で、即時の改善策としては不適切です。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。インデクシング用 OCU はドキュメントの取り込み（インジェスト）処理に使用されるリソースであり、検索クエリの実行時レイテンシーには直接的な効果がありません。検索レイテンシーを改善するには検索用 OCU の調整が必要であり、用途の異なるリソースタイプを指定しています。"
    }
  },
  "references": [
    {
      "title": "Amazon OpenSearch Serverless",
      "url": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless.html"
    },
    {
      "title": "Amazon OpenSearch Service k-NN 検索",
      "url": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/knn.html"
    }
  ]
});
