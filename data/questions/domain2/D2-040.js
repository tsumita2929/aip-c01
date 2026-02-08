window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-040",
  "domain": 2,
  "task": "2.4",
  "skill": "2.4.4",
  "type": "multiple",
  "difficulty": "hard",
  "question": "グローバル広告代理店が Amazon Bedrock を使用して多言語のマーケティングコピーを生成するプラットフォームを構築しています。日本語コピーには Claude 3.5 Sonnet、英語コピーには Llama 3 70B、簡易な翻訳確認には Claude 3 Haiku を使用しています。リクエストの言語と複雑さに応じたモデル選択を自動化し、モデル障害時のフォールバックも実装する必要があります。これらの要件を満たすモデルルーティング戦略として正しいものを2つ選んでください。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock のクロスリージョン推論を有効にし、プライマリリージョンのモデルが利用不可の場合に別リージョンの同一モデルに自動フォールバックするよう構成する"
    },
    {
      "id": "B",
      "text": "Lambda 関数でリクエストの言語を検出し、言語に応じた最適なモデル ID を選択するコンテンツベースルーティングを実装し、選択したモデルの InvokeModel API がエラーを返した場合はフォールバックモデルに切り替える"
    },
    {
      "id": "C",
      "text": "API Gateway のリクエストパラメータに基づいてすべてのリクエストをラウンドロビンで3つのモデルに均等分配し、レスポンスの品質に関わらず結果を返す"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock のインテリジェントプロンプトルーターで言語と複雑さに基づくルーティングプロファイルを構成し、コストと品質のトレードオフに基づいて最適なモデルを自動選択する"
    },
    {
      "id": "E",
      "text": "CloudWatch アラームでモデルのエラー率を監視し、閾値を超えた場合に SNS 通知を送信してオペレーターが手動でルーティング設定を変更する"
    }
  ],
  "correctAnswers": [
    "B",
    "D"
  ],
  "explanation": "正解は B と D です。Lambda でのコンテンツベースルーティングとフォールバック実装（B）は、言語検出に基づくモデル選択とエラー時の自動フォールバックを実現します。Bedrock のインテリジェントプロンプトルーター（D）は、リクエスト内容に基づくモデル選択とコスト・品質のトレードオフ最適化をマネージド機能で提供します。（スキル2.4.4）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。クロスリージョン推論は同一モデルの可用性向上が可能であるものの、言語やタスクの複雑さに応じた異なるモデルの選択機能は提供せず、コンテンツベースのモデルルーティングの要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。Lambda でのコンテンツベースルーティングは、言語検出に基づくモデル選択とエラー時のフォールバックの両方を直接満たします。カスタムロジックにより言語や複雑さに応じた柔軟なルーティング制御が可能です。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。ラウンドロビン分配はリクエストの言語や複雑さを考慮しないため、日本語コピーが Llama 3 に送信されるなどモデルの専門性を活かせず、言語に応じた最適モデル選択の要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。Bedrock のインテリジェントプロンプトルーターは、リクエスト内容に基づくモデル選択とコスト・品質のトレードオフ最適化をマネージド機能で直接満たします。ルーティングロジックの独自実装が不要で運用負荷が低くなります。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。CloudWatch + SNS による監視と通知はモデル障害の検知が可能であるものの、手動でのルーティング変更が必要であり、自動フォールバックの要件を満たしません。障害発生からルーティング変更までの間、サービス品質が低下し続けます。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock intelligent prompt router",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-router.html"
    },
    {
      "title": "Amazon Bedrock cross-region inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html"
    }
  ]
});
