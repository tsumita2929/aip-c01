window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-051",
  "domain": 1,
  "task": "1.5",
  "skill": "1.5.6",
  "type": "single",
  "difficulty": "hard",
  "question": "ある旅行代理店が、Amazon Bedrock を使用した AI エージェントを構築しています。エージェントは、ユーザーの旅行プランに基づいてリアルタイムの航空券価格API、ホテル予約API、天気予報APIを自律的に呼び出し、最適な提案を生成する必要があります。FM がユーザーの質問内容に応じてどの API をどの順序で呼び出すかを動的に判断できるようにする最も適切な実装方法はどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Bedrock Agents のアクショングループで各 API を OpenAPI スキーマで定義し、Lambda 関数経由で呼び出す。FM がユーザーの意図に基づいて呼び出す API を自律的に判断する"
    },
    {
      "id": "B",
      "text": "Step Functions のワークフローで航空券 → ホテル → 天気の順に API を呼び出し、全結果を Bedrock FM に送信して提案を生成する"
    },
    {
      "id": "C",
      "text": "Bedrock ナレッジベースに航空券・ホテル・天気のデータを定期的にインジェストし、RAG で検索して提案を生成する"
    },
    {
      "id": "D",
      "text": "API Gateway で各 API のプロキシエンドポイントを作成し、クライアントアプリケーションで API 呼び出しと FM の応答を統合する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Bedrock Agents のアクショングループは、OpenAPI スキーマで各 API のパラメータと機能を定義し、FM がユーザーの意図に基づいてどの API をどの順序で呼び出すかを自律的に判断できます（関数呼び出しパターン）。Step Functions（B）はワークフローの制御に適していますが、呼び出し順序が固定的であり、FM がユーザーの質問に応じて動的に判断する自律性がありません。ナレッジベースへのインジェスト（C）はリアルタイムの価格・予約情報には適さず、データの鮮度が保てません。API Gateway + クライアント統合（D）はクライアント側に呼び出しロジックを実装する必要があり、FM の自律的な判断によるAPI選択ができません。（スキル1.5.6）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock Agents のアクショングループと OpenAPI スキーマは、FM による自律的な API 選択と動的な呼び出し順序決定の要件を直接満たします。特にユーザーの意図に基づく自律的な判断を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Step Functions はワークフロー制御に適している点はあるものの、呼び出し順序が固定的で FM がユーザーの質問に応じて動的に API 選択する自律性がなく、動的ルーティングの要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。ナレッジベースへのインジェストはデータ検索に有用な点はあるものの、リアルタイムの価格・予約情報には適さずデータの鮮度が保てないため、リアルタイム API 呼び出しの要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。API Gateway + クライアント統合は API 呼び出しが可能な点はあるものの、クライアント側にロジック実装が必要で FM の自律的な API 選択ができず、自律的判断の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Agents",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"
    },
    {
      "title": "Amazon Bedrock Agents アクショングループ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-action-create.html"
    }
  ]
});
