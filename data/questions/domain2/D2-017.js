window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-017",
  "domain": 2,
  "task": "2.2",
  "skill": "2.2.2",
  "type": "multiple",
  "difficulty": "hard",
  "question": "あるフィンテック企業が、パラメータ数70Bの大規模言語モデルをAmazon SageMakerのリアルタイムエンドポイントにデプロイしようとしています。モデルの重みサイズはFP16精度で約140GBであり、単一のml.g5.12xlarge（96GB VRAM）ではメモリが不足します。また、本番環境では最大入力トークン長8,192を処理する必要があり、ピーク時のKVキャッシュで追加メモリを消費します。品質を維持しつつデプロイを成功させるために正しいアプローチを2つ選んでください。",
  "options": [
    {
      "id": "A",
      "text": "ml.p4d.24xlarge（8x A100 80GB、合計640GB VRAM）を選択し、SageMaker Large Model Inference（LMI）コンテナでテンソル並列度を8に設定して、モデルの重みを8つのGPUに分散ロードする"
    },
    {
      "id": "B",
      "text": "ml.g5.2xlarge（24GB VRAM）を4台のマルチインスタンスエンドポイントとして構成し、データ並列処理で各インスタンスにモデル全体をロードする"
    },
    {
      "id": "C",
      "text": "SageMaker LMI コンテナの環境変数 MAX_INPUT_LENGTH を8192に設定し、KVキャッシュのメモリ予約量を計算に含めたインスタンスサイジングを行う"
    },
    {
      "id": "D",
      "text": "SageMaker の標準 scikit-learn コンテナにモデルをデプロイし、CPU 推論で処理する"
    },
    {
      "id": "E",
      "text": "モデルの重みを半分に分割して2つの独立したエンドポイントにデプロイし、API Gatewayでリクエストを振り分ける"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "正解は A と C です。A では ml.p4d.24xlarge の8基のA100 GPU（合計640GB VRAM）にテンソル並列度8でモデルの重み（140GB）を分散ロードすることで、単一GPUのメモリ制限を超える大規模モデルのデプロイが可能になります。SageMaker LMI コンテナはテンソル並列処理をネイティブにサポートしています。C では MAX_INPUT_LENGTH の設定により最大入力トークン長を制御し、KVキャッシュのメモリ予約量をインスタンスサイジングに含めることで、ピーク時のメモリ不足（OOM）を防止できます。B は ml.g5.2xlarge（24GB VRAM）ではモデル全体（140GB）がロードできず、マルチインスタンスのデータ並列処理は各インスタンスにモデル全体をロードするため根本的に解決しません。D は scikit-learn コンテナは従来のMLモデル向けであり、70B LLMの推論に必要なGPU対応やトランスフォーマー推論最適化をサポートしていません。E はモデルの重みを任意に分割して独立エンドポイントにデプロイすることは技術的に不可能で、テンソル並列処理とは異なります。（スキル2.2.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。ml.p4d.24xlarge の8基A100 GPU にテンソル並列度8でモデルの重みを分散ロードすることで、140GBのモデルを効率的にデプロイでき、メモリ不足の解決と品質維持の要件を直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。ml.g5.2xlarge の24GB VRAMでは140GBのモデル全体をロードできず、データ並列処理は各インスタンスにモデル全体をロードするアプローチであるため、メモリ不足の根本的な解決の要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。MAX_INPUT_LENGTH の設定と KV キャッシュメモリ予約量を含めたインスタンスサイジングは、最大入力トークン長8,192の処理とピーク時OOM防止の要件を直接満たします。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。scikit-learn コンテナは従来のMLモデル向けであり、70B LLMに必要なGPU対応、トランスフォーマー推論最適化、テンソル並列処理をサポートしておらず、LLMデプロイの要件を満たしません。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。LLMの重みを任意に分割して独立したエンドポイントにデプロイする方法は技術的に不可能であり、テンソル並列処理のように各GPUが協調して推論を実行する仕組みとは根本的に異なります。"
    }
  },
  "references": [
    {
      "title": "Deploy models for inference - Amazon SageMaker",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html"
    },
    {
      "title": "Amazon SageMaker instance types for inference",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints-instance-types.html"
    }
  ]
});
