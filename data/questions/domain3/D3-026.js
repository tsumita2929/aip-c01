window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-026",
  "domain": 3,
  "task": "3.3",
  "skill": "3.3.4",
  "type": "single",
  "difficulty": "hard",
  "question": "ある企業が、Amazon Bedrock を使用した顧客対応AIチャットボットを運用しています。運用開始後、モデルの応答品質が徐々に低下し、ガードレールによるブロック率が上昇していることが CloudWatch メトリクスで確認されました。品質低下をリアルタイムに検出し、ユーザーへの影響を最小化する自動対応の仕組みとして、最も適切なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock のモデル評価ジョブを毎日スケジュール実行し、応答品質メトリクス（正確性、毒性スコア）のベースラインからの逸脱を検出する。逸脱検出時に EventBridge でガードレール設定の自動更新をトリガーする"
    },
    {
      "id": "B",
      "text": "CloudWatch でガードレールの InvocationsIntervened メトリクスにアラームを設定し、違反率の急激な上昇を検出する。アラーム発火時に Amazon SNS 経由で Lambda を起動し、自動的にフォールバック応答への切り替えとセキュリティチームへの通知を実行する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のモデル呼び出しログを S3 に保存し、Amazon Athena のスケジュールクエリで日次の品質レポートを生成する。レポートに異常が検出された場合に SNS で運用チームに通知する"
    },
    {
      "id": "D",
      "text": "AWS CloudTrail で Bedrock API 呼び出しの異常パターン（通常と異なる時間帯のアクセス、異常に高い頻度）を Amazon GuardDuty で検出し、セキュリティインシデントとして対応する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "リアルタイムの品質低下検出と自動対応には、CloudWatch メトリクスによる常時監視とアラーム、Lambda による自動修復の組み合わせが最適です。B は Bedrock ガードレールの InvocationsIntervened メトリクス（ガードレールが介入した呼び出し数）をリアルタイムで監視し、違反率の急激な上昇を即座に検出します。アラーム発火時に SNS + Lambda でフォールバック応答への切り替えとチーム通知を自動実行することで、ユーザーへの影響を最小化できます。A のモデル評価ジョブは品質のベースライン比較に有用ですが、ジョブの実行には時間がかかり、毎日のスケジュール実行ではリアルタイム検出ができません。C の Athena 日次レポートは分析には有用ですが、日次バッチ処理であるためリアルタイムの品質低下検出には遅すぎます。D の CloudTrail + GuardDuty は API 呼び出しパターンのセキュリティ異常検出であり、モデルの応答品質やポリシー違反の検出には対応していません。（スキル3.3.4）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。モデル評価ジョブは品質ベースライン比較に有用であるものの、ジョブ実行に時間がかかり毎日のスケジュールではリアルタイム検出ができず、リアルタイムの品質低下検出という要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。InvocationsIntervened メトリクスのリアルタイム監視と CloudWatch アラーム + SNS + Lambda による自動フォールバック切り替え・通知で、リアルタイム検出とユーザー影響の最小化を直接満たします。特に自動対応を最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Athena の日次レポートは品質分析に有用であるものの、バッチ処理であるためリアルタイムの品質低下検出には対応速度が不十分であり、リアルタイム検出という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。CloudTrail + GuardDuty は API 呼び出しパターンのセキュリティ異常検出であるものの、モデルの応答品質やガードレール違反率の監視には対応しておらず、品質低下の検出という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon CloudWatch User Guide",
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"
    },
    {
      "title": "Amazon Bedrock Monitoring",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring.html"
    }
  ]
});
