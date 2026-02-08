window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-030",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.2",
  "type": "single",
  "difficulty": "hard",
  "question": "ある製造企業が、品質検査レポートを自動分析する生成 AI システムを構築しています。入力データには (1) 検査員が撮影した製品写真に手書きで不良箇所を記入したスキャン画像、(2) 検査機器が出力する表形式の測定値 PDF（100行以上の表を含む）、(3) 検査員が入力したテキスト形式のコメントが含まれます。これらのデータを処理して Amazon Bedrock の FM に入力し、不良原因の分析レポートを自動生成する必要があります。1日あたり約200件の検査レポートを処理し、運用コストを最小限に抑える必要があります。最も適切なアーキテクチャはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Textract の AnalyzeDocument API で画像から手書きテキストと表データを抽出し、Lambda 関数で抽出結果を構造化する。テキストコメントと統合して Bedrock FM の Converse API に送信し、分析レポートを生成する。Step Functions で全体のワークフローをオーケストレーションする"
    },
    {
      "id": "B",
      "text": "Amazon Rekognition の DetectText API で画像内の手書きテキストを検出し、Amazon Textract で PDF の表データを抽出する。Lambda 関数で両方の結果を統合し、Bedrock FM に送信して分析レポートを生成する"
    },
    {
      "id": "C",
      "text": "SageMaker 上にカスタム OCR モデル（PaddleOCR）をリアルタイムエンドポイントとしてデプロイし、画像と PDF の両方からテキスト・表を抽出する。抽出結果を Lambda で後処理し Bedrock FM に送信する"
    },
    {
      "id": "D",
      "text": "Bedrock のマルチモーダル FM（Claude 3.5 Sonnet）に画像と PDF を直接入力し、テキスト抽出から分析レポート生成までを1回の API 呼び出しで処理する。Lambda 関数からConverseAPI のimage contentBlockで画像を送信する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Textract はスキャン画像からの手書きテキスト抽出（AnalyzeDocument の FORMS/TABLES 機能）と PDF からの表データ抽出（100行以上の複雑な表構造の解析）の両方に対応するマネージドサービスです。Lambda での構造化処理と Step Functions でのワークフローオーケストレーションにより、200件/日のバッチ処理を低運用コストで実現できます。Rekognition + Textract（B）は、Rekognition の DetectText は印刷されたテキストや画像中のテキスト検出に適していますが、手書きテキストの認識精度は Textract の手書き対応機能の方が優れています。2つのサービスを使い分ける必要があり、アーキテクチャが複雑になります。SageMaker カスタム OCR（C）は高精度な抽出が可能ですが、モデルの選定・デプロイ・スケーリング・バージョン管理などの運用負荷が高くなります。リアルタイムエンドポイントは常時起動のため、200件/日の処理量に対してコスト効率が悪くなります。Textract のマネージドサービスで同等の精度が得られる場合、カスタムモデルは不要です。マルチモーダル FM への直接入力（D）は画像の分析には有効ですが、100行以上の複雑な表データの正確な数値抽出は FM の得意分野ではなく、Textract の構造化抽出の方が精度が高くなります。また、画像とPDFを毎回FMに送信するとトークンコストが大幅に増加し、200件/日の処理ではコスト制約を超える可能性があります。（スキル1.3.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Textract の AnalyzeDocument API は手書きテキスト、印刷テキスト、表データの抽出を1つのマネージドサービスで処理でき、運用コストが最小限です。Step Functions によるオーケストレーションで200件/日の処理を安定的に管理でき、Lambda のサーバーレス構成により使用量に応じたコスト最適化も実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Rekognition の DetectText は画像内のテキスト検出に使用できますが、手書きテキストの認識精度は Textract の手書き対応機能の方が優れています。また、画像処理を Rekognition、PDF処理を Textract と2つのサービスに分ける必要があり、アーキテクチャが不必要に複雑になります。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。SageMaker 上のカスタム OCR モデルは高精度な抽出が可能ですが、モデルのデプロイ・スケーリング・バージョン管理の運用負荷が高くなります。リアルタイムエンドポイントは常時起動のため、200件/日の処理量では大部分がアイドル時間となりコスト効率が悪くなります。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。マルチモーダル FM は画像の理解・分析に優れていますが、100行以上の複雑な表から正確な数値を抽出するタスクでは Textract の構造化抽出の方が精度が高くなります。また、画像や PDF を毎回 FM に送信すると入力トークン数が大幅に増加し、200件/日の処理ではコストが過大になります。"
    }
  },
  "references": [
    {
      "title": "Amazon Textract 開発者ガイド",
      "url": "https://docs.aws.amazon.com/textract/latest/dg/what-is.html"
    },
    {
      "title": "Amazon Textract テーブル抽出",
      "url": "https://docs.aws.amazon.com/textract/latest/dg/how-it-works-tables.html"
    }
  ]
});
