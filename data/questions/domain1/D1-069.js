window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-069",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.3",
  "type": "single",
  "difficulty": "easy",
  "question": "ある EC サイト運営企業が、SageMaker のリアルタイムエンドポイントにデプロイされた商品レコメンデーションモデルを使用しています。アプリケーションからエンドポイントにリクエストを送信する際、入力データのフォーマットを決定する必要があります。エンドポイントは XGBoost の組み込みアルゴリズムでトレーニングされたモデルをホストしています。要件として、(1) SageMaker の組み込みアルゴリズムがネイティブにサポートするフォーマットを使用すること、(2) リクエストのペイロードサイズを最小化することが求められています。この要件を最も適切に満たすデータフォーマットはどれですか？",
  "options": [
    { "id": "A", "text": "JSON 形式で特徴量を配列として送信する" },
    { "id": "B", "text": "CSV 形式でカンマ区切りの特徴量値を送信する" },
    { "id": "C", "text": "Parquet 形式でカラムナーフォーマットのデータを送信する" },
    { "id": "D", "text": "Protocol Buffers（RecordIO-Protobuf）形式でバイナリエンコードしたデータを送信する" }
  ],
  "correctAnswers": ["D"],
  "explanation": "SageMaker の XGBoost 組み込みアルゴリズムは CSV、LibSVM、RecordIO-Protobuf、JSON をネイティブにサポートしています。RecordIO-Protobuf はバイナリエンコードされるため、テキストベースの CSV や JSON と比較してペイロードサイズが大幅に小さくなります。JSON（A）はネイティブサポートされていますが、テキストベースでキー名などのオーバーヘッドがあるためバイナリフォーマットよりペイロードサイズが大きくなります。CSV（B）もネイティブサポートされていますが、テキストベースのためバイナリフォーマットよりペイロードサイズが大きくなります。Parquet（C）はカラムナーフォーマットとして効率的ですが、XGBoost 組み込みアルゴリズムのリアルタイム推論でネイティブにサポートされるフォーマットではありません。（スキル1.3.3）",
  "optionExplanations": {
    "A": { "correct": false, "text": "不正解です。JSON は SageMaker XGBoost 組み込みアルゴリズムでネイティブサポートされていますが、キー名等のオーバーヘッドを含むテキストベースフォーマットのため、バイナリエンコードの RecordIO-Protobuf と比較してペイロードサイズが大きくなり、サイズ最小化の要件を満たしません。" },
    "B": { "correct": false, "text": "不正解です。CSV は XGBoost 組み込みアルゴリズムにネイティブサポートされている点は良いものの、テキストベースのためバイナリフォーマットと比較してペイロードサイズの最小化要件を十分に満たしません。" },
    "C": { "correct": false, "text": "不正解です。Parquet はバッチ処理で効率的なカラムナーフォーマットですが、XGBoost 組み込みアルゴリズムのリアルタイム推論入力としてネイティブサポートされていないため、要件1を満たしません。" },
    "D": { "correct": true, "text": "正解です。RecordIO-Protobuf は XGBoost 組み込みアルゴリズムがネイティブにサポートするフォーマットであり、バイナリエンコードによりペイロードサイズを最小化できます。両方の要件を直接満たします。" }
  },
  "references": [
    { "title": "SageMaker XGBoost Input/Output Interface", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/xgboost.html" },
    { "title": "SageMaker Common Data Formats", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html" }
  ]
});
