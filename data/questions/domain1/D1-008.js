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
      "text": "ステップ1: ユースケース要件（レイテンシー、コスト、精度、言語対応等）を定義し、候補 FM をプレイグラウンドで対話的に試します。要件が明確でなければ適切なモデル評価ができないため、すべてのプロセスの出発点となります。"
    },
    "A": {
      "correct": true,
      "text": "ステップ2: 要件定義後に、モデル評価ジョブで候補 FM の出力品質を定量的に比較し、使用するモデルを決定します。プレイグラウンドでの定性的評価を経て、自動メトリクスで客観的に選定することで信頼性の高い判断が可能になります。"
    },
    "D": {
      "correct": true,
      "text": "ステップ3: モデル選定後に、選定した FM を中心に RAG パイプラインやプロンプトテンプレートなどの統合コンポーネントを開発・テストします。モデルが決まっていないと統合コンポーネントの設計・最適化ができないため、この順序が必要です。"
    },
    "C": {
      "correct": true,
      "text": "ステップ4: 統合コンポーネントのテスト完了後に、CloudWatch メトリクスとアラームによる継続的モニタリングとガードレールによる安全性制御を設定して本番運用を開始します。運用監視と安全対策は本番デプロイの最終段階で適用します。"
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
