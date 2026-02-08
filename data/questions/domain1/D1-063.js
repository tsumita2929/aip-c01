window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-063",
  "domain": 1,
  "task": "1.2",
  "skill": "1.2.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある製造企業が、工場の品質検査レポートを自動生成するアプリケーションを構築しています。開発チームは Hugging Face で公開されている産業用途に特化した大規模言語モデルを利用したいと考えています。要件として、(1) モデルのデプロイと推論環境のセットアップを最小限の工数で行うこと、(2) 将来的に自社の検査データでファインチューニングできる柔軟性を確保すること、(3) SageMaker エコシステム内で一元管理できることが求められています。この要件を最も適切に満たすアプローチはどれですか？",
  "options": [
    { "id": "A", "text": "Hugging Face Hub からモデルの重みを手動でダウンロードし、カスタム Docker コンテナを作成して SageMaker エンドポイントにデプロイする" },
    { "id": "B", "text": "Amazon Bedrock のカスタムモデルインポート機能を使用して Hugging Face モデルを Bedrock 上でホストする" },
    { "id": "C", "text": "SageMaker JumpStart から該当モデルを選択し、ワンクリックでデプロイした上で、必要に応じて JumpStart のファインチューニング機能を利用する" },
    { "id": "D", "text": "Amazon EC2 の GPU インスタンスを起動し、Hugging Face Transformers ライブラリで直接モデルをロードして推論 API を構築する" }
  ],
  "correctAnswers": ["C"],
  "explanation": "SageMaker JumpStart は Hugging Face 等のモデルハブから事前トレーニング済みモデルをワンクリックでデプロイでき、デプロイ工数を最小化します。さらに JumpStart 上でファインチューニングも実行でき、SageMaker エコシステム内での一元管理が可能です。カスタム Docker コンテナ（A）は工数が大きく要件1を満たしません。Bedrock カスタムモデルインポート（B）はサポート対象モデルに制限があり、SageMaker エコシステム内の管理要件を満たしません。EC2 での直接構築（D）はインフラ管理の運用負荷が高く要件1・3を満たしません。（スキル1.2.1）",
  "optionExplanations": {
    "A": { "correct": false, "text": "不正解です。カスタム Docker コンテナの作成とデプロイ設定は工数が大きく、最小限の工数でのセットアップという要件を満たしません。結果として開発・運用の負荷が増大します。" },
    "B": { "correct": false, "text": "不正解です。Bedrock カスタムモデルインポートはサポート対象のアーキテクチャに制限があり、すべての Hugging Face モデルに対応できるわけではありません。また SageMaker エコシステム内での一元管理という要件も満たしません。" },
    "C": { "correct": true, "text": "正解です。SageMaker JumpStart はワンクリックデプロイによりセットアップ工数を最小化し、ファインチューニング機能により将来のカスタマイズ柔軟性も確保できます。特に SageMaker エコシステム内での一元管理を最小の運用負荷で実現できます。" },
    "D": { "correct": false, "text": "不正解です。EC2 上での直接構築は柔軟性はあるものの、インフラ管理（スケーリング、パッチ適用、可用性確保）の運用負荷が高く、SageMaker エコシステム内の一元管理も実現できません。" }
  },
  "references": [
    { "title": "Amazon SageMaker JumpStart", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/studio-jumpstart.html" },
    { "title": "SageMaker JumpStart Foundation Models", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models.html" }
  ]
});
