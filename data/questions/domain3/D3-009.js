window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-009",
  "domain": 3,
  "task": "3.1",
  "skill": "3.1.5",
  "type": "ordering",
  "difficulty": "medium",
  "question": "ある企業が Amazon Bedrock ベースのAIアプリケーションに対するセキュリティテスト計画を策定しています。プロンプトインジェクションやジェイルブレイク攻撃に対する脆弱性を体系的に評価するための敵対的テスト（レッドチーミング）のステップを正しい順序に並べてください。",
  "options": [
    {
      "id": "A",
      "text": "既知の攻撃パターン（プロンプトインジェクション、ジェイルブレイク手法）のカタログを作成する"
    },
    {
      "id": "B",
      "text": "テスト対象のAIシステムのセキュリティ境界とリスクシナリオを特定する"
    },
    {
      "id": "C",
      "text": "テスト結果に基づき、Bedrock ガードレールの設定更新と入力サニタイズロジックの強化を実施する"
    },
    {
      "id": "D",
      "text": "攻撃パターンを使用してシステムに対する敵対的テストを実行し、脆弱性を記録する"
    }
  ],
  "correctOrder": [
    "B",
    "A",
    "D",
    "C"
  ],
  "explanation": "敵対的テスト（レッドチーミング）は体系的なプロセスで実施します。まず B でテスト対象システムのセキュリティ境界とリスクシナリオを特定し、テストの範囲と目的を明確にします。次に A で既知のプロンプトインジェクションやジェイルブレイク攻撃パターンのカタログを作成し、テストケースを準備します。続いて D でカタログ化した攻撃パターンを使用して実際にテストを実行し、脆弱性を記録します。最後に C でテスト結果に基づいてガードレール設定の更新や入力サニタイズロジックの強化などの修正を実施します。この順序により、計画的かつ網羅的なセキュリティ評価が可能になります。（スキル3.1.5）",
  "optionExplanations": {
    "B": {
      "correct": true,
      "text": "ステップ1: テスト対象のAIシステムのセキュリティ境界とリスクシナリオを特定し、テストの範囲と目的を明確にします。"
    },
    "A": {
      "correct": true,
      "text": "ステップ2: 既知のプロンプトインジェクション・ジェイルブレイク攻撃パターンのカタログを作成し、テストケースを準備します。"
    },
    "D": {
      "correct": true,
      "text": "ステップ3: カタログ化した攻撃パターンを使用してシステムに対する敵対的テストを実行し、脆弱性を記録します。"
    },
    "C": {
      "correct": true,
      "text": "ステップ4: テスト結果に基づいてガードレール設定の更新や入力サニタイズロジックの強化などの修正を実施します。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Security Best Practices",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/security-best-practices.html"
    },
    {
      "title": "AWS Well-Architected Framework - Security Pillar",
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html"
    }
  ]
});
