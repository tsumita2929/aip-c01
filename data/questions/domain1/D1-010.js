window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-010",
  "domain": 1,
  "task": "1.1",
  "skill": "1.1.3",
  "type": "single",
  "difficulty": "easy",
  "question": "ある企業が、Amazon Bedrock を使用した生成AIチャットボットを本番運用しています。Bedrock サービス全体の障害や、使用しているFMプロバイダー側の障害など、FM が完全に利用不可になるシナリオでもエンドユーザーへの応答を継続する必要があります。AWS Well-Architected Framework の Generative AI Lens の信頼性の柱に基づき、最も適切な設計はどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Bedrock のクロスリージョン推論プロファイルを使用して、複数リージョンにリクエストを自動分散する"
    },
    {
      "id": "B",
      "text": "FM が利用不可の場合にキャッシュされた過去の応答やルールベースの定型応答を返すフォールバック戦略を実装する"
    },
    {
      "id": "C",
      "text": "CloudWatch アラームでサービス障害を検知し、SNS で運用チームに通知して手動で対応する"
    },
    {
      "id": "D",
      "text": "プロビジョンドスループットを購入して、サービス障害時にも専用キャパシティを確保する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "信頼性の柱では、障害時にもサービスを継続するためのグレースフルデグラデーション（機能縮退）が推奨されます。キャッシュやルールベースの応答によるフォールバック戦略（B）は、FM が完全に利用不可の場合にもエンドユーザーに何らかの応答を返すことができます。クロスリージョン推論（A）は特定リージョンの障害には有効ですが、Bedrock サービス全体の障害やFMプロバイダー側の障害には対応できず、FM が完全に利用不可になるシナリオではサービスを継続できません。CloudWatch + SNS（C）は障害検知と通知のみで、手動対応ではサービス継続が保証されません。プロビジョンドスループット（D）は専用キャパシティを提供しますが、サービス障害自体を防ぐものではありません。（スキル1.1.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。クロスリージョン推論は特定リージョンの障害への対策として有効な点はあるものの、Bedrock サービス全体の障害やFMプロバイダー側の障害には対応できず、FM が完全に利用不可になるシナリオでのサービス継続要件を満たせません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。キャッシュやルールベースの応答によるフォールバック戦略は、FM が完全に利用不可の場合のサービス継続要件を直接満たします。特にグレースフルデグラデーションによる信頼性確保を最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。CloudWatch + SNS による通知は障害検知に有効な点はあるものの、手動対応では迅速なサービス継続が保証されず、自動的なサービス継続の要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。プロビジョンドスループットは専用キャパシティを提供できる点はあるものの、サービス障害自体を防ぐものではなく、障害時のサービス継続要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "AWS Well-Architected Framework - Generative AI Lens",
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/generative-ai-lens.html"
    },
    {
      "title": "AWS Well-Architected Framework - 信頼性の柱",
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"
    }
  ]
});
