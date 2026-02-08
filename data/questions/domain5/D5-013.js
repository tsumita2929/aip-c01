window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-013",
  "domain": 5,
  "task": "5.2",
  "skill": "5.2.1",
  "type": "single",
  "difficulty": "easy",
  "question": "ある企業が Amazon Bedrock の Claude モデルを使用して長文の契約書を要約するシステムを運用しています。最近、特定の長い契約書を処理する際に、応答が途中で切れる問題が発生しています。エラーログを確認したところ、入力トークン数がモデルのコンテキストウィンドウの上限に近い値を示していました。この問題を解決するための最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "モデルの temperature パラメータを下げて、より簡潔な応答を生成させる"
    },
    {
      "id": "B",
      "text": "入力文書を適切なサイズのチャンクに分割し、各チャンクを個別に要約した後、要約結果を統合する再帰的要約パターンを実装する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock の Provisioned Throughput を購入して処理速度を向上させる"
    },
    {
      "id": "D",
      "text": "AWS Lambda のタイムアウト値を延長して、より長い処理時間を許容する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。コンテキストウィンドウのオーバーフロー問題に対しては、入力文書を適切なサイズのチャンクに分割して処理する再帰的要約パターン（Map-Reduce パターン）が最も効果的です。各チャンクをコンテキストウィンドウ内に収まるサイズで要約し、最終的に各要約を統合することで、長文文書全体の要約を生成できます。Aの temperature パラメータの調整は応答のランダム性を制御するもので、コンテキストウィンドウのサイズ制限には影響しません。Cの Provisioned Throughput はスループットの向上に関するもので、コンテキストウィンドウの上限は変わりません。DのLambda タイムアウトの延長は処理時間に関する設定であり、モデルの入力トークン制限の問題とは無関係です。（スキル5.2.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。temperature パラメータは応答のランダム性を制御するものであるものの、コンテキストウィンドウのサイズ制限には影響しません。入力トークン数の問題を解決できず、応答が途中で切れる要件に対処できません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。再帰的要約パターン（Map-Reduce パターン）は、コンテキストウィンドウの制限への対処と長文文書の完全な要約の両要件を直接満たします。特にチャンク分割と統合により、入力トークン制限の問題を最小の運用負荷で解決できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Provisioned Throughput はスループット（単位時間あたりの処理量）の向上に関するものであるものの、モデルのコンテキストウィンドウの上限は変わりません。入力トークン制限の問題を解決できません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Lambda のタイムアウト値の延長は処理時間に関する設定であるものの、モデルの入力トークン制限の問題とは無関係です。コンテキストウィンドウの制限は時間ではなくトークン数の問題です。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock 推論パラメータ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html"
    },
    {
      "title": "Amazon Bedrock モデルのサポートされるリージョンとモデル",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html"
    }
  ]
});
