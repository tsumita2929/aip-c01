window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-038",
  "domain": 3,
  "task": "3.4",
  "skill": "3.4.1",
  "type": "single",
  "difficulty": "hard",
  "question": "ある法律事務所が、Amazon Bedrock のナレッジベースと連携したAIリーガルアシスタントを構築しています。弁護士がAIの回答を実務で活用するため、以下の透明性要件をすべて満たす必要があります。(1) 回答の根拠となった判例・法令文書の引用元を明示すること、(2) AIが回答を生成するまでにどのようなステップ（文書検索、情報統合、回答生成）を経たかを確認できること、(3) 回答の確信度をユーザーが把握できること。これらの要件を最も運用効率よく満たすアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock エージェントのトレース機能で推論過程（PreProcessing、Orchestration、PostProcessing）を可視化し、ナレッジベースの RetrieveAndGenerate API で引用元ドキュメント（S3 URI、チャンクテキスト）のソース帰属情報を表示する。検索結果の関連度スコアを確信度の指標としてユーザーインターフェースに表示する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のモデル呼び出しログを S3 に保存し、Lambda で各ステップの入出力を解析して推論過程のレポートを生成する。ナレッジベースの Retrieve API で取得したチャンクのメタデータを DynamoDB に保存し、フロントエンドから参照する。Amazon Comprehend の感情分析で回答の確信度を推定する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock ガードレールのトレース出力で入出力のフィルタリング結果を確認し、CloudWatch Logs に記録されたナレッジベースの検索クエリから引用元を推定する。Bedrock のモデル評価機能で定期的に回答品質を評価し、評価スコアを確信度として表示する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock のプロンプトテンプレートに「引用元を明記し、確信度を 1-5 の数値で示し、推論ステップを箇条書きで出力してください」という指示を含める。Amazon CloudWatch メトリクスでモデルのレイテンシとトークン使用量を推論ステップの代替指標として表示する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "3つの透明性要件を満たすには、(1) ナレッジベースの RetrieveAndGenerate API のソース帰属情報で引用元を明示、(2) Bedrock エージェントのトレース機能で推論過程を可視化、(3) 検索結果の関連度スコアで確信度を提示、という組み合わせが最も効率的です。これらはいずれもマネージド機能であり、カスタム実装が最小限で済みます。B のモデル呼び出しログ解析 + Lambda + DynamoDB + Comprehend の組み合わせは各要件に個別対応できますが、Lambda でのログ解析実装、DynamoDB テーブルの管理、Comprehend の感情分析を確信度に流用する点など、運用負荷が高く適切性にも疑問があります。C のガードレールのトレース出力はフィルタリング結果の確認用であり推論過程の可視化ではありません。CloudWatch Logs から引用元を「推定」するのは不正確で、モデル評価の定期スコアはリアルタイムの確信度とは異なります。D のプロンプト指示のみでは、モデルが正確な引用元を出力する保証がなく（ハルシネーションリスク）、確信度の数値も根拠のない自己評価に過ぎません。レイテンシやトークン使用量は推論ステップの代替にはなりません。（スキル3.4.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。エージェントのトレース機能 + RetrieveAndGenerate API のソース帰属 + 関連度スコアの組み合わせにより、引用元明示・推論過程可視化・確信度表示の3要件をマネージド機能のみで実現し、最も運用効率よく満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Lambda ログ解析 + DynamoDB + Comprehend の組み合わせは各要件に対応可能であるものの、カスタム実装の開発・保守が多く、感情分析を確信度に流用する点も不適切であり、最も運用効率が高いという要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。ガードレールのトレース出力はフィルタリング結果の確認用で推論過程の可視化ではなく、ログからの引用元推定は不正確、定期評価スコアはリアルタイム確信度と異なるため、3つの透明性要件を正確に満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。プロンプト指示のみでは引用元の正確性が保証されず（ハルシネーションリスク）、確信度の数値も根拠のない自己評価に過ぎないため、信頼性のある透明性機能という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Agents Trace",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-trace.html"
    },
    {
      "title": "Amazon Bedrock Knowledge Bases",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
    },
    {
      "title": "Amazon SageMaker Clarify Explainability",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-explainability.html"
    }
  ]
});
