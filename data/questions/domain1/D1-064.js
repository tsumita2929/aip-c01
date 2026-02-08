window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-064",
  "domain": 1,
  "task": "1.2",
  "skill": "1.2.4",
  "type": "single",
  "difficulty": "medium",
  "question": "ある金融機関が、不正検知用の機械学習モデルを複数のチームで開発・運用しています。各チームが異なるバージョンのモデルをトレーニングしており、本番環境へのデプロイ前に必ずコンプライアンスチームの承認を得るプロセスが必要です。要件として、(1) モデルの各バージョンとそのメタデータ（精度指標、トレーニングデータセット情報）を一元的に追跡できること、(2) 承認ステータスに基づいてデプロイパイプラインを自動制御できること、(3) 既存の CI/CD パイプラインと統合できることが求められています。このワークフローを最も効率的に実現するアプローチはどれですか？",
  "options": [
    { "id": "A", "text": "Amazon S3 バケットにモデルアーティファクトを保存し、DynamoDB テーブルでバージョン情報と承認ステータスを管理する" },
    { "id": "B", "text": "SageMaker Model Registry にモデルバージョンを登録し、承認ステータス（Approved/Rejected/PendingManualApproval）を設定して SageMaker Pipelines と統合する" },
    { "id": "C", "text": "AWS CodeCommit にモデルアーティファクトをコミットし、CodePipeline の手動承認アクションでデプロイを制御する" },
    { "id": "D", "text": "Amazon ECR にモデルをコンテナイメージとして保存し、イメージタグでバージョンを管理する" }
  ],
  "correctAnswers": ["B"],
  "explanation": "SageMaker Model Registry はモデルバージョンの一元管理、メタデータ（精度指標等）の記録、承認ステータスの追跡をネイティブに提供します。承認ステータスに基づいて SageMaker Pipelines や EventBridge 経由で CI/CD パイプラインを自動トリガーできます。S3 + DynamoDB（A）はカスタム実装が必要で運用負荷が高くなります。CodeCommit + CodePipeline（C）はモデルアーティファクトの管理に最適化されておらず、メタデータ追跡が不十分です。ECR（D）はコンテナイメージ管理であり、モデルバージョンのメタデータや承認ワークフローをネイティブにサポートしません。（スキル1.2.4）",
  "optionExplanations": {
    "A": { "correct": false, "text": "不正解です。S3 と DynamoDB の組み合わせはモデル管理として機能しますが、カスタム実装が必要であり、承認ステータスとデプロイパイプラインの自動連携を独自に構築する負荷が発生します。" },
    "B": { "correct": true, "text": "正解です。SageMaker Model Registry はモデルバージョン管理、メタデータ追跡、承認ステータス管理を直接満たします。特に承認ステータスに基づく CI/CD パイプラインの自動制御をネイティブ機能で最小の運用負荷で実現できます。" },
    "C": { "correct": false, "text": "不正解です。CodeCommit はソースコード管理に最適化されており、大容量のモデルアーティファクト管理やモデル固有のメタデータ（精度指標等）の追跡には適していません。" },
    "D": { "correct": false, "text": "不正解です。ECR はコンテナイメージの管理に特化しており、モデルバージョンのメタデータ管理や承認ワークフローをネイティブにサポートしないため、要件1・2を満たせません。" }
  },
  "references": [
    { "title": "SageMaker Model Registry", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry.html" },
    { "title": "SageMaker MLOps - Model Building Pipelines", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines.html" }
  ]
});
