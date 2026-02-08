window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-013",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.4",
  "type": "matching",
  "difficulty": "hard",
  "question": "以下のモデル調整戦略と、それぞれに最も適した使用シナリオを正しく対応させてください。",
  "prompts": [
    {
      "id": "1",
      "text": "モデルアンサンブル"
    },
    {
      "id": "2",
      "text": "モデルカスケード"
    },
    {
      "id": "3",
      "text": "モデル選択フレームワーク"
    },
    {
      "id": "4",
      "text": "小規模特化モデル"
    }
  ],
  "answers": [
    {
      "id": "A",
      "text": "クエリの複雑さを事前分類し、適切なモデルに動的にルーティングする"
    },
    {
      "id": "B",
      "text": "複数モデルの出力を統合して、単一モデルより高い精度を実現する"
    },
    {
      "id": "C",
      "text": "まず軽量モデルで処理し、信頼度が低い場合のみ高性能モデルにエスカレーションする"
    },
    {
      "id": "D",
      "text": "特定のドメイン（医療、法律など）に特化してファインチューニングされたモデルを使用する"
    }
  ],
  "correctMatches": {
    "1": "B",
    "2": "C",
    "3": "A",
    "4": "D"
  },
  "explanation": "モデルアンサンブル（1→B）は複数モデルの出力を集約して精度を向上させます。モデルカスケード（2→C）はまず軽量モデルで処理し、信頼度が閾値を下回った場合のみ高性能モデルにエスカレーションすることでコスト効率を高めます。モデル選択フレームワーク（3→A）はクエリの特性を分析して最適なモデルを動的に選択します。小規模特化モデル（4→D）は特定ドメインに特化してチューニングされ、そのドメインでは大規模汎用モデルに匹敵する性能を発揮します。（スキル2.1.4）",
  "optionExplanations": {
    "1": {
      "correct": true,
      "text": "モデルアンサンブル → B: 複数モデルの出力を統合して精度を向上させます。各モデルの強みを活かし、単一モデルより高い精度を実現します。"
    },
    "2": {
      "correct": true,
      "text": "モデルカスケード → C: まず軽量モデルで処理し、信頼度が閾値を下回った場合のみ高性能モデルにエスカレーションすることでコスト効率を高めます。"
    },
    "3": {
      "correct": true,
      "text": "モデル選択フレームワーク → A: クエリの特性を分析して最適なモデルを動的に選択し、適切なモデルにルーティングします。"
    },
    "4": {
      "correct": true,
      "text": "小規模特化モデル → D: 特定ドメインに特化してファインチューニングされ、そのドメインでは大規模汎用モデルに匹敵する性能を発揮します。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock model access",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html"
    },
    {
      "title": "Amazon SageMaker model deployment",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html"
    }
  ]
});
