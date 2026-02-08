window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-020",
  "domain": 5,
  "task": "5.2",
  "skill": "5.2.2",
  "type": "matching",
  "difficulty": "medium",
  "question": "Amazon Bedrock の基盤モデル統合における一般的なエラーと、それぞれの最も適切なトラブルシューティングアプローチを対応付けてください。",
  "prompts": [
    {
      "id": "1",
      "text": "ValidationException: リクエストボディのスキーマが無効"
    },
    {
      "id": "2",
      "text": "ThrottlingException: レート制限超過"
    },
    {
      "id": "3",
      "text": "ModelTimeoutException: モデル推論タイムアウト"
    },
    {
      "id": "4",
      "text": "AccessDeniedException: モデルへのアクセス拒否"
    }
  ],
  "answers": [
    {
      "id": "A",
      "text": "IAMポリシーとモデルアクセス許可を確認し、bedrock:InvokeModel アクションが許可されているか検証する"
    },
    {
      "id": "B",
      "text": "リクエストペイロードのJSON構造とモデル固有のパラメータ名・型を検証する"
    },
    {
      "id": "C",
      "text": "入力プロンプトのサイズを縮小するか、max_tokens を調整して推論時間を短縮する"
    },
    {
      "id": "D",
      "text": "エクスポネンシャルバックオフ付きリトライを実装し、必要に応じてリクエストレートを制御する"
    }
  ],
  "correctMatches": {
    "1": "B",
    "2": "D",
    "3": "C",
    "4": "A"
  },
  "explanation": "ValidationException（1→B）：リクエストボディのスキーマエラーは、JSONの構造やモデル固有のパラメータ（anthropic_version、max_tokensなど）の名前や型が正しくない場合に発生するため、ペイロードの検証が必要です。ThrottlingException（2→D）：レート制限超過にはエクスポネンシャルバックオフ付きリトライが標準的な対処法です。ModelTimeoutException（3→C）：推論タイムアウトは入力が大きすぎるか、生成するトークン数が多すぎる場合に発生するため、入力サイズの縮小やmax_tokensの調整が効果的です。AccessDeniedException（4→A）：アクセス拒否はIAMポリシーまたはBedrock コンソールでのモデルアクセス有効化が不足している場合に発生するため、権限の確認が必要です。（スキル5.2.2）",
  "optionExplanations": {
    "1": {
      "correct": true,
      "text": "ValidationException → B（ペイロード検証）: リクエストボディのスキーマエラーは、JSON構造やモデル固有のパラメータ（anthropic_version、max_tokensなど）の名前や型が正しくない場合に発生するため、リクエストペイロードの検証が必要です。"
    },
    "2": {
      "correct": true,
      "text": "ThrottlingException → D（バックオフ付きリトライ）: レート制限超過にはエクスポネンシャルバックオフ付きリトライが標準的な対処法です。リクエストレートの制御も併せて行います。"
    },
    "3": {
      "correct": true,
      "text": "ModelTimeoutException → C（入力サイズ縮小）: 推論タイムアウトは入力が大きすぎるか生成トークン数が多すぎる場合に発生するため、入力プロンプトのサイズ縮小や max_tokens の調整が効果的です。"
    },
    "4": {
      "correct": true,
      "text": "AccessDeniedException → A（権限確認）: アクセス拒否は IAM ポリシーまたは Bedrock コンソールでのモデルアクセス有効化が不足している場合に発生するため、bedrock:InvokeModel アクションの許可を確認する必要があります。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock API エラーハンドリング",
      "url": "https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html"
    },
    {
      "title": "Amazon Bedrock のクォータ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html"
    },
    {
      "title": "Amazon Bedrock セキュリティ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/security-iam.html"
    }
  ]
});
