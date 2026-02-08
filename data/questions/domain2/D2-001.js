window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-001",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、カスタマーサポート業務を自動化するために複数の専門エージェントを協調させるシステムを構築しています。注文確認エージェント、返品処理エージェント、テクニカルサポートエージェントがそれぞれ独立して動作し、ユーザーの問い合わせ内容に応じて適切なエージェントにルーティングする必要があります。このマルチエージェントオーケストレーションを AWS 上で最も効率的に実装する方法はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "各エージェントを個別の Lambda 関数として実装し、API Gateway で直接ルーティングする"
    },
    {
      "id": "B",
      "text": "AWS Agent Squad を使用してスーパーバイザーエージェントを構成し、各専門エージェントをサブエージェントとして登録する"
    },
    {
      "id": "C",
      "text": "Amazon SQS のキューを使って各エージェントにメッセージを振り分ける"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock の単一モデルにすべてのタスクを処理させるプロンプトを作成する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解は B です。AWS Agent Squad はマルチエージェントオーケストレーションフレームワークであり、スーパーバイザーエージェントが各サブエージェントの能力を理解し、ユーザーの問い合わせに基づいて適切なエージェントにルーティングします。A は手動ルーティングロジックの実装が必要で複雑になります。C はメッセージキューであり、インテリジェントなルーティング判断ができません。D は単一モデルではタスクの専門性や独立したスケーリングが実現できません。（スキル2.1.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Lambda + API Gateway の組み合わせはリクエスト処理が可能であるものの、手動ルーティングロジックの実装が必要となり、インテリジェントな協調とエージェント間の効率的なオーケストレーションの要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。AWS Agent Squad はマルチエージェントオーケストレーションとインテリジェントなルーティングの両方を直接満たします。特にスーパーバイザーエージェントによる自動ルーティングを最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Amazon SQS はメッセージ配信が可能であるものの、インテリジェントなルーティング判断ができず、エージェント間の協調オーケストレーションの要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。単一モデルでのタスク処理は実装が簡単であるものの、タスクの専門性と独立したスケーリングの要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Agents",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"
    },
    {
      "title": "Amazon Bedrock multi-agent collaboration",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-multi-agent-collaboration.html"
    }
  ]
});
