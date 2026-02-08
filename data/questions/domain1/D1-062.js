window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-062",
  "domain": 1,
  "task": "1.6",
  "skill": "1.6.4",
  "type": "matching",
  "difficulty": "medium",
  "question": "以下のプロンプト品質保証手法と、それぞれの最適な適用場面を正しく組み合わせてください。",
  "prompts": [
    {
      "id": "1",
      "text": "JSON スキーマ検証"
    },
    {
      "id": "2",
      "text": "エッジケーステスト"
    },
    {
      "id": "3",
      "text": "A/B テスト"
    }
  ],
  "answers": [
    {
      "id": "A",
      "text": "FM の出力が構造化データの形式要件を満たしているかを確認する"
    },
    {
      "id": "B",
      "text": "異なるプロンプトバリアントの効果を実際のユーザーで比較する"
    },
    {
      "id": "C",
      "text": "空入力、極端に長い入力、悪意のある入力に対する FM の振る舞いを検証する"
    }
  ],
  "correctMatches": {
    "1": "A",
    "2": "C",
    "3": "B"
  },
  "explanation": "JSON スキーマ検証（1-A）は、FM の出力が期待される構造（フィールド名、型、必須項目）に準拠しているかを自動検証します。エッジケーステスト（2-C）は、空入力・長大入力・悪意のある入力など、通常とは異なる入力に対する FM の堅牢性をテストします。A/B テスト（3-B）は、異なるプロンプトバリアントを実際のユーザーに提示し、効果を統計的に比較します。（スキル1.6.4）",
  "optionExplanations": {
    "1": {
      "correct": true,
      "text": "JSON スキーマ検証 → A: FM の出力が構造化データの形式要件（フィールド名、型、必須項目）を満たしているかを自動検証。"
    },
    "2": {
      "correct": true,
      "text": "エッジケーステスト → C: 空入力、極端に長い入力、悪意のある入力に対する FM の堅牢性を検証。"
    },
    "3": {
      "correct": true,
      "text": "A/B テスト → B: 異なるプロンプトバリアントの効果を実際のユーザーで統計的に比較。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ガードレール",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    },
    {
      "title": "Amazon Bedrock プロンプト管理",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html"
    }
  ]
});
