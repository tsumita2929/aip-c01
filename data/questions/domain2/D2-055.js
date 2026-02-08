window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-055",
  "domain": 2,
  "task": "2.2",
  "skill": "2.2.2",
  "type": "single",
  "difficulty": "hard",
  "question": "ある金融機関が、毎日蓄積される 500 万件の取引データに対して不正検知 ML モデルを適用する必要があります。以下の要件があります。(1) 毎朝 6 時までに前日分の全取引データの推論結果を S3 に出力する、(2) 推論コストを最小化するためスポットインスタンスを活用したい、(3) GPU インスタンス（ml.g5.xlarge）を使用してモデルの推論速度を確保する、(4) 推論用のエンドポイントを常時維持する運用負荷は避けたい。これらの要件を全て満たす SageMaker の推論方式として最も適切なものはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "SageMaker リアルタイム推論エンドポイントを ml.g5.xlarge で作成し、EventBridge スケジュールでトリガーされる Lambda 関数から全データを逐次送信する"
    },
    {
      "id": "B",
      "text": "SageMaker 非同期推論エンドポイントを ml.g5.xlarge で作成し、S3 に取引データをアップロードして処理完了を SNS で通知する"
    },
    {
      "id": "C",
      "text": "SageMaker バッチ変換ジョブを ml.g5.xlarge で設定し、マネージドスポットインスタンスを有効にして、EventBridge スケジュールで毎日実行する"
    },
    {
      "id": "D",
      "text": "SageMaker サーバーレス推論エンドポイントを作成し、S3 イベント通知で Lambda を起動して各取引データを個別に推論する"
    }
  ],
  "correctAnswers": ["C"],
  "explanation": "正解は C です。SageMaker バッチ変換ジョブは S3 上の大量データを一括処理して結果を S3 に出力する方式で、ジョブ完了後にインスタンスが自動終了するため常時エンドポイント維持が不要です。マネージドスポットインスタンスの利用に対応しておりコストを最小化でき、GPU インスタンス（ml.g5.xlarge）も指定可能です。A のリアルタイムエンドポイントは常時維持が必要です。B の非同期推論もエンドポイントの常時維持が基本です。D のサーバーレスは GPU 非対応で 500 万件の逐次処理は非効率です。（スキル2.2.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。リアルタイム推論エンドポイントは低レイテンシの推論が可能であるものの、エンドポイントを常時維持する必要があり、運用負荷を避けたい要件を満たしません。また、500 万件を Lambda から逐次送信すると処理時間とコストが大幅に増加します。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。非同期推論エンドポイントは大規模ペイロードの処理に適しており GPU にも対応しているものの、エンドポイントの維持が基本的に必要です。スケールトゥゼロは可能ですが、コールドスタート時間が発生します。また、バッチ変換ジョブと比較してマネージドスポットインスタンスによるコスト削減の仕組みが異なるため、コスト最小化の要件ではバッチ変換が優位です。"
    },
    "C": {
      "correct": true,
      "text": "正解です。バッチ変換ジョブは S3 上のデータを一括処理して S3 に結果を出力し、ジョブ完了後にインスタンスが自動終了するため常時エンドポイント維持が不要です。マネージドスポットインスタンスに対応しておりコスト最小化の要件を満たし、ml.g5.xlarge の GPU インスタンスも指定可能です。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。サーバーレス推論エンドポイントはインフラ管理が不要であるものの、GPU インスタンスをサポートしていないため ml.g5.xlarge を使用する要件を満たしません。また、500 万件の取引データを個別に推論する方式は非効率で、コスト最小化の要件にも反します。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Batch Transform",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html"
    },
    {
      "title": "Amazon SageMaker Inference Options",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html"
    }
  ]
});
