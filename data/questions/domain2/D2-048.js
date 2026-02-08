window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-048",
  "domain": 2,
  "task": "2.5",
  "skill": "2.5.6",
  "type": "single",
  "difficulty": "hard",
  "question": "ある企業が AWS Lambda 関数から Amazon Bedrock の基盤モデルを呼び出す生成AIアプリケーションを運用しています。最近、Lambda 関数のタイムアウトが頻発しています。調査の結果、コールドスタート時にのみタイムアウトが発生していることが判明しました。この問題を解決するために最も効果的なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Lambda 関数のタイムアウト値を最大の15分に引き上げる"
    },
    {
      "id": "B",
      "text": "Lambda のプロビジョンドコンカレンシーを設定して、事前にウォームインスタンスを確保する"
    },
    {
      "id": "C",
      "text": "Lambda 関数のメモリサイズを最大値に増やしてCPU性能を向上させる"
    },
    {
      "id": "D",
      "text": "Lambda 関数を AWS Fargate に移行して、コンテナの常時起動を実現する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。Lambda のプロビジョンドコンカレンシーは、指定した数のインスタンスを事前に初期化・ウォーム状態で維持する機能です。コールドスタート時のみタイムアウトが発生しているため、プロビジョンドコンカレンシーでウォームインスタンスを確保すればコールドスタートを排除でき、問題を直接解決できます。Aのタイムアウト値の引き上げは根本的な解決ではなく、コールドスタートの遅延自体は解消されません。Cのメモリ増加はCPU性能も比例して向上しますが、コールドスタートの初期化時間の短縮効果は限定的です。DのFargate移行は過剰な対応であり、Lambda の利点（サーバーレス、自動スケーリング）を失います。（スキル2.5.6）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。タイムアウト値の引き上げはエラー回避が可能であるものの、コールドスタートの初期化遅延自体は解消されず、根本的な問題解決の要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。Lambda のプロビジョンドコンカレンシーは、コールドスタートの排除とサーバーレスの利点の維持の両方を直接満たします。事前にウォームインスタンスを確保することで、コールドスタート時の初期化遅延を完全に回避し、最小の運用負荷でタイムアウト問題を根本的に解決できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。メモリ増加による CPU 性能向上は処理速度の改善が可能であるものの、コールドスタートの初期化時間の短縮効果は限定的であり、コールドスタート固有の問題解決の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Fargate への移行はコールドスタート問題の回避が可能であるものの、過剰な対応であり Lambda のサーバーレスや自動スケーリングの利点を失うため、最小の運用負荷での解決の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Lambda provisioned concurrency",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html"
    },
    {
      "title": "Lambda performance optimization",
      "url": "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"
    }
  ]
});
