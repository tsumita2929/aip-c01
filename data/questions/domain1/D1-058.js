window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-058",
  "domain": 1,
  "task": "1.6",
  "skill": "1.6.4",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、Amazon Bedrock の FM を使用して商品説明文を自動生成するシステムを運用しています。FM の出力が期待する JSON フォーマット（商品名、説明文、カテゴリ、価格帯の各フィールド）に準拠しない場合や、禁止ワード（競合他社名）が含まれる場合があります。出力品質を自動的に保証する最も効果的なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Lambda 関数で FM の出力を JSON スキーマ検証・禁止ワード検出・長さ制限で検証し、基準を満たさない場合は temperature を変えてリトライし、再試行でも失敗する場合はフォールバック応答を返す"
    },
    {
      "id": "B",
      "text": "Bedrock ガードレールのワードフィルターで競合他社名をブロックし、コンテンツフィルターで不適切な内容を検出する"
    },
    {
      "id": "C",
      "text": "FM のプロンプトに厳密な JSON フォーマットの指示と出力例を含め、temperature を 0 に設定して出力の一貫性を高める"
    },
    {
      "id": "D",
      "text": "Bedrock のモデル評価ジョブで出力品質を定期的に測定し、品質が低下した場合にプロンプトを調整する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Lambda による出力検証パイプラインは、JSON スキーマ検証（必須フィールドの存在・型の確認）、禁止ワード検出、長さ制限を実行し、基準を満たさない場合のリトライとフォールバックにより品質を保証できます。ガードレール（B）は有害コンテンツのブロックと特定ワードのフィルタリングに有効ですが、JSON フォーマットの構造検証はできません。プロンプト改善と temperature 0（C）は出力品質の向上に寄与しますが、FM の出力が常にフォーマットに準拠する保証はなく、検証なしでは品質を保証できません。モデル評価ジョブ（D）は品質の定期測定に適していますが、リアルタイムの出力検証ではなく、個々のリクエストの品質保証にはなりません。（スキル1.6.4）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Lambda での JSON スキーマ検証・禁止ワード検出・長さ制限とリトライ・フォールバック機構は、出力品質の自動保証と JSON フォーマット準拠の要件を直接満たします。特に包括的な検証パイプラインを効率的に実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。ガードレールは有害コンテンツと特定ワードのフィルタリングに有効な点はあるものの、JSON フォーマットの構造検証はできず、出力フォーマット準拠の要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。プロンプト改善と temperature 0 は品質向上に寄与する点はあるものの、FM の出力が常にフォーマットに準拠する保証がなく検証なしでは不十分で、品質の自動保証要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。モデル評価ジョブは品質の定期測定に適している点はあるものの、リアルタイムの出力検証ではなく個々のリクエストの品質保証にはならず、自動的な品質保証の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ガードレール",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    },
    {
      "title": "AWS Lambda 開発者ガイド",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
    }
  ]
});
