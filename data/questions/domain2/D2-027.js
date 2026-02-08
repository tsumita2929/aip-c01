window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-027",
  "domain": 2,
  "task": "2.3",
  "skill": "2.3.5",
  "type": "single",
  "difficulty": "medium",
  "question": "企業が Amazon Bedrock を使用した生成 AI アプリケーションの CI/CD パイプラインを構築しています。プロンプトテンプレートが更新された場合、自動的に品質評価テスト（回帰テスト、ハルシネーション検出、トーン一貫性スコアリング）を実行し、すべてのスコアが閾値を超えた場合のみ本番環境にデプロイしたいと考えています。また、プロンプトのバージョン管理と過去バージョンへの即時ロールバック機能も必要です。これらの要件を最小の運用負荷で実現するアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "AWS CodePipeline でプロンプトテンプレートの変更を検知し、CodeBuild ステージで Amazon Bedrock のモデル評価ジョブを実行して品質スコアを算出し、承認ゲートを通過した場合のみ Bedrock のプロンプト管理でバージョンを切り替える"
    },
    {
      "id": "B",
      "text": "Amazon EventBridge で S3 バケットへのプロンプトファイルのアップロードを検知し、AWS Step Functions で評価ワークフローを実行し、Lambda 関数でプロンプトの差し替えとバージョン管理を行う"
    },
    {
      "id": "C",
      "text": "AWS CodePipeline でプロンプトの変更を検知し、SageMaker Processing ジョブでカスタム評価スクリプトを実行し、結果を DynamoDB に保存して手動承認後にデプロイする"
    },
    {
      "id": "D",
      "text": "GitHub Actions でプロンプトの変更をトリガーし、Lambda 関数で Bedrock API を呼び出して数件のテストケースで出力を確認し、CloudFormation でプロンプト設定をデプロイする"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。CodePipeline でソース変更を検知し、CodeBuild で Bedrock のモデル評価ジョブを実行して品質スコアを自動算出し、承認ゲートで品質基準を満たした場合のみ Bedrock のプロンプト管理機能でバージョンを切り替えるアーキテクチャが、すべての要件を最小の運用負荷で満たします。Bedrock のプロンプト管理はネイティブにバージョン管理とロールバックをサポートしており、追加実装が不要です。（スキル2.3.5）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。CodePipeline + CodeBuild + Bedrock モデル評価 + Bedrock プロンプト管理の組み合わせは、自動評価・品質ゲート・バージョン管理・ロールバックの全要件をマネージド機能で直接満たします。特に Bedrock のネイティブなプロンプト管理機能により、バージョン管理とロールバックを追加開発なしで実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。EventBridge + Step Functions + Lambda の構成は評価ワークフローの実装が可能であるものの、プロンプトのバージョン管理を Lambda で独自実装する必要があり、Bedrock のネイティブなプロンプト管理を活用する場合と比較して運用負荷が高くなります。また、承認ゲートの仕組みも独自構築が必要です。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。SageMaker Processing によるカスタム評価スクリプトは柔軟性が高いものの、Bedrock のモデル評価ジョブと比較して評価環境の構築・管理が追加で必要です。さらに手動承認が含まれるため、自動的な品質ゲートの要件を満たさず運用負荷が増大します。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。GitHub Actions + Lambda での数件のテストケース確認は迅速であるものの、体系的な品質評価（回帰テスト、ハルシネーション検出、トーンスコアリング）には不十分です。また、CloudFormation でのプロンプト管理は Bedrock のネイティブなバージョン管理と比較してロールバックの即時性に欠けます。"
    }
  },
  "references": [
    {
      "title": "AWS CodePipeline",
      "url": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html"
    },
    {
      "title": "Amazon Bedrock prompt management",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html"
    }
  ]
});
