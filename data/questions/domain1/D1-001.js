window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-001",
  "domain": 1,
  "task": "1.1",
  "skill": "1.1.1",
  "type": "single",
  "difficulty": "easy",
  "question": "ある企業が、Amazon Bedrock を使用して社内ドキュメント検索チャットボットを構築しています。社内ドキュメントは日本語で、1回の検索につき平均5,000トークンのコンテキストを処理する必要があります。応答時間は5秒以内、月間コストは$2,000以内が求められています。アーキテクチャ設計の初期段階で、基盤モデル（FM）の選択アプローチとして最も適切なのはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "パラメータ数が最も大きい Anthropic Claude 3 Opus を選択し、最高品質の応答を確保する"
    },
    {
      "id": "B",
      "text": "ユースケースの要件（日本語対応、レイテンシー、コスト）に基づいて複数のモデルを Bedrock のモデル評価ジョブで比較し選択する"
    },
    {
      "id": "C",
      "text": "Bedrock で利用可能な最新リリースのモデルを選択し、最新の言語理解能力を活用する"
    },
    {
      "id": "D",
      "text": "コストを最小化するために Amazon Titan Text Lite を選択し、プロンプトエンジニアリングで品質を補う"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "FM の選択は、ユースケース固有の要件（日本語対応、レイテンシー、精度、コスト）に基づいてモデル評価ジョブで定量的に比較して行うべきです。Claude 3 Opus（A）はパラメータ数が大きく高品質ですが、レイテンシーが長くコストも高いため、月間$2,000の予算制約を超える可能性があります。最新リリースのモデル（C）が必ずしも日本語の社内ドキュメント検索に最適とは限らず、要件に基づいた評価が必要です。Titan Text Lite（D）はコスト効率は良いですが、日本語の複雑な文書理解において精度が不十分な場合があり、プロンプトエンジニアリングだけでは品質を保証できません。（スキル1.1.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Claude 3 Opus はパラメータ数が大きく高品質ではあるものの、入出力トークン単価が高く月間$2,000の予算制約を超える可能性が高く、レイテンシーも長くなる傾向があります。"
    },
    "B": {
      "correct": true,
      "text": "正解です。モデル評価ジョブは日本語対応・5秒以内のレイテンシー・月間$2,000以内のコストという要件を直接満たします。特にユースケース固有の要件に基づく定量的な比較を最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。最新リリースのモデルは新しい言語理解能力を持つ可能性はあるものの、自社の日本語ドキュメント検索要件に最適とは限らず、要件に基づいた評価が不足しています。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Titan Text Lite はコスト効率が良い点はあるものの、日本語の複雑な文書理解において精度が不十分な場合があり、品質要件を満たせないリスクがあります。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ユーザーガイド - 基盤モデルの選択",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"
    },
    {
      "title": "Amazon Bedrock モデルの使用",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html"
    }
  ]
});
