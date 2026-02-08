window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-030",
  "domain": 2,
  "task": "2.3",
  "skill": "2.3.5",
  "type": "single",
  "difficulty": "hard",
  "question": "金融サービス企業が Amazon Bedrock を使用した生成 AI チャットボットを本番運用しています。新しいプロンプトテンプレートのデプロイ後、顧客からの問い合わせに対する回答品質が大幅に低下し、不正確な金融アドバイスが生成されるインシデントが発生しました。システムは API Gateway + Lambda + Bedrock の構成で、プロンプトテンプレートは Bedrock のプロンプト管理機能でバージョン管理されています。影響を最小限に抑えつつ、迅速にサービスを復旧するために最も適切なアーキテクチャ上の対処はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Bedrock のプロンプト管理機能で以前のプロンプトバージョンのエイリアスに即時切り替えし、CloudWatch アラームで品質メトリクスの回復を確認する"
    },
    {
      "id": "B",
      "text": "Lambda 関数のコードを修正して新しいプロンプトテンプレートの問題箇所を特定・修正し、CodePipeline で評価テストを実行してから再デプロイする"
    },
    {
      "id": "C",
      "text": "API Gateway のステージ変数を使用して Bedrock のモデル ID を以前のモデルバージョンに切り替え、プロンプトテンプレートはそのまま維持する"
    },
    {
      "id": "D",
      "text": "API Gateway でスロットリング設定を適用してリクエストレートを制限し、影響を受けるユーザー数を減らしながら新しいプロンプトテンプレートの修正を行う"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Bedrock のプロンプト管理機能はプロンプトテンプレートのバージョン管理とエイリアス切り替えをネイティブにサポートしており、以前の正常なバージョンへの即時ロールバックが可能です。CloudWatch アラームで品質メトリクスの回復を確認することで、復旧の完了を定量的に検証できます。この方法が最も迅速かつ影響範囲が最小です。（スキル2.3.5）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock のプロンプト管理のエイリアス切り替えは、迅速な復旧と影響の最小化の両方を直接満たします。プロンプトバージョンの即時切り替えはコードデプロイ不要で、数秒以内に以前の正常な状態に復旧できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。プロンプトの修正・テスト・再デプロイのサイクルは根本的な問題解決が可能であるものの、修正から再デプロイまでに数時間を要する可能性があり、迅速な復旧の要件を満たしません。金融アドバイスの不正確な生成が継続するリスクがあります。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。モデル ID の切り替えはレスポンス品質に影響を与える可能性があるものの、問題の根本原因はプロンプトテンプレートの変更であるため、モデルを変更しても不正確な出力が継続する可能性があります。原因と対処が一致していません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。スロットリングによるリクエスト制限は影響を受けるユーザー数の削減が可能であるものの、不正確な金融アドバイスの生成自体は停止せず、サービス品質の回復にはなりません。また、正常なリクエストも制限されるためサービス可用性が低下します。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock prompt management",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html"
    },
    {
      "title": "AWS CodePipeline",
      "url": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html"
    }
  ]
});
