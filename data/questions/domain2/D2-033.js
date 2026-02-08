window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-033",
  "domain": 2,
  "task": "2.4",
  "skill": "2.4.1",
  "type": "single",
  "difficulty": "medium",
  "question": "法律事務所が数千件の契約書ドキュメント（各20〜50ページ）を Amazon Bedrock の基盤モデルで要約する必要があります。リアルタイムの応答は不要で、翌営業日までに全件の要約が完了していれば十分です。処理結果は S3 に保存し、弁護士がダッシュボードで確認します。コスト効率を最大化しつつ、Lambda の15分のタイムアウト制限を超える長時間処理にも対応できるアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "契約書を S3 にアップロードし、Bedrock のバッチ推論ジョブ（CreateModelInvocationJob）で全件を非同期で一括処理し、完了後に EventBridge で通知を送信して結果を S3 に保存する"
    },
    {
      "id": "B",
      "text": "S3 イベント通知で Lambda 関数をトリガーし、各 Lambda が Bedrock の InvokeModel API を同期的に呼び出して1件ずつ要約を生成し、結果を S3 に書き込む"
    },
    {
      "id": "C",
      "text": "Step Functions で処理ワークフローを構成し、Map ステートで並列に Lambda 関数を起動して Bedrock の InvokeModel API を呼び出し、結果を DynamoDB に保存する"
    },
    {
      "id": "D",
      "text": "Amazon SQS キューに契約書のリファレンスを送信し、ECS Fargate タスクがキューからメッセージを取得して Bedrock の InvokeModel API を呼び出し、結果を S3 に保存する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Bedrock のバッチ推論ジョブは大量ドキュメントの非同期一括処理に最適化されており、リアルタイム推論よりも低コストで処理できます。ジョブ実行中のインフラ管理は不要で、Lambda のタイムアウト制限にも影響されません。EventBridge による完了通知で後続処理を自動化できます。（スキル2.4.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock バッチ推論は、大量ドキュメントの非同期処理とコスト効率の最大化の両方を直接満たします。インフラ管理が不要で、バッチ推論の割引料金が適用されるため、同期呼び出しと比較してコストを大幅に削減できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Lambda + InvokeModel の同期処理は実装が簡単であるものの、20〜50ページの契約書の要約処理が Lambda の15分タイムアウトを超える可能性があり、長時間処理への対応要件を満たしません。また、同期 API の同時呼び出し制限により数千件の処理でスロットリングが発生する可能性があります。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Step Functions + Lambda の並列処理はワークフロー管理が可能であるものの、各 Lambda の InvokeModel 同期呼び出しは Lambda のタイムアウト制限の影響を受けます。また、DynamoDB への保存はダッシュボードでの確認に S3 と比較して追加の統合開発が必要です。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。SQS + Fargate の構成はタイムアウト制限を回避できるものの、Fargate タスクの管理（コンテナイメージ構築、タスク定義、オートスケーリング設定）が必要であり、Bedrock のマネージドなバッチ推論と比較して運用負荷が大幅に高くなります。コスト面でも常時稼働のコンテナ費用が発生します。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock batch inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference.html"
    },
    {
      "title": "Amazon Bedrock inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    }
  ]
});
