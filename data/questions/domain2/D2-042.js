window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-042",
  "domain": 2,
  "task": "2.4",
  "skill": "2.4.1",
  "type": "multiple",
  "difficulty": "medium",
  "question": "教育テクノロジー企業が Amazon Bedrock を使用したオンライン学習プラットフォームを構築しています。生徒がエッセイを提出すると AI が即座にフィードバックを返す機能と、教師が学期末に全生徒のエッセイを一括評価する機能の両方が必要です。それぞれのユースケースに最適な Bedrock API の呼び出しパターンについて正しい説明を2つ選んでください。",
  "options": [
    {
      "id": "A",
      "text": "生徒のリアルタイムフィードバックには InvokeModelWithResponseStream API を使用し、フィードバックの生成中からトークンを逐次返却することで待ち時間を短縮する"
    },
    {
      "id": "B",
      "text": "教師の一括評価には CreateModelInvocationJob API でバッチ推論ジョブを作成し、全エッセイを S3 に配置して非同期で一括処理することでコスト効率を最大化する"
    },
    {
      "id": "C",
      "text": "生徒のリアルタイムフィードバックには CreateModelInvocationJob API を使用し、S3 にエッセイをアップロードしてバッチ処理で結果を取得する"
    },
    {
      "id": "D",
      "text": "教師の一括評価には InvokeModel API を Lambda 関数から並列に呼び出し、各エッセイを同期的に順次処理することでコスト効率を最大化する"
    },
    {
      "id": "E",
      "text": "生徒のリアルタイムフィードバックと教師の一括評価の両方に InvokeModel API を使用し、タイムアウト設定のみを変更して対応する"
    }
  ],
  "correctAnswers": [
    "A",
    "B"
  ],
  "explanation": "正解は A と B です。生徒向けのリアルタイムフィードバックには InvokeModelWithResponseStream API（A）が最適で、生成中のトークンを逐次返却することで体感待ち時間を大幅に短縮できます。教師の一括評価には CreateModelInvocationJob API によるバッチ推論（B）が最適で、S3 経由の非同期処理によりオンデマンド推論より低コストで大量処理が可能です。（スキル2.4.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。InvokeModelWithResponseStream API はトークンの逐次返却によるリアルタイムフィードバックの要件を直接満たします。生成中からフィードバックが表示されるため、生徒の体感待ち時間を最小化できます。"
    },
    "B": {
      "correct": true,
      "text": "正解です。CreateModelInvocationJob API によるバッチ推論は、大量エッセイの非同期一括処理とコスト効率の最大化の両方を直接満たします。バッチ推論はオンデマンド推論より低コストで、教師は結果を後から確認すれば十分です。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。CreateModelInvocationJob API はバッチ推論用の非同期 API であり、ジョブの作成から結果の取得まで数分〜数時間を要するため、生徒へのリアルタイムフィードバックの要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。InvokeModel API の並列呼び出しは処理の高速化が可能であるものの、同期 API のためオンデマンド料金が適用され、バッチ推論の割引料金と比較してコスト効率が低くなります。また、同時呼び出し制限によるスロットリングのリスクもあります。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。InvokeModel API のみの使用は実装が統一的であるものの、同期的な一括返却のため生徒への体感待ち時間が長くなり、教師の一括評価ではバッチ推論の割引料金を活用できないため、リアルタイム性とコスト効率の両方の要件を最適に満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    },
    {
      "title": "Amazon Bedrock batch inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference.html"
    }
  ]
});
