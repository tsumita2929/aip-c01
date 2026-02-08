window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-012",
  "domain": 4,
  "task": "4.2",
  "skill": "4.2.4",
  "type": "single",
  "difficulty": "easy",
  "question": "ある広告代理店が Amazon Bedrock 上の基盤モデルを使用して、クライアント向けのマーケティングコピー生成システムを構築しています。マーケターから「生成されるコピーが無難で似通った内容ばかり」というフィードバックがあり、より創造的で多様なコピーを生成したいと考えています。ただし、意味不明な文章や文法的に破綻した出力は避け、ブランドガイドラインへの準拠も維持する必要があります。1日あたり約500件のコピー生成リクエストがあります。この目標を達成するために最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "推論パラメータの temperature を0.8〜0.9に引き上げて出力の多様性を高めつつ、top-p を0.9に設定して低確率の極端なトークンを排除する。Amazon Bedrock Guardrails でブランドガイドライン違反を検出するコンテンツフィルターを設定する"
    },
    {
      "id": "B",
      "text": "temperature を0.1に下げて決定論的な出力を保証し、Amazon Comprehend でコピーの感情分析を実施して品質を担保する"
    },
    {
      "id": "C",
      "text": "maximum tokens を50に制限して短いコピーを生成し、AWS Lambda で複数のショートコピーを結合して最終的なマーケティングコピーを作成する"
    },
    {
      "id": "D",
      "text": "Amazon SageMaker でマーケティングコピー専用のカスタムモデルをファインチューニングし、リアルタイムエンドポイントにデプロイして独自のパラメータで推論を実行する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解はAです。temperature を0.8〜0.9に引き上げるとモデルの出力確率分布がより均一になり、多様で創造的なテキストが生成されやすくなります。top-p を0.9に設定することで確率の高い上位90%のトークンからサンプリングされ、低確率の極端なトークン（意味不明な文章の原因）を排除できます。さらに Bedrock Guardrails のコンテンツフィルターでブランドガイドライン違反を自動検出することで、品質管理も実現できます。Bは temperature 0.1では出力が決定論的になり、多様性が著しく低下します。Comprehend の感情分析は多様性向上には寄与しません。Cは maximum tokens の制限は出力長の制御であり多様性とは無関係です。ショートコピーの結合は文脈の一貫性を損ないます。DはSageMaker でのファインチューニングは投資が大きく、パラメータ調整と Guardrails で解決できる課題に対しては過剰です。",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。temperature と top-p の適切な調整で多様性と品質のバランスを実現し、Guardrails でブランドガイドライン準拠を自動的に担保できます。マネージド機能の組み合わせで最小の運用負荷で要件を満たせます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。temperature 0.1では出力が決定論的になり、創造的で多様なコピー生成の要件を満たしません。Comprehend の感情分析はテキストの感情傾向を分析する機能であり、出力の多様性向上には寄与しません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。maximum tokens の制限は出力の長さを制御するパラメータであり、内容の多様性や創造性には影響しません。ショートコピーを Lambda で結合するアプローチは文脈の一貫性を損ない、品質低下を招きます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。SageMaker でのカスタムモデルのファインチューニングは、データ準備・学習・デプロイの運用負荷が高く、推論パラメータの調整と Guardrails で解決できる課題に対しては過剰な投資です。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock の推論パラメータ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html"
    },
    {
      "title": "Amazon Bedrock Guardrails",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    }
  ]
});
