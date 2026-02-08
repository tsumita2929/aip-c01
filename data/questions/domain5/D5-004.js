window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-004",
  "domain": 5,
  "task": "5.1",
  "skill": "5.1.4",
  "type": "multiple",
  "difficulty": "hard",
  "question": "ある大手小売企業が、生成AIを活用した商品レコメンデーションシステムの品質保証プロセスを構築しています。モデルの更新やプロンプトの変更時に品質が低下しないことを保証するため、CI/CDパイプラインに品質ゲートを統合する必要があります。適切なアプローチを2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "Amazon CloudFront のキャッシュヒット率をモニタリングし、ヒット率が低下した場合にデプロイをロールバックする"
    },
    {
      "id": "B",
      "text": "AWS CodePipeline にカスタムステージを追加し、Amazon Bedrock モデル評価ジョブを実行して、事前定義した品質閾値を下回った場合にデプロイを自動的にブロックする"
    },
    {
      "id": "C",
      "text": "回帰テストスイートを作成し、過去に問題が発生した入力パターンを含むテストケースを継続的に実行して品質の後退を検出する"
    },
    {
      "id": "D",
      "text": "AWS Config ルールでモデルのハイパーパラメータが変更されていないことのみを確認する"
    },
    {
      "id": "E",
      "text": "本番デプロイ後にユーザーからのクレーム数のみを品質指標として使用し、閾値を超えたらロールバックする"
    }
  ],
  "correctAnswers": [
    "B",
    "C"
  ],
  "explanation": "正解はBとCです。Bは、CI/CDパイプラインに品質ゲートを組み込むアプローチとして最適です。CodePipeline のカスタムステージで Bedrock モデル評価を自動実行し、品質閾値に基づいてデプロイの可否を判断することで、品質低下を防止できます。Cは、回帰テストにより過去の問題パターンを含むテストケースを継続的に検証することで、既知の問題の再発を防止できます。AのCloudFront キャッシュヒット率はコンテンツ配信のパフォーマンス指標であり、生成AIの応答品質とは無関係です。DのConfig ルールでハイパーパラメータの変更のみを確認しても、プロンプトの変更やデータの変化による品質低下は検出できません。Eのクレーム数のみに依存するアプローチは事後対応であり、品質問題がユーザーに到達する前に防止する品質ゲートとしては不十分です。（スキル5.1.4）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。CloudFront のキャッシュヒット率はコンテンツ配信のパフォーマンス指標であるものの、生成AIの応答品質とは無関係です。品質ゲートとして意味がありません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。CodePipeline のカスタムステージで Bedrock モデル評価を自動実行し、品質閾値に基づいてデプロイの可否を判断することで、品質低下を本番デプロイ前に防止できます。CI/CDパイプラインへの品質ゲート統合と品質保証の両要件を直接満たします。"
    },
    "C": {
      "correct": true,
      "text": "正解です。回帰テストスイートにより過去の問題パターンを含むテストケースを継続的に検証することで、既知の問題の再発を防止できます。CI/CDパイプラインへの統合と品質後退検出の両要件を直接満たします。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Config ルールでハイパーパラメータの変更確認は可能であるものの、プロンプトの変更やデータの変化による品質低下は検出できません。品質の実質的な評価が含まれていません。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。ユーザーからのクレーム数のモニタリングは品質指標の一つではあるものの、事後対応であり品質問題がユーザーに到達する前に防止する品質ゲートの要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "AWS CodePipeline ユーザーガイド",
      "url": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html"
    },
    {
      "title": "Amazon Bedrock モデル評価",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html"
    },
    {
      "title": "AWS での MLOps の原則",
      "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/mlops-checklist/introduction.html"
    }
  ]
});
