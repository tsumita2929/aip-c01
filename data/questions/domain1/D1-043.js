window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-043",
  "domain": 1,
  "task": "1.5",
  "skill": "1.5.2",
  "type": "multiple",
  "difficulty": "medium",
  "question": "ある多国籍企業が、Amazon Bedrock ナレッジベースを使用して、日本語と英語の製品マニュアル（合計10万件）を対象とした社内RAGシステムを構築しています。要件として、(1) 日本語と英語の両方のクエリで正確なセマンティック検索が可能であること、(2) OpenSearch Serverless のストレージコストとベクトル検索のレイテンシーを最小化するためにベクトルの次元数を最適化できること、が求められています。これらの要件を満たすために有効な構成を2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Titan Text Embeddings V2 を埋め込みモデルとして使用する。V2 は100以上の言語（日本語・英語を含む）に対応しており、多言語のクエリとドキュメントを同一のベクトル空間にマッピングして言語横断的なセマンティック検索を実現する"
    },
    {
      "id": "B",
      "text": "Amazon Titan Multimodal Embeddings G1 を埋め込みモデルとして使用する。マルチモーダルモデルはテキストと画像の両方を処理でき、製品マニュアルの図表も含めた統合的なベクトル検索を実現する"
    },
    {
      "id": "C",
      "text": "Titan Text Embeddings V2 の出力次元数を256に設定して、ベクトルストレージサイズを1024次元の約4分の1に削減する。ストレージコストとメモリ使用量が低減し、HNSW インデックスの検索速度も向上する"
    },
    {
      "id": "D",
      "text": "Cohere Embed Multilingual v3 を埋め込みモデルとして使用し、日本語と英語のドキュメントをそれぞれ別々のナレッジベースに分離してインジェストする。クエリの言語を検出して適切なナレッジベースにルーティングする Lambda 関数を構築する"
    },
    {
      "id": "E",
      "text": "Amazon Titan Text Embeddings V2 で埋め込みを生成した後、SageMaker Processing ジョブで次元削減（PCA）を適用してベクトルの次元数を任意の値に圧縮し、OpenSearch Serverless に格納する"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "A: Titan Text Embeddings V2 は100以上の言語に対応した多言語埋め込みモデルで、日本語と英語のテキストを同一のベクトル空間にマッピングします。言語ごとに別々のインデックスを用意する必要がなく、言語横断的なセマンティック検索が可能です。C: Titan Text Embeddings V2 はAPIパラメータで出力次元数を256/512/1024から選択でき、256次元を選択すると1024次元と比較してストレージサイズが約4分の1になり、HNSW インデックスのメモリ使用量と検索計算量も削減されます。Titan Multimodal Embeddings G1（B）はテキストと画像の同時埋め込みに対応していますが、テキスト専用の埋め込みモデルと比較して同じ次元数でのテキストセマンティック検索の精度が劣り、また次元数の選択肢が異なるため、テキスト検索に特化した要件では Text Embeddings V2 の方が適切です。Cohere Embed + 言語別ナレッジベース（D）は多言語対応が可能ですが、言語検出とルーティングの Lambda 関数の開発・保守が必要で、Titan V2 の言語横断検索と比較して運用負荷が大幅に増加します。SageMaker PCA（E）はカスタムの次元削減は可能ですが、PCA は埋め込みモデルが学習した意味的構造を破壊する可能性があり、Titan V2 のネイティブな次元数選択機能（モデル内部で最適化済み）と比較して検索精度が劣化するリスクがあります。（スキル1.5.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Titan Text Embeddings V2 は100以上の言語に対応し、日本語・英語を同一ベクトル空間にマッピングする多言語セマンティック検索の要件を直接満たします。言語ごとの分離が不要で運用もシンプルです。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Titan Multimodal Embeddings G1 はテキストと画像の同時埋め込みに対応していますが、テキスト専用の検索精度では Text Embeddings V2 に劣り、テキストのみのセマンティック検索に特化した要件には Text Embeddings V2 の方が適切です。また次元数の最適化オプションも異なります。"
    },
    "C": {
      "correct": true,
      "text": "正解です。Titan Text Embeddings V2 の256次元出力設定により、ストレージサイズを1024次元の約4分の1に削減でき、HNSW インデックスのメモリ使用量と検索レイテンシーの最適化要件を直接満たします。この次元数はモデル内部で最適化されており、精度劣化が最小限です。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Cohere Embed Multilingual は多言語対応ですが、言語ごとにナレッジベースを分離して Lambda で言語検出・ルーティングを行うアーキテクチャは、Titan V2 の言語横断検索（単一ナレッジベースで対応可能）と比較して運用負荷が大幅に増加し、次元数最適化の要件にも対応していません。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。SageMaker Processing ジョブでの PCA 次元削減は任意の次元数への圧縮が可能ですが、PCA はモデルが学習した意味的構造を破壊するリスクがあります。Titan V2 のネイティブ次元数選択はモデル内部で最適化されており、外部のPCAと比較して検索精度の劣化が少なく運用負荷も低くなります。"
    }
  },
  "references": [
    {
      "title": "Amazon Titan Text Embeddings",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/titan-embedding-models.html"
    }
  ]
});
