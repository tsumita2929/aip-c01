window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-070",
  "domain": 1,
  "task": "1.5",
  "skill": "1.5.2",
  "type": "single",
  "difficulty": "medium",
  "question": "あるテクノロジー企業が、社内ナレッジベースの意味検索システムを構築しています。ナレッジベースには日本語と英語の技術文書が混在しており、約100万件のドキュメントがあります。要件として、(1) 日本語と英語の両方の文書に対して高品質な埋め込みベクトルを生成できること、(2) SageMaker エンドポイントでホストして推論レイテンシを100ミリ秒以内に抑えること、(3) 埋め込みモデルの選定からデプロイまでを迅速に行えることが求められています。この要件を最も適切に満たすアプローチはどれですか？",
  "options": [
    { "id": "A", "text": "SageMaker JumpStart から多言語対応の埋め込みモデル（例: Cohere Embed Multilingual）を選択し、リアルタイムエンドポイントにデプロイする" },
    { "id": "B", "text": "SageMaker でカスタム埋め込みモデルを一からトレーニングし、日本語と英語のコーパスで最適化する" },
    { "id": "C", "text": "Amazon Bedrock の Titan Embeddings モデルを API 経由で呼び出し、埋め込みベクトルを生成する" },
    { "id": "D", "text": "Amazon Comprehend のカスタム分類機能を使用して文書のカテゴリ分類を行い、分類結果をベクトルとして使用する" }
  ],
  "correctAnswers": ["A"],
  "explanation": "SageMaker JumpStart から多言語対応の埋め込みモデルを選択することで、日英両言語の高品質なベクトル生成、SageMaker エンドポイントでのホスト（レイテンシ制御可能）、迅速なデプロイを実現できます。カスタムモデルのトレーニング（B）は高品質になる可能性がありますが、トレーニングに時間とコストがかかり迅速なデプロイ要件を満たしません。Bedrock Titan Embeddings（C）は多言語対応ですが、API 経由のため SageMaker エンドポイントでのホスト要件を満たさず、レイテンシの細かい制御もできません。Comprehend のカスタム分類（D）はカテゴリ分類であり、意味検索に必要な稠密ベクトル（Dense Embedding）の生成とは目的が根本的に異なります。（スキル1.5.2）",
  "optionExplanations": {
    "A": { "correct": true, "text": "正解です。SageMaker JumpStart の多言語対応埋め込みモデルは日英両言語の高品質なベクトル生成を直接満たし、ワンクリックデプロイにより迅速な立ち上げが可能です。特に SageMaker エンドポイントでのホストにより推論レイテンシの制御も実現できます。" },
    "B": { "correct": false, "text": "不正解です。カスタム埋め込みモデルの一からのトレーニングは品質最適化の可能性はあるものの、大量の学習データ準備とトレーニング時間が必要であり、迅速なデプロイという要件を満たしません。" },
    "C": { "correct": false, "text": "不正解です。Bedrock Titan Embeddings は多言語対応の埋め込みモデルとして優れていますが、Bedrock API 経由での呼び出しとなるため、SageMaker エンドポイントでのホストという明示的な要件を満たしません。" },
    "D": { "correct": false, "text": "不正解です。Amazon Comprehend のカスタム分類は文書をカテゴリに分類する機能であり、意味検索に必要な稠密ベクトル（Dense Embedding）を生成する機能ではありません。用途が根本的に異なります。" }
  },
  "references": [
    { "title": "SageMaker JumpStart Foundation Models", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models.html" },
    { "title": "SageMaker JumpStart Embedding Models", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/studio-jumpstart.html" }
  ]
});
