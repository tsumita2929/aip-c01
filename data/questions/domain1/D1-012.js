window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-012",
  "domain": 1,
  "task": "1.2",
  "skill": "1.2.1",
  "type": "multiple",
  "difficulty": "medium",
  "question": "ある企業が、Amazon Bedrock でカスタマーサポート用チャットボットに使用する FM の評価を実施しています。Bedrock のモデル評価ジョブで、モデルの出力品質を適切に評価するために使用すべきメトリクスまたは手法を2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "ROUGE スコアや BERTScore などの自動評価メトリクスで、モデルの出力とリファレンス回答の類似度を定量的に測定する"
    },
    {
      "id": "B",
      "text": "モデルの推論レイテンシーとスループットを CloudWatch メトリクスで測定し、パフォーマンス要件を検証する"
    },
    {
      "id": "C",
      "text": "人間による評価ワークフローを設定し、正確性・関連性・有用性を評価者が主観的にスコアリングする"
    },
    {
      "id": "D",
      "text": "SageMaker Clarify のバイアス検出機能でモデルの公平性を測定し、特定のグループに対する偏りを検出する"
    },
    {
      "id": "E",
      "text": "AWS Cost Explorer でモデルごとの推論コストを分析し、コストパフォーマンスを比較する"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "A: Bedrock のモデル評価ジョブでは、ROUGE スコアや BERTScore などの自動評価メトリクスを使用してモデルの出力品質を定量的に測定できます。C: 人間による評価ワークフローを設定し、自動メトリクスでは捉えられない正確性・関連性・有用性を評価できます。推論レイテンシーの CloudWatch 測定（B）は運用上重要ですが、モデル評価ジョブの一部ではなく出力品質の評価メトリクスではありません。SageMaker Clarify（D）はバイアス検出に有効ですが、Bedrock のモデル評価ジョブとは異なるサービスです。Cost Explorer（E）はコスト分析ツールであり、モデルの出力品質を評価するメトリクスではありません。（スキル1.2.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。ROUGE スコアや BERTScore などの自動評価メトリクスは、モデル出力とリファレンス回答の類似度を定量的に測定する要件を直接満たします。特にモデル評価ジョブ内で自動的に実行でき最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。CloudWatch での推論レイテンシー測定は運用上のパフォーマンス監視に有用な点はあるものの、モデル評価ジョブの出力品質メトリクスではなく、出力品質の評価要件を満たせません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。人間による評価ワークフローは、自動メトリクスでは捉えられない正確性・関連性・有用性の評価要件を直接満たします。特にモデル評価ジョブ内で評価者のスコアリングを体系的に管理できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。SageMaker Clarify はバイアス検出に有効な点はあるものの、Bedrock のモデル評価ジョブとは異なるサービスであり、出力品質の直接評価には対応していません。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。Cost Explorer はコスト分析に有用な点はあるものの、モデルの出力品質を評価するメトリクスではなく、品質評価の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock モデル評価",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html"
    },
    {
      "title": "Amazon Bedrock モデル評価ジョブの作成",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-create.html"
    }
  ]
});
