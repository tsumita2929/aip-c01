window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-026",
  "domain": 4,
  "task": "4.3",
  "skill": "4.3.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある保険会社が、Amazon SageMaker でデプロイした保険金請求の不正検知モデルを本番運用しています。モデルデプロイ後3ヶ月が経過し、不正検知の精度が低下し始めていることが報告されました。運用チームは、モデルの精度低下の原因を早期に検出し、自動的にアラートを受け取れる仕組みを構築する必要があります。また、モデルの再トレーニングが必要かどうかを判断するためのベースラインとの比較データも必要です。これらの要件を最小の運用負荷で満たすアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "CloudWatch カスタムメトリクスに推論結果の正解率を手動で記録し、閾値ベースのアラームを設定する"
    },
    {
      "id": "B",
      "text": "SageMaker Model Monitor のモデル品質モニタリングを設定し、ベースラインとのモデル品質メトリクス（精度、再現率等）の偏差を検出して CloudWatch アラームで通知する"
    },
    {
      "id": "C",
      "text": "SageMaker Model Monitor のデータ品質モニタリングを設定し、入力データの統計的ドリフトを検出することで精度低下を予測する"
    },
    {
      "id": "D",
      "text": "SageMaker Clarify のバイアスドリフトモニタリングを設定し、保護属性に基づくバイアスの変化を検出して精度低下の原因を特定する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。SageMaker Model Monitor のモデル品質モニタリングは、デプロイされたモデルの推論品質メトリクス（精度、再現率、F1スコアなど）をベースラインと比較し、品質の劣化を自動的に検出します。CloudWatch アラームとの統合により、閾値を超えた場合に自動通知が可能で、再トレーニングの判断に必要なベースラインとの比較データも提供されます。A の手動記録は運用負荷が高く、ベースラインとの自動比較機能もないため要件を満たしません。C のデータ品質モニタリングは入力データの統計的ドリフト検出に特化しており、モデルの精度メトリクスを直接監視するものではありません。D の Clarify バイアスドリフトモニタリングは保護属性に基づくバイアス変化の検出に特化しており、モデル全体の精度低下の検出には適していません。（スキル: 4.3.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。CloudWatch カスタムメトリクスへの手動記録は精度の監視自体は可能であるものの、ベースラインとの自動比較機能がなく運用負荷が高いため、最小の運用負荷という要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。SageMaker Model Monitor のモデル品質モニタリングは、ベースラインとのモデル品質メトリクスの偏差の自動検出と CloudWatch アラームによる自動通知を直接満たします。特にマネージド機能として最小の運用負荷で精度低下の早期検出と再トレーニング判断の支援を実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。データ品質モニタリングは入力データの統計的ドリフト検出には有用であるものの、モデルの精度メトリクスを直接監視するものではなく、精度低下の検出という要件を直接満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Clarify のバイアスドリフトモニタリングは保護属性に基づくバイアス変化の検出に特化しており、モデル全体の精度低下の検出と再トレーニング判断という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Model Monitor - モデル品質のモニタリング",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality.html"
    },
    {
      "title": "Amazon SageMaker Model Monitor",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html"
    }
  ]
});
