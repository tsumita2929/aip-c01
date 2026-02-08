window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-018",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.3",
  "type": "single",
  "difficulty": "medium",
  "question": "ある調査会社が、Amazon Bedrock を使用して大規模なアンケート回答の分析を行っています。回答にはアンケート回答者の氏名、住所、電話番号などの個人情報が含まれており、分析結果から個人が特定されないようにする必要があります。また、匿名化後もアンケートの自由記述回答の意味を保持し、感情分析や要約などのAI分析を正確に行えることが求められています。Bedrock モデルに渡す前のデータ前処理パイプラインとして、最も適切なアーキテクチャはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Comprehend の PII 検出 API でテキスト内の PII エンティティ（NAME、ADDRESS、PHONE 等）を検出し、エンティティタイプ別のプレースホルダー（[NAME]、[ADDRESS] 等）に置換した上で、匿名化済みデータを Amazon Bedrock に渡して分析する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock ガードレールの機密情報フィルターで PII タイプを指定し、モデルへの入力時に PII を自動検出してブロックすることで、PII を含む回答全体をモデルに渡さないようにする"
    },
    {
      "id": "C",
      "text": "AWS Glue の ETL ジョブで回答データの PII 列（氏名列、住所列）を削除してから Amazon S3 に保存し、匿名化済みデータを Bedrock に渡して分析する"
    },
    {
      "id": "D",
      "text": "Amazon Macie で S3 バケット内の PII を含むオブジェクトを特定し、PII が検出されたオブジェクトを別の S3 バケットに隔離して、PII を含まないオブジェクトのみを Bedrock に渡して分析する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Amazon Comprehend の PII 検出 API は、テキスト内の氏名、住所、電話番号、メールアドレスなど多様な PII エンティティの位置とタイプを自動検出し、エンティティタイプ別のプレースホルダーに置換（墨消し）する機能を提供します。この方法により、自由記述回答の文脈と意味を保持しつつ PII のみを匿名化できるため、感情分析や要約などの AI 分析精度を維持できます。B の Bedrock ガードレール機密情報フィルターは PII を検出するとブロック（応答拒否）またはマスキングを行いますが、入力時にブロックすると PII を含む回答全体が分析対象から除外されるため、分析の網羅性が損なわれます。また、ガードレールはモデル呼び出し時点での制御であり、前処理パイプラインとしてのきめ細かな置換ロジックには不向きです。C の Glue ETL での列削除は、構造化データ（CSV 等）の特定列には有効ですが、自由記述回答のテキスト内に埋め込まれた PII（例：「私は田中太郎です。東京都渋谷区に住んでいます」）の検出・置換はできず、非構造化テキストの匿名化には対応できません。D の Macie はオブジェクト単位での PII 検出・分類に特化しており、PII を含むオブジェクトの隔離はできますが、テキスト内の PII をエンティティレベルで置換する機能はありません。PII を含む回答を除外すると分析対象が大幅に減少します。（スキル3.2.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Comprehend の PII 検出 API でエンティティタイプ別のプレースホルダーに置換することで、自由記述の文脈と意味を保持しつつ PII を匿名化でき、個人情報保護と分析精度維持の両方を直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。ガードレールの機密情報フィルターは入力時に PII を検出してブロックできるものの、PII を含む回答全体が分析対象から除外されるため分析の網羅性が損なわれ、前処理パイプラインとしてのきめ細かな置換には不向きです。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Glue ETL の列削除は構造化データの特定列には有効であるものの、自由記述テキスト内に埋め込まれた PII の検出・置換はできず、非構造化テキストの匿名化という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Macie はオブジェクト単位の PII 検出・分類に特化しているものの、テキスト内のエンティティレベルの置換機能はなく、PII を含む回答を除外すると分析対象が大幅に減少するため、分析精度維持という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Comprehend PII Detection and Redaction",
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html"
    },
    {
      "title": "Amazon Bedrock Data Protection",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html"
    }
  ]
});
