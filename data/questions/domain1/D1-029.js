window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-029",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.1",
  "type": "ordering",
  "difficulty": "medium",
  "question": "FM のファインチューニング用データセットを準備するプロセスを、正しい順序に並べ替えてください。",
  "options": [
    {
      "id": "A",
      "text": "Glue Data Quality でデータ品質ルールを適用し、品質基準を満たすレコードのみを抽出する"
    },
    {
      "id": "B",
      "text": "S3 に生データを収集し、データソースのインベントリを作成する"
    },
    {
      "id": "C",
      "text": "Bedrock が要求する JSONL フォーマットにデータを変換し、S3 にアップロードする"
    },
    {
      "id": "D",
      "text": "SageMaker Data Wrangler でデータの探索・クリーニング・変換を行う"
    }
  ],
  "correctOrder": [
    "B",
    "D",
    "A",
    "C"
  ],
  "explanation": "データ準備プロセスは以下の順序が適切です。1) S3 への生データ収集とインベントリ作成（B）、2) Data Wrangler でのデータ探索・クリーニング・変換（D）、3) Glue Data Quality での品質ルール適用とフィルタリング（A）、4) Bedrock 用フォーマットへの変換とアップロード（C）。生データの収集が最初で、最終的なフォーマット変換が最後です。（スキル1.3.1）",
  "optionExplanations": {
    "B": {
      "correct": true,
      "text": "ステップ1: S3 に生データを収集しデータソースのインベントリを作成する。すべてのデータ準備プロセスの出発点。"
    },
    "D": {
      "correct": true,
      "text": "ステップ2: SageMaker Data Wrangler でデータの探索・クリーニング・変換を行う。生データの理解と前処理。"
    },
    "A": {
      "correct": true,
      "text": "ステップ3: Glue Data Quality でデータ品質ルールを適用し品質基準を満たすレコードのみを抽出する。クリーニング後の品質検証。"
    },
    "C": {
      "correct": true,
      "text": "ステップ4: Bedrock が要求する JSONL フォーマットにデータを変換し S3 にアップロードする。最終的なフォーマット変換。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Data Wrangler",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/data-wrangler.html"
    },
    {
      "title": "AWS Glue Data Quality",
      "url": "https://docs.aws.amazon.com/glue/latest/dg/glue-data-quality.html"
    }
  ]
});
