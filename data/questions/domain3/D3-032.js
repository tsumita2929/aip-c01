window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-032",
  "domain": 3,
  "task": "3.4",
  "skill": "3.4.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、Amazon Bedrock のモデルを使用した顧客向けレコメンデーションシステムの公平性を評価したいと考えています。モデルが特定の人口統計グループ（性別、年齢層、地域等）に対してバイアスのある推奨を行っていないかを体系的に評価するには、どのアプローチが最も適切ですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon SageMaker AI Clarify を使用して、Bedrock モデルの推論に対する特徴量重要度分析（SHAP 値）を実行し、保護属性の影響度を定量化する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock ガードレールのコンテンツフィルターで差別的表現のしきい値を HIGH に設定し、バイアスのある出力を自動的にブロックする"
    },
    {
      "id": "C",
      "text": "A/B テストを実施して異なるモデルバージョンの推奨結果を比較し、ユーザーのクリック率（CTR）に統計的有意差がないことでバイアスなしと判断する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock のモデル評価機能で、人口統計グループ別に準備した評価データセットを用いて応答品質を自動評価し、グループ間の差異を定量的に分析する"
    }
  ],
  "correctAnswers": [
    "D"
  ],
  "explanation": "Amazon Bedrock のモデル評価機能では、異なる人口統計グループ別の評価データセットを使用して、モデルの応答品質（正確性、関連性、有害性等）をグループ間で比較する自動評価を実施できます。定量的なメトリクスにより、特定グループへのバイアスを体系的に検出できます。A の SageMaker AI Clarify は表形式データの ML モデルのバイアス検出に特化しており、SHAP による特徴量重要度分析が可能ですが、Bedrock の基盤モデル（LLM）の自然言語出力のバイアス評価には直接適用できません。B のガードレールのコンテンツフィルターは差別的表現のブロックに有効ですが、バイアスの「検出・評価」ではなく「防止」の機能であり、体系的な公平性評価とは異なります。C の A/B テストは推奨結果のパフォーマンス比較に有用ですが、CTR の統計的有意差がないことはバイアスがないことの証明にはならず、人口統計グループ別の品質差異を直接評価していません。（スキル3.4.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。SageMaker AI Clarify は表形式データの ML モデルのバイアス検出に特化しているものの、Bedrock の LLM の自然言語出力のバイアス評価には直接適用できず、LLMの公平性評価という要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。コンテンツフィルターは差別的表現の「防止」機能であるものの、バイアスの「検出・評価」とは異なり、体系的な公平性評価という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。A/B テストの CTR 比較はパフォーマンス評価であるものの、CTR に差がないことはバイアス不在の証明にならず、人口統計グループ別の体系的な公平性評価という要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。モデル評価機能で人口統計グループ別の評価データセットを用い、応答品質を定量的に比較分析することで、体系的な公平性評価とバイアスの検出を直接満たします。特にグループ間の品質差異の定量分析を最小の運用負荷で実現できます。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Model Evaluation",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html"
    },
    {
      "title": "AWS Responsible AI",
      "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/ml-governance/responsible-ai.html"
    }
  ]
});
