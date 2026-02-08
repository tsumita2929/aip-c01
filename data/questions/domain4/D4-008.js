window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-008",
  "domain": 4,
  "task": "4.1",
  "skill": "4.1.4",
  "type": "single",
  "difficulty": "hard",
  "question": "あるグローバル企業が Amazon Bedrock を使用した多言語カスタマーサポートシステムを運用しています。世界中の拠点からアクセスがあり、同じ製品に関する問い合わせが多いですが、言語や表現が異なります。レイテンシー削減とコスト最適化の両方を達成するために、キャッシュ戦略として最も効果的な組み合わせはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "各言語ごとに別々の Amazon ElastiCache クラスターを配置し、言語別にキャッシュを管理する"
    },
    {
      "id": "B",
      "text": "Amazon DynamoDB にすべてのリクエストとレスポンスのペアを保存し、完全一致で検索する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のプロンプトキャッシュで共通のシステムプロンプトと製品情報コンテキストをキャッシュし入力トークンコストを削減するとともに、Amazon ElastiCache でよくある質問のレスポンスをアプリケーション層でキャッシュして応答速度を向上させる"
    },
    {
      "id": "D",
      "text": "Amazon S3 にすべてのレスポンスを保存し、S3 Transfer Acceleration で高速配信する"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "正解はCです。プロンプトキャッシュとアプリケーション層キャッシュの組み合わせは、多層キャッシュ戦略として最も効果的です。Amazon Bedrock のプロンプトキャッシュにより、繰り返し使用される共通のシステムプロンプトと製品情報コンテキスト部分をキャッシュすることで入力トークンコストを削減できます。さらに、Amazon ElastiCache によるアプリケーション層キャッシュでよくある質問のレスポンスを高速に返却し、レイテンシーを削減できます。Aの言語別ElastiCacheは管理が複雑で、セマンティックな類似性判定ができません。BのDynamoDB完全一致検索は、自然言語の多様性に対応できずキャッシュヒット率が極めて低くなります。DのS3保存はリアルタイムのキャッシュ検索には適していません。（スキル: 4.1.4）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。各言語ごとに別々の ElastiCache クラスターを配置すると管理が複雑になり、運用負荷が増大します。また、セマンティックな類似性判定ができないため、レイテンシー削減の効果も限定的です。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。DynamoDB に完全一致で検索する方法は高速なキー検索が可能なものの、多言語環境では同じ意味の質問でも表現が大きく異なるため、キャッシュヒット率が極めて低くコスト最適化の要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。プロンプトキャッシュとアプリケーション層キャッシュの組み合わせは、レイテンシー削減とコスト最適化の両方を直接満たします。特にBedrock のプロンプトキャッシュで入力トークンコストを削減し、ElastiCache でレスポンスをキャッシュしてレイテンシーを最小の運用負荷で削減できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。S3 にレスポンスを保存し Transfer Acceleration で配信する方法はデータ保存には適しているものの、リアルタイムのキャッシュ検索用途には適しておらず、レイテンシー削減の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock のプロンプトキャッシュ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html"
    },
    {
      "title": "Amazon ElastiCache とは",
      "url": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html"
    }
  ]
});
