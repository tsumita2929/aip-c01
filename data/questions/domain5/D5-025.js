window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-025",
  "domain": 5,
  "task": "5.1",
  "skill": "5.1.3",
  "type": "single",
  "difficulty": "medium",
  "question": "ある自動運転技術の企業が、車載カメラから取得した画像データのラベリングを Amazon SageMaker Ground Truth で行っています。ラベリングの品質を評価するために以下の要件があります。(1) 複数のアノテーターによるラベルの一致度を測定すること、(2) ラベリング精度が一定の閾値を超えたデータのみをトレーニングに使用すること、(3) ラベリングコストを最適化しながら大規模データセットに対応すること。これらの要件を最も効率的に満たすアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "SageMaker Ground Truth のアノテーション統合機能を使用して複数ワーカーのラベルを統合し、信頼度スコアに基づいてフィルタリングする。さらに自動ラベリング機能を有効化して、モデルが高信頼度で予測可能なデータは自動ラベリングし、低信頼度のデータのみ人手でラベリングする"
    },
    {
      "id": "B",
      "text": "Amazon Mechanical Turk でラベリングを実施し、各画像に対して5人以上のワーカーを割り当て、多数決でラベルを決定する。全データを人手でラベリングする"
    },
    {
      "id": "C",
      "text": "Amazon Rekognition のラベル検出機能を使用して自動的にラベリングを行い、検出信頼度が閾値以上のラベルのみを使用する"
    },
    {
      "id": "D",
      "text": "SageMaker Processing ジョブでカスタムのラベル品質評価スクリプトを実行し、アノテーター間の一致度を計算した上で、品質基準を満たすラベルのみをフィルタリングする"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解はAです。SageMaker Ground Truth のアノテーション統合機能は、複数ワーカーのラベルを統計的に統合し、各ラベルの信頼度スコアを算出します。これによりアノテーター間の一致度測定と、信頼度に基づくフィルタリングが可能です。さらに自動ラベリング機能は、ラベリング済みデータからモデルを構築し、高信頼度で予測可能なデータを自動的にラベリングすることで、大規模データセットに対してラベリングコストを大幅に削減します。B の Mechanical Turk による全データの人手ラベリングは品質管理の一部は可能ですが、アノテーション統合の自動化がなく、自動ラベリングによるコスト最適化も実現できません。C の Rekognition は汎用的なラベル検出であり、自動運転向けのカスタムラベリングタスクには対応できず、アノテーター間の一致度測定機能もありません。D の SageMaker Processing によるカスタムスクリプトは実装可能ですが、開発・運用の負荷が高く、Ground Truth の統合機能で提供される機能を再実装することになり、最も効率的という要件を満たしません。（スキル5.1.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。SageMaker Ground Truth のアノテーション統合機能による信頼度スコア算出と、自動ラベリング機能によるコスト最適化は、3つの要件を直接満たします。特にマネージド機能として最小の運用負荷で大規模データセットのラベリングを効率化できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Mechanical Turk による全データの人手ラベリングは多数決による品質管理は可能であるものの、自動ラベリングによるコスト最適化がなく、大規模データセットでのラベリングコスト最適化という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Amazon Rekognition は汎用的なラベル検出サービスであるものの、自動運転向けのカスタムラベリングタスクへの対応やアノテーター間の一致度測定機能がなく、ラベルの一致度測定という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。SageMaker Processing によるカスタムスクリプトは実装可能であるものの、Ground Truth の統合機能で提供される機能を再実装する必要があり、開発・運用の負荷が高く、最も効率的という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Ground Truth - アノテーション統合",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html"
    },
    {
      "title": "Amazon SageMaker Ground Truth - 自動データラベリング",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html"
    }
  ]
});
