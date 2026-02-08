window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-008",
  "domain": 3,
  "task": "3.1",
  "skill": "3.1.1",
  "type": "single",
  "difficulty": "medium",
  "question": "あるオンラインゲーム企業が、Amazon Bedrock を使用したチャットモデレーションシステムを構築しています。プレイヤー間のチャットメッセージをリアルタイムで検証し、暴言、差別的発言、個人情報の共有を検出・ブロックする必要があります。1秒あたり数千件のメッセージを処理する高スループット要件があり、基盤モデルの推論コストを最小限に抑える必要があります。どのアーキテクチャが最も適切ですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock の Converse API で各メッセージを基盤モデルに送信し、guardrailConfig でガードレールを適用して安全性を評価する"
    },
    {
      "id": "B",
      "text": "Amazon Comprehend のリアルタイム毒性検出 API と PII 検出 API を組み合わせて各メッセージを分析し、検出結果に基づいてフィルタリングする"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock ガードレールの ApplyGuardrail API を使用して各メッセージのコンテンツフィルタリングと PII 検出を実行し、ポリシー違反を検出した場合はメッセージをブロックする"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock のバッチ推論ジョブで一定時間分のメッセージをまとめて処理し、ポリシー違反が検出されたメッセージを事後的に削除する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "Amazon Bedrock ガードレールの ApplyGuardrail API は、基盤モデルの呼び出しとは独立して入力テキストの安全性を検証できる専用 API です。コンテンツフィルター、拒否トピック、PII 検出、プロンプト攻撃検出などの機能を低レイテンシーで提供し、基盤モデルの推論を行わないためコストも低く抑えられます。A の Converse API + guardrailConfig は基盤モデルの推論とガードレールを組み合わせますが、各メッセージに対して基盤モデルの推論コストが発生するため、秒間数千件のメッセージ処理ではコストが過大になります。B の Comprehend のリアルタイム API は毒性検出と PII 検出が可能ですが、ガードレールのような拒否トピックの柔軟な定義やコンテンツカテゴリ別のしきい値設定ができず、2つの API を個別に呼び出す必要があり統合管理が困難です。D のバッチ推論はリアルタイム処理ではなく、不適切なメッセージがプレイヤーに表示された後の事後削除となるため、リアルタイムブロックの要件を満たしません。（スキル3.1.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Converse API + guardrailConfig は基盤モデルの推論を伴うものの、秒間数千件の処理では推論コストが過大となり、コスト最小化という要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Comprehend の毒性検出・PII 検出 API は個別に呼び出す必要があるものの、拒否トピックの柔軟な定義やカテゴリ別しきい値設定ができず、統合管理の容易さという要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。ApplyGuardrail API は基盤モデルの推論なしでテキストの安全性を検証でき、リアルタイムブロックと推論コスト最小化を直接満たします。特に高スループットのリアルタイムモデレーションを最小の運用負荷で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。バッチ推論はリアルタイム処理ではなく、不適切メッセージが表示された後の事後削除となるものの、リアルタイムブロックという要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ApplyGuardrail API",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-use-independent.html"
    },
    {
      "title": "Amazon Bedrock Guardrails",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    }
  ]
});
