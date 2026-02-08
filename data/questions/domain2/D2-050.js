window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-050",
  "domain": 2,
  "task": "2.5",
  "skill": "2.5.2",
  "type": "single",
  "difficulty": "easy",
  "question": "不動産テック企業が物件の問い合わせ対応を自動化する生成 AI ワークフローを構築しています。ユーザーからの問い合わせを受信すると、(1) 問い合わせ内容の分類（売買/賃貸/査定）、(2) 分類結果に応じた異なるプロンプトテンプレートの選択、(3) ナレッジベースからの物件情報の検索、(4) 回答の生成、という4ステップの処理が必要です。開発チームはコードを最小限にして、ビジュアルインターフェースでフローの設計・変更を行いたいと考えています。最も適切な実装方法はどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock Prompt Flows を使用して4ステップのフローをビジュアルに設計し、条件分岐ノードで問い合わせ分類に基づくプロンプトテンプレートの選択を行い、Knowledge Base ノードで物件情報を検索する"
    },
    {
      "id": "B",
      "text": "AWS Step Functions のワークフローで4ステップを構成し、各ステップを Lambda 関数で実装して Bedrock API を呼び出し、Choice ステートで条件分岐を行う"
    },
    {
      "id": "C",
      "text": "単一の Lambda 関数で4ステップすべてを逐次処理し、if-else 文で条件分岐を実装して Bedrock の Converse API を複数回呼び出す"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock Agents を使用してエージェントにツール（アクショングループ）として物件検索 API を登録し、エージェントが自律的にステップを判断して実行する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。Amazon Bedrock Prompt Flows は、ビジュアルインターフェースで複数のプロンプトステップを連結し、条件分岐やデータ変換を含むフローを構築できます。Knowledge Base ノードとの統合により物件情報の検索もフロー内で実現でき、コードの記述を最小限に抑えられます。要件の4ステップ処理とビジュアル設計の要件に最も合致します。（スキル2.5.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock Prompt Flows は4ステップのフロー設計、条件分岐、Knowledge Base 統合、ビジュアルインターフェースでの設計・変更の全要件を直接満たします。ノーコードでフローの変更が可能なため、ビジネス要件の変更にも迅速に対応できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。Step Functions はワークフロー管理が可能であるものの、各ステップの Lambda 関数の実装（Bedrock API 呼び出し、プロンプト組み立て、レスポンス処理）がコードベースで必要であり、コードを最小限にする要件を満たしません。フローの変更にもコード修正が伴います。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。単一 Lambda 関数での逐次処理は実装が直接的であるものの、すべてのロジックがコードに集中するためビジュアルインターフェースでの設計・変更の要件を満たしません。また、フローの変更にコード修正とデプロイが必要で、迅速な変更が困難です。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Bedrock Agents はエージェントが自律的にステップを判断するため、決まった4ステップの処理フローを確実に順序通り実行する要件に対して過剰な柔軟性を持ちます。エージェントの判断結果が毎回異なる可能性があり、予測可能なワークフローの要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Prompt Flows",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html"
    },
    {
      "title": "Amazon Bedrock prompt management",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html"
    }
  ]
});
