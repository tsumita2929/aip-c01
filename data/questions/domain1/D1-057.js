window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-057",
  "domain": 1,
  "task": "1.6",
  "skill": "1.6.3",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、4つの開発チームで共有する生成AIアプリケーションのプロンプトテンプレートのガバナンスを確立したいと考えています。要件として、プロンプトのバージョン管理、チーム単位のアクセス制御、変更の監査証跡、および本番環境へのプロンプト変更のデプロイ管理が求められています。最も適切なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Bedrock のプロンプト管理機能でプロンプトテンプレートをバージョン管理し、IAM ポリシーでチーム単位のアクセスを制御し、CloudTrail で変更の監査証跡を記録する"
    },
    {
      "id": "B",
      "text": "AWS CodeCommit にプロンプトテンプレートを保存してバージョン管理し、CodePipeline で本番環境へのデプロイを自動化し、IAM でリポジトリアクセスを制御する"
    },
    {
      "id": "C",
      "text": "AWS Systems Manager Parameter Store にプロンプトテンプレートを保存し、パラメータポリシーでバージョン管理を行い、IAM でアクセスを制御する"
    },
    {
      "id": "D",
      "text": "Amazon S3 にプロンプトテンプレートを保存してバージョニングを有効にし、S3 バケットポリシーでチーム単位のアクセスを制御し、S3 アクセスログで変更を監査する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Bedrock のプロンプト管理機能は、プロンプトテンプレートのバージョン管理を Bedrock ネイティブの機能として提供し、IAM でチーム単位のアクセス制御、CloudTrail で全ての API 呼び出しの監査証跡を記録できます。Bedrock との統合がシームレスなため、最も運用効率が高くなります。CodeCommit + CodePipeline（B）はCI/CDパイプラインとしては優れていますが、プロンプトテンプレートの管理に特化した機能がなく、Bedrock との統合に追加の開発が必要です。Parameter Store（C）は設定値の管理に適していますが、プロンプトテンプレートの構造的な管理（システムプロンプト、ユーザープロンプト、モデル設定の組み合わせ）には対応していません。S3 バージョニング（D）はファイルのバージョン管理は可能ですが、Bedrock との統合やプロンプト固有の管理機能がなく、運用効率が低くなります。（スキル1.6.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock のプロンプト管理機能は、ネイティブのバージョン管理・IAM 連携・CloudTrail 監査によるプロンプトガバナンスの要件を直接満たします。特に Bedrock とのシームレスな統合を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。CodeCommit + CodePipeline は CI/CD に優れている点はあるものの、プロンプト管理に特化した機能がなく Bedrock との統合に追加開発が必要で、運用効率の要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Parameter Store は設定値管理に適している点はあるものの、プロンプトテンプレートの構造的な管理（システムプロンプト+モデル設定の組み合わせ）には非対応で、プロンプト固有の管理要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。S3 バージョニングはファイル管理が可能な点はあるものの、Bedrock との統合やプロンプト固有の管理機能がなく運用効率が低いため、シームレスな統合の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock プロンプト管理",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html"
    },
    {
      "title": "AWS IAM ユーザーガイド",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html"
    }
  ]
});
