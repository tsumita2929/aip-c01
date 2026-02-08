window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-002",
  "domain": 3,
  "task": "3.1",
  "skill": "3.1.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある医療情報プラットフォーム企業が、Amazon Bedrock の基盤モデルを使用して患者向けの健康情報チャットボットを運用しています。コンプライアンスチームは、モデルの出力に有害なコンテンツや医学的に不正確な推奨事項が含まれていないことを継続的に評価し、モデルバージョン間の品質比較も行いたいと考えています。モデルの応答品質を定期的にベンチマーク評価するには、どのアプローチが最も適切ですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock ガードレールの CloudWatch メトリクス InvocationsIntervened を監視し、ガードレール介入率の推移を追跡することで出力品質を評価する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のモデル呼び出しログを Amazon S3 に保存し、Amazon Athena でクエリを実行して応答内容の統計分析を定期的に行う"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のモデル評価機能で毒性検出メトリクスを使用した自動評価ジョブを定期的に実行し、出力品質のトレンドをモニタリングする"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock のモデル評価機能で人間評価ワークフローを設定し、すべての応答に対して医療専門家のレビューを実施する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "Amazon Bedrock のモデル評価（FM Evaluation）機能では、毒性検出、正確性、堅牢性を含む複数のメトリクスで基盤モデルの出力品質を自動的に評価できます。自動評価ジョブを定期的に実行することで、出力品質のトレンドを体系的にモニタリングし、モデルバージョン間の比較も効率的に行えます。A の CloudWatch メトリクス InvocationsIntervened はガードレールが介入した回数を示しますが、ガードレールをすり抜けた品質問題や、介入の妥当性（過剰ブロック）は評価できません。B のモデル呼び出しログの Athena 分析は汎用的なログ分析であり、毒性や正確性など AI 固有の品質メトリクスを自動計算する機能はなく、カスタム分析ロジックの開発が必要です。D の全応答に対する人間評価は品質は高いですが、定期的なベンチマーク評価としてはコストと時間が過大であり、自動評価ジョブの方が効率的です。（スキル3.1.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。InvocationsIntervened メトリクスはガードレール介入回数を示すものの、ガードレールをすり抜けた品質問題や介入の妥当性（過剰ブロック）を評価できず、継続的な品質ベンチマーク評価という要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。モデル呼び出しログの Athena 分析は汎用的なログ分析であるものの、毒性・正確性などの AI 固有品質メトリクスの自動計算機能がなく、カスタム分析ロジックの開発が必要なため、効率的なベンチマーク評価という要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。Amazon Bedrock のモデル評価機能は毒性検出・正確性・堅牢性を含む複数のメトリクスで出力品質を自動評価でき、継続的な品質評価とモデルバージョン間の比較を直接満たします。特に定期的なベンチマーク評価を最小の運用負荷で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。すべての応答に対する人間評価は品質は高いものの、定期的なベンチマーク評価としてはコストと時間が過大で非効率であり、効率的な品質評価という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Model Evaluation",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html"
    },
    {
      "title": "Amazon Bedrock Model Evaluation Job Types",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-type.html"
    }
  ]
});
