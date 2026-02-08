window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-041",
  "domain": 2,
  "task": "2.4",
  "skill": "2.4.3",
  "type": "single",
  "difficulty": "hard",
  "question": "物流企業が Amazon Bedrock を使用した配送ルート最適化 AI アプリケーションを本番運用しています。特定の時間帯（午前9時〜10時）にのみ Bedrock API のレイテンシーが平均3秒から15秒に急増する問題が報告されています。CloudWatch メトリクスでは該当時間帯に InvocationLatency が急上昇していますが、エラー率は0%で、Lambda 関数の実行時間も Bedrock API 呼び出し部分を除くと正常です。この問題の根本原因を特定し解決するために最も効果的なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "AWS X-Ray で該当時間帯のリクエストトレースを分析して Bedrock API 呼び出しセグメントのレイテンシー分布を確認し、CloudWatch の ModelInvocationCount メトリクスでスロットリング直前のリクエスト集中を特定した上で、Bedrock のプロビジョンドスループットを該当時間帯に適用する"
    },
    {
      "id": "B",
      "text": "Lambda 関数のメモリサイズを増加させて CPU 性能を向上させ、Lambda 関数内の Bedrock API 呼び出し処理を高速化するとともに、CloudWatch Logs でタイムアウトログを確認する"
    },
    {
      "id": "C",
      "text": "VPC エンドポイントの帯域幅を確認し、VPC 内から Bedrock への接続にボトルネックがないか調査するとともに、NAT Gateway のスループットメトリクスを監視する"
    },
    {
      "id": "D",
      "text": "Bedrock の基盤モデルを最新バージョンに更新し、モデルの推論性能の改善によるレイテンシー削減を図るとともに、入力プロンプトのトークン数を削減する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。特定時間帯のレイテンシー急増はリクエスト集中によるスロットリング（エラーではなくキューイングによる遅延）が原因である可能性が高く、X-Ray のトレース分析で Bedrock API 呼び出しのレイテンシー分布を詳細に確認でき、CloudWatch のメトリクスでリクエスト集中パターンを特定できます。プロビジョンドスループットにより該当時間帯の処理容量を確保することで根本的に解決できます。（スキル2.4.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。X-Ray + CloudWatch メトリクス + プロビジョンドスループットの組み合わせは、原因の特定と解決の両方を直接満たします。特に X-Ray のセグメント分析で Bedrock API 呼び出し部分のレイテンシーが問題であることを定量的に確認し、プロビジョンドスループットで処理容量を確保することで根本解決できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Lambda のメモリ増加は CPU 性能の向上が可能であるものの、問題文で Lambda 関数の実行時間は Bedrock API 呼び出し部分を除くと正常と明記されているため、Lambda 側の性能改善はレイテンシー問題の原因と無関係です。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。VPC エンドポイントや NAT Gateway の帯域幅調査はネットワークボトルネックの特定が可能であるものの、特定時間帯のみの問題であること、エラー率が0%であることから、ネットワーク帯域幅の問題よりもリクエスト集中によるモデル側のスロットリングが原因である可能性が高いです。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。モデルバージョンの更新やプロンプトのトークン数削減はレイテンシー改善が可能であるものの、特定時間帯のみの問題を説明できません。全時間帯で均一にレイテンシーが改善されるため、時間帯依存のレイテンシー急増の根本原因には対処できません。"
    }
  },
  "references": [
    {
      "title": "AWS X-Ray",
      "url": "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"
    },
    {
      "title": "Amazon Bedrock provisioned throughput",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html"
    }
  ]
});
