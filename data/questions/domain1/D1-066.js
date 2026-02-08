window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-066",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.2",
  "type": "multiple",
  "difficulty": "hard",
  "question": "ある医療機関が、患者の電子カルテ（テキスト）、X線画像、および音声録音された診察メモを統合して、AI による診断支援システムを構築しています。これらのマルチモーダルデータを基盤モデルに入力する前に前処理パイプラインを構築する必要があります。要件として、(1) 各データ形式に応じた前処理（テキストのトークナイズ、画像のリサイズ・正規化、音声の文字起こし）をスケーラブルに実行できること、(2) 処理ジョブの実行環境をカスタマイズできること（特定のライブラリや依存関係の利用）、(3) 処理の再現性を確保するためにコンテナベースで実行できること、(4) マネージドサービスでインフラ管理を最小化することが求められています。この要件を満たすために適切なアプローチを2つ選択してください。",
  "options": [
    { "id": "A", "text": "SageMaker Processing ジョブでカスタムコンテナを使用し、各データ形式に応じた前処理スクリプトを実行する" },
    { "id": "B", "text": "AWS Lambda 関数でデータ形式ごとに前処理を実行し、Step Functions でオーケストレーションする" },
    { "id": "C", "text": "SageMaker Processing ジョブを Step Functions で連携し、テキスト・画像・音声の前処理をパイプラインとして自動化する" },
    { "id": "D", "text": "Amazon EMR クラスターで Apache Spark を使用して全データの前処理を一括実行する" },
    { "id": "E", "text": "AWS Glue の ETL ジョブで全データ形式の前処理を統合的に実行する" }
  ],
  "correctAnswers": ["A", "C"],
  "explanation": "SageMaker Processing ジョブはカスタムコンテナをサポートし、各データ形式に特化したライブラリ（画像処理用の OpenCV、音声処理用の librosa 等）を含む環境でスケーラブルに処理を実行できます（A）。さらに Step Functions と組み合わせることで、マルチモーダルデータの前処理パイプラインを自動化し、再現性と管理性を確保できます（C）。Lambda（B）は実行時間15分制限とメモリ10GB制限があり、大容量の画像・音声処理に不適です。EMR（D）はスケーラブルですがクラスター管理が必要でインフラ管理の最小化要件を満たしません。Glue ETL（E）は構造化・半構造化データの変換に最適化されており、画像や音声の前処理には適していません。（スキル1.3.2）",
  "optionExplanations": {
    "A": { "correct": true, "text": "正解です。SageMaker Processing ジョブはカスタムコンテナをサポートし、各データ形式に特化した前処理をマネージド環境でスケーラブルに実行できます。コンテナベースの実行により再現性も確保できます。" },
    "B": { "correct": false, "text": "不正解です。Lambda は実行時間15分制限とメモリ10GB制限があり、大容量の X 線画像リサイズや音声文字起こし処理に不適です。また、カスタムライブラリの利用にもレイヤーサイズの制限があります。" },
    "C": { "correct": true, "text": "正解です。SageMaker Processing ジョブと Step Functions の組み合わせにより、マルチモーダルデータの前処理パイプラインをマネージドで自動化できます。各処理ステップの依存関係やエラーハンドリングも管理できます。" },
    "D": { "correct": false, "text": "不正解です。EMR はスケーラブルな分散処理が可能ですが、クラスターのプロビジョニングと管理が必要であり、インフラ管理の最小化という要件を満たしません。" },
    "E": { "correct": false, "text": "不正解です。AWS Glue ETL は構造化・半構造化データの変換に最適化されており、画像のリサイズ・正規化や音声の文字起こしといったマルチモーダルデータの前処理には適していません。" }
  },
  "references": [
    { "title": "SageMaker Processing", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html" },
    { "title": "SageMaker Processing with Custom Container", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/processing-container-run-scripts.html" }
  ]
});
