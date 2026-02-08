window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-024",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.2",
  "type": "multiple",
  "difficulty": "medium",
  "question": "ある保険会社が、保険金請求の審査を自動化する生成 AI パイプラインを構築しています。請求には (1) 顧客が電話で説明した事故状況の音声録音、(2) 事故現場の写真、(3) 修理見積書のスキャン PDF が含まれます。これらのマルチモーダルデータを処理し、Amazon Bedrock の FM に統合して審査レポートを自動生成する必要があります。AWS サービスの組み合わせとして適切なものを2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Transcribe で音声録音をテキストに変換し、変換されたテキストを Bedrock の FM に送信して事故状況の要約を生成する"
    },
    {
      "id": "B",
      "text": "Amazon Textract で修理見積書 PDF から表データとテキストを抽出し、抽出結果を Bedrock の FM に送信して見積内容の妥当性を分析する"
    },
    {
      "id": "C",
      "text": "Amazon Polly で審査結果をテキストから音声に変換し、Amazon Comprehend で顧客の電話音声のセンチメント分析を行う"
    },
    {
      "id": "D",
      "text": "Amazon Rekognition で事故現場の写真から損傷の物体検出を行い、Amazon Translate で多言語の見積書を翻訳する"
    },
    {
      "id": "E",
      "text": "Amazon Kinesis Video Streams で事故現場の動画をストリーミング処理し、Amazon SageMaker のリアルタイム推論エンドポイントで損傷度を判定する"
    }
  ],
  "correctAnswers": [
    "A",
    "B"
  ],
  "explanation": "A: Transcribe は音声録音をテキストに正確に変換するマネージドサービスであり、変換テキストを Bedrock FM に入力することで事故状況の要約を自動生成できます。音声→テキスト→FM という入力パイプラインとして適切です。B: Textract は PDF から表データとテキストを高精度に抽出するマネージドサービスであり、修理見積書の構造化データを Bedrock FM に入力して見積妥当性の分析を自動化できます。PDF→構造化データ→FM という入力パイプラインとして適切です。Polly + Comprehend（C）は音声生成と感情分析のサービスです。Polly は出力側のサービス（テキスト→音声）であり、入力パイプラインの処理ではありません。Comprehend のセンチメント分析は音声ではなくテキストを処理するため、音声録音の直接分析はできません。Rekognition + Translate（D）は画像分析と翻訳のサービスです。Rekognition のカスタムラベル機能で損傷検出は可能ですが、カスタムモデルのトレーニングが必要で運用負荷が高く、Bedrock FM のマルチモーダル機能で写真分析が可能な場合は過剰です。また Translate は多言語翻訳であり、今回の要件に含まれていません。Kinesis Video Streams + SageMaker（E）は動画ストリーミングとカスタムモデル推論のサービスです。今回の入力は静止画写真であり動画ストリーミングは不要です。SageMaker のカスタムモデルデプロイも運用負荷が高く、マネージドサービスの活用要件に合いません。（スキル1.3.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Transcribe は音声録音を高精度にテキスト変換するマネージドサービスであり、Bedrock FM への入力として事故状況の要約生成パイプラインを構築できます。音声データの処理として最も効率的な組み合わせです。"
    },
    "B": {
      "correct": true,
      "text": "正解です。Textract は PDF から表データ（修理項目、金額等）とテキストを構造的に抽出でき、Bedrock FM に入力して見積妥当性の分析を自動化できます。スキャン PDF の処理として最も効率的な組み合わせです。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Polly はテキストから音声を生成するサービスであり、マルチモーダル入力の処理ではなく出力側の変換です。Comprehend のセンチメント分析はテキストを処理するサービスであり、音声録音を直接分析することはできないため、音声処理パイプラインとして不適切です。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Rekognition での損傷検出にはカスタムラベルのトレーニングが必要であり運用負荷が高くなります。Bedrock のマルチモーダル FM で写真分析が可能な場合、カスタムモデルは不要です。また Translate は多言語翻訳であり、今回の日本語のみの要件には含まれていません。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。Kinesis Video Streams は動画のリアルタイムストリーミング処理用であり、静止画写真の処理には過剰です。SageMaker のカスタムモデルデプロイもモデルの開発・ホスティング・スケーリングの管理が必要であり、マネージドサービスと比較して運用負荷が高くなります。"
    }
  },
  "references": [
    {
      "title": "Amazon Transcribe 開発者ガイド",
      "url": "https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html"
    },
    {
      "title": "Amazon Textract 開発者ガイド",
      "url": "https://docs.aws.amazon.com/textract/latest/dg/what-is.html"
    }
  ]
});
