window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-029",
  "domain": 3,
  "task": "3.3",
  "skill": "3.3.4",
  "type": "multiple",
  "difficulty": "hard",
  "question": "ある企業が、Amazon Bedrock を使用したAIシステムの継続的モニタリング戦略を設計しています。モデルの誤用、品質ドリフト、ポリシー違反を検出し、適切な対応を自動化する必要があります。実装すべきモニタリング要素を2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "Amazon S3 のアクセスログを有効化し、データアクセスパターンのみを監視する"
    },
    {
      "id": "B",
      "text": "Bedrock モデルの評価ジョブを定期的に実行し、応答品質メトリクス（正確性、関連性、毒性スコア）のベースラインからの逸脱（ドリフト）を検出する。ドリフト検出時にモデルバージョンの自動ロールバックまたはガードレール強化を実行する"
    },
    {
      "id": "C",
      "text": "AWS Cost Explorer でBedrock の利用コストを監視し、予算超過時にアラートを送信する"
    },
    {
      "id": "D",
      "text": "Bedrock ガードレールの違反イベントを CloudWatch メトリクスとして記録し、違反率の急激な上昇に対するアラームを設定する。アラーム発火時にSNS経由でセキュリティチームに通知し、Lambda で自動的にスロットリング（リクエストレートの制限）を実施する"
    },
    {
      "id": "E",
      "text": "Amazon GuardDuty でネットワーク異常のみを監視する"
    }
  ],
  "correctAnswers": [
    "B",
    "D"
  ],
  "explanation": "継続的モニタリングには、リアルタイムの違反検出と品質ドリフトの検出の両方が必要です。D のガードレール違反イベントのモニタリングは、ポリシー違反や誤用をリアルタイムで検出し、スロットリング（リクエストレートの制限）による自動修復を提供します。B のモデル評価ジョブによるドリフト検出は、応答品質の経時的な変化を検出し、品質低下時の自動対応（ロールバック、ガードレール強化）を可能にします。A のS3アクセスログはデータアクセスパターンの監視のみで、AIモデルの品質やポリシー違反は検出できません。C のコスト監視は財務管理であり、品質や安全性のモニタリングではありません。E の GuardDuty はネットワークセキュリティの脅威検出であり、AIモデルの品質モニタリングには対応しません。（スキル3.3.4）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。S3アクセスログはデータアクセスパターンの監視に有用であるものの、AIモデルの品質やポリシー違反は検出できず、モデルの誤用・品質ドリフト・ポリシー違反の検出という要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。モデル評価ジョブの定期実行で応答品質のドリフトを検出し、品質低下時のモデルロールバックやガードレール強化を自動実行でき、品質ドリフトの検出と自動対応を直接満たします。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Cost Explorer によるコスト監視は財務管理に有用であるものの、モデルの品質や安全性のモニタリングではなく、品質ドリフトやポリシー違反の検出という要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。ガードレール違反イベントのCloudWatchモニタリングでポリシー違反をリアルタイム検出し、Lambda/SNSによるスロットリング等の自動修復を提供することで、ポリシー違反の検出と自動対応を直接満たします。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。GuardDuty はネットワークセキュリティの脅威検出に有用であるものの、AIモデルの品質モニタリングには対応せず、品質ドリフトやポリシー違反の検出という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Monitoring",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring.html"
    },
    {
      "title": "Amazon Bedrock Model Evaluation",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html"
    }
  ]
});
