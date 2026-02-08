window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-055",
  "domain": 1,
  "task": "1.6",
  "skill": "1.6.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、Amazon Bedrock を使用したマルチターンの対話型 AI アシスタントを構築しています。1日あたり約10,000セッション、各セッション平均20ターンの会話が発生します。セッション間のコンテキストを維持しつつ、FM のコンテキストウィンドウの制限（200K トークン）を超えないように会話履歴を管理する必要があります。最も適切なアーキテクチャはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "DynamoDB にセッション ID ごとに全会話履歴を保存し、各リクエスト時に直近N件のメッセージと要約を取得して FM のコンテキストに含める"
    },
    {
      "id": "B",
      "text": "ElastiCache for Redis にセッション ID ごとに会話履歴をキャッシュし、TTL を設定してセッション終了後に自動的に削除する"
    },
    {
      "id": "C",
      "text": "Amazon S3 に各セッションの会話履歴を JSON ファイルとして保存し、各リクエスト時にファイルを読み込む"
    },
    {
      "id": "D",
      "text": "Bedrock Agents のメモリ機能を使用して、セッション間の会話コンテキストを自動的に管理する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "DynamoDB はセッション ID をパーティションキーとして低レイテンシーで読み書きでき、10,000セッション規模にスケーラブルです。全会話履歴を保存しつつ、直近N件のメッセージと長期の要約を組み合わせることで、コンテキストウィンドウの制限を超えないように管理できます。ElastiCache（B）はインメモリで高速ですが、TTL で自動削除すると会話履歴が失われ、長期的なコンテキスト維持ができません。また、インメモリストレージはコストが DynamoDB より高くなります。S3（C）はストレージとしては安価ですが、各リクエストでのファイル読み込みにレイテンシーが発生し、対話的なユースケースでは応答速度に影響します。Bedrock Agents のメモリ機能（D）は Bedrock Agents 専用の機能であり、カスタムアプリケーションでの汎用的な会話履歴管理には適していません。（スキル1.6.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。DynamoDB でのセッション管理と直近N件+要約の組み合わせは、低レイテンシーでのスケーラブルな読み書きとコンテキストウィンドウ制限の管理の要件を直接満たします。特に10,000セッション規模に対応しつつ会話履歴を効率的に管理できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。ElastiCache は高速なインメモリアクセスが可能な点はあるものの、TTL での自動削除で長期コンテキストが失われ、インメモリのコストも DynamoDB より高く、長期的なコンテキスト維持の要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。S3 は安価なストレージとして有用な点はあるものの、毎回のファイル読み込みにレイテンシーが発生し、対話的ユースケースの応答速度要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Bedrock Agents のメモリ機能はエージェント内での会話管理に有用な点はあるものの、Agents 専用の機能であり、カスタムアプリケーションの汎用的な会話履歴管理の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Converse API",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html"
    },
    {
      "title": "Amazon DynamoDB 開発者ガイド",
      "url": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"
    }
  ]
});
