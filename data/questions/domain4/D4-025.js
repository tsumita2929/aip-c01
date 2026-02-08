window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-025",
  "domain": 4,
  "task": "4.1",
  "skill": "4.1.3",
  "type": "multiple",
  "difficulty": "hard",
  "question": "ある EC サイトが、商品レコメンデーション API を Amazon SageMaker リアルタイムエンドポイントでホスティングしています。通常時のトラフィックは 1 秒あたり約 100 リクエストですが、タイムセール開始時には数分以内に 1 秒あたり 2,000 リクエストまで急増し、セール終了後は速やかに元のトラフィック量に戻ります。コスト最適化を維持しながら、トラフィック急増時にもレイテンシの増加を最小限に抑える必要があります。最も適切な Auto Scaling 設定の組み合わせを2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "ターゲット追跡スケーリングポリシーで SageMakerVariantInvocationsPerInstance メトリクスを使用し、目標値を適切に設定してトラフィック変動に応じた自動スケーリングを行う"
    },
    {
      "id": "B",
      "text": "ステップスケーリングポリシーのみを使用し、CloudWatch アラームの閾値を複数段階で設定してインスタンス数を段階的に増減させる"
    },
    {
      "id": "C",
      "text": "タイムセールの開始・終了時刻に合わせてスケジュールスケーリングを設定し、事前にインスタンス数を増加させてトラフィック急増に備える"
    },
    {
      "id": "D",
      "text": "SageMaker Serverless Inference を使用して、トラフィックに応じた完全自動スケーリングを実現する"
    },
    {
      "id": "E",
      "text": "Auto Scaling を使用せず、ピーク時に必要な最大インスタンス数を常時プロビジョニングしておく"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "正解は A と C です。A のターゲット追跡スケーリングは、SageMakerVariantInvocationsPerInstance メトリクスに基づいてインスタンス数を自動調整し、実際のトラフィック変動に応じた動的なスケーリングを実現します。C のスケジュールスケーリングは、予測可能なタイムセール開始前にインスタンスを事前にスケールアウトすることで、急増時のレイテンシ増加を防ぎます。この2つの組み合わせにより、予測可能なイベントへの事前対応と予期せぬトラフィック変動への動的対応の両方をカバーできます。B のステップスケーリングのみでは、CloudWatch アラームの評価期間による遅延があり、数分以内の急増への対応が遅れる可能性があります。D の SageMaker Serverless Inference はコールドスタートが発生するため、レイテンシの最小化という要件と、毎秒 2,000 リクエストという高スループット要件に適しません。E の常時最大プロビジョニングはレイテンシは抑えられますが、コスト最適化の要件を満たしません。（スキル: 4.1.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。ターゲット追跡スケーリングと SageMakerVariantInvocationsPerInstance メトリクスの組み合わせは、実際のトラフィック変動に応じた動的スケーリングとコスト最適化を直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。ステップスケーリングのみでは CloudWatch アラームの評価期間による遅延があり、数分以内のトラフィック急増への対応が遅れる可能性があるため、レイテンシ最小化の要件を十分に満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。スケジュールスケーリングによる事前のインスタンス増加は、予測可能なタイムセール開始時のトラフィック急増に対してレイテンシ増加を最小限に抑えることを直接満たします。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。SageMaker Serverless Inference はコールドスタートが発生し、毎秒 2,000 リクエストの高スループット処理にも適していないため、レイテンシの最小化という要件を満たしません。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。常時最大インスタンス数のプロビジョニングはレイテンシの抑制は可能であるものの、通常時の過剰なリソースコストが発生するため、コスト最適化の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker - エンドポイントの Auto Scaling",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/endpoint-auto-scaling.html"
    },
    {
      "title": "Amazon SageMaker - ターゲット追跡スケーリングポリシー",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/endpoint-auto-scaling-add-policy.html"
    }
  ]
});
