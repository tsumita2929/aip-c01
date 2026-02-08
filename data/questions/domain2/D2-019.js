window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-019",
  "domain": 2,
  "task": "2.2",
  "skill": "2.2.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ML チームがパラメータ数 70B の LLM を SageMaker エンドポイントにデプロイする際、単一の GPU インスタンスのメモリでは不十分です。この問題を解決するために最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "モデルの精度を INT4 に量子化して単一 GPU に収める"
    },
    {
      "id": "B",
      "text": "モデルの層を半分削除してサイズを減らす"
    },
    {
      "id": "C",
      "text": "テンソル並列処理を使用して複数の GPU にモデルの重みを分散（シャーディング）する"
    },
    {
      "id": "D",
      "text": "CPU メモリにモデルをロードして推論する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解は C です。テンソル並列処理（Tensor Parallelism）を使用することで、モデルの重みを複数の GPU に分散してロードし、各 GPU が協調して推論を実行できます。これにより単一 GPU のメモリ制限を超える大規模モデルのデプロイが可能になります。A の INT4 への量子化はサイズを縮小できますが、70Bモデルでは単一GPUに収まらない可能性が高く、品質も劣化します。B の層の削除はモデルの性能を著しく低下させます。D の CPU のみでの推論は非常に遅くなります。（スキル2.2.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。INT4 への量子化はモデルサイズの縮小が可能であるものの、70B モデルでは単一 GPU に収まらない可能性が高く、品質も劣化するため、メモリ不足の解決と品質維持の要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。モデルの層の削除はサイズ縮小が可能であるものの、モデルの性能が著しく低下し、本来の能力を発揮できないため、品質維持の要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。テンソル並列処理は単一 GPU のメモリ制限の解消とモデル品質の維持の両方を直接満たします。特に複数 GPU への重み分散により最小の品質劣化で大規模モデルのデプロイを実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。CPU メモリへのロードはメモリ容量の問題を解決できるものの、推論が非常に遅くなり、実用的なレイテンシーの要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Deploy models for inference - Amazon SageMaker",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html"
    },
    {
      "title": "Amazon SageMaker model parallelism",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-parallel.html"
    }
  ]
});
