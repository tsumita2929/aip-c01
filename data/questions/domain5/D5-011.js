window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-011",
  "domain": 5,
  "task": "5.1",
  "skill": "5.1.5",
  "type": "single",
  "difficulty": "medium",
  "question": "ある教育テクノロジー企業が、RAGベースの学習支援AIの品質評価を行っています。評価の一環として、自動評価と人間フィードバックの両方を組み合わせた包括的な評価パイプラインを構築したいと考えています。LLM-as-a-judge による自動評価でスコアに基づいてサンプリングした応答に対して、教育専門家がさらに詳細なレビューを行う2段階評価アプローチを実現するための最も適切な構成はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock モデル評価で LLM-as-a-judge の自動評価を実行し、高スコアの応答サンプルを Amazon SageMaker Ground Truth のプライベートワークフォースに送信して教育専門家による人間評価を実施する"
    },
    {
      "id": "B",
      "text": "Amazon Comprehend のセンチメント分析で応答のポジティブスコアが高い結果のみを手動でレビューする"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock Guardrails のコンテンツフィルタリング結果のみを品質評価の指標として使用する"
    },
    {
      "id": "D",
      "text": "AWS Step Functions で評価ワークフローを構築するが、すべての応答に対して人間評価のみを実施する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解はAです。Bedrock モデル評価の LLM-as-a-judge で一次スクリーニング（自動評価）を行い、そのスコアに基づいてサンプリングした応答を SageMaker Ground Truth のプライベートワークフォースで教育専門家に送る構成は、自動評価と人間フィードバックを効率的に組み合わせた2段階評価パイプラインを実現します。Bの Comprehend センチメント分析は感情の極性を分析するツールであり、教育コンテンツの正確性や有用性の評価には適していません。CのBedrock Guardrails はコンテンツの安全性フィルタリングに特化しており、応答品質の多面的な評価機能はありません。Dのすべての応答に人間評価のみを実施するアプローチは、スケーラビリティとコスト効率が悪く、自動評価による効率化の恩恵が得られません。（スキル5.1.5）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock モデル評価の LLM-as-a-judge で一次スクリーニングを行い、スコアに基づいてサンプリングした応答を SageMaker Ground Truth のプライベートワークフォースで専門家に送る構成は、自動評価と人間フィードバックの組み合わせおよび2段階評価パイプラインの両要件を直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Comprehend のセンチメント分析は感情の極性を分析するツールであるものの、教育コンテンツの正確性や有用性の評価には適していません。LLM-as-a-judge による自動評価の要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Bedrock Guardrails はコンテンツの安全性フィルタリングに特化しているものの、応答品質の多面的な評価機能はありません。包括的な評価パイプラインの要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Step Functions で評価ワークフローを構築すること自体は可能であるものの、すべての応答に人間評価のみを実施するアプローチはスケーラビリティとコスト効率が悪く、自動評価と人間フィードバックの組み合わせという要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock モデル評価 LLM-as-a-judge",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-llm-as-judge.html"
    },
    {
      "title": "Amazon SageMaker Ground Truth プライベートワークフォース",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-private.html"
    }
  ]
});
