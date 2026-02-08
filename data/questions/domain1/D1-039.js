window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-039",
  "domain": 1,
  "task": "1.4",
  "skill": "1.4.1",
  "type": "single",
  "difficulty": "easy",
  "question": "ある開発者が、Amazon Bedrock ナレッジベースを初めて作成しています。作成プロセスで、ベクトルストアの構成方法について判断する必要があります。開発速度を優先し、ベクトルストアのインフラ管理を最小化したい場合、最も適切なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "ナレッジベース作成時に「クイック作成」オプションを選択し、Bedrock に OpenSearch Serverless のベクトル検索コレクションを自動作成させる"
    },
    {
      "id": "B",
      "text": "事前に Aurora PostgreSQL クラスターを作成し pgvector 拡張を有効化して、ナレッジベースのベクトルストアとして指定する"
    },
    {
      "id": "C",
      "text": "事前に OpenSearch Serverless のベクトル検索コレクションを手動で作成し、インデックスのマッピング設定を行ってからナレッジベースに指定する"
    },
    {
      "id": "D",
      "text": "Pinecone のアカウントを作成してインデックスを構成し、Bedrock ナレッジベースのベクトルストアとして外部接続を設定する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Bedrock ナレッジベースの「クイック作成」オプションを使用すると、OpenSearch Serverless のベクトル検索コレクションが自動的に作成・設定されるため、ベクトルストアのインフラ管理が不要で最も開発速度が速くなります。Aurora PostgreSQL（B）は事前にクラスターの作成と pgvector 拡張の有効化が必要で、セットアップ工数がかかります。OpenSearch Serverless の手動作成（C）はコレクションとインデックスの手動設定が必要で、自動作成より工数が増加します。Pinecone（D）は外部サービスのアカウント作成と接続設定が必要で、セットアップが最も複雑です。（スキル1.4.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。クイック作成オプションによる OpenSearch Serverless の自動作成は、開発速度の優先とインフラ管理の最小化の要件を直接満たします。特にベクトルストアの自動構成を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Aurora PostgreSQL は Bedrock と統合可能な点はあるものの、事前にクラスター作成と pgvector 拡張の有効化が必要で、開発速度の優先要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。OpenSearch Serverless の手動作成は柔軟な設定が可能な点はあるものの、コレクションとインデックスの手動設定が必要で、自動作成より工数が増加し開発速度の要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Pinecone は高性能なベクトルデータベースである点はあるものの、外部サービスのアカウント作成と接続設定が必要で、セットアップが最も複雑であり開発速度の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ナレッジベースの作成",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-create.html"
    }
  ]
});
