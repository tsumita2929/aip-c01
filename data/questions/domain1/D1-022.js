window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-022",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.1",
  "type": "single",
  "difficulty": "easy",
  "question": "ある開発者が、Amazon Bedrock のファインチューニング用トレーニングデータ（CSV形式、約10万行）を準備しています。データにはノイズや欠損値が含まれており、データの分布を可視化しながら前処理ルールを定義し、最終的にBedrock が要求する JSONL フォーマットに変換する必要があります。最も効率的なツールはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon SageMaker Data Wrangler で、視覚的にデータの分布を分析しながら前処理ルールを定義し、変換パイプラインを構築する"
    },
    {
      "id": "B",
      "text": "AWS Glue Studio のビジュアルエディタで ETL ジョブを作成し、Glue Data Quality でデータ品質ルールを適用する"
    },
    {
      "id": "C",
      "text": "Amazon SageMaker Processing ジョブで Python スクリプトを実行し、pandas でデータのクリーニングと変換を行う"
    },
    {
      "id": "D",
      "text": "AWS Lambda 関数で CSV を読み込み、行ごとにバリデーションと JSONL 変換を行う"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "SageMaker Data Wrangler は、視覚的なインターフェースでデータの分布の可視化、前処理ルールの定義、変換パイプラインの構築を一元的に行えるため、ファインチューニング用データの準備に最も効率的です。Glue Studio（B）は大規模 ETL に適していますが、ML 用データの探索的な分析・可視化機能は Data Wrangler ほど充実していません。SageMaker Processing（C）はカスタムスクリプトの実行に適していますが、コード作成が必要で視覚的な分析ができません。Lambda（D）は行ごとの処理に適していますが、10万行のデータに対する視覚的分析とインタラクティブな前処理には不向きです。（スキル1.3.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。SageMaker Data Wrangler は、データの分布可視化・前処理ルール定義・変換パイプライン構築の要件を直接満たします。特に視覚的インターフェースで一元的にデータ準備を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Glue Studio は大規模 ETL に適している点はあるものの、ML 用データの探索的な分析・可視化機能は Data Wrangler ほど充実しておらず、視覚的分析の要件を十分に満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。SageMaker Processing はカスタムスクリプト実行に適している点はあるものの、コード作成が必要で視覚的な分析ができず、効率的なデータ準備の要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Lambda は行ごとの処理に適している点はあるものの、10万行のデータの視覚的分析とインタラクティブな前処理には不向きで、可視化の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Data Wrangler",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/data-wrangler.html"
    }
  ]
});
