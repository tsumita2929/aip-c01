window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-059",
  "domain": 1,
  "task": "1.6",
  "skill": "1.6.5",
  "type": "single",
  "difficulty": "easy",
  "question": "ある開発者が、Amazon Bedrock の FM を使用して、顧客の返品リクエストに対する適格性判定（購入日、商品状態、返品ポリシーの条件を複合的に評価）を自動化するシステムを構築しています。初期テストでは、FM が条件を見落として誤った判定を返すことがありました。この問題を改善するために最も適切なプロンプトエンジニアリング手法はどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Chain-of-Thought（思考の連鎖）プロンプティングで、購入日の確認 → 商品状態の評価 → ポリシー条件の照合 → 最終判定の各ステップを明示的に推論させる"
    },
    {
      "id": "B",
      "text": "Few-shot プロンプティングで、過去の返品判定の成功事例を3〜5件プロンプトに含めて、判定パターンを学習させる"
    },
    {
      "id": "C",
      "text": "Zero-shot プロンプティングで、返品ポリシーの全文をシステムプロンプトに含め、FM に直接判定させる"
    },
    {
      "id": "D",
      "text": "temperature パラメータを 0 に設定し、top_p を低い値に調整して、FM の出力の決定性を高める"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Chain-of-Thought プロンプティングは、FM に段階的な推論プロセスを明示させることで、複合的な条件判定の精度を向上させます。各ステップ（購入日確認 → 商品状態評価 → ポリシー照合 → 最終判定）を明示的に推論させることで、条件の見落としを防止できます。Few-shot プロンプティング（B）はパターン学習に有効ですが、複合的な条件の論理的推論の改善には Chain-of-Thought の方が効果的です。Zero-shot + ポリシー全文（C）はコンテキストを提供しますが、FM が条件を系統的に評価する保証がなく、見落としの問題は解決されません。temperature と top_p の調整（D）は出力の決定性に影響しますが、推論の正確性を直接改善するものではありません。（スキル1.6.5）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Chain-of-Thought プロンプティングは、各ステップの明示的な推論による複合条件の見落とし防止と判定精度向上の要件を直接満たします。特に購入日確認→商品状態評価→ポリシー照合→最終判定の段階的推論を実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Few-shot プロンプティングはパターン学習に有効な点はあるものの、複合条件の論理的推論改善には Chain-of-Thought の方が効果的であり、条件見落とし防止の要件を十分に満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。ポリシー全文の提供はコンテキストを与えられる点はあるものの、FM が条件を系統的に評価する保証がなく見落としの問題が残り、判定精度向上の要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。temperature と top_p の調整は出力の決定性に影響する点はあるものの、推論の正確性を直接改善するものではなく、条件見落とし防止の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock プロンプトエンジニアリング",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html"
    }
  ]
});
