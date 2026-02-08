window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-059",
  "domain": 2,
  "task": "2.2",
  "skill": "2.2.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、テキスト生成タスクのために大規模言語モデル（LLM）を本番環境にデプロイしようとしています。以下の要件があります。(1) オープンソースの Llama モデル（70B パラメータ）を使用したい、(2) モデルのプロンプトテンプレートやハイパーパラメータをカスタマイズして推論動作を調整したい、(3) 推論インスタンスタイプやオートスケーリングポリシーを細かく制御したい、(4) できるだけ短期間でデプロイを完了したい。これらの要件に最も適したデプロイ方法はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock のオンデマンド推論を使用し、Llama モデルへの API 呼び出しでテキスト生成を行う"
    },
    {
      "id": "B",
      "text": "SageMaker JumpStart から Llama 70B モデルをワンクリックでデプロイし、エンドポイント設定でインスタンスタイプとスケーリングポリシーをカスタマイズする"
    },
    {
      "id": "C",
      "text": "SageMaker のカスタムコンテナを使用し、Llama 70B モデルのサービングコードを独自に実装してエンドポイントにデプロイする"
    },
    {
      "id": "D",
      "text": "Amazon EC2 の GPU インスタンス上に vLLM サーバーを構築し、Llama 70B モデルを手動でデプロイして API サーバーとして運用する"
    }
  ],
  "correctAnswers": ["B"],
  "explanation": "正解は B です。SageMaker JumpStart は事前構成された Llama モデルをワンクリックでデプロイでき、短期間でのデプロイ要件を満たします。JumpStart デプロイ後はインスタンスタイプの選択やオートスケーリングポリシーの設定が可能で、ハイパーパラメータのカスタマイズもサポートしています。A の Bedrock はインスタンスタイプやスケーリングの細かい制御ができません。C のカスタムコンテナはデプロイ期間が長くなります。D の EC2 手動構築は最も運用負荷が高くデプロイに時間がかかります。（スキル2.2.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Amazon Bedrock のオンデマンド推論は API 呼び出しだけで LLM を利用でき、最も簡単に開始できるものの、推論インスタンスタイプの選択やオートスケーリングポリシーの細かい制御ができません。結果として、インフラレベルのカスタマイズ要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。SageMaker JumpStart は Llama 70B を含む主要な基盤モデルをワンクリックでデプロイでき、短期間でのデプロイ要件を直接満たします。デプロイ後にインスタンスタイプ、オートスケーリングポリシー、推論ハイパーパラメータを柔軟にカスタマイズでき、全ての要件を最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。カスタムコンテナによるデプロイはサービングコードの完全な制御が可能であるものの、コンテナイメージの作成、モデルサービングフレームワークの設定、推論コードの実装が必要です。結果として、デプロイ完了までの期間が大幅に延長され、短期間でのデプロイ要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。EC2 上の vLLM サーバーは推論パフォーマンスの最大限の制御が可能であるものの、GPU インスタンスのプロビジョニング、vLLM のインストール・設定、モデルのダウンロード・ロード、API サーバーの構築を手動で行う必要があります。結果として、デプロイ期間が最も長くなり、運用負荷も最大です。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker JumpStart",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/studio-jumpstart.html"
    },
    {
      "title": "Deploy a model from SageMaker JumpStart",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-deploy.html"
    }
  ]
});
