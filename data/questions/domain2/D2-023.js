window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-023",
  "domain": 2,
  "task": "2.3",
  "skill": "2.3.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある製造企業が、20年前に構築された SOAP ベースの在庫管理 API と、新しい生成 AI ベースの需要予測システムを統合したいと考えています。レガシー API の変更は最小限に抑えつつ、AI システムがリアルタイムで在庫データにアクセスできるようにする最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "レガシー API を完全に書き直して REST API に移行する"
    },
    {
      "id": "B",
      "text": "生成 AI システムを SOAP クライアントとして直接実装する"
    },
    {
      "id": "C",
      "text": "Amazon API Gateway でレガシー SOAP API のラッパーを作成し、REST/HTTP インターフェースを通じて AI システムからアクセスする"
    },
    {
      "id": "D",
      "text": "在庫データを毎日 CSV ファイルでエクスポートして S3 に保存する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解は C です。Amazon API Gateway をレガシー API のファサードとして使用することで、バックエンドの SOAP API を変更せずに REST/HTTP インターフェースを提供できます。Lambda をプロキシとして SOAP から REST への変換を行うことも可能です。A は完全書き直しはリスクとコストが高すぎます。B は SOAP を直接扱うのは現代の AI フレームワークとの統合が複雑です。D はバッチ処理ではリアルタイム性がありません。（スキル2.3.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。完全な書き直しは最新技術への移行が可能であるものの、リスクとコストが高く、レガシー API の変更を最小限に抑える要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。SOAP クライアントとしての直接実装はデータアクセスが可能であるものの、現代の AI フレームワークとの統合が複雑になり、効率的な統合の要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。API Gateway によるラッパー作成は、レガシー API の変更最小化とリアルタイムデータアクセスの両方を直接満たします。特に SOAP から REST への変換を最小の運用負荷で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。CSV ファイルの日次エクスポートはデータ取得が可能であるものの、リアルタイム性がなく、リアルタイムでの在庫データアクセスの要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon API Gateway REST APIs",
      "url": "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-rest-api.html"
    },
    {
      "title": "AWS Lambda with API Gateway",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html"
    }
  ]
});
