window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-025",
  "domain": 2,
  "task": "2.3",
  "skill": "2.3.3",
  "type": "multiple",
  "difficulty": "hard",
  "question": "大手金融機関が Amazon Bedrock を利用した社内 AI アシスタントを構築しています。部門ごとにアクセスできるモデルとデータソースを制限する必要があります。セキュアアクセスの実装として正しいものを2つ選んでください。",
  "options": [
    {
      "id": "A",
      "text": "部門ごとの IAM ロールにアイデンティティベースポリシーを設定し、各部門が利用可能な Bedrock モデルを制限する"
    },
    {
      "id": "B",
      "text": "すべてのユーザーに AdministratorAccess ポリシーを付与して管理を簡素化する"
    },
    {
      "id": "C",
      "text": "既存の企業 IdP と IAM Identity Center を連携して ID フェデレーションを構成し、RBAC（ロールベースアクセス制御）で部門ごとのアクセス権限を管理する"
    },
    {
      "id": "D",
      "text": "Bedrock のモデルにパスワードを設定してアクセスを制限する"
    },
    {
      "id": "E",
      "text": "各部門ごとに別の AWS アカウントを作成し、ネットワークを完全に分離する"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "正解は A と C です。部門ごとの IAM ロールにアイデンティティベースポリシーを設定し、Bedrock モデルへのアクセスを部門ごとに制限します（A が正解）。企業の既存 IdP（Active Directory など）と IAM Identity Center を連携して ID フェデレーションと RBAC を実装することで、既存の組織構造に基づいたアクセス制御が可能になります（C が正解）。B は最小権限の原則に反します。D は Bedrock モデルにパスワード設定はできません。E はアカウント分離は可能ですが、AI アシスタントの一元管理が困難になり過剰な対応です。（スキル2.3.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。部門ごとの IAM ロールにアイデンティティベースポリシーを設定することで、各部門が利用可能な Bedrock モデルをきめ細かく制限でき、部門別アクセス制御の要件を直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。AdministratorAccess は管理の簡素化が可能であるものの、最小権限の原則に反し、すべてのリソースへの無制限アクセスを許可してしまうため、部門別アクセス制限の要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。企業 IdP と IAM Identity Center の連携による ID フェデレーションと RBAC は、既存の組織構造に基づいたアクセス制御の要件を直接満たします。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。パスワードによるアクセス制限は直感的であるものの、Bedrock のモデルにパスワードを設定する機能は存在せず、IAM でアクセス制御を行う必要があります。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。部門ごとの AWS アカウント分離はセキュリティ面で優れるものの、AI アシスタントの一元管理が困難になり過剰な対応であるため、効率的な管理の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock security",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/security.html"
    },
    {
      "title": "AWS IAM Identity Center",
      "url": "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html"
    }
  ]
});
