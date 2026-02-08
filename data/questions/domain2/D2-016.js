window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-016",
  "domain": 2,
  "task": "2.2",
  "skill": "2.2.1",
  "type": "single",
  "difficulty": "hard",
  "question": "大手メディア企業が生成 AI を使ったコンテンツ生成システムを運用しています。日中は安定した高トラフィックがあり、レイテンシーの一貫性が求められます。一方で、夜間のバッチ処理では大量の記事を一括生成します。このワークロード特性に最も適したデプロイ戦略はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "すべてのワークロードを Bedrock オンデマンドで処理する"
    },
    {
      "id": "B",
      "text": "EC2 スポットインスタンスですべてのワークロードを処理する"
    },
    {
      "id": "C",
      "text": "夜間はシステムを停止し、翌朝にまとめて処理する"
    },
    {
      "id": "D",
      "text": "日中のリアルタイム処理には Bedrock プロビジョンドスループットを使用し、夜間のバッチ処理には Amazon Bedrock のバッチ推論（CreateModelInvocationJob）を使用するハイブリッド構成にする"
    }
  ],
  "correctAnswers": [
    "D"
  ],
  "explanation": "正解は D です。ハイブリッドデプロイ戦略が最適です。日中の安定した高トラフィックには Bedrock プロビジョンドスループットで一貫したレイテンシーを確保し、夜間のバッチ処理には Amazon Bedrock のバッチ推論（CreateModelInvocationJob）で大量の記事を一括生成します。A のオンデマンドのみでは高トラフィック時にレイテンシーが不安定になる可能性があります。B のスポットインスタンスは中断リスクがあり、リアルタイム処理には不向きです。C はビジネス要件を満たしません。（スキル2.2.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。オンデマンドモードは柔軟性があるものの、高トラフィック時にレイテンシーが不安定になる可能性があり、レイテンシーの一貫性の要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。EC2 スポットインスタンスはコスト効率が良いものの、中断リスクがあり、リアルタイム処理のレイテンシー一貫性の要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。夜間のシステム停止は運用が簡単であるものの、夜間バッチ処理のビジネス要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。日中のプロビジョンドスループットと夜間のバッチ推論のハイブリッド構成は、レイテンシーの一貫性と大量バッチ処理の両方を直接満たします。特にワークロード特性に応じた使い分けにより最小のコストで実現できます。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock provisioned throughput",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html"
    },
    {
      "title": "Amazon Bedrock batch inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference.html"
    }
  ]
});
