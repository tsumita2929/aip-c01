window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-022",
  "domain": 2,
  "task": "2.2",
  "skill": "2.2.2",
  "type": "single",
  "difficulty": "easy",
  "question": "あるスタートアップが、オープンソースの13Bパラメータ LLM を Amazon SageMaker のリアルタイムエンドポイントにデプロイして、社内ナレッジベースの質問応答システムを構築しています。要件として、(1) GPU を効率的に活用した高速な推論処理、(2) 連続バッチ処理（continuous batching）による同時リクエストの効率的な処理、(3) インフラ管理の負荷を最小限に抑えることが求められています。最も適切なデプロイ構成はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "SageMaker が提供する Large Model Inference（LMI）Deep Learning Container を使用し、vLLM をバックエンドとして設定する。ml.g5.2xlarge インスタンスにデプロイし、連続バッチ処理とPagedAttention による KV キャッシュ管理を有効化する"
    },
    {
      "id": "B",
      "text": "標準的な nginx + Flask のカスタムコンテナを構築し、PyTorch の model.generate() をそのまま実行する。ml.g5.2xlarge インスタンスにデプロイする"
    },
    {
      "id": "C",
      "text": "Amazon Linux 2 の基本 AMI で EC2 インスタンスを起動し、手動で CUDA ドライバーと PyTorch をインストールしてモデルをロードする"
    },
    {
      "id": "D",
      "text": "SageMaker の XGBoost ビルトインアルゴリズムコンテナにモデルファイルを配置してデプロイする"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。SageMaker の LMI Deep Learning Container は vLLM や TGI などの LLM 推論フレームワークをプリインストールしており、連続バッチ処理、PagedAttention による効率的な KV キャッシュ管理、GPU メモリの最適化が事前構成されています。これにより3つの要件を最小の設定で満たせます。B の nginx + Flask カスタムコンテナでは PyTorch の model.generate() は逐次処理であり連続バッチ処理に対応しておらず、同時リクエスト処理の効率が大幅に低下します。また、KV キャッシュ管理の最適化も手動実装が必要です。C の EC2 での手動セットアップは CUDA ドライバー、PyTorch、推論サーバーのインストール・保守がすべて手動となり、インフラ管理の負荷最小化の要件を満たしません。D の XGBoost コンテナは決定木ベースの ML モデル向けであり、トランスフォーマーベースの LLM 推論には対応していません。（スキル2.2.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。SageMaker LMI Deep Learning Container + vLLM の組み合わせは、GPU効率、連続バッチ処理、インフラ管理負荷最小化の3要件を直接満たします。PagedAttention によるKVキャッシュ管理で同時リクエスト処理効率が最大化されます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。nginx + Flask + PyTorch model.generate() は基本的な推論処理が可能であるものの、逐次処理であり連続バッチ処理に対応しておらず、同時リクエストの効率的な処理とKVキャッシュ管理の要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。EC2 での手動セットアップは最大限の柔軟性があるものの、CUDAドライバー、PyTorch、推論サーバーのインストールと保守がすべて手動となり、インフラ管理負荷最小化の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。XGBoost コンテナは決定木ベースのMLモデル向けであり、トランスフォーマーアーキテクチャの LLM 推論に必要な GPU 推論最適化や連続バッチ処理をサポートしておらず、LLMデプロイの要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Deep Learning Containers",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/large-model-inference-dlc.html"
    },
    {
      "title": "Deploy models for inference - Amazon SageMaker",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html"
    }
  ]
});
