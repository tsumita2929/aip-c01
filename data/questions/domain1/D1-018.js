window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-018",
  "domain": 1,
  "task": "1.2",
  "skill": "1.2.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある EC サイト企業が、Amazon Bedrock を使用した商品説明文の自動生成アプリケーションを運用しています。アーキテクチャは API Gateway + Lambda + Bedrock で構成されています。セール期間中（月に3日間）はリクエスト量が通常の10倍に増加するため、スループットとコスト効率を重視して Claude 3 Haiku を使用し、通常期間は応答品質を優先して Claude 3.5 Sonnet を使用したいと考えています。モデルの切り替えはダウンタイムなしで行い、設定ミスが発生した場合に迅速にロールバックする必要があります。最も適切なアーキテクチャはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "AWS AppConfig にモデル ID を設定パラメータとして保存し、Lambda 関数が AppConfig のフィーチャーフラグを参照して使用するモデルを動的に切り替える。AppConfig のデプロイ戦略でリニアデプロイを使用し、異常検知時に自動ロールバックする"
    },
    {
      "id": "B",
      "text": "セール用と通常用の2つの Lambda 関数をそれぞれ別のモデル ID で作成し、API Gateway のステージ変数で呼び出す Lambda 関数を切り替える。切り替え時は API Gateway のステージを手動で更新する"
    },
    {
      "id": "C",
      "text": "AWS Systems Manager Parameter Store にモデル ID を保存し、Lambda 関数が起動時に Parameter Store から値を取得する。切り替え時は Parameter Store の値を更新し、Lambda 関数のコールドスタートを待つ"
    },
    {
      "id": "D",
      "text": "Amazon EventBridge Scheduler でセール開始・終了時刻にスケジュールされたルールを作成し、Lambda 関数の環境変数を AWS SDK で直接更新する。更新後に Lambda 関数を手動で再デプロイして反映する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "AWS AppConfig は、アプリケーションの設定を安全に動的に変更でき、Lambda 関数の再デプロイなしにリアルタイムでモデル ID を切り替えられます。リニアデプロイ戦略により新しい設定を段階的にロールアウトし、CloudWatch アラームと連携した自動ロールバック機能で設定ミス時に迅速に復旧できます。API Gateway ステージ変数 + 2つの Lambda 関数（B）は実装可能ですが、Lambda 関数の二重管理が必要であり、ステージの手動更新はヒューマンエラーのリスクがあります。自動ロールバック機能もありません。Parameter Store + コールドスタート待ち（C）は、Lambda がウォームスタート中は古い値をキャッシュし続けるため、即座の切り替えが保証されません。Parameter Store 自体には段階的デプロイや自動ロールバック機能がありません。EventBridge Scheduler + 環境変数更新（D）はスケジュール実行は可能ですが、Lambda の環境変数を更新すると関数の新しいバージョンが作成されるわけではなく、反映には再デプロイが必要です。手動再デプロイではダウンタイムなしの要件を満たせません。（スキル1.2.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。AppConfig のフィーチャーフラグにより、Lambda 関数の再デプロイなしにリアルタイムでモデル ID を切り替えられます。リニアデプロイ戦略と自動ロールバック機能により、設定ミス時の迅速な復旧もマネージドで実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。2つの Lambda 関数を別々に管理すると、ビジネスロジックの変更時に両方を更新する必要があり運用負荷が増加します。API Gateway ステージの手動更新はヒューマンエラーのリスクがあり、自動ロールバック機能も提供されないため、迅速なロールバックの要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Parameter Store の値を更新しても、Lambda のウォームスタートインスタンスは古いキャッシュ値を使用し続ける場合があり、即座の切り替えが保証されません。段階的デプロイや自動ロールバック機能がないため、設定ミス時の復旧にも手動対応が必要です。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Lambda の環境変数を AWS SDK で更新すると UpdateFunctionConfiguration API が呼ばれ、関数の更新中は一時的にリクエストが処理できなくなる可能性があります。手動再デプロイが必要な場合、ダウンタイムなしの要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "AWS AppConfig ユーザーガイド",
      "url": "https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html"
    },
    {
      "title": "Amazon Bedrock の推論",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    }
  ]
});
