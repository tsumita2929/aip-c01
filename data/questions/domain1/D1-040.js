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
      "text": "S3 オブジェクトタグ → C: S3 のライフサイクルポリシーやアクセス制御と連動させるストレージ管理機能。"
    },
    "2": {
      "correct": true,
      "text": "ベクトルストアのフィルタリング属性 → B: 検索クエリ時に特定の属性値でドキュメントを絞り込むベクトルストア側の機能。"
    },
    "3": {
      "correct": true,
      "text": "Bedrock ナレッジベースのメタデータファイル → A: .metadata.json で定義され、データソース同期時にメタデータを自動的にベクトルストアに反映。"
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
