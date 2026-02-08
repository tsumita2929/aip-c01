window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-039",
  "domain": 3,
  "task": "3.4",
  "skill": "3.4.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある出版社が Amazon Bedrock を使用して書籍の要約を自動生成するシステムを開発しています。品質保証チームは、生成された要約の品質を継続的に監視し、品質が低下した場合に自動的に対応する仕組みを構築する必要があります。具体的には、要約の正確性・関連性・有害性を定期的に評価し、品質ベースラインを下回った場合にプロンプトの切り替えやモデルバージョンのロールバックを自動実行したいと考えています。最も適切なアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock のモデル評価機能で LLM-as-a-judge による自動評価ジョブを EventBridge のスケジュールルールで定期実行し、正確性・関連性・有害性のスコアをベースラインと比較する。スコア低下時に SNS + Lambda でプロンプトテンプレートの切り替え（Amazon Bedrock Prompt Management のエイリアス変更）を自動実行する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のモデル呼び出しログを S3 に保存し、Amazon Athena のスケジュールクエリで応答の平均トークン数とレイテンシを日次集計する。トークン数の異常な増減を検出した場合に CloudWatch アラーム経由で Lambda を起動し、モデルのスロットリングを実施する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock ガードレールの CloudWatch メトリクス（InvocationsIntervened）を監視し、ガードレール違反率が閾値を超えた場合に SNS で品質保証チームに通知する。チームが手動でプロンプトを修正し、修正後にモデル評価ジョブで品質を確認する"
    },
    {
      "id": "D",
      "text": "Amazon CloudWatch Logs Insights で Bedrock のモデル呼び出しログをリアルタイム分析し、応答に特定の品質低下パターン（繰り返し、無関係な内容）が含まれる頻度をカスタムメトリクスとして記録する。メトリクスの異常検出アラームで Lambda を起動し、新しいモデルバージョンへの自動フェイルオーバーを実行する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Amazon Bedrock のモデル評価機能は、LLM-as-a-judge アプローチで要約の正確性・関連性・有害性を自動的に評価できます。EventBridge のスケジュールルールで定期実行し、評価スコアをベースラインと比較することで品質の経時的変化を検出できます。品質低下時に SNS + Lambda で Bedrock Prompt Management のプロンプトエイリアスを切り替えることで、プロンプトの自動ロールバックが可能です。これらはマネージドサービスの組み合わせで、カスタム実装が最小限です。B の Athena 日次集計はトークン数やレイテンシの統計分析に有用ですが、これらは表層的な指標であり、要約の正確性・関連性・有害性といった意味的な品質評価ではありません。また、スロットリングは品質低下への対応としては不適切です。C のガードレール違反率の監視は有害コンテンツの検出に有効ですが、正確性や関連性の評価はガードレールの範囲外であり、手動対応ではプロンプト切り替えの自動実行という要件を満たしません。D の CloudWatch Logs Insights でのパターン分析はカスタムメトリクスの作成が可能ですが、テキストパターンマッチングによる品質評価は LLM-as-a-judge の意味的評価と比較して精度が低く、パターン定義の保守も必要です。（スキル3.4.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。モデル評価機能の LLM-as-a-judge + EventBridge 定期実行 + SNS + Lambda + Prompt Management エイリアス切り替えにより、品質の定期評価とベースライン比較、品質低下時の自動プロンプト切り替えを直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。トークン数とレイテンシは表層的な指標であるものの、正確性・関連性・有害性の意味的評価ではなく、スロットリングは品質低下への適切な対応でもないため、要約品質の評価と自動対応という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。ガードレール違反率の監視は有害コンテンツ検出に有効であるものの、正確性・関連性はガードレールの範囲外であり、手動対応ではプロンプト切り替えの自動実行を満たさないため、包括的な品質監視と自動対応という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。テキストパターンマッチングはカスタムメトリクス作成に使用できるものの、LLM-as-a-judge の意味的評価と比較して精度が低く、パターン定義の保守も必要なため、正確な品質評価という要件に対して最適ではありません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Model Evaluation",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html"
    },
    {
      "title": "Amazon Bedrock Prompt Management",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html"
    }
  ]
});
