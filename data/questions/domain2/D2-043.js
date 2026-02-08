window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-043",
  "domain": 2,
  "task": "2.5",
  "skill": "2.5.1",
  "type": "single",
  "difficulty": "easy",
  "question": "カスタマーサポート企業が Amazon Bedrock でFAQ自動回答チャットボットを構築しています。回答の正確性を最優先とし、創造的な表現や多様な言い回しは不要です。一方で、回答の長さは最大500トークンに制限し、特定のフレーズ「以上です。」が出現した時点で生成を停止したいと考えています。これらの要件を実現するために設定すべき推論パラメータの組み合わせとして最も適切なものはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "temperature を 0 に近い値に設定し、maxTokens を 500 に設定し、stopSequences に「以上です。」を追加する"
    },
    {
      "id": "B",
      "text": "temperature を 1.0 に設定し、topP を 0.1 に設定し、maxTokens を 500 に設定する"
    },
    {
      "id": "C",
      "text": "temperature を 0 に近い値に設定し、topP を 1.0 に設定し、stopSequences を空のままにする"
    },
    {
      "id": "D",
      "text": "maxTokens を 5000 に設定し、temperature を 0.5 に設定し、topP を 0.5 に設定する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。temperature を 0 に近い値にすることでモデルの出力の決定性が高まり、最も確率の高いトークンが選択されるため正確性が向上します。maxTokens を 500 に設定することで回答の最大長を制限し、stopSequences に「以上です。」を設定することで特定フレーズでの生成停止を実現できます。（スキル2.5.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。低 temperature による高い決定性、maxTokens による長さ制限、stopSequences による特定フレーズでの停止の3要件すべてを直接満たします。正確性重視のユースケースに最適な組み合わせです。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。temperature 1.0 は出力のランダム性を最大化するため、回答の正確性が低下し、毎回異なる回答が生成される可能性があります。正確性最優先の要件を満たしません。また、stopSequences が設定されていないため特定フレーズでの停止の要件も満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。低 temperature は正確性の要件を満たしますが、maxTokens が指定されていないためモデルのデフォルト最大長まで生成される可能性があり、500トークンの長さ制限の要件を満たしません。stopSequences も空のため特定フレーズでの停止もできません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。maxTokens 5000 は500トークンの制限要件を大幅に超過しています。temperature 0.5 は適度なランダム性を持つため正確性最優先の要件に対して最適ではなく、stopSequences も設定されていないため生成停止の要件も満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock inference parameters",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html"
    },
    {
      "title": "Amazon Bedrock inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    }
  ]
});
