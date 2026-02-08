window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-008",
  "domain": 5,
  "task": "5.1",
  "skill": "5.1.8",
  "type": "single",
  "difficulty": "easy",
  "question": "あるテクノロジー企業が、複数の生成AIモデルの評価結果をステークホルダーに定期的にレポートする必要があります。モデルごとの品質スコア、レイテンシー、コストの推移を時系列で視覚化し、モデル間の比較ダッシュボードを自動更新で提供したいと考えています。この要件を最も適切に満たすAWSサービスの組み合わせはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon CloudWatch のカスタムダッシュボードにメトリクスをすべて手動で追加する"
    },
    {
      "id": "B",
      "text": "Amazon Athena でクエリを手動実行し、結果をCSVでエクスポートしてExcelで視覚化する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のモデル評価結果を Amazon S3 に保存し、Amazon QuickSight でダッシュボードを作成して自動更新スケジュールを設定する"
    },
    {
      "id": "D",
      "text": "AWS Cost Explorer のみを使用して、モデルの使用コストのみを視覚化する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解はCです。Amazon Bedrock のモデル評価結果を S3 に保存し、QuickSight でダッシュボードを作成するアプローチは、品質スコア、レイテンシー、コストの時系列視覚化とモデル比較を自動更新で提供する要件に最適です。QuickSight は SPICE エンジンによるデータ自動更新、インタラクティブなダッシュボード、複数データソースの統合をサポートしています。AのCloudWatch カスタムダッシュボードはインフラメトリクスの可視化には適していますが、モデル評価結果の詳細な比較視覚化やステークホルダー向けのレポート機能は限定的です。BのAthena + Excel は自動更新の要件を満たさず、手動運用が必要になります。DのCost Explorer はコスト分析に特化しており、品質スコアやレイテンシーの視覚化には対応していません。（スキル5.1.8）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。CloudWatch カスタムダッシュボードはインフラメトリクスの可視化には適しているものの、モデル評価結果の詳細な比較視覚化やステークホルダー向けのレポート機能は限定的です。自動更新での比較ダッシュボードの要件を十分に満たせません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Athena でクエリを手動実行して CSV エクスポートし Excel で視覚化する方法はデータ分析には使えるものの、自動更新の要件を満たさず手動運用が必要になります。"
    },
    "C": {
      "correct": true,
      "text": "正解です。S3 に評価結果を保存し QuickSight でダッシュボードを作成するアプローチは、時系列視覚化、モデル比較、自動更新の要件を直接満たします。特に SPICE エンジンによるデータ自動更新を最小の運用負荷で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Cost Explorer はコスト分析に特化しているものの、品質スコアやレイテンシーの視覚化には対応していません。モデルの総合的な比較という要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon QuickSight ユーザーガイド",
      "url": "https://docs.aws.amazon.com/quicksight/latest/user/welcome.html"
    },
    {
      "title": "Amazon Bedrock モデル評価結果",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-output.html"
    }
  ]
});
