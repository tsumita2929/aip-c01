window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-025",
  "domain": 3,
  "task": "3.3",
  "skill": "3.3.3",
  "type": "multiple",
  "difficulty": "medium",
  "question": "ある大手保険会社が、Amazon Bedrock を使用した保険金請求審査AIシステムを全社展開する計画です。AI ガバナンス委員会は、各事業部門が独自に Bedrock モデルを利用する際に、保険業法の規制要件と社内AI倫理ポリシーへの準拠を組織的に管理する必要があります。さらに、規制当局の監査時にAI利用の全体像を迅速に提示できる体制も求められています。このガバナンスフレームワークに含めるべき要素を2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "AWS Organizations の SCP で全事業部門のアカウントに対して Bedrock の利用可能モデルを制限し、AWS Config のカスタムルールでガードレール設定の準拠状況を継続的に評価する。非準拠リソースは AWS Systems Manager Automation で自動修復する"
    },
    {
      "id": "B",
      "text": "各事業部門の AI 利用に対する保険業法の規制要件マッピングを実施し、Amazon SageMaker AI のモデルカードに各モデルの意図された用途、リスク評価、コンプライアンスチェック結果を記録する。モデルカードのステータス管理（Draft → PendingReview → Approved）で承認ワークフローを運用する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のモデル呼び出しログを S3 に集約し、Amazon Athena でモデル利用状況の月次レポートを生成する。Amazon QuickSight ダッシュボードで事業部門別の利用トレンドとコストを可視化する"
    },
    {
      "id": "D",
      "text": "AI 利用ポリシーに基づく Bedrock ガードレールの全社共通テンプレートを策定し、許可されるユースケース・禁止トピック・PII フィルター・コンテンツフィルターの標準設定を定義する。IAM の条件キー（bedrock:GuardrailIdentifier）でガードレールの適用を強制し、ポリシー違反をリアルタイムで防止する"
    },
    {
      "id": "E",
      "text": "AWS CloudTrail で Bedrock API 呼び出しの監査ログを取得し、Amazon GuardDuty で異常なモデル呼び出しパターンを検出する。検出時に Amazon SNS でセキュリティチームに通知し、Lambda で該当 IAM ロールを自動停止する"
    }
  ],
  "correctAnswers": [
    "B",
    "D"
  ],
  "explanation": "AI ガバナンスフレームワークには、規制要件への準拠を文書化・管理する仕組みと、ポリシーを技術的に強制する仕組みの両方が必要です。B は規制要件マッピングと SageMaker AI モデルカードによる構造化されたドキュメンテーション・承認ワークフローを提供し、規制当局の監査時にモデルの用途・リスク評価・承認履歴を迅速に提示できます。D は全社共通のガードレールテンプレートと IAM 条件キーによる技術的な強制により、ポリシー違反をリアルタイムで防止します。A の SCP + Config + Systems Manager の組み合わせはインフラレベルのコンプライアンス管理に有効ですが、モデル利用可能制限と設定準拠だけでは AI 倫理ポリシーの管理やコンテンツレベルのガバナンスは実現できません。C の利用状況レポートとダッシュボードは可視化に有用ですが、コスト・利用トレンドの把握であり、規制準拠の管理やポリシー違反の防止とは異なります。E の CloudTrail + GuardDuty は API レベルのセキュリティ異常検出であり、AI コンテンツのポリシー違反や規制要件への準拠管理には対応していません。（スキル3.3.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。SCP + Config + Systems Manager はインフラ設定の準拠管理に有効であるものの、AI倫理ポリシーやコンテンツレベルのガバナンス（禁止トピック、PII保護等）は管理できず、保険業法の規制要件と社内AI倫理ポリシーの包括的管理という要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。規制要件マッピングと SageMaker AI モデルカードにより、モデルの用途・リスク評価・コンプライアンスチェック結果を構造化して管理し、承認ワークフローで監査対応を直接満たします。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。利用状況の月次レポートとダッシュボードは可視化に有用であるものの、コスト・利用トレンドの把握であり、規制準拠の管理やポリシー違反の防止ではなく、ガバナンスフレームワークの中核要素という要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。全社共通ガードレールテンプレートで禁止トピック・PII フィルター・コンテンツフィルターを標準化し、IAM 条件キーで適用を強制することで、ポリシー準拠のリアルタイム強制を直接満たします。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。CloudTrail + GuardDuty は API 呼び出しパターンのセキュリティ異常検出であるものの、AI コンテンツのポリシー違反や規制要件への準拠管理には対応しておらず、AI倫理ポリシーのガバナンスという要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Model Cards",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html"
    },
    {
      "title": "Amazon Bedrock Guardrails",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    }
  ]
});
