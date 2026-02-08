window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-028",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.4",
  "type": "single",
  "difficulty": "hard",
  "question": "ある多国籍企業が、Amazon Bedrock の FM をファインチューニングするためのトレーニングデータを複数のソースから収集しています。データソースには (1) Webスクレイピングで取得した HTML ページ、(2) レガシーシステムから出力された Shift-JIS エンコードの CSV ファイル、(3) 英語・日本語・中国語が混在した顧客フィードバックテキストが含まれます。ファインチューニング用データは日本語のみで統一する必要があり、処理対象データは1日あたり約10万件です。最も効率的なデータクレンジングパイプラインはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "AWS Lambda 関数で文字エンコーディングを UTF-8 に正規化し HTML タグを除去する前処理を行い、Amazon Comprehend の BatchDetectDominantLanguage API で言語を一括検出して日本語以外のレコードをフィルタリングする。処理結果を S3 に JSONL 形式で保存する"
    },
    {
      "id": "B",
      "text": "AWS Glue ETL ジョブで Shift-JIS から UTF-8 へのエンコーディング変換と HTML タグ除去を行い、Glue の組み込み変換で言語列に基づくフィルタリングを実行する。AWS Glue Data Quality でデータ品質ルールを適用してから S3 に保存する"
    },
    {
      "id": "C",
      "text": "Amazon SageMaker Processing ジョブで Python スクリプト（BeautifulSoup + langdetect ライブラリ）を実行し、HTML パース・エンコーディング変換・言語検出・フィルタリングをすべてカスタムコードで処理する"
    },
    {
      "id": "D",
      "text": "Amazon Textract で HTML ページと CSV ファイルからテキストを抽出し、Amazon Translate の言語検出機能で各レコードの言語を判定する。日本語以外のレコードは Translate で日本語に翻訳してからファインチューニングデータに含める"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Lambda でのエンコーディング正規化・HTML タグ除去と Comprehend の BatchDetectDominantLanguage API による言語一括検出の組み合わせが最も効率的です。Lambda はサーバーレスで10万件規模のテキスト処理に適しており、Comprehend のバッチ API は25件ずつの一括処理で高スループットを実現します。Glue ETL ジョブ（B）はエンコーディング変換とフィルタリングに対応可能ですが、Glue には言語検出の組み込み機能がありません。元データにはメタデータとしての言語列がないため、言語列に基づくフィルタリングは実行できません。言語検出には別途 Comprehend 等の呼び出しが必要になり、Glue ジョブ内からの API 呼び出しは設定が複雑になります。SageMaker Processing + カスタムコード（C）は技術的に実現可能ですが、カスタムライブラリ（BeautifulSoup, langdetect）の依存関係管理、コンテナイメージの構築、Processing ジョブの設定など開発・運用負荷が高くなります。langdetect の精度も Comprehend のマネージド API と比較して劣ります。Textract + Translate（D）は、Textract は画像・PDF からのテキスト抽出サービスであり、HTML テキストや CSV テキストの処理には不適切です。また、日本語以外のレコードを翻訳してファインチューニングデータに含めると、翻訳特有の不自然な日本語がデータ品質を低下させるリスクがあります。（スキル1.3.4）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Lambda でのサーバーレスなテキスト前処理と Comprehend の BatchDetectDominantLanguage API による高精度な言語検出の組み合わせにより、エンコーディング正規化・HTML除去・言語フィルタリングの全要件を効率的に満たします。Comprehend のバッチ API は10万件規模のデータに対して高スループットで処理可能です。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Glue ETL はエンコーディング変換とデータ変換に適していますが、言語検出の組み込み機能がないため、メタデータに言語列がない今回のデータでは言語フィルタリングを直接実行できません。Glue ジョブ内から Comprehend API を呼び出す構成は可能ですが、設定が複雑になります。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。SageMaker Processing はカスタム処理に柔軟ですが、BeautifulSoup や langdetect などのカスタムライブラリのコンテナイメージ構築・依存関係管理の運用負荷が発生します。langdetect の言語検出精度は短いテキストで低下する傾向があり、Comprehend のマネージド API と比較して精度面で劣ります。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Textract は画像やスキャン PDF からの光学文字認識（OCR）に特化したサービスであり、既にテキスト形式の HTML や CSV の処理には不適切です。また、翻訳テキストをファインチューニングデータに含めると、翻訳特有の不自然な表現がモデルの学習品質を低下させるリスクがあります。"
    }
  },
  "references": [
    {
      "title": "Amazon Comprehend 言語検出",
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html"
    },
    {
      "title": "AWS Lambda 開発者ガイド",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
    }
  ]
});
