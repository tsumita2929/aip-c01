window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-037",
  "domain": 3,
  "task": "3.4",
  "skill": "3.4.2",
  "type": "single",
  "difficulty": "easy",
  "question": "ある企業が、2つの異なるプロンプト設計で Amazon Bedrock のモデルの応答品質を比較評価したいと考えています。数百件の評価ケースに対して、どちらのプロンプトがより正確で関連性の高い応答を生成するかを客観的に判定するために、最も効率的な方法はどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock のモデル評価機能で LLM-as-a-judge（自動評価）を使用し、別の基盤モデルに2つのプロンプトからの応答の正確性・関連性・有害性を比較評価させる"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のモデル評価機能で人間評価ワークフローを設定し、社内の専門家チームが全評価ケースに対して2つの応答をブラインド比較評価する"
    },
    {
      "id": "C",
      "text": "Amazon CloudWatch メトリクスで2つのプロンプトそれぞれのモデル呼び出しのレイテンシーとトークン使用量を比較し、より効率的なプロンプトを採用する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock のバッチ推論ジョブで2つのプロンプトを並列実行し、出力結果を S3 に保存して Amazon Athena で応答長や特定キーワードの出現頻度を統計分析する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Amazon Bedrock のモデル評価機能では、LLM-as-a-judge アプローチを使用して、別の基盤モデル（ジャッジモデル）が2つのプロンプトからの応答を正確性、関連性、有害性などの多面的な基準で自動比較評価できます。数百件の評価ケースに対して自動的に比較判定を行い、客観的で効率的な評価が可能です。B の人間評価は品質が高いですが、数百件の全ケースに対する専門家のブラインド比較評価は時間とコストが非常に大きく、最も効率的とは言えません。C の CloudWatch メトリクスによるレイテンシー・トークン使用量の比較は効率性の評価であり、応答の正確性や関連性といった品質評価とは異なります。D のバッチ推論 + Athena 分析は応答長やキーワード出現頻度の統計は取れますが、応答の正確性・関連性・有害性といった意味的な品質評価はできません。（スキル3.4.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。LLM-as-a-judge は数百件の評価ケースに対して正確性・関連性・有害性を自動的に比較評価でき、客観的な品質比較と効率的な評価を直接満たします。特にプロンプト比較評価を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。人間評価は品質が高いものの、数百件全ケースの専門家ブラインド比較は時間・コストが大きく、最も効率的な方法という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。レイテンシーやトークン使用量は効率性の指標であるものの、応答の正確性・関連性といった品質評価とは異なり、応答品質の比較評価という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。応答長やキーワード出現頻度の統計分析は表層的な分析であるものの、応答の正確性・関連性・有害性といった意味的な品質評価はできず、品質の比較評価という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Model Evaluation",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html"
    },
    {
      "title": "Amazon Bedrock Model Evaluation Job Types",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-type.html"
    }
  ]
});
