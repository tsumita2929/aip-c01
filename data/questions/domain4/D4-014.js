window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-014",
  "domain": 4,
  "task": "4.2",
  "skill": "4.2.6",
  "type": "single",
  "difficulty": "hard",
  "question": "ある企業が RAG アーキテクチャの GenAI アプリケーションのパフォーマンスを最適化しています。エンドツーエンドのレスポンスタイムが平均15秒で、目標は5秒以内です。AWS X-Ray によるトレース分析の結果、内訳は次のとおりです：ベクトルDB検索に4秒、検索結果の後処理に1秒、LLM推論に8秒、その他に2秒。最も大きなパフォーマンス改善をもたらすアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "ベクトルDBのインデックスタイプをHNSWに変更して検索レイテンシーを削減する"
    },
    {
      "id": "B",
      "text": "LLMの入力プロンプトを最適化して不要なコンテキストを削除し、さらにレイテンシー最適化モデルへの切り替えを検討する"
    },
    {
      "id": "C",
      "text": "検索結果の後処理ロジックをLambda関数からEC2インスタンスに移行する"
    },
    {
      "id": "D",
      "text": "アプリケーション全体をより大きなEC2インスタンスに移行する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。トレース分析によりLLM推論が15秒中8秒（約53%）を占めており、最大のボトルネックであることが明確です。LLMの入力プロンプト最適化により不要なコンテキストを削除してトークン数を減らし、さらにBedrock のレイテンシー最適化モデルに切り替えることで、推論時間を大幅に短縮できます。APIコールプロファイリングの結果に基づいて最大のボトルネックに集中するアプローチが最も効率的です。Aのベクトルインデックス最適化は4秒の部分の改善であり効果は限定的です。Cの後処理移行は1秒の部分であり改善幅が小さいです。Dのインスタンス移行はボトルネックがBedrock API側にあるため効果がありません。（スキル: 4.2.6）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。ベクトル DB のインデックスタイプを HNSW に変更すると検索レイテンシー（4秒の部分）は改善するものの、最大のボトルネックである LLM 推論（8秒）には影響せず、目標の5秒以内達成の要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。LLM 推論の最適化は、レスポンスタイム短縮とボトルネック解消の両方を直接満たします。特に15秒中8秒（約53%）を占める最大のボトルネックに集中し、プロンプト最適化とレイテンシー最適化モデルへの切り替えで最も大きなパフォーマンス改善を実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。検索結果の後処理は全体の1秒（約7%）しか占めておらず、Lambda から EC2 への移行による改善効果は非常に小さいため、目標の5秒以内達成の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。ボトルネックが Bedrock API 側の LLM 推論にあるため、アプリケーション側の EC2 インスタンスサイズを大きくしてもレスポンスタイム短縮の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "AWS X-Ray とは",
      "url": "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"
    },
    {
      "title": "Amazon Bedrock の推論パラメータ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html"
    },
    {
      "title": "Amazon Bedrock プロンプトエンジニアリングガイドライン",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html"
    }
  ]
});
