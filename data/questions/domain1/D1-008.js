window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-008",
  "domain": 1,
  "task": "1.1",
  "skill": "1.1.1",
  "type": "ordering",
  "difficulty": "hard",
  "question": "ある企業が、Amazon Bedrock を使用して生成 AI アプリケーションを本番環境にデプロイする計画を立てています。以下のステップを、AWS が推奨するデプロイプロセスの正しい順序に並べ替えてください。",
  "options": [
    {
      "id": "A",
      "text": "候補FMの比較評価を行い、使用するモデルを決定する"
    },
    {
      "id": "B",
      "text": "ユースケース要件を定義し、候補となる FM を Bedrock プレイグラウンドで試す"
    },
    {
      "id": "C",
      "text": "CloudWatch メトリクスとアラームを設定し、ガードレールを適用して本番環境で運用を開始する"
    },
    {
      "id": "D",
      "text": "RAG パイプラインやプロンプトテンプレートなどの統合コンポーネントを開発・テストする"
    }
  ],
  "correctOrder": [
    "B",
    "A",
    "D",
    "C"
  ],
  "explanation": "推奨されるデプロイプロセスは以下の順序です。1) ユースケース要件定義と FM の初期評価（B）、2) モデル評価ジョブによる定量的な品質評価（A）、3) RAG などの統合コンポーネントの開発・テスト（D）、4) モニタリングとガードレールを設定した本番運用開始（C）。要件定義なしに評価はできず、モデル選定なしに統合開発は進められません。（スキル1.1.1）",
  "optionExplanations": {
    "B": {
      "correct": true,
      "text": "ステップ1: ユースケース要件を定義し候補 FM をプレイグラウンドで試す。すべてのプロセスの出発点。"
    },
    "A": {
      "correct": true,
      "text": "ステップ2: 候補 FM の比較評価を行い使用するモデルを決定する。要件定義後に定量的評価を行う。"
    },
    "D": {
      "correct": true,
      "text": "ステップ3: RAG パイプラインやプロンプトテンプレートなどの統合コンポーネントを開発・テストする。モデル選定後に統合開発を進める。"
    },
    "C": {
      "correct": true,
      "text": "ステップ4: CloudWatch メトリクスとアラームを設定しガードレールを適用して本番運用を開始する。最終段階での運用開始。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ユーザーガイド",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"
    },
    {
      "title": "Amazon Bedrock モデル評価",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html"
    }
  ]
});
