window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-014",
  "domain": 5,
  "task": "5.2",
  "skill": "5.2.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が Amazon Bedrock の InvokeModel API を使用した生成AIアプリケーションを運用しています。特定のリクエストパターンで間欠的に ThrottlingException エラーが発生しており、ユーザー体験が悪化しています。CloudWatch Logs にはエラーの詳細が記録されていますが、根本原因の特定に苦慮しています。この問題のトラブルシューティングとして最も効果的なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "CloudWatch メトリクスで InvocationCount と ThrottledCount の相関を確認し、特定時間帯のリクエストバーストパターンを分析した上で、エクスポネンシャルバックオフとリトライ戦略を実装する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のモデルを別のリージョンに切り替えて負荷を分散する"
    },
    {
      "id": "C",
      "text": "すべてのリクエストのmax_tokens パラメータを最小値に設定して、各リクエストの処理時間を短縮する"
    },
    {
      "id": "D",
      "text": "AWS WAF でリクエストレートリミットを設定して、過剰なリクエストをブロックする"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解はAです。ThrottlingException の問題に対しては、まず CloudWatch メトリクスで InvocationCount（呼び出し数）と ThrottledCount（スロットリング数）の相関を分析し、いつ、どのようなパターンでスロットリングが発生しているかを特定することが重要です。その上で、エクスポネンシャルバックオフとジッター付きリトライ戦略を実装することで、スロットリング発生時のリクエストを適切に再試行できます。Bの別リージョンへの切り替えは、アプリケーションの大幅な変更が必要であり、根本原因の分析なしに実施すべきではありません。Cの max_tokens の最小化は応答品質を著しく低下させる可能性があり、スロットリングはトークン数ではなくリクエスト数に基づくため効果が限定的です。DのWAF でのレートリミットは外部からの攻撃防御には有効ですが、正規のアプリケーションリクエストをブロックすることになり、問題の解決にはなりません。（スキル5.2.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。CloudWatch メトリクスでの相関分析とエクスポネンシャルバックオフの実装は、根本原因の特定とスロットリング対策の両要件を直接満たします。特にリクエストバーストパターンの分析により、最小の運用負荷で効果的な対策を実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。別リージョンへの切り替えは負荷分散の手段ではあるものの、アプリケーションの大幅な変更が必要であり、根本原因の分析なしに実施すべきではありません。トラブルシューティングの要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。max_tokens の最小化は処理時間の短縮にはつながるものの、応答品質を著しく低下させる可能性があり、スロットリングはリクエスト数に基づくため効果が限定的です。ユーザー体験改善の要件に反します。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。WAF でのレートリミットは外部からの攻撃防御には有効であるものの、正規のアプリケーションリクエストをブロックすることになり、ユーザー体験のさらなる悪化を招きます。問題解決の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ランタイム API リファレンス",
      "url": "https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html"
    },
    {
      "title": "Amazon Bedrock のクォータ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html"
    }
  ]
});
