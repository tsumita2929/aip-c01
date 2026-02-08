window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-040",
  "domain": 1,
  "task": "1.4",
  "skill": "1.4.2",
  "type": "matching",
  "difficulty": "hard",
  "question": "以下のメタデータ活用パターンと、それぞれの最適なユースケースを正しく組み合わせてください。",
  "prompts": [
    {
      "id": "1",
      "text": "S3 オブジェクトタグによるメタデータ管理"
    },
    {
      "id": "2",
      "text": "ベクトルストアのフィルタリング属性"
    },
    {
      "id": "3",
      "text": "Bedrock ナレッジベースのメタデータファイル"
    }
  ],
  "answers": [
    {
      "id": "A",
      "text": "データソースの同期時に自動的にメタデータをベクトルストアに反映する"
    },
    {
      "id": "B",
      "text": "検索クエリ時に特定の属性値でドキュメントを絞り込む"
    },
    {
      "id": "C",
      "text": "S3 のライフサイクルポリシーやアクセス制御と連動させる"
    }
  ],
  "correctMatches": {
    "1": "C",
    "2": "B",
    "3": "A"
  },
  "explanation": "S3 オブジェクトタグ（1-C）は、S3 のライフサイクルポリシーやアクセス制御との連携に最適で、AWS のストレージ管理機能と連動します。これは Bedrock ナレッジベースのメタデータファイル（.metadata.json）とは異なり、S3 自体の機能です。ベクトルストアのフィルタリング属性（2-B）は、検索クエリ時にベクトルストア側で特定の属性値によるフィルタリングを行います。Bedrock ナレッジベースのメタデータファイル（3-A）は、各ドキュメントに対応する .metadata.json ファイルで定義され、データソース同期時にメタデータを自動的にベクトルストアに反映します。（スキル1.4.2）",
  "optionExplanations": {
    "1": {
      "correct": true,
      "text": "S3 オブジェクトタグ → C: S3 オブジェクトタグは、S3 のライフサイクルポリシーやバケットポリシーによるアクセス制御と連動するストレージ管理機能です。タグに基づいてオブジェクトの保存期間やストレージクラスの移行を自動化できますが、Bedrock ナレッジベースの検索時フィルタリングには使用されません。"
    },
    "2": {
      "correct": true,
      "text": "ベクトルストアのフィルタリング属性 → B: ベクトルストア（OpenSearch Serverless や Aurora PostgreSQL）に格納されたメタデータフィールドを使用して、検索クエリ時に特定の属性値でドキュメントを絞り込みます。Retrieve API や RetrieveAndGenerate API のフィルター条件として指定し、ベクトル類似度検索と同時にメタデータによる絞り込みを実行します。"
    },
    "3": {
      "correct": true,
      "text": "Bedrock ナレッジベースのメタデータファイル → A: 各ドキュメントに対応する .metadata.json ファイルで属性を定義し、データソースの同期時にメタデータが自動的にベクトルストアのフィルタリング属性として反映されます。S3 上のドキュメントと同じプレフィックスに配置するだけで、手動でベクトルストアにメタデータを登録する必要がありません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ナレッジベースのメタデータ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html"
    },
    {
      "title": "Amazon S3 オブジェクトタグ",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html"
    }
  ]
});
