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
      "text": "クロスリージョンフェイルオーバー → C: Bedrock の推論プロファイルで複数リージョンにリクエストを自動分散し、特定リージョンの障害時に他のリージョンで処理を継続します。アプリケーションコードの変更なしにリージョン耐障害性を実現するマネージド機能です。"
    },
    "2": {
      "correct": true,
      "text": "サーキットブレーカー → A: エラー率が閾値を超えた場合に自動的にリクエストを遮断（サーキットオープン）し、フォールバック応答を返します。障害中のバックエンドへのリクエスト送信を防ぎ、一定時間後にテストリクエスト（ハーフオープン）で回復を確認するパターンです。"
    },
    "3": {
      "correct": true,
      "text": "グレースフルデグラデーション → B: FM が完全に利用不可になった場合でも、キャッシュされた過去の応答やルールベースの定型応答を返すことで、機能を縮退しつつサービスを維持します。ユーザー体験の完全な断絶を防ぐ設計パターンです。"
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
