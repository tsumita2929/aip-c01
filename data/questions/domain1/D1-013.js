window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-013",
  "domain": 1,
  "task": "1.2",
  "skill": "1.2.2",
  "type": "single",
  "difficulty": "hard",
  "question": "ある企業が、Amazon Bedrock を使用してカスタマーサポートシステムを運用しています。簡単なFAQ応答にはコスト効率の良い小型モデル、複雑な技術的問い合わせには高性能モデルを使用する動的モデル選択を実装したいと考えています。運用負荷を最小限に抑えつつ、最も適切に動的ルーティングを実現するアーキテクチャはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock のプロンプトルーターを使用して、リクエストの複雑さに基づいて自動的に適切なモデルにルーティングする"
    },
    {
      "id": "B",
      "text": "API Gateway と Lambda を使用して、リクエストの複雑さを分類する小型モデルを呼び出し、その結果に基づいて適切な Bedrock モデルにルーティングする"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のクロスリージョン推論プロファイルを使用して、リクエストを複数リージョンのモデルに分散する"
    },
    {
      "id": "D",
      "text": "AWS AppConfig でトラフィック比率を設定し、一定割合のリクエストを小型モデル、残りを大型モデルに振り分ける"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Amazon Bedrock のプロンプトルーターは、リクエストの複雑さに基づいて自動的に適切なモデルにルーティングするマネージドサービスです。カスタムコードを書く必要がなく、運用負荷を最小限に抑えられます。API Gateway + Lambda（B）はカスタム分類ロジックの開発と維持が必要で、分類用モデル呼び出しの追加コストも発生します。クロスリージョン推論プロファイル（C）は可用性と地理的分散のための機能であり、モデルの動的選択には対応していません。AppConfig のトラフィック比率（D）は静的な振り分けであり、リクエストの複雑さに基づく動的な選択ではありません。（スキル1.2.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock のプロンプトルーターは、リクエストの複雑さに基づく自動ルーティングと運用負荷の最小化の要件を直接満たします。特にマネージドサービスとしてカスタムコード不要で動的モデル選択を実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。API Gateway + Lambda でのカスタムルーティングは実装可能な点はあるものの、分類ロジックの開発・維持が必要で運用負荷の最小化要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。クロスリージョン推論プロファイルは可用性と地理的分散に有効な点はあるものの、リクエストの複雑さに基づくモデル選択には対応しておらず、動的ルーティングの要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。AppConfig のトラフィック比率設定は設定管理に有用な点はあるものの、静的な振り分けであり個々のリクエストの複雑さに基づく動的選択の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock の推論",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    },
    {
      "title": "Amazon Bedrock プロンプトルーター",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-routers.html"
    }
  ]
});
