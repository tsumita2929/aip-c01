window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-010",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.3",
  "type": "single",
  "difficulty": "hard",
  "question": "ヘルスケア企業が Amazon Bedrock Agents を使用して、患者の症状に基づいて医療情報を提供するエージェントを運用しています。エージェントは外部の医薬品データベースAPIを呼び出しますが、このAPIはメンテナンスウィンドウ中に一時的に利用不能になることがあります。過去にAPI障害時にエージェントが同じAPIを繰り返し呼び出し続け、タイムアウトまでユーザーが待たされる問題が発生しました。要件として、(1) API障害検出後はすぐに呼び出しを停止してフォールバック応答を返すこと、(2) API復旧後は自動的に通常の呼び出しを再開すること、(3) 保守のためのカスタムコードを最小化することが必要です。最も適切なアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "エージェントのアクショングループの Lambda 関数内に AWS Lambda Powertools のサーキットブレーカーミドルウェアを実装し、連続エラー閾値超過時にオープン状態に遷移してキャッシュ済みの代替応答を返す。一定期間後にハーフオープン状態で試験的にAPIを呼び出し、成功すればクローズ状態に復帰する"
    },
    {
      "id": "B",
      "text": "API Gateway のスロットリング機能で呼び出しレートを制限し、429エラー発生時にエージェントが自動的にリトライを停止する"
    },
    {
      "id": "C",
      "text": "CloudWatch アラームでAPI障害を検出し、SNS 経由で運用チームに通知して手動でエージェントを停止する。API復旧確認後に手動でエージェントを再起動する"
    },
    {
      "id": "D",
      "text": "Lambda 関数のタイムアウトを3秒に設定し、タイムアウト発生時にはエラーメッセージをそのままユーザーに表示する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Lambda Powertools のサーキットブレーカーは、連続エラーを検出するとオープン状態に遷移してAPI呼び出しを即座に停止し、キャッシュ済みの代替応答を返します（要件1）。一定期間後にハーフオープン状態で試験的にAPIを呼び出し、成功すればクローズ状態に自動復帰します（要件2）。Lambda Powertools のミドルウェアとして数行の設定で導入でき、カスタムコードが最小限です（要件3）。B の API Gateway スロットリングはレート制限であり、API障害の検出やフォールバック応答の提供はできません。C の手動停止・再起動はリアルタイムの自動対応ができず、ユーザーへの即時フォールバックの要件を満たしません。D の短いタイムアウト設定ではエラーメッセージがそのまま表示され、ユーザーへの適切なフォールバック応答の要件を満たしません。（スキル2.1.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Lambda Powertools のサーキットブレーカーは、障害検出後の即時停止・フォールバック応答・API復旧後の自動再開の3要件をすべて満たし、ミドルウェアとして最小のコード変更で導入できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。API Gateway のスロットリングは過剰なリクエストのレート制限に有効であるものの、バックエンドAPI障害の検出やフォールバック応答の自動返却には対応せず、障害時の即時停止とフォールバックの要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。CloudWatch アラームと手動対応は監視体制として有効であるものの、障害検出から停止までの数分間はユーザーが待たされ続け、即時フォールバックと自動復旧の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。短いタイムアウト設定はレスポンス待ち時間を制限できるものの、エラーメッセージがそのままユーザーに表示され、適切なフォールバック応答の提供とAPI復旧後の自動再開の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "AWS Well-Architected reliability pillar",
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
    },
    {
      "title": "Amazon Bedrock Agents",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"
    }
  ]
});
