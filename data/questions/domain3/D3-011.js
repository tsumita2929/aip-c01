window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-011",
  "domain": 3,
  "task": "3.1",
  "skill": "3.1.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある教育テクノロジー企業が、Amazon Bedrock を使用して小中学生向けの学習支援AIチャットボットを提供しています。保護者からの要望により、モデルの出力に暴力的表現、性的コンテンツ、薬物に関する情報など年齢不相応なコンテンツが含まれないよう、出力安全性を確保する必要があります。最も適切なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock ガードレールでコンテンツフィルターの出力しきい値を暴力・性的コンテンツ・不正行為のカテゴリに対して HIGH に設定し、さらに拒否トピックで「薬物」「アルコール」「ギャンブル」等の年齢不相応なトピックを定義する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock ガードレールの PII フィルターを有効化し、年齢に関連する個人情報を検出して不適切なコンテンツをブロックする"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のシステムプロンプトに年齢制限ガイドラインを詳細に記述し、Converse API の system ロールで設定することでモデルの出力を制御する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock のモデル呼び出しログを有効化し、CloudWatch Logs で不適切な出力パターンを検出するメトリクスフィルターを設定してアラームで通知する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Amazon Bedrock ガードレールのコンテンツフィルターは、暴力・性的コンテンツ・侮辱・不正行為のカテゴリに対して入力・出力それぞれに NONE / LOW / MEDIUM / HIGH の4段階でしきい値を設定できます。さらに拒否トピックで「薬物」「アルコール」等のビジネス固有の禁止トピックを自然言語で定義でき、年齢層に応じた厳密な出力制御を実現できます。B の PII フィルターは個人識別情報（氏名、住所等）の検出・マスキング用であり、暴力的表現や年齢不相応なトピックのフィルタリングには対応していません。C のシステムプロンプトによるガイドライン設定は補助的な対策ですが、プロンプトインジェクションやモデルの確率的な振る舞いにより指示を完全に遵守する保証がなく、単独での安全対策としては不十分です。D のモデル呼び出しログによる検出は事後的な監視であり、不適切なコンテンツがユーザーに表示された後の検出となるため、出力安全性の確保（リアルタイムブロック）にはなりません。（スキル3.1.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。コンテンツフィルターのカテゴリ別出力しきい値設定と拒否トピックの組み合わせにより、出力安全性の確保と年齢不相応なコンテンツのブロックを直接満たします。特に年齢層に応じた厳密な出力制御を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。PII フィルターは個人識別情報（氏名、住所等）の検出・マスキング用であるものの、暴力的表現や年齢不相応なトピックのフィルタリングには対応しておらず、出力安全性という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。システムプロンプトによるガイドライン設定は補助的であるものの、プロンプトインジェクションやモデルの確率的振る舞いにより指示遵守の保証がなく、確実な出力安全性という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。モデル呼び出しログによる検出は事後的な監視であるものの、不適切コンテンツがユーザーに表示された後の検出となり、リアルタイムの出力安全性確保という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Guardrails Content Filters",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-content-filters.html"
    },
    {
      "title": "Amazon Bedrock Guardrails Denied Topics",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-denied-topics.html"
    }
  ]
});
