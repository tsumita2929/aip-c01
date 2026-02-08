window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-016",
  "domain": 4,
  "task": "4.2",
  "skill": "4.2.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある医療情報プラットフォームが Amazon Bedrock の Knowledge Bases と Amazon OpenSearch Serverless を使用した RAG システムを運用しています。検索クエリの分析から、ユーザーが入力する医療用語に略語や表記揺れが多く、検索精度が低下していることが判明しました。検索パフォーマンスを改善するための最も効果的なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "OpenSearch Serverless の OCU（OpenSearch Compute Unit）を増やしてコンピューティング能力を強化する"
    },
    {
      "id": "B",
      "text": "検索結果の件数を50件に増やしてリコール率を向上させる"
    },
    {
      "id": "C",
      "text": "ベクトルの次元数を2倍に増やしてより精密なセマンティック表現を実現する"
    },
    {
      "id": "D",
      "text": "クエリ前処理パイプラインを実装し、LLMを使って略語展開・用語正規化・クエリ拡張を行ってから検索を実行する"
    }
  ],
  "correctAnswers": [
    "D"
  ],
  "explanation": "正解はDです。クエリ前処理パイプラインにより、ユーザーの入力を検索に最適な形に変換できます。LLMを使用して略語を正式名称に展開し（例: 'HTN' → '高血圧症'）、表記揺れを正規化し、関連する同義語でクエリを拡張することで、検索精度を大幅に向上させることができます。AのOCU増加はコンピューティング能力の問題であり、検索精度の改善にはなりません。Bの検索件数増加はリコール率向上に一定の効果がありますが、ノイズも増えるため精度改善としては非効率です。Cのベクトル次元数増加はモデルの変更が必要で、表記揺れの問題を直接解決しません。（スキル: 4.2.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。OCU の増加はコンピューティング能力の強化には寄与するものの、検索結果の精度やクエリの品質を改善するものではなく、検索精度向上の要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。検索結果の件数を増やすとリコール率は向上するものの、関連性の低い結果（ノイズ）も増えるため、検索精度向上の要件を十分に満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。ベクトルの次元数を増やすにはエンベディングモデル自体の変更が必要であり、ユーザー入力の略語や表記揺れの問題を直接解決しないため、検索精度向上の要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。クエリ前処理パイプラインは、略語・表記揺れへの対応と検索精度向上の両方を直接満たします。特に LLM を使って略語展開・用語正規化・クエリ拡張を行うことで、最小の運用負荷で検索精度を大幅に向上させることができます。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock のナレッジベース",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
    },
    {
      "title": "Amazon OpenSearch Serverless",
      "url": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless.html"
    }
  ]
});
