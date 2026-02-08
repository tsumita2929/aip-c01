window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-051",
  "domain": 2,
  "task": "2.5",
  "skill": "2.5.6",
  "type": "matching",
  "difficulty": "medium",
  "question": "生成 AI アプリケーションのトラブルシューティングで使用する AWS のツールと、それぞれが最も効果的に対処できる問題の種類を正しく対応させてください。",
  "prompts": [
    {
      "id": "1",
      "text": "CloudWatch Logs Insights"
    },
    {
      "id": "2",
      "text": "AWS X-Ray"
    },
    {
      "id": "3",
      "text": "Amazon Q Developer"
    },
    {
      "id": "4",
      "text": "CloudWatch Metrics"
    }
  ],
  "answers": [
    {
      "id": "A",
      "text": "分散トレーシングにより、Bedrock API 呼び出しを含むリクエストチェーンのレイテンシーボトルネックの特定"
    },
    {
      "id": "B",
      "text": "大量のログデータからエラーパターンや異常を検索・分析するクエリの実行"
    },
    {
      "id": "C",
      "text": "Lambda の実行時間、エラー率、スロットリングなどの数値メトリクスの監視とアラーム設定"
    },
    {
      "id": "D",
      "text": "コード内のバグやパフォーマンス問題の AI によるデバッグ支援と修正提案"
    }
  ],
  "correctMatches": {
    "1": "B",
    "2": "A",
    "3": "D",
    "4": "C"
  },
  "explanation": "CloudWatch Logs Insights（1→B）はログデータに対してSQL風のクエリを実行し、エラーパターンの検索・集計が可能です。X-Ray（2→A）は分散トレーシングでリクエストの全体像を可視化し、レイテンシーのボトルネックを特定します。Q Developer（3→D）はAIベースの開発支援でコードのデバッグと修正提案を行います。CloudWatch Metrics（4→C）は数値メトリクスの時系列監視とアラーム設定を提供します。（スキル2.5.6）",
  "optionExplanations": {
    "1": {
      "correct": true,
      "text": "CloudWatch Logs Insights → B: ログデータに対して SQL 風のクエリを実行し、大量ログからエラーパターンの検索・集計が可能です。"
    },
    "2": {
      "correct": true,
      "text": "AWS X-Ray → A: 分散トレーシングでリクエストの全体像を可視化し、Bedrock API 呼び出しを含むレイテンシーのボトルネックを特定します。"
    },
    "3": {
      "correct": true,
      "text": "Amazon Q Developer → D: AI ベースの開発支援でコード内のバグやパフォーマンス問題のデバッグと修正提案を行います。"
    },
    "4": {
      "correct": true,
      "text": "CloudWatch Metrics → C: Lambda の実行時間、エラー率、スロットリングなどの数値メトリクスの時系列監視とアラーム設定を提供します。"
    }
  },
  "references": [
    {
      "title": "Amazon CloudWatch Logs Insights",
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AnalyzingLogData.html"
    },
    {
      "title": "AWS X-Ray",
      "url": "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"
    },
    {
      "title": "Amazon Q Developer",
      "url": "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html"
    }
  ]
});
