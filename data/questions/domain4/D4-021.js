window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-021",
  "domain": 4,
  "task": "4.3",
  "skill": "4.3.5",
  "type": "single",
  "difficulty": "hard",
  "question": "ある企業が Amazon OpenSearch Serverless をベクトルストアとして使用した RAG システムを運用しています。運用開始から6か月が経過し、データ量の増加に伴い検索レイテンシーが徐々に悪化しています。ベクトルストアの運用を最適化するために最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "検索レイテンシーが悪化するたびに手動で OpenSearch Serverless の OCU を増やす"
    },
    {
      "id": "B",
      "text": "6か月以上前のデータをすべて削除してインデックスサイズを縮小する"
    },
    {
      "id": "C",
      "text": "ベクトルストアのパフォーマンスメトリクス（検索レイテンシー、インデックスサイズ、クエリスループット）を継続的にモニタリングし、自動インデックス最適化とデータ品質検証を実装する"
    },
    {
      "id": "D",
      "text": "ベクトルストアを Amazon DynamoDB に移行してスケーラビリティを向上させる"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解はCです。ベクトルストアの継続的なパフォーマンスモニタリングにより、検索レイテンシー、インデックスサイズ、クエリスループットの傾向を把握し、問題が深刻化する前に対処できます。自動インデックス最適化（再インデックス、パラメータチューニング）とデータ品質検証（重複ベクトルの除去、古いエンベディングの更新）により、持続的にパフォーマンスを維持できます。Aの手動OCU増加は反応的で、根本原因（インデックスの最適化不足やデータ品質の劣化）を解決しません。Bの一律データ削除はビジネス上必要な情報も失う可能性があります。DのDynamoDB移行はベクトル検索に最適化されておらず、パフォーマンスが改善する保証がありません。（スキル: 4.3.5）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。手動で OCU を増やす方法はスループット向上には寄与するものの、反応的な対応であり根本原因（インデックスの最適化不足やデータ品質の劣化）を解決しないため、持続的なパフォーマンス維持の要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。6か月以上前のデータを一律に削除するとインデックスサイズは縮小するものの、ビジネス上必要な情報も失われる可能性があり、持続的なパフォーマンス維持の要件を適切に満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。継続的なパフォーマンスモニタリングと自動インデックス最適化は、検索レイテンシー改善と持続的なパフォーマンス維持の両方を直接満たします。特にメトリクスの傾向把握と自動最適化により、問題が深刻化する前に最小の運用負荷で対処できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。DynamoDB はキーバリューストアでありベクトル検索に最適化されていないため、検索レイテンシー改善の要件を満たす保証がありません。"
    }
  },
  "references": [
    {
      "title": "Amazon OpenSearch Serverless",
      "url": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless.html"
    },
    {
      "title": "Amazon Bedrock のナレッジベース",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
    }
  ]
});
