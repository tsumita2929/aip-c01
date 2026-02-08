window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-023",
  "domain": 4,
  "task": "4.3",
  "skill": "4.3.2",
  "type": "multiple",
  "difficulty": "easy",
  "question": "ある金融機関が Amazon Bedrock を利用した GenAI アプリケーションを運用しています。規制当局の監査要件として、モデルへのすべての入出力を記録し、不正利用の検出とコスト異常の早期発見を実現する必要があります。運用チームは Bedrock のモデル呼び出しログを有効化してモニタリング基盤を整備することにしました。モデル呼び出しログのデータを活用して監査・モニタリング要件を効果的に満たすアプローチを2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "モデル呼び出しログを Amazon S3 に保存し、入力プロンプトと出力レスポンスの全文を長期保持する。AWS CloudTrail と組み合わせて、誰がいつどのモデルを呼び出したかの監査証跡を作成する"
    },
    {
      "id": "B",
      "text": "モデル呼び出しログに記録される入力・出力トークン数とモデル ID を Amazon CloudWatch メトリクスとして集計し、トークン使用量の異常パターンを検出する CloudWatch Alarms を設定する"
    },
    {
      "id": "C",
      "text": "モデル呼び出しログからモデルの内部重みパラメータを取得し、独自の評価基盤でモデルの品質劣化を検出する"
    },
    {
      "id": "D",
      "text": "モデル呼び出しログに記録されるトレーニングデータセットの情報を分析し、モデルのバイアスを評価する"
    },
    {
      "id": "E",
      "text": "モデル呼び出しログを他の AWS アカウントの Bedrock 使用状況と横断的に比較し、業界ベンチマークとの差異を分析する"
    }
  ],
  "correctAnswers": [
    "A",
    "B"
  ],
  "explanation": "正解はAとBです。Aでは、モデル呼び出しログを S3 に保存することで入力プロンプトと出力レスポンスの全文を長期保持でき、規制当局の監査要件を満たします。CloudTrail との組み合わせで、API 呼び出しの実行者・時刻・モデル情報の監査証跡も作成できます。Bでは、ログに記録される入力・出力トークン数とモデル ID を CloudWatch メトリクスとして活用し、通常パターンからの逸脱（大量のトークン消費、異常な呼び出し頻度）を自動検出できます。Cはモデルの内部重みパラメータは Bedrock のマネージドサービスでは公開されておらず、モデル呼び出しログからは取得できません。Dはトレーニングデータセットの情報はモデルプロバイダーの知的財産であり、モデル呼び出しログには含まれません。Eは他の AWS アカウントの使用状況はセキュリティ上の理由からアクセスできず、モデル呼び出しログは自アカウントのデータのみを記録します。",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。モデル呼び出しログの S3 保存により入出力全文の長期保持が可能になり、CloudTrail との組み合わせで完全な監査証跡を実現できます。規制当局の監査要件と不正利用検出の両方に活用できます。"
    },
    "B": {
      "correct": true,
      "text": "正解です。ログに記録されるトークン数とモデル ID を CloudWatch メトリクスとして活用し、異常パターンを自動検出する Alarms を設定することで、コスト異常の早期発見と不正利用の検出を実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。モデルの内部ニューラルネットワークの重みパラメータは Bedrock のマネージドサービスでは公開されておらず、モデル呼び出しログからは取得できません。Bedrock はモデルの推論 API を提供するサービスであり、内部パラメータへのアクセスは設計上許可されていません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。モデルのトレーニングに使用されたデータセットの情報はモデルプロバイダー（Anthropic、Meta等）の知的財産であり、モデル呼び出しログには含まれません。バイアス評価には Amazon SageMaker Clarify などの専用ツールが必要です。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。各 AWS アカウントのデータはセキュリティとプライバシーの観点から厳密に分離されており、他アカウントの Bedrock 使用状況をモデル呼び出しログから参照することはできません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock モデル呼び出しログ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html"
    },
    {
      "title": "Amazon CloudWatch による Amazon Bedrock のモニタリング",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-cw.html"
    },
    {
      "title": "AWS CloudTrail とは",
      "url": "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"
    }
  ]
});
