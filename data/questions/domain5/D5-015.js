window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-015",
  "domain": 5,
  "task": "5.2",
  "skill": "5.2.3",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業の生成AIチームが、カスタマーサポート用のプロンプトを改良しています。現在のプロンプトでは、モデルが時折テクニカルサポートの範囲を超えた医療や法律に関するアドバイスを提供してしまう問題が発生しています。プロンプトのバージョン管理と体系的な改良を行いながら、この問題を解決するための最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "モデルの temperature を0に設定して、すべての応答を確定的にする"
    },
    {
      "id": "B",
      "text": "応答の最大トークン数を制限して、長い回答を生成できないようにする"
    },
    {
      "id": "C",
      "text": "プロンプトテストフレームワークを構築し、境界テストケース（医療・法律に関する質問）を含むテストスイートでバージョンごとの応答を比較して、システムプロンプトに明確なスコープ制限と拒否テンプレートを追加する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock Guardrails の denied topics のみを設定し、プロンプトは変更しない"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解はCです。プロンプトテストフレームワークにより、境界テストケースを体系的に管理し、プロンプトのバージョンごとの応答品質を定量的に比較できます。システムプロンプトに明確なスコープ制限（「テクニカルサポートの範囲外の質問には回答しない」など）と拒否テンプレート（丁寧に専門家への相談を促す定型応答）を追加することで、問題を根本的に解決できます。Aの temperature を0にしても、プロンプトにスコープ制限がなければ医療・法律のアドバイスを生成する可能性は残ります。Bのトークン数制限は応答の長さを制限するだけで、内容のスコープは制御できません。DのGuardrails の denied topics のみでは、プロンプトレベルでの根本的な改善がなく、また Guardrails でブロックされた場合のユーザー体験が考慮されていません。プロンプト改善と Guardrails の組み合わせが理想的です。（スキル5.2.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。temperature を0にすると応答が確定的になるものの、プロンプトにスコープ制限がなければ医療・法律のアドバイスを生成する可能性は残ります。バージョン管理と体系的な改良の要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。トークン数制限は応答の長さを制限できるものの、内容のスコープは制御できません。短い回答でも医療・法律のアドバイスを含む可能性があり、スコープ制限の要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。プロンプトテストフレームワークとスコープ制限の追加は、バージョン管理と体系的な改良およびスコープ外応答の防止の両要件を直接満たします。特に境界テストケースによる品質検証を最小の運用負荷で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Guardrails の denied topics はコンテンツフィルタリングには有効であるものの、プロンプトレベルでの根本的な改善がなく、ブロック時のユーザー体験も考慮されていません。バージョン管理と体系的な改良の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock プロンプト管理",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html"
    },
    {
      "title": "Amazon Bedrock Guardrails",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    }
  ]
});
