window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-015",
  "domain": 2,
  "task": "2.2",
  "skill": "2.2.1",
  "type": "single",
  "difficulty": "medium",
  "question": "あるスタートアップが生成 AI アプリケーションを本番環境にデプロイしようとしています。トラフィックは予測不能で、使用量に応じた従量課金を希望しています。また、インフラ管理の負荷を最小限に抑えたいと考えています。最も適切なデプロイ方法はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon SageMaker のリアルタイムエンドポイントにカスタムモデルをデプロイする"
    },
    {
      "id": "B",
      "text": "Amazon EC2 の GPU インスタンスにモデルをセルフホストする"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のオンデマンドモードでモデルを利用する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock のプロビジョンドスループットを購入する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解は C です。Amazon Bedrock のオンデマンドモードは従量課金制で、トラフィックの変動に自動的に対応し、インフラ管理が不要です。スタートアップの要件（予測不能なトラフィック、従量課金、低管理負荷）に最適です。A の SageMaker エンドポイントはインフラ管理が必要です。B の EC2 セルフホストは最も管理負荷が高くなります。D のプロビジョンドスループットは安定した高トラフィック向けで、予測不能なトラフィックにはコスト効率が悪い場合があります。（スキル2.2.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。SageMaker リアルタイムエンドポイントはカスタムモデルのデプロイが可能であるものの、インフラ管理が必要で、インフラ管理負荷の最小化の要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。EC2 GPU インスタンスは高い柔軟性があるものの、最も管理負荷が高く、インフラ管理の最小化と従量課金の要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。Amazon Bedrock のオンデマンドモードは従量課金、トラフィック変動への自動対応、インフラ管理不要の要件をすべて直接満たします。特にフルマネージドにより最小の運用負荷で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。プロビジョンドスループットは一貫したパフォーマンスを提供するものの、安定した高トラフィック向けであり、予測不能なトラフィックに対する従量課金の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    },
    {
      "title": "Amazon Bedrock pricing",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-pricing.html"
    }
  ]
});
