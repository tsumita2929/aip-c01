window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-031",
  "domain": 2,
  "task": "2.3",
  "skill": "2.3.3",
  "type": "single",
  "difficulty": "medium",
  "question": "マルチテナント SaaS 企業が Amazon Bedrock を使用した生成 AI 機能を提供しています。各テナントは独自のナレッジベース（S3 バケット内のドキュメント）を持ち、Bedrock Knowledge Bases を通じて RAG を利用します。テナント間のデータ分離を確実に行いつつ、テナントごとのモデル使用量の追跡と課金も必要です。これらの要件を最小の運用負荷で実現するアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "テナントごとに異なる IAM ロールを STS で動的に引き受け、各ロールのリソースポリシーでテナント固有の S3 プレフィックスと Bedrock Knowledge Base へのアクセスのみを許可し、CloudWatch でロールごとの API 呼び出し数を追跡する"
    },
    {
      "id": "B",
      "text": "アプリケーション層で Lambda 関数内にテナント ID ベースのフィルタリングロジックを実装し、S3 バケットへのアクセスをコードレベルで制御し、DynamoDB でテナントごとの使用量を記録する"
    },
    {
      "id": "C",
      "text": "テナントごとに別々の AWS アカウントを作成し、各アカウントに Bedrock と S3 を構成し、AWS Organizations で一元管理する"
    },
    {
      "id": "D",
      "text": "単一の IAM ロールですべてのテナントのリクエストを処理し、S3 バケットポリシーで IP アドレスベースのアクセス制御を行い、CloudTrail でアクセスログを監査する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。STS による動的なロール引き受けとリソースポリシーによるテナント固有リソースへのアクセス制限は、AWS レベルでの確実なデータ分離を実現します。CloudWatch でロールごとの API 呼び出しを追跡することで、テナント別の使用量追跡も可能です。この構成はマネージド機能のみで実現でき、運用負荷が最小です。（スキル2.3.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。STS + テナント別 IAM ロール + リソースポリシーの組み合わせは、AWS レベルでのデータ分離と使用量追跡の両方を直接満たします。IAM による分離はアプリケーションコードのバグに依存せず、確実な境界を提供します。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。アプリケーション層でのフィルタリングは実装が可能であるものの、Lambda 関数のコードにバグがあった場合にテナント間のデータ漏洩リスクがあり、確実なデータ分離の要件を満たしません。また、使用量の DynamoDB 記録も独自実装の運用負荷が発生します。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。アカウント分離はセキュリティ面で最も強力であるものの、テナント数に応じてアカウントが増加し、各アカウントでの Bedrock モデルアクセス設定や Knowledge Base の個別管理が必要となるため、運用負荷が大幅に増加します。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。単一 IAM ロールの使用ではテナント間のアクセス制御が分離されず、IP アドレスベースの制御は SaaS アプリケーションでは同一 IP から複数テナントのリクエストが送信されるため、テナント分離の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "AWS IAM roles",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html"
    },
    {
      "title": "Amazon Bedrock security",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/security.html"
    }
  ]
});
