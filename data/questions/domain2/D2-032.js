window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-032",
  "domain": 2,
  "task": "2.3",
  "skill": "2.3.4",
  "type": "multiple",
  "difficulty": "medium",
  "question": "グローバル企業が異なる環境要件を持つ複数の拠点で生成 AI アプリケーションをデプロイする必要があります。環境横断デプロイに関して正しい説明を2つ選んでください。",
  "options": [
    {
      "id": "A",
      "text": "AWS Outposts はオンプレミス環境に AWS のインフラを拡張し、データ主権要件がある拠点でのローカル推論処理を可能にする"
    },
    {
      "id": "B",
      "text": "AWS Wavelength は通信事業者の5Gネットワークエッジにコンピューティングを配置し、超低遅延が要求されるモバイルアプリケーションのAI推論に適している"
    },
    {
      "id": "C",
      "text": "AWS Outposts ではすべての AWS サービスが利用可能であり、制限はない"
    },
    {
      "id": "D",
      "text": "エッジでの推論には常にクラウドへのリアルタイム接続が必須である"
    },
    {
      "id": "E",
      "text": "AWS Wavelength はオンプレミスのデータセンターに設置するサービスである"
    }
  ],
  "correctAnswers": [
    "A",
    "B"
  ],
  "explanation": "正解は A と B です。AWS Outposts はオンプレミス環境に AWS のコンピューティングとストレージを拡張でき、データ主権要件に対応してローカルでの推論処理が可能です（A が正解）。AWS Wavelength は通信事業者のインフラ内にコンピューティングを配置し、5Gネットワーク経由の超低遅延アクセスを提供するため、モバイル向けAI推論に適しています（B が正解）。C は誤りで、Outposts で利用可能な AWS サービスには制限があります。D は誤りで、エッジデバイスでの推論はオフラインでも実行可能です。E は誤りで、Wavelength は通信事業者のデータセンターに配置されます。（スキル2.3.4）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。AWS Outposts はオンプレミス環境に AWS のコンピューティングとストレージを拡張でき、データ主権要件に対応してローカルでの推論処理が可能であり、環境横断デプロイの要件を直接満たします。"
    },
    "B": {
      "correct": true,
      "text": "正解です。AWS Wavelength は通信事業者の 5G ネットワークエッジにコンピューティングを配置し、超低遅延が要求されるモバイルアプリケーションの AI 推論に適しており、エッジデプロイの要件を直接満たします。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Outposts は AWS インフラの拡張が可能であるものの、利用可能な AWS サービスには制限があり、すべてのサービスが使えるという説明は事実と異なります。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。クラウド接続は多くの場合有用であるものの、エッジデバイスでの推論はオフラインでも実行可能であり、常にリアルタイム接続が必須という説明は事実と異なります。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。Wavelength はエッジコンピューティングを提供するものの、通信事業者のデータセンターに配置されるサービスであり、オンプレミスのデータセンターに設置するという説明は事実と異なります。"
    }
  },
  "references": [
    {
      "title": "AWS Outposts",
      "url": "https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html"
    },
    {
      "title": "AWS Wavelength",
      "url": "https://docs.aws.amazon.com/wavelength/latest/developerguide/what-is-wavelength.html"
    }
  ]
});
