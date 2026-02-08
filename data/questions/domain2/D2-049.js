window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-049",
  "domain": 2,
  "task": "2.5",
  "skill": "2.5.3",
  "type": "single",
  "difficulty": "medium",
  "question": "保険会社が月間数万件の保険証券 PDF と申請書類（手書きフォームを含む）を自動処理するシステムを構築しています。ドキュメントから契約者名、保険番号、保険金額、契約期間などの構造化データを抽出し、既存の基幹システム（REST API）に連携する必要があります。抽出精度の向上のため、保険業界固有のフィールドに対応したカスタム抽出ルールの定義も必要です。最小の運用負荷で実現するアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock Data Automation でカスタムブループリントを定義して保険証券固有のフィールド抽出ルールを設定し、S3 イベント通知で自動処理をトリガーし、抽出結果を Lambda 関数で基幹システムの REST API に連携する"
    },
    {
      "id": "B",
      "text": "Amazon Textract の AnalyzeDocument API でフォームとテーブルを抽出し、Lambda 関数で Textract の出力を保険業界のフィールドにマッピングするカスタムロジックを実装し、API Gateway 経由で基幹システムに連携する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock の基盤モデル（Claude 3.5 Sonnet）にドキュメント画像をマルチモーダル入力として送信し、プロンプトで構造化 JSON 形式での出力を指示し、Lambda 関数で結果をパースして基幹システムに連携する"
    },
    {
      "id": "D",
      "text": "Amazon Comprehend のカスタムエンティティ認識でトレーニングデータを用意して保険業界固有のエンティティを学習させ、ドキュメントからエンティティを抽出し、Step Functions で基幹システムへの連携ワークフローを構成する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Amazon Bedrock Data Automation はドキュメント処理に特化しており、カスタムブループリントで保険業界固有のフィールド抽出ルールを定義できます。PDF や手書きフォームからの構造化データ抽出を自動化し、S3 イベント通知との組み合わせで月間数万件の大量処理にも対応できます。マネージドサービスのため運用負荷が最小です。（スキル2.5.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock Data Automation のカスタムブループリントは、保険業界固有のフィールド抽出と大量ドキュメントの自動処理の両方を直接満たします。抽出ルールの定義がノーコードで可能であり、Lambda による基幹システム連携も標準的なパターンです。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Amazon Textract はフォームとテーブルの抽出が可能であるものの、保険業界固有のフィールド名へのマッピングロジックを Lambda 関数で独自実装する必要があり、ドキュメント形式が変更されるたびにコードの修正が必要です。Bedrock Data Automation のカスタムブループリントと比較して運用負荷が高くなります。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。基盤モデルへのマルチモーダル入力はドキュメント理解が可能であるものの、月間数万件のドキュメントを個別に推論 API で処理するとコストが高くなります。また、プロンプトベースの抽出はカスタムブループリントと比較して出力形式の一貫性が低く、構造化データの抽出精度の要件を安定的に満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Amazon Comprehend のカスタムエンティティ認識はテキストからのエンティティ抽出が可能であるものの、PDF 内のレイアウト情報（テーブル、フォームフィールド）を活用した構造化データ抽出には不向きです。また、トレーニングデータの準備が必要であり、開発工数が増加します。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Data Automation",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/data-automation.html"
    },
    {
      "title": "Amazon Textract",
      "url": "https://docs.aws.amazon.com/textract/latest/dg/what-is.html"
    }
  ]
});
