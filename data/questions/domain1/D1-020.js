window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-020",
  "domain": 1,
  "task": "1.2",
  "skill": "1.2.3",
  "type": "matching",
  "difficulty": "hard",
  "question": "以下の耐障害性パターンと、それぞれに最も適した実装方法を正しく組み合わせてください。",
  "prompts": [
    {
      "id": "1",
      "text": "クロスリージョンフェイルオーバー"
    },
    {
      "id": "2",
      "text": "サーキットブレーカー"
    },
    {
      "id": "3",
      "text": "グレースフルデグラデーション"
    }
  ],
  "answers": [
    {
      "id": "A",
      "text": "エラー率が閾値を超えた場合に自動的にリクエストを遮断し、フォールバック応答を返す"
    },
    {
      "id": "B",
      "text": "FM が利用不可の場合にキャッシュされた応答やルールベースの応答を返す"
    },
    {
      "id": "C",
      "text": "Bedrock の推論プロファイルで複数リージョンにリクエストを分散する"
    }
  ],
  "correctMatches": {
    "1": "C",
    "2": "A",
    "3": "B"
  },
  "explanation": "クロスリージョンフェイルオーバー（1-C）: Bedrock の推論プロファイルを使用して複数リージョンにリクエストを分散します。サーキットブレーカー（2-A）: エラー率を監視し、閾値超過時にリクエストを遮断してフォールバック応答を返します。グレースフルデグラデーション（3-B）: FM が利用不可の場合に、キャッシュやルールベースの応答で機能を維持します。（スキル1.2.3）",
  "optionExplanations": {
    "1": {
      "correct": true,
      "text": "クロスリージョンフェイルオーバー → C: Bedrock の推論プロファイルで複数リージョンにリクエストを分散し、リージョン障害時のフェイルオーバーを実現。"
    },
    "2": {
      "correct": true,
      "text": "サーキットブレーカー → A: エラー率が閾値を超えた場合に自動的にリクエストを遮断しフォールバック応答を返すパターン。"
    },
    "3": {
      "correct": true,
      "text": "グレースフルデグラデーション → B: FM が利用不可の場合にキャッシュやルールベースの応答で機能を縮退しつつ維持する。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock クロスリージョン推論",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html"
    },
    {
      "title": "AWS Well-Architected Framework - 信頼性の柱",
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
    }
  ]
});
