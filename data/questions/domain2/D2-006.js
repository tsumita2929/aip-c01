window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-006",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.5",
  "type": "single",
  "difficulty": "easy",
  "question": "保険会社が Amazon Bedrock Agents を使用して保険金請求の処理を自動化しています。請求額が50万円未満の場合はエージェントが自動承認しますが、50万円以上の場合は人間の査定担当者が確認してから処理を進める必要があります。また、査定担当者のレビュー中もエージェントのセッション状態を維持し、承認後に処理を再開する必要があります。この Human-in-the-loop パターンを最も運用負荷が低い方法で実装するアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Bedrock Agents のユーザー確認機能（Return Control）を使用して、50万円以上の請求時にエージェントの実行を一時停止し、Amazon SNS で査定担当者に通知を送信する。担当者が承認後、InvokeAgent APIで処理を再開する"
    },
    {
      "id": "B",
      "text": "すべての請求を自動処理後に DynamoDB に記録し、CloudWatch Events で日次バッチジョブをトリガーして、50万円以上の請求を査定担当者にメールで一覧送付する"
    },
    {
      "id": "C",
      "text": "Lambda 関数で金額を判定し、50万円以上の場合は SQS キューに送信する。査定担当者が SQS メッセージを手動で確認し、別の Lambda 関数を手動実行して処理を再開する"
    },
    {
      "id": "D",
      "text": "API Gateway + Lambda で独自の承認ワークフローを構築し、DynamoDB でセッション状態を管理する。承認状態の変更を DynamoDB Streams で検出してエージェントを再起動する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Bedrock Agents のユーザー確認機能（Return Control）はエージェントの実行を一時停止して外部の確認を待つネイティブ機能であり、セッション状態も自動的に維持されます。SNS による通知と InvokeAgent API での再開を組み合わせることで、カスタムコードを最小限に抑えた Human-in-the-loop を実現できます。B は自動処理後の日次バッチレビューであり、承認前に50万円以上の請求が処理されてしまうため事前承認の要件を満たしません。C は SQS と手動 Lambda 実行の組み合わせでは、エージェントのセッション状態が維持されず処理再開時にコンテキストが失われます。D は独自の承認ワークフローとセッション管理の構築が必要で、運用負荷が高くなります。（スキル2.1.5）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock Agents のユーザー確認機能（Return Control）と SNS 通知の組み合わせは、事前承認とセッション状態維持の両方をネイティブ機能で満たし、最小の運用負荷で Human-in-the-loop を実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。日次バッチの事後レビューでは50万円以上の請求が承認前に自動処理されてしまい、高額請求の事前承認の要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。SQS と手動 Lambda 実行ではエージェントのセッション状態（会話コンテキスト、処理途中のデータ）が維持されず、承認後の処理再開時にコンテキストが失われるため、セッション維持の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。独自の承認ワークフローと DynamoDB によるセッション管理は実現可能であるものの、カスタムコードの開発・保守が必要であり、最小の運用負荷の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Agents",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"
    },
    {
      "title": "AWS Step Functions",
      "url": "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html"
    }
  ]
});
