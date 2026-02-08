window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-023",
  "domain": 5,
  "task": "5.1",
  "skill": "5.1.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある医療 AI 企業が、Amazon SageMaker で患者の再入院リスクを予測するモデルを開発しました。医師からモデルの予測結果について「なぜこの患者が高リスクと判定されたのか」を理解できるように説明を提供する必要があります。また、規制要件として、各予測に対する個々の特徴量の寄与度を定量的に示す必要があります。モデルの種類に依存せず汎用的に適用でき、最小の運用負荷でこれらの要件を満たすアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "モデルを決定木に置き換え、ルールベースの分岐条件を直接表示することで予測根拠を説明する"
    },
    {
      "id": "B",
      "text": "SageMaker Clarify の SHAP（SHapley Additive exPlanations）値を使用して、各予測に対する個々の特徴量の寄与度を算出し、局所的な説明を提供する"
    },
    {
      "id": "C",
      "text": "SageMaker Debugger を使用して、トレーニング中の勾配やパラメータの変化を分析し、特徴量の重要度を推定する"
    },
    {
      "id": "D",
      "text": "Amazon Comprehend の感情分析機能を使用して、患者データのテキスト情報から再入院リスクの要因を抽出する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。SageMaker Clarify の SHAP 値は、ゲーム理論に基づく特徴量の寄与度計算手法であり、モデルの種類に依存せず（モデルに非依存）、各予測に対する個々の特徴量の正負の寄与度を定量的に算出します。これにより、「なぜこの患者が高リスクと判定されたか」を特徴量レベルで説明でき、規制要件の定量的な寄与度表示も満たせます。A の決定木への置き換えは説明性は高いものの、元のモデルの予測精度が低下する可能性があり、モデルの種類に依存しない汎用的なアプローチとは言えません。C の SageMaker Debugger はトレーニング中のデバッグ・最適化ツールであり、推論時の個別予測に対する特徴量の寄与度を算出する機能ではありません。D の Amazon Comprehend は自然言語処理サービスであり、構造化データに基づく再入院リスク予測モデルの説明には適していません。（スキル5.1.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。決定木への置き換えは説明性が高いものの、元のモデルの予測精度が低下する可能性があり、モデルの種類に依存しない汎用的なアプローチという要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。SageMaker Clarify の SHAP 値は、モデルに非依存で各予測に対する特徴量の定量的な寄与度算出を直接満たします。特にマネージド機能として最小の運用負荷で、個別予測の説明と規制要件への対応を実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。SageMaker Debugger はトレーニング中の勾配・パラメータ分析には有用であるものの、推論時の個別予測に対する特徴量の寄与度算出機能ではなく、各予測の説明という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Amazon Comprehend は自然言語処理サービスであるものの、構造化データに基づく予測モデルの特徴量寄与度の説明には適しておらず、定量的な寄与度表示という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Clarify - 特徴量の重要度",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-feature-attribute-shap-baselines.html"
    },
    {
      "title": "Amazon SageMaker Clarify - モデルの説明性",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-explainability.html"
    }
  ]
});
