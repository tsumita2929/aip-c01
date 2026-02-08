window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-023",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、コールセンターの音声録音データ（1日あたり約500件、平均通話時間10分）を活用して、顧客対応品質を分析する生成 AI システムを構築しています。顧客の感情変化の特定、対応品質のスコアリング、改善提案の自動生成を行う必要があります。最も適切なデータ処理パイプラインはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Transcribe で音声をテキストに変換し、Amazon Comprehend でセンチメント分析を行い、結果を Amazon Bedrock の FM に送信して品質スコアリングと改善提案を生成する"
    },
    {
      "id": "B",
      "text": "Amazon Transcribe で音声をテキストに変換し、変換されたテキストを直接 Amazon Bedrock の FM に送信して、感情分析・品質スコアリング・改善提案をすべて FM に処理させる"
    },
    {
      "id": "C",
      "text": "Amazon Transcribe Call Analytics を使用して通話分析を行い、結果を S3 に保存して Amazon Athena で集計分析する"
    },
    {
      "id": "D",
      "text": "Amazon Kinesis Data Streams で音声データをリアルタイムにストリーミングし、Lambda 関数で Transcribe Streaming API を呼び出してリアルタイム分析する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Transcribe で音声をテキスト変換し、Comprehend でセンチメント分析を行い、その構造化された結果を FM に送信することで、品質スコアリングと改善提案を高精度に生成できます。Comprehend のセンチメント分析は感情変化の特定に特化しており、FM のプロンプトにセンチメントスコアを含めることで精度が向上します。テキストを直接 FM に送信（B）する方法は実装可能ですが、FM にセンチメント分析を任せると一貫性が低下し、Comprehend の方が感情分析において精度と再現性が高くなります。Transcribe Call Analytics（C）は通話分析に適していますが、Athena での集計のみでは改善提案の自動生成ができません。Kinesis + Streaming API（D）はリアルタイム処理に適していますが、録音済み音声の日次バッチ処理には過剰なアーキテクチャです。（スキル1.3.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Transcribe + Comprehend + Bedrock FM の組み合わせは、音声変換・感情分析・品質スコアリング・改善提案の要件を直接満たします。特に各サービスの強みを活かした高精度な分析を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。テキストを直接 FM に送信する方法は実装可能な点はあるものの、感情分析を FM に任せると一貫性が低下し、Comprehend の方が精度と再現性が高いため、感情変化の特定要件を十分に満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Transcribe Call Analytics + Athena は通話分析と集計に適している点はあるものの、改善提案の自動生成には FM による処理が必要であり、改善提案生成の要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Kinesis + Streaming API はリアルタイム処理に適している点はあるものの、録音済み音声の日次バッチ処理には過剰なアーキテクチャであり、運用負荷の最小化要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Transcribe 開発者ガイド",
      "url": "https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html"
    },
    {
      "title": "Amazon Comprehend センチメント分析",
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html"
    }
  ]
});
