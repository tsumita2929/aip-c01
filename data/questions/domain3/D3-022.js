window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-022",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.1",
  "type": "single",
  "difficulty": "easy",
  "question": "ある企業のセキュリティチームが、Amazon Bedrock の使用に関するアクセス制御ポリシーを設計しています。開発チームには特定のモデル（Claude）のみの使用を許可し、本番環境では承認されたモデルのみを呼び出せるようにする必要があります。また、この制御はコンソールと API の両方からのアクセスに適用される必要があります。最も適切な方法はどれですか？",
  "options": [
    {
      "id": "A",
      "text": "AWS Organizations のサービスコントロールポリシー（SCP）で bedrock:InvokeModel アクションの Resource 要素に特定モデル ARN を指定し、組織レベルでモデル使用を制限する"
    },
    {
      "id": "B",
      "text": "IAM ポリシーで bedrock:InvokeModel アクションに対して、Resource 要素で特定のモデル ARN（arn:aws:bedrock:*::foundation-model/anthropic.claude-*）を指定し、許可されたモデルのみにアクセスを制限する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock コンソールでモデルアクセスリクエストを管理し、Claude 以外のモデルへのアクセスリクエストを承認しないことでアクセスを制限する"
    },
    {
      "id": "D",
      "text": "AWS CloudTrail でモデル呼び出しログを監視し、未承認モデルの使用を検出した場合に AWS Lambda で該当 IAM ロールの権限を自動的に取り消す"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "IAM ポリシーでは、bedrock:InvokeModel アクションに対して Resource 要素で特定のモデル ARN をワイルドカードを含めて指定でき（例: arn:aws:bedrock:*::foundation-model/anthropic.claude-*）、許可されたモデルのみへのアクセスをコンソールと API の両方で制御できます。開発チームの IAM ロールにこのポリシーをアタッチすることで、承認されたモデルのみの使用を強制できます。A の SCP はアカウントレベルの上限ガードレールとして機能しますが、開発チーム固有のモデル制限には IAM ポリシーの方がきめ細かく、ロール単位で異なるモデルの許可が可能です。SCP は全アカウントに適用されるため、他チームのモデル利用にも影響します。C のモデルアクセスリクエスト管理はアカウント内で使用可能なモデルを制御しますが、アカウント内の全ユーザーに同じ制限が適用されるため、チーム別の制御はできません。D の CloudTrail + Lambda は事後的な検出と対応であり、未承認モデルの呼び出し自体を防止できず、権限の自動取り消しは正当なアクセスにも影響する可能性があります。（スキル3.2.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。SCP は組織レベルのガードレールとして有効であるものの、アカウント内の全ユーザーに同一の制限が適用されるため、チーム別の異なるモデル許可設定ができず、開発チーム固有のモデル制限という要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。IAM ポリシーの Resource 要素で特定モデル ARN を指定し、ロール単位できめ細かなモデルアクセス制御が可能で、特定モデルへのアクセス制限とコンソール・API 両方への適用を直接満たします。特にチーム別のモデル制御を最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。モデルアクセスリクエスト管理はアカウント内で使用可能なモデルを制御できるものの、アカウント内の全ユーザーに同じ制限が適用されるため、チーム別の制御ができず、開発チーム固有の制御という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。CloudTrail + Lambda は未承認モデルの使用を検知できるものの、事後的な検出・対応にとどまり未承認モデルの呼び出し自体を防止できず、権限の自動取り消しは正当なアクセスにも影響する可能性があるため、アクセス制御という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Identity-Based Policies",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/security_iam_id-based-policy-examples.html"
    },
    {
      "title": "AWS IAM Policies",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html"
    }
  ]
});
