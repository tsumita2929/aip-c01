window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-034",
  "domain": 3,
  "task": "3.4",
  "skill": "3.4.1",
  "type": "single",
  "difficulty": "easy",
  "question": "ある企業が、Amazon Bedrock のナレッジベースを使用した社内文書検索AIを提供しています。ユーザーが検索結果の信頼性を判断できるように透明性を確保する必要があります。具体的には、回答がどの社内文書に基づいているかを示し、ユーザーが原文を確認できるようにする必要があります。また、この機能を最小の開発工数で実装したいと考えています。最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock ナレッジベースの RetrieveAndGenerate API を使用し、応答とともに返却されるソース帰属情報（引用元ドキュメントの S3 URI、該当チャンクのテキスト）をユーザーインターフェースに表示する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のモデル呼び出しログを有効化し、入力プロンプトに含まれるナレッジベースの検索結果チャンクを CloudWatch Logs から抽出して、別途 API で参照元情報としてユーザーに返却する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock ナレッジベースの Retrieve API で関連チャンクを取得した後、取得したチャンクのメタデータ（S3 URI、スコア）を DynamoDB に保存し、フロントエンドからDynamoDB を参照して参照元情報を表示する"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock のプロンプトテンプレートに「回答の根拠となるドキュメント名を必ず記載してください」という指示を追加し、モデルに参照元情報を応答テキスト内に含めさせる"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Amazon Bedrock ナレッジベースの RetrieveAndGenerate API は、RAG（Retrieval-Augmented Generation）の応答とともに、引用元ドキュメントの S3 URI や該当チャンクのテキストなどのソース帰属情報を自動的に返却します。この情報をそのままユーザーインターフェースに表示するだけで、ユーザーは回答の根拠となった原文を確認でき、最小の開発工数で透明性を実現できます。B のモデル呼び出しログからの抽出は、CloudWatch Logs からのデータ抽出と別途 API の実装が必要で、RetrieveAndGenerate API のソース帰属情報を直接使用する方法と比較して開発工数が大きくなります。C の Retrieve API + DynamoDB の組み合わせは参照元情報の管理が可能ですが、DynamoDB への保存と参照のための追加実装が必要で、RetrieveAndGenerate API が直接返却するソース帰属情報を使う方が効率的です。D のプロンプトでの指示はモデルにドキュメント名を含めさせることができますが、モデルが正確なドキュメント名を生成する保証がなく（ハルシネーションのリスク）、RetrieveAndGenerate API の構造化されたソース帰属情報と比較して信頼性が劣ります。（スキル3.4.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。RetrieveAndGenerate API が自動返却するソース帰属情報（S3 URI、チャンクテキスト）をそのまま表示するだけで、最小の開発工数で信頼性判断の支援と透明性確保を直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。CloudWatch Logs からの検索結果チャンク抽出と別途 API 実装が必要であるものの、RetrieveAndGenerate API のソース帰属情報を直接使用する方法と比較して開発工数が大きく、最小の開発工数という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Retrieve API + DynamoDB で参照元情報を管理できるものの、DynamoDB への保存・参照の追加実装が必要で、RetrieveAndGenerate API の直接返却と比較して開発工数が大きく、最小の開発工数という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。プロンプトでドキュメント名の記載を指示できるものの、モデルが正確な名前を生成する保証がなくハルシネーションのリスクがあるため、構造化されたソース帰属情報と比較して信頼性が劣り、信頼性の判断支援という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Knowledge Bases",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
    },
    {
      "title": "Amazon Bedrock RetrieveAndGenerate API",
      "url": "https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html"
    }
  ]
});
