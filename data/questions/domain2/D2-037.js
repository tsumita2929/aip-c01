window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-037",
  "domain": 2,
  "task": "2.4",
  "skill": "2.4.1",
  "type": "single",
  "difficulty": "easy",
  "question": "スタートアップ企業が Python で Amazon Bedrock の基盤モデルを呼び出すプロトタイプアプリケーションを構築しています。開発チームは AWS の認証処理の簡素化、自動リトライ、エラーハンドリングの統一を求めています。また、将来的に InvokeModel から InvokeModelWithResponseStream への移行を容易にしたいと考えています。これらの要件を満たす最も適切な実装アプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "AWS SDK for Python（Boto3）の bedrock-runtime クライアントを使用し、SigV4 署名の自動処理と組み込みリトライ機能を活用して InvokeModel API を呼び出す"
    },
    {
      "id": "B",
      "text": "Python の requests ライブラリで Bedrock の REST エンドポイントに直接 HTTP リクエストを送信し、SigV4 署名を手動で実装して認証する"
    },
    {
      "id": "C",
      "text": "AWS CLI の bedrock-runtime コマンドを Python の subprocess モジュールから呼び出し、JSON 出力をパースしてレスポンスを取得する"
    },
    {
      "id": "D",
      "text": "LangChain の Bedrock インテグレーションを使用し、LangChain のチェーン機能で Bedrock API の呼び出しをラップする"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Boto3 の bedrock-runtime クライアントは、SigV4 署名の自動処理、エクスポネンシャルバックオフによる組み込みリトライ、統一的なエラーハンドリング（ClientError、ThrottlingException 等）を提供します。また、InvokeModel と InvokeModelWithResponseStream は同じクライアントのメソッドとして提供されるため、API の移行も容易です。（スキル2.4.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Boto3 の bedrock-runtime クライアントは、SigV4 認証の自動化、組み込みリトライ、統一エラーハンドリング、ストリーミング API への容易な移行の全要件を直接満たします。AWS が公式にサポートする SDK であり、最も信頼性の高い実装方法です。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。requests ライブラリでの直接 HTTP 呼び出しは柔軟性が高いものの、SigV4 署名の手動実装が必要でバグの温床となりやすく、認証簡素化の要件を満たしません。また、リトライロジックやストリーミング処理も独自実装が必要です。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。subprocess 経由の CLI 呼び出しはプロトタイピングには使用可能であるものの、プロセス起動のオーバーヘッド、JSON パースの脆弱性、ストリーミングレスポンスの処理困難さにより、本番アプリケーションとしての品質要件を満たしません。エラーハンドリングも終了コードベースとなり統一性に欠けます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。LangChain は高レベルの抽象化を提供するものの、サードパーティライブラリへの依存が追加され、Bedrock 固有のパラメータ設定やエラーハンドリングが LangChain の抽象化に隠蔽されるため、将来の API 移行時に LangChain のバージョン互換性の影響を受ける可能性があります。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock API reference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/api-setup.html"
    },
    {
      "title": "Amazon Bedrock inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    }
  ]
});
