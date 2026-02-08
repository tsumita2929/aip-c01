window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-028",
  "domain": 2,
  "task": "2.3",
  "skill": "2.3.1",
  "type": "ordering",
  "difficulty": "medium",
  "question": "企業が既存のレガシー REST API バックエンドに生成 AI のドキュメント要約機能を段階的に統合するプロジェクトを進めています。以下のステップを正しい実施順序に並べ替えてください。",
  "options": [
    {
      "id": "A",
      "text": "Lambda 関数を作成し、Bedrock API を呼び出してドキュメント要約を実行するロジックを実装する"
    },
    {
      "id": "B",
      "text": "API Gateway に新しいリソースパス（例：/ai/summarize）を追加し、Lambda 関数をバックエンドとして統合する"
    },
    {
      "id": "C",
      "text": "既存のフロントエンドアプリケーションから新しい AI エンドポイントを呼び出すよう修正し、エンドツーエンドテストを実施する"
    },
    {
      "id": "D",
      "text": "要件定義として、要約対象のドキュメント形式、レスポンス形式、レイテンシー要件を明確にする"
    }
  ],
  "correctOrder": [
    "D",
    "A",
    "B",
    "C"
  ],
  "explanation": "正しい順序は、D（要件定義）→ A（Lambda 関数と Bedrock 連携の実装）→ B（API Gateway でのエンドポイント公開）→ C（フロントエンド統合とテスト）です。まず要件を明確にし、次にバックエンドのAI処理ロジックを実装し、API Gateway でエンドポイントとして公開し、最後にフロントエンドと統合してテストする段階的なアプローチが適切です。（スキル2.3.1）",
  "optionExplanations": {
    "D": {
      "correct": true,
      "text": "ステップ1: 要件定義として、要約対象のドキュメント形式、レスポンス形式、レイテンシー要件を明確にします。プロジェクトの基礎を固めるフェーズです。"
    },
    "A": {
      "correct": true,
      "text": "ステップ2: Lambda 関数を作成し、Bedrock API を呼び出してドキュメント要約を実行するロジックを実装します。バックエンドの AI 処理ロジックを構築します。"
    },
    "B": {
      "correct": true,
      "text": "ステップ3: API Gateway に新しいリソースパス（/ai/summarize）を追加し、Lambda 関数をバックエンドとして統合します。エンドポイントとして公開します。"
    },
    "C": {
      "correct": true,
      "text": "ステップ4: フロントエンドから新しい AI エンドポイントを呼び出すよう修正し、エンドツーエンドテストを実施します。統合テストで全体の動作を確認します。"
    }
  },
  "references": [
    {
      "title": "Amazon API Gateway REST APIs",
      "url": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-rest-api.html"
    },
    {
      "title": "Amazon Bedrock inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    }
  ]
});
