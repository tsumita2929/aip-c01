window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-031",
  "domain": 3,
  "task": "3.4",
  "skill": "3.4.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、Amazon Bedrock エージェントを使用して顧客の注文管理タスクを自動化するAIアシスタントを構築しています。エージェントは注文検索、在庫確認、配送状況確認などのアクショングループを使用します。ユーザーがAIアシスタントの意思決定プロセスを理解し、なぜ特定のアクションが実行されたかを確認できるようにする必要があります。最も適切なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock エージェントの各アクショングループの Lambda 関数に CloudWatch Logs を設定し、関数の入出力をログに記録してユーザーに表示する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のモデル呼び出しログを有効化し、エージェントの各ステップの入出力データを S3 に保存して、ユーザーがダウンロードできるようにする"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock エージェントのトレース機能を有効化し、エージェントの推論過程（PreProcessing の入力分類、Orchestration の思考チェーンとアクショングループ選択理由、PostProcessing の応答整形）をユーザーに可視化する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock エージェントの応答に、使用したアクショングループの名称一覧をフッターとして自動付加するカスタムポストプロセッサを実装する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "Amazon Bedrock エージェントのトレース機能は、エージェントの推論過程を3つのフェーズ（PreProcessing: ユーザー入力の分類、Orchestration: 思考チェーン・アクショングループの選択理由・ナレッジベース検索結果・中間結果、PostProcessing: 最終応答の整形）で詳細に可視化できます。これにより、ユーザーはなぜ特定のアクションが実行されたかを推論チェーンから理解し、結果の信頼性を判断できます。A の Lambda 関数のログ記録はアクショングループの入出力を追跡できますが、エージェントがなぜそのアクショングループを選択したかの推論過程（思考チェーン）は含まれず、ログの解析とユーザーへの表示のカスタム実装も必要です。B のモデル呼び出しログは技術的な詳細を記録しますが、S3 からのダウンロードはユーザーフレンドリーではなく、トレース機能のような構造化された推論過程の可視化ではありません。D のアクショングループ名称の付加は実行されたアクションの一覧は示しますが、選択理由や推論過程の透明性は提供しません。（スキル3.4.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Lambda ログはアクショングループの入出力を記録できるものの、エージェントがなぜそのアクションを選択したかの推論チェーンは含まれず、意思決定プロセスの理解という要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。モデル呼び出しログの S3 保存は技術的詳細を記録できるものの、ユーザーフレンドリーではなく構造化された推論過程の可視化を提供せず、ユーザーが意思決定プロセスを理解するという要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。トレース機能で PreProcessing/Orchestration/PostProcessing の各フェーズの推論過程を構造化して可視化し、意思決定プロセスの理解とアクション選択理由の確認を直接満たします。特に推論過程の透明性を最小の運用負荷で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。アクショングループ名称の一覧付加は実行されたアクションを示せるものの、選択理由や推論過程の透明性は提供せず、なぜ特定のアクションが実行されたかの理解という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Agents Trace",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-trace.html"
    },
    {
      "title": "Amazon Bedrock Agents",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"
    }
  ]
});
