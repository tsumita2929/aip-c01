window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-003",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある旅行会社が、顧客の旅行計画を支援する AI エージェントを Amazon Bedrock Agents で構築しています。顧客が「来月の沖縄旅行の最適なプランを提案して」とリクエストした場合、エージェントはフライト検索API、ホテル予約API、天気予報API を動的に呼び出して情報を収集し、段階的に最終回答を組み立てる必要があります。各APIの呼び出し順序は事前に固定できず、前のステップの結果に応じて次のアクションが変わります。この要件を最も効率的に満たすアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock Agents の ReAct 推論モードを使用し、各APIをアクショングループとして登録する。エージェントが「推論→API呼び出し→結果確認」のサイクルを自律的に繰り返して最終回答を生成する"
    },
    {
      "id": "B",
      "text": "AWS Step Functions でフライト→ホテル→天気の固定順序のステートマシンを定義し、各ステップで Lambda 関数が対応 API を呼び出す"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のバッチ推論ジョブ（CreateModelInvocationJob）を使用して、3つのAPI呼び出し結果を事前に一括取得し、結果をS3に保存してから最終回答を生成する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock の Converse API を単一のプロンプトで呼び出し、すべての情報を1回のリクエストで生成させる"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Amazon Bedrock Agents の ReAct（Reasoning and Acting）推論モードでは、エージェントが「推論→行動（API呼び出し）→観察（結果確認）」のサイクルを動的に繰り返し、前ステップの結果に基づいて次のアクションを自律的に決定します。各APIをアクショングループとして登録することで、エージェントが必要に応じて動的にAPI呼び出し順序を決定できます。B の Step Functions は固定順序のワークフローであり、前の結果に応じた動的なAPI呼び出し順序の変更に対応できません。C のバッチ推論はリアルタイムの対話的処理には適しておらず、ジョブ完了まで待つ必要があるため応答遅延が発生します。D の単一プロンプト呼び出しではモデルが外部APIにアクセスできず、最新のフライト・ホテル情報を取得できません。（スキル2.1.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock Agents の ReAct 推論モードとアクショングループの組み合わせは、動的なAPI呼び出し順序決定と段階的な情報収集の要件を直接満たします。特にエージェントが前ステップの結果に基づいて次のアクションを自律的に決定できる点が要件に合致します。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Step Functions は信頼性の高いワークフロー実行が可能であるものの、フライト→ホテル→天気の固定順序であり、前の結果に応じてAPI呼び出し順序を動的に変更する要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。バッチ推論はS3からの大量データ一括処理に適しているものの、ジョブ完了までの待機時間が発生し、リアルタイムの対話的な旅行プラン提案の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Converse API の単一プロンプト呼び出しは低レイテンシーであるものの、モデル単体では外部APIにアクセスできず、最新のフライト料金やホテル空室情報を取得する要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Agents",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"
    },
    {
      "title": "Amazon Bedrock agent action groups",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-action-create.html"
    }
  ]
});
