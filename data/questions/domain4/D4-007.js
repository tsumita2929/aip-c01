window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-007",
  "domain": 4,
  "task": "4.1",
  "skill": "4.1.3",
  "type": "single",
  "difficulty": "medium",
  "question": "ある医療機関が Amazon Bedrock を使用して、毎日夜間に約10,000件の患者レポートを要約するバッチ処理ジョブを実行しています。現在オンデマンドで1件ずつ同期的に処理していますが、処理完了まで6時間以上かかっており、コストも高い状態です。処理時間とコストの両方を改善するために最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock のバッチ推論機能を使用して、すべてのレポートを一括で非同期処理する"
    },
    {
      "id": "B",
      "text": "AWS Step Functions を使用して、1件ずつ順番に処理するワークフローを構築する"
    },
    {
      "id": "C",
      "text": "Amazon EC2 の GPU インスタンスでオープンソースモデルをホストし、ローカルで処理する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock のストリーミングレスポンスを有効化して処理速度を向上させる"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解はAです。Amazon Bedrock のバッチ推論機能は、大量のリクエストを非同期で一括処理するために設計されており、オンデマンドの同期リクエストと比較して50%のコスト削減が可能です。夜間のバッチ処理というユースケースにはリアルタイム性が不要であるため、バッチ推論が最適です。Bの Step Functions による逐次処理は、並列化がなく処理時間の改善が限定的です。CのEC2 GPUインスタンスは管理コストが高く、Bedrockのマネージドサービスの利点を失います。Dのストリーミングはクライアント側への応答開始を早めるだけで、バッチ処理のスループットやコストの改善には直接寄与しません。（スキル: 4.1.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Amazon Bedrock のバッチ推論機能は、処理時間短縮とコスト削減の両方を直接満たします。特に大量のリクエストを非同期で一括処理し、オンデマンドと比較して50%のコスト削減を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Step Functions による逐次処理はワークフロー管理には有用なものの、並列化がなく処理時間短縮の要件を十分に満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。EC2 GPU インスタンスでオープンソースモデルをホストする方法は処理は可能なものの、インフラ管理コストが高く、コスト削減の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。ストリーミングレスポンスはクライアント側への応答開始を早めるものの、バッチ処理のスループットやコストの改善には直接寄与せず、処理時間短縮・コスト削減のいずれの要件も満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock バッチ推論",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference.html"
    },
    {
      "title": "Amazon Bedrock の料金",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-pricing.html"
    }
  ]
});
