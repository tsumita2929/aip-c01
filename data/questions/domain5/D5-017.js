window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-017",
  "domain": 5,
  "task": "5.2",
  "skill": "5.2.5",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が生成AIアプリケーションのプロンプトテンプレートを管理しており、最近のテンプレート更新後にモデルの応答品質が不安定になっています。CloudWatch Logs にはエラーは記録されていませんが、一部のリクエストで期待と異なる応答形式が返されています。この問題を特定するために最も効果的なオブザーバビリティアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon CloudWatch のアラームを設定して、CPU使用率の閾値超過を監視する"
    },
    {
      "id": "B",
      "text": "AWS X-Ray を有効化して、プロンプトテンプレートの構築からモデル呼び出し、応答処理までのエンドツーエンドのトレースを取得し、どの段階で問題が発生しているかを可視化する"
    },
    {
      "id": "C",
      "text": "AWS CloudTrail でAPI呼び出しの履歴のみを確認する"
    },
    {
      "id": "D",
      "text": "Amazon Inspector でアプリケーションの脆弱性スキャンを実行する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。AWS X-Ray は分散トレーシングサービスとして、アプリケーションのリクエスト処理パイプライン全体を可視化できます。プロンプトテンプレートの構築（変数展開やコンテキスト注入）、モデル呼び出し、応答のパースと後処理の各段階でトレースセグメントを記録することで、どのステップで問題が発生しているかを特定できます。テンプレート更新後の問題であれば、X-Rayのカスタムサブセグメントにプロンプトテンプレートの展開結果やモデルへの入力を記録するようアプリケーションを計装することで、各段階の処理内容を確認できます。AのCloudWatch CPU使用率の監視は、インフラレベルのパフォーマンス問題の検出には有用ですが、プロンプトテンプレートの問題の特定には役立ちません。CのCloudTrail はAWS APIの呼び出し履歴を記録しますが、アプリケーション内部のプロンプト処理の詳細は記録されません。DのInspector はセキュリティ脆弱性の検出サービスであり、応答品質の問題のトラブルシューティングには適していません。（スキル5.2.5）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。CloudWatch の CPU 使用率監視はインフラレベルのパフォーマンス問題の検出には有用であるものの、プロンプトテンプレートの問題の特定には役立ちません。応答品質の不安定さの原因特定という要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。AWS X-Ray は、プロンプトテンプレートの構築からモデル呼び出し、応答処理までのエンドツーエンドのトレース取得と問題箇所の可視化の両要件を直接満たします。特にカスタムサブセグメントによる各段階の詳細記録を最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。CloudTrail は AWS API の呼び出し履歴を記録できるものの、アプリケーション内部のプロンプト処理の詳細は記録されません。テンプレート展開の問題特定という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Inspector はセキュリティ脆弱性の検出サービスであるものの、応答品質の問題のトラブルシューティングには適していません。オブザーバビリティの要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "AWS X-Ray 開発者ガイド",
      "url": "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"
    },
    {
      "title": "Amazon Bedrock モデル呼び出しログ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html"
    }
  ]
});
