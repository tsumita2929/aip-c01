window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-017",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.2",
  "type": "single",
  "difficulty": "easy",
  "question": "ある企業が、Amazon Bedrock を使用したカスタマーサポート AI システムで、顧客とのチャット履歴を Amazon S3 に保存しています。データ保持ポリシーにより、チャット履歴は90日後に自動的に削除する必要があります。また、30日後にはアクセス頻度が大幅に低下するため、ストレージコストの最適化も同時に実現したいと考えています。さらに、削除前の全チャット履歴は検索・再表示のために即時アクセス可能な状態を維持する必要があります。最も運用負担が少ないアーキテクチャはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon S3 ライフサイクルポリシーを設定し、30日後に S3 Glacier Instant Retrieval ストレージクラスに移行し、90日後にオブジェクトを自動削除（有効期限切れアクション）する"
    },
    {
      "id": "B",
      "text": "Amazon EventBridge のスケジュールルールで毎日 AWS Lambda 関数を起動し、S3 ListObjectsV2 API で90日以上経過したオブジェクトを検索して DeleteObjects API で一括削除する。S3 Intelligent-Tiering でストレージコスト最適化を行う"
    },
    {
      "id": "C",
      "text": "Amazon S3 の Object Lock をガバナンスモードで設定し、保持期間を90日に設定する。30日後のストレージクラス移行は S3 Intelligent-Tiering のアーカイブアクセス階層で自動的に行う"
    },
    {
      "id": "D",
      "text": "Amazon S3 ライフサイクルポリシーを設定し、30日後に S3 Glacier Deep Archive ストレージクラスに移行してコストを最小化し、90日後にオブジェクトを自動削除する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Amazon S3 ライフサイクルポリシーは、オブジェクトのストレージクラス移行と有効期限（自動削除）を宣言的に設定できるマネージド機能です。S3 Glacier Instant Retrieval はミリ秒単位のアクセスレイテンシーを提供しつつ S3 Standard より低コストであるため、アクセス頻度が低下した後も即時アクセスを維持しながらコスト最適化を実現できます。90日後の自動削除でデータ保持ポリシーに準拠でき、一度設定すれば自動実行されるため運用負担が最小限です。B の EventBridge + Lambda は関数コードの開発・ページネーション処理・エラーハンドリング・タイムアウト対策の運用負担があり、ライフサイクルポリシーで実現可能な機能をカスタム実装する必要はありません。S3 Intelligent-Tiering は自動階層化ですが、30日以内にアクセスパターンが変化しない場合の移行タイミングが不確定です。C の Object Lock ガバナンスモードはオブジェクトの上書き・削除を防止する機能であり、保持期間経過後にオブジェクトを自動削除する機能ではありません。また Intelligent-Tiering のアーカイブアクセス階層はデータ取得にリストア（数時間）が必要で、即時アクセスの要件を満たしません。D の Glacier Deep Archive は最も低コストなストレージクラスですが、データ取得に12時間以上かかるため、即時アクセス可能な状態を維持するという要件を満たしません。（スキル3.2.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。S3 ライフサイクルポリシーで Glacier Instant Retrieval への移行（ミリ秒単位のアクセスを維持しつつコスト最適化）と90日後の自動削除を宣言的に設定でき、即時アクセス維持・コスト最適化・自動削除の3要件を最小の運用負荷で直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。EventBridge + Lambda による自動削除は実現可能であるものの、関数の開発・ページネーション処理・エラーハンドリングの運用負担があり、ライフサイクルポリシーで実現可能な機能のカスタム実装となるため、最小の運用負担という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Object Lock ガバナンスモードはオブジェクトの上書き・削除防止機能であり自動削除機能ではありません。また Intelligent-Tiering のアーカイブアクセス階層はリストアに数時間かかるため、即時アクセスという要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。S3 Glacier Deep Archive は最低コストのストレージクラスですが、データ取得に12時間以上かかるため、削除前のチャット履歴を即時アクセス可能な状態に維持するという要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Managing S3 Object Lifecycle",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html"
    },
    {
      "title": "Amazon S3 Glacier Instant Retrieval",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-glacier-instant-retrieval"
    },
    {
      "title": "Amazon Bedrock Data Protection",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html"
    }
  ]
});
