window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-014",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.6",
  "type": "single",
  "difficulty": "easy",
  "question": "ある不動産企業が Amazon Bedrock Agents を使用して、物件検索AIアシスタントを構築しています。エージェントは社内の物件データベースAPIを呼び出して、顧客の条件（エリア、予算、間取りなど）に合致する物件を検索する必要があります。開発チームはツール統合の実装工数を最小化しつつ、エージェントがAPIのパラメータや呼び出し方法を正確に理解できるようにしたいと考えています。最も適切なアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "物件検索APIの OpenAPI スキーマを作成してアクショングループに登録し、各エンドポイントのパラメータ型（エリア: string、予算上限: integer、間取り: enum）とレスポンス形式を定義する。Bedrock Agents がスキーマに基づいてリクエストを自動構築する"
    },
    {
      "id": "B",
      "text": "エージェントのシステムプロンプトにAPIの呼び出し方法をテキストで記述し、モデルがプロンプトの指示に従ってAPIリクエストのJSON文字列を生成する"
    },
    {
      "id": "C",
      "text": "汎用的な Lambda 関数を作成し、エージェントからの自由形式テキストを受け取って正規表現でパラメータを抽出してAPIを呼び出す"
    },
    {
      "id": "D",
      "text": "APIのすべてのレスポンスを事前にDynamoDBにキャッシュし、エージェントがDynamoDBから直接検索結果を取得する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。OpenAPI スキーマをアクショングループに登録することで、Bedrock Agents がエンドポイント、パラメータ型、レスポンス形式を自動的に理解し、正確なAPIリクエストを構築できます。スキーマベースのアプローチにより、エージェントのツール理解と型安全性が確保され、実装工数も最小化されます。B はプロンプトベースのJSON生成ではモデルが不正なJSON形式を生成する可能性があり、型安全性が保証されません。C は正規表現によるパラメータ抽出はモデルの出力形式の変動に脆弱で、パースエラーが頻発する原因となります。D はDynamoDBへの事前キャッシュは静的データには有効ですが、物件の空き状況のようなリアルタイムに変化するデータには対応できません。（スキル2.1.6）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。OpenAPI スキーマによるパラメータ型とレスポンス形式の定義は、エージェントの正確なAPI理解と型安全なリクエスト構築の要件を直接満たし、スキーマ定義のみで実装が完了するため工数を最小化できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。プロンプトベースのJSON生成は柔軟性があるものの、モデルが不正なJSON形式やスキーマ違反のパラメータを生成する可能性があり、型安全性と信頼性の要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。正規表現によるパラメータ抽出は実装が可能であるものの、モデルの出力形式の変動に脆弱でパースエラーが頻発し、正確なパラメータ理解の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。DynamoDB への事前キャッシュは静的データの高速検索が可能であるものの、物件の空き状況や価格変更のようなリアルタイムに変化するデータに対応できず、最新データの検索の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock agent action groups",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-action-create.html"
    },
    {
      "title": "Amazon Bedrock agent tool use",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-tool-use.html"
    }
  ]
});
