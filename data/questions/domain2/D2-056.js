window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-056",
  "domain": 2,
  "task": "2.2",
  "skill": "2.2.3",
  "type": "single",
  "difficulty": "hard",
  "question": "ある IoT 企業が、エッジデバイス（NVIDIA Jetson）上で画像分類モデルを推論する必要があります。モデルは SageMaker で PyTorch を使用してトレーニング済みです。以下の要件があります。(1) エッジデバイスの限られたコンピューティングリソースで推論レイテンシを 50 ミリ秒以内に抑える、(2) モデルの精度を維持しつつ推論パフォーマンスを最大化する、(3) デバイスの特定のハードウェアアクセラレータ（TensorRT）を活用する。これらの要件を満たすために最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "SageMaker Neo でモデルをコンパイルし、ターゲットデバイス（NVIDIA Jetson）向けに最適化されたモデルアーティファクトを生成してデプロイする"
    },
    {
      "id": "B",
      "text": "SageMaker のリアルタイム推論エンドポイントをクラウドにデプロイし、エッジデバイスから API 経由でリクエストを送信する"
    },
    {
      "id": "C",
      "text": "PyTorch モデルをそのままエッジデバイスにコピーし、PyTorch の標準ランタイムで推論を実行する"
    },
    {
      "id": "D",
      "text": "SageMaker Processing ジョブでモデルの重みを量子化（INT8）した後、汎用的な ONNX 形式に変換してエッジデバイスにデプロイする"
    }
  ],
  "correctAnswers": ["A"],
  "explanation": "正解は A です。SageMaker Neo は機械学習モデルをターゲットハードウェア向けにコンパイル・最適化するサービスで、NVIDIA Jetson を含む多様なエッジデバイスをサポートしています。Neo のコンパイルにより TensorRT などのハードウェアアクセラレータを自動的に活用し、推論速度を最大化しつつモデル精度を維持できます。B はクラウド推論でネットワークレイテンシが追加され 50 ミリ秒以内の要件を安定して満たせません。C は最適化なしで限られたリソースでのレイテンシ要件を満たせません。D は手動の量子化・変換で運用負荷が高く、TensorRT の最大活用が保証されません。（スキル2.2.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。SageMaker Neo は NVIDIA Jetson をターゲットとしたモデルコンパイルに対応しており、TensorRT を自動的に活用して推論パフォーマンスを最大化します。コンパイル後のモデルは Neo ランタイム（DLR）で実行され、精度を維持しつつレイテンシ要件を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。クラウドのリアルタイム推論エンドポイントは高い処理性能を提供できるものの、エッジデバイスからのネットワークラウンドトリップが追加されるため 50 ミリ秒以内の安定したレイテンシ要件を満たせません。また、ネットワーク接続が不安定な IoT 環境では可用性にも問題が生じます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。PyTorch の標準ランタイムはエッジデバイスでも動作可能であるものの、ハードウェア固有の最適化が行われないため、限られたコンピューティングリソースで 50 ミリ秒以内のレイテンシ要件を達成できません。TensorRT の活用要件も満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。手動の量子化と ONNX 変換は推論速度の改善に寄与する可能性があるものの、汎用的な ONNX 形式では NVIDIA Jetson の TensorRT を最大限に活用できません。また、量子化パラメータの調整や精度検証など手動の運用負荷が高く、SageMaker Neo のマネージドなコンパイルと比較して非効率です。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Neo",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/neo.html"
    },
    {
      "title": "Compile and deploy models with Neo",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/neo-getting-started.html"
    }
  ]
});
