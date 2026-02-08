window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-007",
  "domain": 2,
  "task": "2.1",
  "skill": "2.1.6",
  "type": "multiple",
  "difficulty": "hard",
  "question": "開発チームが Amazon Bedrock Agents を使用して、社内の人事システムと連携する AI アシスタントを構築しています。エージェントは「有給休暇残日数の照会」「休暇申請の提出」「給与明細のダウンロード」の3つのアクションを実行する必要があります。各アクションは既存の社内REST APIを呼び出しますが、REST APIのリクエスト/レスポンス形式がアクションごとに異なります。チームはツール統合の信頼性と保守性を最大化したいと考えています。正しいアプローチを2つ選んでください。",
  "options": [
    {
      "id": "A",
      "text": "各アクションをアクショングループとして定義し、OpenAPI スキーマでエンドポイント、パラメータ型、レスポンス形式を明示的に記述する。Bedrock Agents がスキーマに基づいてリクエストを自動構築する"
    },
    {
      "id": "B",
      "text": "3つのアクションを単一の Lambda 関数に集約し、エージェントからの自由形式テキストを正規表現で解析してアクションを振り分ける"
    },
    {
      "id": "C",
      "text": "各アクションの Lambda 関数にバリデーションロジックを実装し、エージェントから渡されたパラメータの型チェックとエラーハンドリングを行う。エラー時にはエージェントが理解可能な構造化エラーレスポンスを返す"
    },
    {
      "id": "D",
      "text": "エージェントのシステムプロンプトにREST APIのリクエスト形式をすべて記述し、モデルにJSON文字列を直接生成させてAPIを呼び出す"
    },
    {
      "id": "E",
      "text": "すべてのAPI呼び出しを Amazon SQS 経由で非同期に実行し、エージェントはキューにメッセージを投入した後、ポーリングで結果を取得する"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "正解は A と C です。A では OpenAPI スキーマにエンドポイント、パラメータ型、レスポンス形式を明示的に記述することで、Bedrock Agents がスキーマに基づいてリクエストを自動構築でき、アクションごとに異なるAPI形式に型安全に対応できます。C では Lambda 関数でバリデーションとエラーハンドリングを実装することで、予期しないパラメータやAPI障害時にエージェントが適切にリカバリでき、信頼性が向上します。B は自由形式テキストの正規表現解析では、モデルの出力変動によりパースエラーが頻発し信頼性が低下します。D はプロンプトによるJSON直接生成ではモデルがスキーマ違反のJSONを生成する可能性があり、型安全性が保証されません。E は SQS 経由の非同期処理ではポーリング遅延が発生し、有給残日数照会のような即時応答が必要なアクションに不適切です。（スキル2.1.6）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。OpenAPI スキーマによるエンドポイント・パラメータ型・レスポンス形式の明示的定義は、Bedrock Agents の自動リクエスト構築と型安全なAPI呼び出しの要件を直接満たし、保守性を向上させます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。自由形式テキストの正規表現解析は実装が可能であるものの、モデルの出力形式が変動するとパースエラーが頻発し、ツール統合の信頼性の要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。Lambda 関数でのバリデーションと構造化エラーレスポンスの実装は、予期しないパラメータやAPI障害時のエージェントの適切なリカバリを可能にし、信頼性の要件を直接満たします。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。プロンプトによるJSON直接生成は柔軟性があるものの、モデルがスキーマ違反のJSONを生成する可能性があり、型安全性と信頼性の要件を満たしません。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。SQS 経由の非同期処理はスケーラビリティがあるものの、ポーリング遅延により有給残日数照会のような即時応答が必要なアクションに不適切で、応答性の要件を満たしません。"
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
