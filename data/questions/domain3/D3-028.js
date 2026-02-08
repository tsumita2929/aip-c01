window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-028",
  "domain": 3,
  "task": "3.3",
  "skill": "3.3.2",
  "type": "single",
  "difficulty": "medium",
  "question": "あるデータサイエンスチームが、Amazon SageMaker AI で不正検知モデルを含む複数の機械学習モデルを開発・運用しています。規制当局の監査対応として、各モデルのトレーニングで使用されたデータセット、ハイパーパラメータ、評価メトリクスの完全な履歴を追跡し、モデル間の性能比較も可能にする必要があります。また、チームメンバーが過去の実験を再現できるよう、トレーニング環境の設定情報も保持する必要があります。最も適切な方法はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon SageMaker AI Pipelines でトレーニングワークフローを定義し、各ステップの入出力アーティファクト（データセット ARN、モデルアーティファクト）を自動記録する。パイプライン実行履歴をもとにモデルの再現性を確保する"
    },
    {
      "id": "B",
      "text": "Amazon CloudWatch Logs にトレーニングジョブのメトリクスを PublishMetrics API で送信し、CloudWatch ダッシュボードでモデル間の性能を比較する。CloudWatch Logs Insights でハイパーパラメータ情報をクエリする"
    },
    {
      "id": "C",
      "text": "AWS CloudTrail で SageMaker AI の API 呼び出し（CreateTrainingJob、CreateModel 等）の監査ログを記録し、SageMaker AI の Experiments でトレーニングジョブのハイパーパラメータ、データセット URI、評価メトリクス、環境設定を自動追跡する。Experiments のビジュアルインターフェースでモデル間の性能比較を行う"
    },
    {
      "id": "D",
      "text": "Amazon S3 にトレーニングジョブごとのメタデータ JSON ファイルを出力し、AWS Glue のクローラーでメタデータのカタログを自動生成する。Amazon Athena でモデル間のメトリクス比較クエリを実行する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "AWS CloudTrail は SageMaker AI の API 呼び出し（CreateTrainingJob、CreateModel 等）を自動的に記録し、完全な監査証跡を提供します。SageMaker AI の Experiments は、トレーニングジョブのハイパーパラメータ、使用データセット URI、評価メトリクス（精度、F1 スコア等）、コンテナイメージやインスタンスタイプなどの環境設定を自動的に追跡・記録します。さらに、Experiments のビジュアルインターフェースで複数のトレーニング実行の性能比較チャートを生成でき、モデル間の比較が容易です。A の SageMaker AI Pipelines はワークフローの自動化とアーティファクト管理に優れていますが、ML 実験の探索的な追跡（異なるハイパーパラメータの比較、メトリクスの可視化）は Experiments の方が適しています。Pipelines は本番パイプラインの管理が主目的です。B の CloudWatch Logs + Insights でメトリクスの記録とクエリは可能ですが、ML 実験のハイパーパラメータやデータセットの構造化された追跡には適しておらず、モデル間の体系的な比較機能も Experiments に劣ります。D の S3 + Glue + Athena の組み合わせはメタデータ管理と分析が可能ですが、メタデータ JSON の出力ロジックのカスタム実装が必要で、Experiments の自動追跡と比較して運用負荷が高くなります。（スキル3.3.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。SageMaker AI Pipelines はワークフロー自動化に優れるものの、ML 実験の探索的な追跡やハイパーパラメータ比較は Experiments の方が適しており、実験の完全な履歴追跡とモデル間比較という要件に対して最適とは言えません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。CloudWatch Logs + Insights でメトリクスのクエリは可能であるものの、ハイパーパラメータやデータセットの構造化された追跡には適しておらず、完全な履歴追跡とモデル間の体系的比較という要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。CloudTrail による API 呼び出しの監査ログと SageMaker AI Experiments によるハイパーパラメータ・データセット・メトリクス・環境設定の自動追跡の組み合わせにより、完全な履歴追跡、モデル間比較、再現性確保を直接満たします。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。S3 + Glue + Athena でメタデータ管理と分析は可能であるものの、メタデータ JSON の出力ロジックのカスタム実装が必要で、Experiments の自動追跡と比較して運用負荷が高く、最も適切な方法という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Experiments",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/experiments.html"
    },
    {
      "title": "Logging SageMaker API Calls with CloudTrail",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/logging-using-cloudtrail.html"
    }
  ]
});
