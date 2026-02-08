window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-008",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.7",
  "type": "single",
  "difficulty": "medium",
  "question": "開発チームが MCP サーバーのホスティング先を決定しています。要件として、複数のデータベース接続を維持し、ファイルシステムへの永続的なアクセスが必要で、長時間実行される複雑なツール処理を行います。最も適切なホスティング方法はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "AWS Lambda で MCP サーバーをホストし、ステートレスに処理する"
    },
    {
      "id": "B",
      "text": "Amazon S3 に MCP サーバーの設定を保存して静的にホストする"
    },
    {
      "id": "C",
      "text": "Amazon CloudFront でMCPサーバーをエッジにデプロイする"
    },
    {
      "id": "D",
      "text": "Amazon ECS（Fargate）で MCP サーバーをコンテナとしてホストする"
    }
  ],
  "correctAnswers": [
    "D"
  ],
  "explanation": "正解は D です。複数のデータベース接続の維持、ファイルシステムへの永続アクセス、長時間実行処理が要件の場合、Amazon ECS（Fargate）が適切です。ECS はステートフルなコンテナを実行でき、永続的な接続やストレージをサポートします。A の Lambda はステートレスで実行時間に制限（最大15分）があり、永続的な接続の維持に向きません。B の S3 は静的ファイルホスティングで、サーバー処理は実行できません。C の CloudFront は CDN であり、MCP サーバーのホスティングには適しません。（スキル2.1.7）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Lambda はサーバーレスで手軽にデプロイできるものの、ステートレスで実行時間に制限（最大15分）があり、永続的なデータベース接続の維持やファイルシステムへの永続アクセスの要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Amazon S3 はデータ保存が可能であるものの、静的ファイルホスティングであり、サーバーサイドの処理実行やデータベース接続の要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Amazon CloudFront はコンテンツ配信が可能であるものの、CDN であり、MCP サーバーのような動的処理のホスティングや永続接続の要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。Amazon ECS（Fargate）は永続的なデータベース接続、ファイルシステムアクセス、長時間実行処理の要件をすべて直接満たします。特にステートフルなコンテナ実行を最小の運用負荷で実現できます。"
    }
  },
  "references": [
    {
      "title": "Amazon ECS on AWS Fargate",
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html"
    },
    {
      "title": "AWS Lambda function configuration",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html"
    }
  ]
});
