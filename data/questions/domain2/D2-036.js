window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-036",
  "domain": 2,
  "task": "2.4",
  "skill": "2.4.4",
  "type": "single",
  "difficulty": "hard",
  "question": "メディア企業がコンテンツ制作支援のための生成 AI プラットフォームを構築しています。ユーザーのリクエスト内容に応じて、テキスト記事の作成には高品質な大規模言語モデル（レイテンシー許容）、SNS 投稿の生成にはコスト効率の良い軽量モデル（低レイテンシー必須）、画像生成には Stable Diffusion を動的に選択する必要があります。さらに、各モデルのレイテンシーとコストの実績メトリクスに基づいて同一カテゴリ内の最適なモデルを選択したいと考えています。この要件を最小の運用負荷で実現するアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock のインテリジェントプロンプトルーターを使用してリクエスト内容に基づくモデル選択を行い、CloudWatch メトリクスで各モデルのレイテンシーとコストを監視する"
    },
    {
      "id": "B",
      "text": "API Gateway でリクエストの URL パスに基づいて異なる Lambda 関数にルーティングし、各 Lambda 関数が固定のモデル ID で Bedrock API を呼び出す"
    },
    {
      "id": "C",
      "text": "Lambda 関数で Bedrock の Converse API を呼び出す前にリクエスト内容を分類する軽量モデルを実行し、分類結果に基づいてモデルを選択するルーティングレイヤーを構築し、DynamoDB にメトリクスを記録して定期的にルーティングルールを更新する"
    },
    {
      "id": "D",
      "text": "Step Functions のChoice ステートでリクエストのメタデータフィールドに基づいてモデルを分岐し、各ブランチの Lambda 関数が固定のモデルで Bedrock API を呼び出す"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Amazon Bedrock のインテリジェントプロンプトルーターは、リクエスト内容に基づくモデル選択をマネージド機能として提供します。コスト・品質・レイテンシーのトレードオフに基づいて最適なモデルを自動選択でき、カスタムルーティングロジックの構築が不要です。CloudWatch との統合でメトリクス監視も実現できます。（スキル2.4.4）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock のインテリジェントプロンプトルーターは、コンテンツベースのモデル選択とメトリクスに基づく最適化の両方をマネージド機能として直接満たします。ルーティングロジックの独自実装が不要であり、運用負荷を最小化できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。URL パスベースのルーティングはリクエスト振り分けが可能であるものの、ユーザーのリクエスト内容を自動分類する機能がなく、クライアント側で適切なエンドポイントを選択する必要があります。また、固定モデル ID のためメトリクスに基づく動的なモデル選択の要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。分類モデル + カスタムルーティングレイヤーの構成はリクエスト分類と動的選択が可能であるものの、分類モデルの管理、DynamoDB でのメトリクス記録、ルーティングルールの定期更新という複数の独自実装が必要であり、Bedrock のマネージドルーターと比較して運用負荷が大幅に高くなります。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Step Functions の Choice ステートによるルーティングはワークフロー管理が可能であるものの、メタデータフィールドに基づく静的な分岐のためリクエスト内容の自動分類ができず、メトリクスに基づく動的モデル選択の要件も満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock intelligent prompt router",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-router.html"
    },
    {
      "title": "Amazon Bedrock model access",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html"
    }
  ]
});
