window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-005",
  "domain": 5,
  "task": "5.1",
  "skill": "5.1.5",
  "type": "single",
  "difficulty": "hard",
  "question": "ある法律事務所が、RAG（Retrieval-Augmented Generation）ベースの法的文書分析システムを Amazon Bedrock と Amazon OpenSearch Service で構築しています。システムの応答品質を自動評価するため、LLM-as-a-judge アプローチを採用したいと考えています。評価対象のモデル出力に対して、別のLLMが忠実度（Faithfulness）、関連性（Relevance）、根拠の正確性（Groundedness）を自動スコアリングする仕組みを構築する場合、最も適切な実装方法はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Comprehend のカスタム分類器をトレーニングして、応答の品質を分類する"
    },
    {
      "id": "B",
      "text": "Amazon Textract で法的文書からテキストを抽出し、文字列一致率で品質を評価する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のモデル評価機能で LLM-as-a-judge 評価タイプを設定し、評価用モデルとして別の基盤モデルを指定して自動スコアリングジョブを実行する"
    },
    {
      "id": "D",
      "text": "AWS Glue のデータ品質ルールを使用して、応答テキストのフォーマットを検証する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解はCです。Amazon Bedrock のモデル評価機能は LLM-as-a-judge 評価タイプをサポートしており、評価用の基盤モデルを指定して、忠実度、関連性、根拠の正確性などの品質メトリクスを自動的にスコアリングできます。RAG システムの評価に特化したメトリクスも含まれており、取得したコンテキストに基づく応答の正確性を評価できます。Aの Comprehend カスタム分類器は定型的なテキスト分類には有用ですが、生成AIの応答品質の多面的な評価（忠実度、根拠の正確性など）には対応できません。Bの Textract はOCRおよび文書解析ツールであり、応答品質の評価機能はありません。DのGlue データ品質ルールは構造化データの品質検証用であり、自然言語の意味的な品質評価には使用できません。（スキル5.1.5）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Comprehend のカスタム分類器は定型的なテキスト分類には有用であるものの、生成AIの応答品質の多面的な評価（忠実度、根拠の正確性など）には対応できません。LLM-as-a-judge による自動スコアリングの要件を満たせません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Textract は OCR および文書解析ツールであるものの、応答品質の評価機能はありません。文字列一致率では忠実度や根拠の正確性といった意味的な品質は測定できません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。Amazon Bedrock のモデル評価機能は LLM-as-a-judge 評価タイプをサポートしており、忠実度、関連性、根拠の正確性の自動スコアリングと RAG システム評価の両要件を直接満たします。特に評価用モデルの指定による自動化を最小の運用負荷で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Glue のデータ品質ルールは構造化データの品質検証用であるものの、自然言語の忠実度や根拠の正確性といった意味的な品質評価には使用できません。応答品質の自動スコアリングの要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock モデル評価 LLM-as-a-judge",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-llm-as-judge.html"
    },
    {
      "title": "Amazon Bedrock ナレッジベース",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
    }
  ]
});
