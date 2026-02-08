window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-045",
  "domain": 1,
  "task": "1.5",
  "skill": "1.5.3",
  "type": "single",
  "difficulty": "easy",
  "question": "ある開発者が、Amazon Bedrock ナレッジベースを使用して社内ドキュメント検索システムを構築しています。検索結果のチャンクを取得した後、アプリケーション側で独自のプロンプトテンプレートを使用して FM に回答を生成させたいと考えています。最も適切な API の選択はどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Retrieve API でチャンクを取得し、アプリケーション側でプロンプトを構成して InvokeModel API で FM に送信する"
    },
    {
      "id": "B",
      "text": "RetrieveAndGenerate API を使用し、generationConfiguration でカスタムプロンプトテンプレートを指定する"
    },
    {
      "id": "C",
      "text": "RetrieveAndGenerate API をデフォルト設定で使用し、FM の応答をアプリケーション側で後処理する"
    },
    {
      "id": "D",
      "text": "Retrieve API でチャンクを取得し、Bedrock Agents のアクショングループで FM に回答を生成させる"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Retrieve API はクエリに関連するチャンクのテキスト、関連度スコア、メタデータを返しますが FM による回答生成は行いません。このため、アプリケーション側で取得したチャンクを使って独自のプロンプトを構成し、InvokeModel API で FM に送信することで、プロンプトテンプレートを完全にカスタマイズできます。RetrieveAndGenerate API のカスタムプロンプト（B）はある程度のカスタマイズが可能ですが、プロンプトテンプレートの自由度は Retrieve API + InvokeModel の組み合わせに劣ります。RetrieveAndGenerate のデフォルト設定（C）ではカスタムプロンプトが使用できません。Bedrock Agents のアクショングループ（D）は外部 API 呼び出しのための機能であり、プロンプトテンプレートのカスタマイズには適していません。（スキル1.5.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Retrieve API と InvokeModel API の組み合わせは、チャンク取得後の独自プロンプトテンプレート使用と最大限のカスタマイズの要件を直接満たします。特にプロンプト構成の完全な自由度を実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。RetrieveAndGenerate API のカスタムプロンプトテンプレートはある程度のカスタマイズが可能な点はあるものの、Retrieve + InvokeModel の組み合わせほどの自由度はなく、最大限のカスタマイズ要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。RetrieveAndGenerate API のデフォルト設定は簡単に利用できる点はあるものの、独自のプロンプトテンプレートは使用できず、後処理では対応できないため、カスタマイズ要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Bedrock Agents のアクショングループは外部 API 呼び出しに有用な点はあるものの、プロンプトテンプレートのカスタマイズには適しておらず、独自プロンプト使用の要件を満たせません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock ナレッジベースの検索と生成",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-retrieve.html"
    }
  ]
});
