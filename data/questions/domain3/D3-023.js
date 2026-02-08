window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-023",
  "domain": 3,
  "task": "3.3",
  "skill": "3.3.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある金融サービス企業が、規制当局の監査に備えて、Amazon SageMaker AI で開発したクレジットスコアリングモデルのドキュメンテーションを整備する必要があります。モデルの目的、トレーニングデータの概要、パフォーマンスメトリクス、バイアス評価結果を構造化された形式で一元管理し、モデルのステータス（開発中、承認済み、廃止等）も追跡したいと考えています。最も適切なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon SageMaker AI の Experiments 機能でモデルのトレーニングパラメータとメトリクスを自動追跡し、実験結果をドキュメンテーションとして規制当局に提出する"
    },
    {
      "id": "B",
      "text": "AWS Glue Data Catalog にモデルのメタデータをテーブルプロパティとして記録し、データリネージュと合わせてモデル情報を管理する"
    },
    {
      "id": "C",
      "text": "Amazon SageMaker AI の Model Registry にモデルを登録し、モデルバージョンの説明フィールドにドキュメンテーション情報を記載する"
    },
    {
      "id": "D",
      "text": "Amazon SageMaker AI のモデルカードを作成し、モデルの意図された用途、トレーニングデータの説明、評価結果、倫理的考慮事項を記録する。モデルカードのステータス機能で承認ワークフローを管理する"
    }
  ],
  "correctAnswers": [
    "D"
  ],
  "explanation": "Amazon SageMaker AI のモデルカードは、モデルガバナンスのために設計された専用機能です。モデルの意図された用途、トレーニングデータの説明、評価結果、バイアス分析、倫理的考慮事項などを構造化された JSON スキーマ形式で一元管理できます。さらに、モデルカードにはステータス機能（Draft、PendingReview、Approved、Archived 等）があり、承認ワークフローを管理できるため、規制当局の監査対応に最適です。A の Experiments 機能はトレーニングのパラメータやメトリクスの自動追跡に優れていますが、意図された用途、倫理的考慮事項、バイアス評価のような非技術的なドキュメンテーションを構造化して管理する機能はなく、規制対応のドキュメンテーションとしては不十分です。B の Glue Data Catalog はデータのメタデータ管理に特化しており、ML モデルのガバナンス固有の構造（意図された用途、バイアス評価、ステータス管理等）を提供しません。C の Model Registry はモデルバージョンの管理と承認ステータスの追跡が可能ですが、説明フィールドは自由テキストであり、モデルカードのような構造化されたドキュメンテーションスキーマは提供しません。（スキル3.3.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Experiments はトレーニングパラメータ・メトリクスの自動追跡に優れるものの、意図された用途や倫理的考慮事項の構造化ドキュメンテーションはサポートせず、構造化された形式での一元管理という要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Glue Data Catalog はデータのメタデータ管理に特化しているものの、ML モデルガバナンス固有の構造やステータス管理を提供せず、モデルのステータス追跡という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Model Registry はモデルバージョン管理が可能であるものの、説明フィールドは自由テキストであり、モデルカードのような構造化ドキュメンテーションスキーマは提供せず、構造化された形式という要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。モデルカードは構造化 JSON スキーマでモデルの用途・評価結果・バイアス分析を管理し、ステータス機能（Draft/Approved 等）で承認ワークフローも実現でき、構造化ドキュメンテーションとステータス追跡を直接満たします。特に規制当局の監査対応を最小の運用負荷で実現できます。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Model Cards",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html"
    },
    {
      "title": "Amazon SageMaker Model Governance",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-governance.html"
    }
  ]
});
