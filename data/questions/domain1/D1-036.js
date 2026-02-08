window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-036",
  "domain": 1,
  "task": "1.4",
  "skill": "1.4.4",
  "type": "single",
  "difficulty": "medium",
  "question": "あるグローバル企業が、社内の技術ナレッジを統合した RAG システムを Amazon Bedrock ナレッジベースで構築しています。データソースは Confluence の社内Wiki（約2万ページ、毎日更新あり）と SharePoint のドキュメントライブラリ（約5万ファイル、週次更新）の2つです。要件として、(1) データソースからの取り込みが自動化されていること、(2) 各データソースの認証情報を安全に管理できること、(3) 運用チームに追加のインフラ管理が発生しないこと、が求められています。最も運用負荷が低いアーキテクチャはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Bedrock ナレッジベースのマネージドデータソースコネクタを使用して Confluence と SharePoint を直接接続する。認証情報は AWS Secrets Manager に保存し、コネクタの同期スケジュールを設定して自動取り込みを実行する"
    },
    {
      "id": "B",
      "text": "Lambda 関数と EventBridge スケジュールでカスタムクローラーを開発し、Confluence REST API と SharePoint Graph API からデータを取得して S3 に保存する。認証トークンは Parameter Store に保存し、S3 をナレッジベースのデータソースとして構成する"
    },
    {
      "id": "C",
      "text": "Amazon Kendra のデータソースコネクタで Confluence と SharePoint からデータを取得・インデックスし、Kendra の検索結果を Bedrock の FM に渡して回答を生成するアーキテクチャを構築する"
    },
    {
      "id": "D",
      "text": "AWS Glue のクローラーを使用して Confluence と SharePoint のデータを S3 にETL処理で取り込み、Glue Data Catalog でメタデータを管理した後、S3 を Bedrock ナレッジベースのデータソースとして構成する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Bedrock ナレッジベースのマネージドデータソースコネクタは、Confluence や SharePoint に対してネイティブの接続機能を提供し、認証情報の Secrets Manager 統合、同期スケジュールの設定、差分同期が可能です。追加のインフラ管理やカスタムコードの開発が不要で、運用負荷が最も低くなります。Lambda カスタムクローラー（B）は機能的には実現可能ですが、各API のページネーション処理、エラーハンドリング、レート制限対応、認証トークンのリフレッシュなどのカスタムロジックを開発・保守する必要があり、マネージドコネクタと比較して運用負荷が大幅に増加します。Kendra コネクタ（C）は Confluence/SharePoint のコネクタを持っていますが、Kendra の検索インデックスと Bedrock ナレッジベースのベクトルストアが二重に存在することになり、不要な中間レイヤーの管理とコストが追加されます。Bedrock ナレッジベース自体がコネクタを提供している以上、Kendra を経由する必要はありません。Glue クローラー（D）は構造化データのETL処理に最適化されており、Confluence Wiki ページや SharePoint ドキュメントのような非構造化コンテンツの取り込みには適していません。また、Glue のジョブ管理やクローラーの設定という追加の運用負荷が発生します。（スキル1.4.4）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock ナレッジベースのマネージドコネクタは、Confluence・SharePoint への直接接続、Secrets Manager による認証情報管理、スケジュール同期を提供し、追加のインフラ管理やカスタムコード不要の要件を直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Lambda カスタムクローラーは柔軟な実装が可能ですが、各APIのページネーション、エラーハンドリング、レート制限対応、トークンリフレッシュなどのカスタムロジックの開発・保守が必要になり、運用チームに追加のインフラ管理が発生しないという要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Kendra はデータソースコネクタを持っていますが、Kendra の検索インデックスと Bedrock のベクトルストアが二重に存在し、不要な中間レイヤーの管理コストが追加されます。Bedrock ナレッジベース自体がコネクタを提供しているため、Kendra を経由する必要がなく、運用負荷の最小化要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Glue クローラーは構造化データのETLに最適化されており、Wiki ページやドキュメントのような非構造化コンテンツの取り込みには適していません。Glue ジョブの管理やクローラー設定という追加の運用負荷も発生し、要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ナレッジベースのデータソース",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html"
    }
  ]
});
