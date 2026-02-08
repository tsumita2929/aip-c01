window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-018",
  "domain": 2,
  "task": "2.2",
  "skill": "2.2.2",
  "type": "single",
  "difficulty": "medium",
  "question": "あるEコマース企業が Amazon Bedrock を使用した商品説明文の自動生成システムを運用しています。新しい基盤モデル（Claude 3.5 Sonnet）への移行を検討していますが、既存モデル（Claude 3 Haiku）からの切り替えが売上指標に与える影響を本番環境で検証する必要があります。リスクを最小限に抑えながらモデル移行を進めるために最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "新モデルで全トラフィックを一度に切り替え、問題があればロールバックする"
    },
    {
      "id": "B",
      "text": "Amazon API Gateway のカナリアリリース機能を使用して、トラフィックの10%を新モデルに振り分け、売上指標を比較した上で段階的に移行する"
    },
    {
      "id": "C",
      "text": "開発環境で新モデルの出力品質を評価し、問題がなければ本番環境で全面切り替えする"
    },
    {
      "id": "D",
      "text": "新旧モデルの出力をローカルで手動比較し、品質が良い方を選択する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。API Gatewayのカナリアリリース機能を使用すれば、本番トラフィックの一部（例: 10%）のみを新モデルに振り分け、実際のユーザー行動と売上指標への影響を安全に検証できます。問題がなければトラフィック比率を段階的に引き上げ、最終的に全面移行します。Aの全面切り替えはリスクが高く、売上に悪影響が出た場合の損失が大きくなります。Cの開発環境での評価は実際のユーザー行動を反映できず、本番での売上指標の変化を予測できません。Dの手動比較はスケーラブルではなく、統計的に有意な結論を得られません。（スキル2.2.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。全トラフィックの一度の切り替えは迅速であるものの、リスクが高く、売上に悪影響が出た場合の損失が大きくなるため、リスク最小化の要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。API Gateway のカナリアリリース機能は、リスク最小化と本番環境での売上指標検証の両方を直接満たします。特にトラフィックの段階的な移行により最小のリスクでモデル移行を実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。開発環境での評価は品質確認が可能であるものの、実際のユーザー行動を反映できず、本番での売上指標の変化を予測できないため、本番環境での検証の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。ローカルでの手動比較は品質確認が可能であるものの、スケーラブルではなく統計的に有意な結論を得られないため、本番環境での売上指標検証の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon API Gateway canary release",
      "url": "https://docs.aws.amazon.com/apigateway/latest/developerguide/canary-release.html"
    },
    {
      "title": "Amazon Bedrock model access",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html"
    }
  ]
});
