window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-035",
  "domain": 2,
  "task": "2.4",
  "skill": "2.4.3",
  "type": "multiple",
  "difficulty": "medium",
  "question": "EC サイト運営企業が Amazon Bedrock を使用した商品レコメンデーションチャットボットを構築しています。ブラックフライデーなどのセール期間にリクエストが急増し、Bedrock API の ThrottlingException が頻発して一部のユーザーにエラーが返される問題が発生しています。サービスの可用性を維持しつつ、ユーザー体験を損なわないために実装すべき対策を2つ選んでください。",
  "options": [
    {
      "id": "A",
      "text": "AWS SDK の組み込みリトライ設定でエクスポネンシャルバックオフとジッターを有効にし、ThrottlingException 発生時に自動リトライを行うとともに、最大リトライ回数を適切に設定する"
    },
    {
      "id": "B",
      "text": "SQS キューを Bedrock API 呼び出しの前段に配置し、リクエストをバッファリングしてスロットリング上限以下のレートで順次処理する"
    },
    {
      "id": "C",
      "text": "プライマリモデルが ThrottlingException を返す場合に、同等の機能を持つ別のモデル ID にフォールバックするルーティングロジックを Lambda 関数に実装する"
    },
    {
      "id": "D",
      "text": "API Gateway のスロットリング設定でリクエストレートを Bedrock のクォータ以下に制限し、超過リクエストには429エラーを即座に返す"
    },
    {
      "id": "E",
      "text": "Bedrock API のエンドポイントを複数リージョンに分散し、Route 53 のレイテンシーベースルーティングで最も近いリージョンに振り分ける"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "正解は A と C です。エクスポネンシャルバックオフとジッターによる自動リトライ（A）は、一時的なスロットリングからの回復を自動化し、サービスの安定性を向上させます。別モデルへのフォールバック（C）は、プライマリモデルのスロットリング時にも継続的にレスポンスを提供でき、ユーザー体験を維持できます。（スキル2.4.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。エクスポネンシャルバックオフとジッターによる自動リトライは、一時的なスロットリングへの耐障害性とサービス過負荷の防止の両方を直接満たします。AWS SDK の組み込み機能を活用することで追加実装なしで実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。SQS によるリクエストバッファリングはスロットリングの回避が可能であるものの、チャットボットはリアルタイムの応答が必要であり、キューによる待ち時間の増加はユーザー体験を損なうため、即時応答の要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。別モデルへのフォールバックは、プライマリモデルのスロットリング時にもユーザーへの継続的なレスポンス提供を直接満たします。同等の機能を持つ別モデルに切り替えることで、サービスの可用性を維持できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。API Gateway のスロットリングは Bedrock への過負荷防止が可能であるものの、超過リクエストに対して即座に429エラーを返すため、ユーザー体験を損なわないという要件を満たしません。ユーザーにはエラーが表示されます。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。マルチリージョン分散はスケーラビリティの向上が可能であるものの、リージョンごとに Bedrock のモデルアクセス設定、ナレッジベース、プロンプト設定の複製が必要となり、運用負荷が大幅に増加します。また、商品データの同期も複雑になります。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock API error handling",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/api-retries.html"
    },
    {
      "title": "AWS error retries and exponential backoff",
      "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/retry-backoff.html"
    }
  ]
});
