window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-024",
  "domain": 2,
  "task": "2.3",
  "skill": "2.3.2",
  "type": "single",
  "difficulty": "medium",
  "question": "Eコマース企業が既存のマイクロサービスアーキテクチャに生成 AI 機能を追加しています。注文完了イベントが発生した際に、自動的にパーソナライズされたフォローアップメールを生成して送信したいと考えています。既存のイベント駆動アーキテクチャを活用する最も適切な構成はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "注文サービスが直接 Bedrock API を呼び出してメールを生成し、送信する"
    },
    {
      "id": "B",
      "text": "定期的に注文データベースをポーリングして新規注文を検出する"
    },
    {
      "id": "C",
      "text": "Amazon EventBridge で注文完了イベントをキャプチャし、Lambda 関数をトリガーして Bedrock でメール文面を生成し、Amazon SES で送信する"
    },
    {
      "id": "D",
      "text": "すべての注文に同一のテンプレートメールを送信する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解は C です。Amazon EventBridge を使用してイベント駆動型のアーキテクチャを構築し、注文完了イベントをトリガーとして Lambda 関数が Bedrock で生成 AI によるパーソナライズドメールを生成し、SES で送信する構成が最適です。A は注文サービスと AI 機能が密結合になります。B のポーリングはリアルタイム性が低く非効率です。D はパーソナライズではありません。（スキル2.3.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。注文サービスからの直接呼び出しは実装が簡単であるものの、注文サービスと AI 機能が密結合になり、既存のイベント駆動アーキテクチャの活用と疎結合の要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。定期的なポーリングはデータ検出が可能であるものの、リアルタイム性が低くリソースの無駄が発生し、イベント駆動アーキテクチャの活用の要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。EventBridge → Lambda → Bedrock → SES の構成は、既存のイベント駆動アーキテクチャの活用とパーソナライズされたメール生成の両方を直接満たします。特に疎結合な構成により最小の運用負荷で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。同一テンプレートメールの送信は効率的であるものの、パーソナライズされておらず、生成 AI を活用したパーソナライズの要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon EventBridge",
      "url": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html"
    },
    {
      "title": "Amazon Bedrock inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    }
  ]
});
