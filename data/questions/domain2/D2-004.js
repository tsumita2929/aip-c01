window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-004",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.3",
  "type": "single",
  "difficulty": "hard",
  "question": "金融機関が Amazon Bedrock Agents を使用して自動取引処理システムを構築しています。エージェントが外部の取引執行APIを反復的に呼び出しますが、過去にエージェントが同一APIを無限に呼び出し続ける事象が発生し、APIコストが急増しました。要件として、(1) エージェントのAPI呼び出し回数を上限制御すること、(2) 取引執行APIへのアクセスを承認済みリソースのみに限定すること、(3) 連続したAPI障害時にエージェントの呼び出しを自動的に停止し、API復旧後に再開することが求められています。最も運用負荷が低い保護アーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Bedrock Agents の最大イテレーション回数設定でループを制限し、IAM ポリシーの Resource 要素とCondition キーで取引執行APIへのアクセスを承認済みリソースに限定し、API Gateway のスロットリングとカスタム Lambda オーソライザーでサーキットブレーカーロジックを実装する"
    },
    {
      "id": "B",
      "text": "エージェントのシステムプロンプトに「APIを5回以上呼び出さないこと」と記載し、API Gateway の WAF ルールでアクセスを制限し、CloudWatch Logs でエラーを監視して手動で停止する"
    },
    {
      "id": "C",
      "text": "Lambda 関数のタイムアウトを5分に設定し、Lambda の同時実行数制限でAPI呼び出し回数を間接的に制御し、VPC エンドポイントポリシーでリソースアクセスを制限する"
    },
    {
      "id": "D",
      "text": "Bedrock Agents の最大イテレーション回数設定でループを制限し、エージェントの IAM ロールに Permissions Boundary を適用して取引API以外へのアクセスを禁止し、Step Functions のリトライ設定と MaxAttempts でサーキットブレーカーパターンを実装する"
    }
  ],
  "correctAnswers": [
    "D"
  ],
  "explanation": "正解は D です。Bedrock Agents のネイティブな最大イテレーション回数設定でエージェントのループを直接制限でき（要件1）、IAM Permissions Boundary により承認済みリソース以外へのアクセスを確実に防止でき（要件2）、Step Functions のリトライ設定と MaxAttempts でAPI障害時の自動停止と復旧後の再開を宣言的に構成できます（要件3）。すべてマネージド機能で実現でき運用負荷が最小です。A は API Gateway のカスタム Lambda オーソライザーでサーキットブレーカーを実装する必要があり、カスタムコードの保守負荷が発生します。B はプロンプトによる呼び出し制限はモデルが指示を無視する可能性があり信頼性が低く、手動停止はリアルタイム対応ができません。C は Lambda タイムアウトと同時実行数制限は間接的な制御にすぎず、正確なイテレーション回数制限やAPI障害時の自動停止には対応できません。（スキル2.1.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Bedrock Agents の最大イテレーション回数設定とIAMポリシーは適切であるものの、カスタム Lambda オーソライザーでサーキットブレーカーを実装するにはカスタムコードの開発と保守が必要であり、最小の運用負荷の要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。プロンプトによるAPI呼び出し制限はモデルが指示を無視する可能性があり信頼性が低く、CloudWatch による手動監視・停止ではリアルタイムの自動停止の要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Lambda のタイムアウトと同時実行数制限は間接的な制御にすぎず、エージェントのイテレーション回数を正確に制限できず、また連続API障害時の自動停止と復旧後再開の要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。Bedrock Agents の最大イテレーション回数設定、IAM Permissions Boundary、Step Functions のリトライ・MaxAttempts の組み合わせは、ループ制限・アクセス制御・サーキットブレーカーの3要件をすべてマネージド機能で満たし、最小の運用負荷で実現できます。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Agents guardrails",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    },
    {
      "title": "AWS IAM Permissions boundaries",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html"
    }
  ]
});
