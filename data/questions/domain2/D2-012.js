window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-012",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.7",
  "type": "single",
  "difficulty": "easy",
  "question": "開発者が軽量なツール（テキスト変換、日付計算など）を MCP サーバーとして提供したいと考えています。リクエストは散発的で、コスト最適化を重視しています。最も適切なホスティング方法はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "AWS Lambda で MCP サーバーをホストし、リクエスト時のみ実行する"
    },
    {
      "id": "B",
      "text": "Amazon EC2 の Reserved Instance で MCP サーバーを常時稼働させる"
    },
    {
      "id": "C",
      "text": "Amazon EKS クラスターで MCP サーバーを運用する"
    },
    {
      "id": "D",
      "text": "AWS Outposts にMCPサーバーをデプロイする"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。軽量で散発的なリクエストに対応するステートレスなツールには、AWS Lambda が最適です。Lambda はリクエスト時のみ実行されるため、常時稼働のコストが不要で、コスト最適化に適しています。B の EC2 Reserved Instance は常時稼働のコストが発生し、散発的なリクエストには過剰です。C の EKS クラスターは管理コストが高く、軽量ツールには不向きです。D の Outposts はオンプレミス要件がある場合の選択肢です。（スキル2.1.7）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。AWS Lambda はリクエスト時のみ実行される従量課金モデルで、散発的なリクエストへの対応とコスト最適化の両方を直接満たします。特にサーバーレスにより最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。EC2 Reserved Instance は安定した処理能力を提供するものの、常時稼働のコストが発生し、散発的なリクエストに対するコスト最適化の要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Amazon EKS クラスターはコンテナ管理が可能であるものの、管理コストが高く、軽量ツールのホスティングにはコスト最適化の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。AWS Outposts はオンプレミス環境への拡張が可能であるものの、オンプレミス要件がない場合には不適切で、コスト最適化の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "AWS Lambda overview",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
    },
    {
      "title": "Amazon Bedrock Agents with Lambda",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html"
    }
  ]
});
