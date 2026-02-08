window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-036",
  "domain": 3,
  "task": "3.4",
  "skill": "3.4.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある金融機関が Amazon SageMaker AI でファインチューニングした融資審査支援モデルを本番運用しています。規制当局から、モデルの判定に人種、性別、年齢などの保護属性によるバイアスが存在しないことを定量的に証明するよう求められました。バイアスメトリクスの算出と個別判定の説明可能性の両方を提供する必要があります。この要件を満たすために最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock のモデル評価機能で保護属性グループ別の評価データセットを作成し、LLM-as-a-judge で融資判定の公平性を自動評価する"
    },
    {
      "id": "B",
      "text": "Amazon SageMaker AI の Model Monitor を設定し、本番環境での推論データの統計的分布を監視して、保護属性間のデータドリフトを検出する"
    },
    {
      "id": "C",
      "text": "Amazon SageMaker AI Clarify を使用して、トレーニング前バイアスメトリクス（DPL、CI 等）とトレーニング後バイアスメトリクス（DI、DPPL 等）を算出し、SHAP 値による特徴量重要度分析で個別判定の説明可能性も提供する"
    },
    {
      "id": "D",
      "text": "Amazon SageMaker AI の Experiments 機能で保護属性別のモデル精度メトリクスを記録し、グループ間の正解率差が 5% 以内であればバイアスなしと判断する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "Amazon SageMaker AI Clarify は、機械学習モデルのバイアス検出と説明可能性に特化した機能を提供します。トレーニング前バイアスメトリクス（DPL: Difference in Positive Proportions in Labels、CI: Class Imbalance 等）でデータのバイアスを、トレーニング後バイアスメトリクス（DI: Disparate Impact、DPPL: Difference in Positive Proportions in Predicted Labels 等）でモデル予測のバイアスを定量的に評価します。さらに SHAP（SHapley Additive exPlanations）値による特徴量重要度分析で、個別の融資判定に各特徴量がどの程度影響したかを説明でき、規制当局への報告に必要な統計的根拠と説明可能性の両方を提供します。A の Bedrock モデル評価は LLM の出力品質評価用であり、表形式データの ML モデルの公平性メトリクス算出には対応していません。B の Model Monitor はデータドリフトやモデル品質の監視が主目的で、保護属性ごとのバイアスメトリクスの算出や説明可能性の機能は提供しません。D の Experiments は実験追跡ツールであり、正解率差のみではバイアスの標準的な定量評価とは言えず、DI 等の規制で求められるバイアスメトリクスを計算しません。（スキル3.4.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Bedrock モデル評価は LLM の出力品質評価用であるものの、表形式データの ML モデルのバイアスメトリクス算出には対応しておらず、バイアスメトリクスの算出という要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Model Monitor はデータドリフトやモデル品質の監視が主目的であるものの、保護属性ごとのバイアスメトリクス算出や説明可能性は提供せず、バイアスの定量的証明と説明可能性という要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。Clarify はトレーニング前・後のバイアスメトリクス（DPL、DI 等）と SHAP 値による説明可能性を提供し、バイアスメトリクスの算出と個別判定の説明可能性を直接満たします。特に規制当局への定量的根拠の提供を最小の運用負荷で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Experiments は実験追跡ツールであるものの、正解率差のみではバイアスの標準的定量評価とは言えず、DI 等の規制で求められるバイアスメトリクスを計算せず、定量的な証明という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Clarify",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-configure-processing-jobs.html"
    },
    {
      "title": "Amazon SageMaker Clarify - Detect Bias",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-detect-data-bias.html"
    }
  ]
});
