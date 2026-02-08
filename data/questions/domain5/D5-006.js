window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-006",
  "domain": 5,
  "task": "5.1",
  "skill": "5.1.6",
  "type": "single",
  "difficulty": "medium",
  "question": "あるメディア企業が RAG システムの検索品質をテストしています。Amazon OpenSearch Service をベクトルストアとして使用し、Amazon Bedrock の埋め込みモデルでドキュメントをベクトル化しています。テスト中に、ユーザーの質問に対して意味的に関連するドキュメントは取得できているものの、検索レイテンシーが目標値の200ミリ秒を大幅に超過していることが判明しました。検索品質を維持しつつレイテンシーを改善するために最も効果的なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "埋め込みモデルをより大きな次元数のモデルに変更して、検索精度を向上させる"
    },
    {
      "id": "B",
      "text": "OpenSearch Service のインスタンスタイプをストレージ最適化インスタンスに変更する"
    },
    {
      "id": "C",
      "text": "検索結果の上位k件の値を大幅に増やして、より多くの候補から最適な結果を選択する"
    },
    {
      "id": "D",
      "text": "OpenSearch Service のベクトルインデックスで HNSW アルゴリズムの ef_search パラメータを調整し、近似最近傍探索の精度とレイテンシーのトレードオフを最適化する"
    }
  ],
  "correctAnswers": [
    "D"
  ],
  "explanation": "正解はDです。HNSW（Hierarchical Navigable Small World）アルゴリズムの ef_search パラメータは、検索時に探索するノード数を制御します。この値を適切に調整することで、検索品質（再現率）とレイテンシーのトレードオフを最適化できます。値を下げるとレイテンシーは改善しますが、ある程度の品質は維持できるため、要件に合わせた最適なバランスを見つけることが可能です。Aのより大きな次元数のモデルへの変更は、計算コストとレイテンシーをさらに増加させる可能性が高く、レイテンシー改善には逆効果です。Bのストレージ最適化インスタンスはベクトル検索のパフォーマンスには最適ではなく、コンピューティング最適化インスタンスの方が適切です。Cのk値の増加は、検索および後続処理のレイテンシーをさらに悪化させます。（スキル5.1.6）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。より大きな次元数のモデルへの変更は検索精度の向上が期待できるものの、計算コストとレイテンシーをさらに増加させる可能性が高く、レイテンシー改善という要件に反します。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。ストレージ最適化インスタンスはデータ保存には適しているものの、ベクトル検索のパフォーマンスには最適ではありません。レイテンシー改善にはコンピューティング最適化インスタンスの方が適切です。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。検索結果の上位 k 件の値を増やすと候補は増えるものの、検索および後続処理のレイテンシーがさらに悪化します。レイテンシー改善の要件に反します。"
    },
    "D": {
      "correct": true,
      "text": "正解です。HNSW アルゴリズムの ef_search パラメータの調整は、検索品質の維持とレイテンシー改善の両要件を直接満たします。特に精度とレイテンシーのトレードオフを最小の運用負荷で最適化できます。"
    }
  },
  "references": [
    {
      "title": "Amazon OpenSearch Service k-NN プラグイン",
      "url": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/knn.html"
    },
    {
      "title": "Amazon Bedrock ナレッジベースのベクトルストア",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html"
    }
  ]
});
