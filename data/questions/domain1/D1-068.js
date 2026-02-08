window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-068",
  "domain": 1,
  "task": "1.4",
  "skill": "1.4.1",
  "type": "single",
  "difficulty": "hard",
  "question": "ある法律事務所が、過去20年分の判例データベース（約50万件）を活用した RAG ベースの法的調査支援システムを構築しています。判例データは定期的に追加・更新され、検索精度と応答品質の継続的な改善が必要です。要件として、(1) 判例文書の埋め込みベクトル生成に SageMaker エンドポイントでホストする専用の埋め込みモデルを使用すること、(2) ベクトルストアとして Amazon OpenSearch Service のベクトルエンジンを使用すること、(3) Amazon Bedrock の基盤モデルで回答を生成すること、(4) 新規判例の追加時にベクトルインデックスを自動更新する仕組みを構築することが求められています。このアーキテクチャを最も効率的に実現するアプローチはどれですか？",
  "options": [
    { "id": "A", "text": "Bedrock Knowledge Bases を使用し、データソースとして S3 を指定し、Bedrock の埋め込みモデルと OpenSearch Serverless をベクトルストアとして構成する" },
    { "id": "B", "text": "SageMaker エンドポイントの埋め込みモデル、OpenSearch Service のベクトルエンジン、Bedrock の FM を組み合わせ、S3 イベント通知と Lambda でインデックス更新パイプラインを構築する" },
    { "id": "C", "text": "Amazon Kendra でドキュメントインデックスを作成し、Bedrock の FM と統合してリトリーブ・アンド・ジェネレーション パイプラインを構築する" },
    { "id": "D", "text": "Bedrock Knowledge Bases を使用し、カスタム埋め込みモデルの代わりに Bedrock のマネージド埋め込みモデルを使用して OpenSearch Serverless と統合する" }
  ],
  "correctAnswers": ["B"],
  "explanation": "要件では SageMaker エンドポイントの専用埋め込みモデルと OpenSearch Service（Serverless ではなく）のベクトルエンジンを明示的に指定しています。S3 イベント通知と Lambda を組み合わせたパイプラインにより、新規判例追加時のベクトルインデックス自動更新も実現できます。Bedrock Knowledge Bases（A, D）は Bedrock のマネージド埋め込みモデルと OpenSearch Serverless を使用するため、SageMaker エンドポイントの専用モデルと OpenSearch Service という要件を満たしません。Kendra（C）はドキュメント検索に優れていますが、カスタム埋め込みモデルの使用や OpenSearch Service のベクトルエンジン指定という要件に対応できません。（スキル1.4.1）",
  "optionExplanations": {
    "A": { "correct": false, "text": "不正解です。Bedrock Knowledge Bases は Bedrock のマネージド埋め込みモデルを使用し、OpenSearch Serverless と統合するため、SageMaker エンドポイントの専用埋め込みモデルと OpenSearch Service という明示的な要件を満たしません。" },
    "B": { "correct": true, "text": "正解です。SageMaker エンドポイントの埋め込みモデル、OpenSearch Service のベクトルエンジン、Bedrock FM、S3 イベント + Lambda による自動更新パイプラインの組み合わせが全要件を直接満たします。特にカスタム埋め込みモデルと特定のベクトルストアを指定する要件に対応できます。" },
    "C": { "correct": false, "text": "不正解です。Amazon Kendra はマネージド検索サービスとして優れていますが、SageMaker の専用埋め込みモデルの使用や OpenSearch Service のベクトルエンジンという具体的な技術要件に対応できません。" },
    "D": { "correct": false, "text": "不正解です。Bedrock Knowledge Bases のマネージド埋め込みモデルを使用するため、SageMaker エンドポイントで専用の埋め込みモデルをホストするという要件を満たしません。また OpenSearch Serverless であり OpenSearch Service の指定とも異なります。" }
  },
  "references": [
    { "title": "Amazon OpenSearch Service Vector Engine", "url": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/knn.html" },
    { "title": "Amazon Bedrock Knowledge Bases", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html" }
  ]
});
