window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-045",
  "domain": 2,
  "task": "2.5",
  "skill": "2.5.3",
  "type": "single",
  "difficulty": "medium",
  "question": "大手製造業の企業が、社内の設計マニュアル（PDF）、品質管理手順書（Word）、過去の不具合報告書（S3 に蓄積）、社内 Wiki（Confluence）を活用して、エンジニアが自然言語で質問できる AI アシスタントを構築したいと考えています。既存ドキュメントの形式変換は不要で、自動的にインデックスを構築して検索・回答が可能である必要があります。また、回答には参照元ドキュメントへのリンクを含め、IT 部門がアクセス権限を一元管理できる必要があります。これらの要件を最小の開発工数で実現するアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Q Business を使用して S3 と Confluence のデータソースコネクタを設定し、自動インデックス構築と IAM Identity Center によるアクセス制御で、ソース引用付きの質問応答を実現する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock Knowledge Bases で S3 のドキュメントをベクターストア（OpenSearch Serverless）にインデックス化し、RetrieveAndGenerate API でソース引用付きの RAG を実装し、Lambda 関数で Confluence からのドキュメント取得を追加開発する"
    },
    {
      "id": "C",
      "text": "Amazon Kendra でドキュメントをインデックス化し、Kendra の Retrieve API で関連文書を取得した後、Lambda 関数で Bedrock の InvokeModel API に検索結果をプロンプトのコンテキストとして渡して回答を生成する"
    },
    {
      "id": "D",
      "text": "SageMaker で埋め込みモデルをホストし、Lambda 関数でドキュメントをチャンク分割・ベクター化して OpenSearch Service に保存し、カスタム検索 API と Bedrock の InvokeModel API を組み合わせた RAG パイプラインを構築する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Amazon Q Business は S3、Confluence を含む多数のデータソースコネクタを標準提供し、PDF・Word 等の形式変換なしに自動インデックス構築が可能です。IAM Identity Center との統合によりアクセス権限の一元管理もでき、回答にはソースドキュメントへの引用が自動的に含まれます。最小の開発工数で全要件を満たします。（スキル2.5.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Amazon Q Business は S3・Confluence コネクタ、自動インデックス構築、ソース引用、IAM Identity Center によるアクセス制御の全要件をマネージド機能として直接満たします。コネクタの設定のみでドキュメントの取得・インデックス化が自動化されるため、開発工数が最小です。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Bedrock Knowledge Bases は S3 のドキュメントに対する RAG を提供するものの、Confluence コネクタは標準提供されておらず、Confluence からのドキュメント取得を Lambda 関数で追加開発する必要があります。また、アクセス権限の一元管理機能も独自実装が必要で、開発工数が増加します。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Kendra + Lambda + Bedrock の構成はドキュメント検索と回答生成が可能であるものの、検索結果をプロンプトに渡す Lambda 関数の実装、Kendra と Bedrock の連携ロジックの構築が必要です。Amazon Q Business と比較して追加の統合開発が必要で、開発工数が増加します。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。SageMaker + Lambda + OpenSearch + Bedrock の構成は柔軟性が最も高いものの、埋め込みモデルのホスティング、チャンク分割ロジックの実装、ベクター化パイプライン、検索 API の構築など大量のカスタム開発が必要であり、最小の開発工数の要件を大幅に逸脱します。"
    }
  },
  "references": [
    {
      "title": "Amazon Q Business",
      "url": "https://docs.aws.amazon.com/amazonq/latest/business-use-dg/what-is.html"
    },
    {
      "title": "Amazon Bedrock Knowledge Bases",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
    }
  ]
});
