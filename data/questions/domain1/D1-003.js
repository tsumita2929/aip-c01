window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-003",
  "domain": 1,
  "task": "1.1",
  "skill": "1.1.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、社内の技術ドキュメント（約500件、PDF・Word形式）を活用したQ&Aシステムの PoC を2週間以内に開発する必要があります。ドキュメントには図表や複雑なフォーマットが含まれています。Amazon Bedrock を使用して PoC の実現可能性を最も効率的に検証する方法はどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Bedrock ナレッジベースを使用し、S3 にアップロードしたドキュメントで RAG パイプラインを構築する。チャンキング戦略はデフォルト設定で開始する"
    },
    {
      "id": "B",
      "text": "Bedrock ナレッジベースを使用し、Amazon Textract でドキュメントを前処理してからS3にアップロードする。階層型チャンキングで図表の構造を保持する"
    },
    {
      "id": "C",
      "text": "Amazon Kendra を使用してエンタープライズ検索インデックスを作成し、Bedrock FM と統合してQ&A機能を構築する"
    },
    {
      "id": "D",
      "text": "OpenSearch Serverless にベクトルインデックスを作成し、Bedrock の埋め込みモデルでカスタム RAG パイプラインを開発する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "2週間以内の PoC では迅速な実現可能性検証が最優先です。Bedrock ナレッジベースはマネージドサービスとして S3 上のドキュメントから RAG パイプラインを最小限の設定で構築でき、デフォルトチャンキングで素早く開始できます。Textract による前処理と階層型チャンキング（B）は図表の構造保持に有効ですが、PoC 段階では過剰な最適化であり、まずデフォルト設定で検証すべきです。Kendra + Bedrock FM（C）は実装可能ですが、Kendra のインデックス作成とFM統合の設定に時間がかかり、2週間の制約では非効率です。OpenSearch Serverless のカスタムRAG（D）は柔軟性が高いですが、カスタムコードの開発が必要で PoC には過剰です。（スキル1.1.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock ナレッジベースのデフォルト設定は、2週間以内の PoC という時間制約と迅速な実現可能性検証の要件を直接満たします。特に最小限の構成で RAG パイプラインを最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Textract 前処理と階層型チャンキングは図表の構造保持に有効な点はあるものの、PoC 段階では過剰な最適化であり、2週間の時間制約に対して非効率です。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Kendra + Bedrock FM は実装可能な点はあるものの、Kendra のインデックス作成と FM 統合設定に時間がかかり、2週間の制約では非効率です。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。OpenSearch Serverless のカスタム RAG は柔軟性が高い点はあるものの、カスタムコード開発が必要で PoC の迅速な検証要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ナレッジベース",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
    },
    {
      "title": "Amazon Bedrock で RAG を構築",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-create.html"
    }
  ]
});
