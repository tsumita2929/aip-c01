window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-047",
  "domain": 2,
  "task": "2.5",
  "skill": "2.5.5",
  "type": "multiple",
  "difficulty": "hard",
  "question": "企業が複雑なビジネスプロセスを自動化するエージェントアプリケーションを設計しています。Strands Agents と Agent Squad を使用したエージェント設計パターンとして正しいものを2つ選んでください。",
  "options": [
    {
      "id": "A",
      "text": "スーパーバイザーパターン：オーケストレーターエージェントが各専門エージェントにタスクを委任し、結果を統合する"
    },
    {
      "id": "B",
      "text": "すべてのエージェントを単一のプロセスで実行し、メモリを共有する"
    },
    {
      "id": "C",
      "text": "パイプラインパターン：複数のエージェントが順番に処理を行い、前のエージェントの出力を次のエージェントの入力として渡す"
    },
    {
      "id": "D",
      "text": "エージェントは常に1つだけ稼働し、複数のエージェントを同時に実行することはできない"
    },
    {
      "id": "E",
      "text": "エージェント間の通信は必ずデータベースを介して行う必要がある"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "正解は A と C です。スーパーバイザーパターン（A が正解）はオーケストレーターエージェントが全体を管理し、各専門エージェントにタスクを委任して結果を統合するパターンで、Agent Squad が提供するコア機能です。パイプラインパターン（C が正解）は複数のエージェントが直列に処理を行い、各エージェントの出力が次のエージェントの入力となるパターンです。B は単一プロセスでのメモリ共有は推奨されるパターンではありません。D は複数エージェントの同時実行は可能です。E はデータベース経由は必須ではありません。（スキル2.5.5）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。スーパーバイザーパターンはオーケストレーターエージェントによるタスク委任と結果統合の要件を直接満たします。特に Agent Squad のコア機能として最小の実装負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。単一プロセスでの実行は実装が簡単であるものの、メモリ共有方式はスケーラビリティと障害分離に問題があり、堅牢なエージェント設計の要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。パイプラインパターンは複数エージェントの直列処理と出力の連鎖的な受け渡しの要件を直接満たします。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。単一エージェントの稼働は管理が簡単であるものの、複数エージェントの同時実行や並行処理パターンもサポートされており、この説明は事実と異なります。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。データベースを介した通信は永続性があるものの、直接的なメッセージパッシングなど様々な方式が利用可能であり、データベース経由が必須という説明は事実と異なります。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock multi-agent collaboration",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-multi-agent-collaboration.html"
    },
    {
      "title": "Amazon Bedrock Agents",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"
    }
  ]
});
