window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-067",
  "domain": 1,
  "task": "1.2",
  "skill": "1.2.4",
  "type": "single",
  "difficulty": "hard",
  "question": "ある保険会社が、保険請求書類の自動審査を行う大規模言語モデル（LLM）を導入する計画です。同社には10万件以上の過去の審査済み請求データがあり、業界固有の用語や審査基準に合わせたモデルのカスタマイズが必要です。要件として、(1) トレーニングプロセスでハイパーパラメータ（学習率、エポック数、LoRA ランク等）を細かく制御できること、(2) トレーニング中の GPU リソースの種類とインスタンス数を自由に選択できること、(3) カスタマイズしたモデルを自社の VPC 内のエンドポイントでホストできることが求められています。この要件を最も適切に満たすアプローチはどれですか？",
  "options": [
    { "id": "A", "text": "Amazon Bedrock のカスタムモデルファインチューニング機能を使用して、Bedrock 上でモデルをカスタマイズしデプロイする" },
    { "id": "B", "text": "SageMaker JumpStart でベースモデルを選択し、SageMaker Training Job でハイパーパラメータとインスタンスタイプを指定してファインチューニングし、SageMaker エンドポイントにデプロイする" },
    { "id": "C", "text": "Amazon Bedrock のプロンプトエンジニアリングと RAG を組み合わせて、モデルの追加トレーニングなしで審査基準を反映する" },
    { "id": "D", "text": "Amazon Bedrock の継続的事前トレーニング機能を使用して、保険ドメインの知識でモデルの基礎能力を強化する" }
  ],
  "correctAnswers": ["B"],
  "explanation": "SageMaker Training Job は、ハイパーパラメータ（学習率、エポック数、LoRA ランク等）の詳細な制御、GPU インスタンスタイプとインスタンス数の自由な選択、トレーニング済みモデルの VPC 内 SageMaker エンドポイントへのデプロイをすべてサポートします。Bedrock ファインチューニング（A）はマネージドで簡便ですが、ハイパーパラメータの制御範囲が限定的であり、GPU リソースの選択もできません。プロンプトエンジニアリング + RAG（C）はモデル自体のカスタマイズではなく、10万件の審査データを活用した深い知識の内在化ができません。継続的事前トレーニング（D）はドメイン知識の強化には有効ですが、審査タスクに特化したファインチューニングとは目的が異なり、ハイパーパラメータの細かい制御もできません。（スキル1.2.4）",
  "optionExplanations": {
    "A": { "correct": false, "text": "不正解です。Bedrock ファインチューニングはマネージドで運用が簡便な点はあるものの、ハイパーパラメータの制御範囲が限定的であり、GPU インスタンスタイプの選択やVPC内エンドポイントへのデプロイの柔軟性が不足しています。" },
    "B": { "correct": true, "text": "正解です。SageMaker Training Job はハイパーパラメータの詳細制御、GPU リソースの自由な選択、VPC 内エンドポイントへのデプロイを直接満たします。特に10万件以上の大規模データによるファインチューニングにおいて、リソースとパラメータの完全な制御を実現できます。" },
    "C": { "correct": false, "text": "不正解です。プロンプトエンジニアリングと RAG は追加トレーニングなしで知識を補完できますが、モデル自体のカスタマイズではないため、10万件の審査データに基づく深い知識の内在化という要件を満たしません。" },
    "D": { "correct": false, "text": "不正解です。継続的事前トレーニングはドメイン知識の強化には有効ですが、審査タスクに特化した出力の最適化（ファインチューニング）とは目的が異なります。また Bedrock 上での実行のため、ハイパーパラメータやGPUリソースの細かい制御ができません。" }
  },
  "references": [
    { "title": "SageMaker Training Job", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-training.html" },
    { "title": "Amazon Bedrock Custom Models", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html" }
  ]
});
