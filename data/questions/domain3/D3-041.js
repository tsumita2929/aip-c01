window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-041",
  "domain": 3,
  "task": "3.4",
  "skill": "3.4.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある金融機関が、融資審査の自動化のために Amazon SageMaker でカスタム機械学習モデルをトレーニングしています。規制当局から、モデルが特定の属性（性別、年齢）に基づく差別的な予測を行っていないことを定量的に証明するよう求められています。さらに、バイアスの検出結果をレポートとして監査証跡に残す必要があります。これらの要件を最小の運用負荷で満たすために、最も適切なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "SageMaker Clarify の事前トレーニングバイアス検出を使用し、Class Imbalance（CI）や Difference in Proportions of Labels（DPL）などのバイアスメトリクスを算出して、結果をレポートとして S3 に自動保存する"
    },
    {
      "id": "B",
      "text": "トレーニングデータを手動でサンプリングし、各属性グループの分布を Excel で集計してバイアスの有無を判断し、レポートを作成する"
    },
    {
      "id": "C",
      "text": "Amazon Rekognition のフェアネス機能を使用して、融資審査モデルのバイアスを検出し、結果を CloudWatch Logs に記録する"
    },
    {
      "id": "D",
      "text": "SageMaker Model Monitor のデータ品質モニタリングを設定し、推論データの統計的ドリフトを検出することでバイアスの有無を間接的に判断する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "SageMaker Clarify の事前トレーニングバイアス検出は、トレーニングデータに含まれるバイアスを CI（Class Imbalance）や DPL（Difference in Proportions of Labels）などの定量的メトリクスで検出し、結果をレポートとして S3 に自動保存します。これにより、規制当局への定量的な証明と監査証跡の保存を最小の運用負荷で実現できます。B の手動集計は定量性に欠け、運用負荷が高く、再現性のある監査証跡としても不十分です。C の Amazon Rekognition は画像・動画分析サービスであり、テーブルデータの融資審査モデルのバイアス検出機能は提供していません。D の SageMaker Model Monitor のデータ品質モニタリングは推論データの統計的ドリフト検出に使用するもので、保護属性に基づくバイアスの定量的な検出とは目的が異なります。（スキル3.4.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。SageMaker Clarify の事前トレーニングバイアス検出は、CI や DPL などの定量的バイアスメトリクスの算出と、レポートの S3 自動保存による監査証跡の保存を直接満たします。特にマネージド機能として最小の運用負荷で規制要件に対応できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。手動サンプリングと Excel 集計は一定の分析が可能であるものの、定量的なバイアスメトリクスの算出が標準化されておらず、運用負荷が高く再現性のある監査証跡としても不十分であり、最小の運用負荷という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Amazon Rekognition は画像・動画分析サービスであるものの、テーブルデータに基づく融資審査モデルのバイアス検出機能は提供しておらず、バイアスの定量的検出という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。SageMaker Model Monitor のデータ品質モニタリングは推論データの統計的ドリフト検出に有用であるものの、保護属性に基づくバイアスの定量的な検出とは目的が異なり、規制当局への定量的なバイアス証明という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Clarify - バイアスの検出",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-detect-data-bias.html"
    },
    {
      "title": "Amazon SageMaker Clarify - 事前トレーニングバイアスメトリクス",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-measure-data-bias.html"
    }
  ]
});
