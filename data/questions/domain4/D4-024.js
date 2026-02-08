window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-024",
  "domain": 4,
  "task": "4.3",
  "skill": "4.3.4",
  "type": "matching",
  "difficulty": "medium",
  "question": "ある企業が複数のAIエージェントを組み合わせたマルチエージェントシステムを Amazon Bedrock Agents で構築しています。各エージェントの役割とモニタリングで追跡すべき主要メトリクスを正しく対応付けてください。",
  "prompts": [
    {
      "id": "1",
      "text": "オーケストレーターエージェント（タスク分解・エージェント間の調整を担当）"
    },
    {
      "id": "2",
      "text": "検索エージェント（ナレッジベースからの情報取得を担当）"
    },
    {
      "id": "3",
      "text": "実行エージェント（外部API呼び出し・データ更新を担当）"
    },
    {
      "id": "4",
      "text": "検証エージェント（他エージェントの出力品質チェックを担当）"
    }
  ],
  "answers": [
    {
      "id": "A",
      "text": "API呼び出し成功率とレスポンスタイム"
    },
    {
      "id": "B",
      "text": "エージェント間メッセージパッシングのレイテンシーと成功率"
    },
    {
      "id": "C",
      "text": "検索精度（Precision@K）と検索レイテンシー"
    },
    {
      "id": "D",
      "text": "出力の正確性スコアと検証パス率"
    }
  ],
  "correctMatches": {
    "1": "B",
    "2": "C",
    "3": "A",
    "4": "D"
  },
  "explanation": "オーケストレーターエージェント（1-B）: タスク分解と他エージェントの調整が主な役割のため、エージェント間メッセージパッシングのレイテンシーと成功率が主要メトリクスです。検索エージェント（2-C）: ナレッジベースからの情報取得が役割のため、検索精度（Precision@K）と検索レイテンシーを追跡します。実行エージェント（3-A）: 外部APIとの連携が主な役割のため、API呼び出し成功率とレスポンスタイムを監視します。検証エージェント（4-D）: 品質チェックが役割のため、出力の正確性スコアと検証パス率を追跡します。マルチエージェントシステムでは、各エージェントの役割に応じた適切なメトリクスを設定することが、効果的なコーディネーション追跡の基盤となります。（スキル: 4.3.4）",
  "optionExplanations": {
    "1": {
      "correct": true,
      "text": "オーケストレーターエージェント → B（エージェント間メッセージパッシングのレイテンシーと成功率）: タスク分解と他エージェントの調整が主な役割のため、エージェント間のコミュニケーション品質が最も重要なメトリクスです。"
    },
    "2": {
      "correct": true,
      "text": "検索エージェント → C（検索精度 Precision@K と検索レイテンシー）: ナレッジベースからの情報取得が主な役割のため、検索結果の品質（精度）と速度（レイテンシー）を追跡します。"
    },
    "3": {
      "correct": true,
      "text": "実行エージェント → A（API呼び出し成功率とレスポンスタイム）: 外部 API 呼び出しとデータ更新が主な役割のため、API 連携の信頼性と速度を監視します。"
    },
    "4": {
      "correct": true,
      "text": "検証エージェント → D（出力の正確性スコアと検証パス率）: 他エージェントの出力品質チェックが主な役割のため、検証結果の品質と通過率を追跡します。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock エージェント",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"
    },
    {
      "title": "Amazon Bedrock エージェントのトレース",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html"
    },
    {
      "title": "Amazon CloudWatch による Amazon Bedrock のモニタリング",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-cw.html"
    }
  ]
});
