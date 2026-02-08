window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-003",
  "domain": 5,
  "task": "5.1",
  "skill": "5.1.3",
  "type": "single",
  "difficulty": "medium",
  "question": "あるヘルスケア企業が、患者向けの生成AI健康相談アシスタントを開発しています。医療専門家によるモデル出力の品質評価を継続的に実施するため、効率的なアノテーションワークフローを構築する必要があります。専門家が応答の正確性を5段階で評価し、不正確な箇所にコメントを付与できる仕組みを最も適切に実現する方法はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Mechanical Turk で一般のクラウドワーカーに評価タスクを配布する"
    },
    {
      "id": "B",
      "text": "Amazon Comprehend Medical を使用して自動的に医療用語の正確性を検証する"
    },
    {
      "id": "C",
      "text": "Amazon SageMaker Ground Truth を使用して、カスタムアノテーションテンプレートで医療専門家による評価ワークフローを構築する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock の自動評価機能のみを使用して応答品質を評価する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解はCです。Amazon SageMaker Ground Truth は、カスタムアノテーションテンプレートを作成でき、プライベートワークフォース（社内の医療専門家）を指定した評価ワークフローを構築できます。5段階評価やコメント付与などのカスタムUIも実装可能で、医療ドメインの専門知識が必要な評価タスクに最適です。AのMechanical Turkは一般のクラウドワーカー向けであり、医療専門知識が必要な評価には不適切です。BのComprehend Medicalは医療用語の抽出・分析ツールであり、応答の正確性を5段階で評価する機能はありません。DのBedrock自動評価は人間の専門家による詳細なフィードバック収集には対応していません。なお、Amazon Bedrock にも人間評価（Human evaluation）機能がありますが、選択肢Dは『自動評価機能のみ』と限定されているため不正解です。カスタムアノテーションテンプレートによる柔軟な評価UIが必要な場合は、SageMaker Ground Truth がより適しています。（スキル5.1.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Mechanical Turk は一般のクラウドワーカー向けのサービスであり、医療専門知識が必要な評価タスクには不適切です。専門家による評価という要件を満たせません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Comprehend Medical は医療用語の抽出・分析ツールであり、応答の正確性を5段階で評価する機能はありません。人間の専門家によるレビューの代替にはなりません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。SageMaker Ground Truth はカスタムアノテーションテンプレートを作成でき、プライベートワークフォース（社内の医療専門家）を指定した評価ワークフローを構築できます。5段階評価やコメント付与の要件を直接満たし、医療ドメイン専門知識が必要な評価に最適です。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Bedrock の自動評価機能は人間の専門家による詳細なフィードバック収集には対応していません。選択肢が『自動評価機能のみ』と限定されているため、5段階評価やコメント付与の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Ground Truth",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/sms.html"
    },
    {
      "title": "Amazon SageMaker Ground Truth カスタムテンプレート",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates.html"
    }
  ]
});
