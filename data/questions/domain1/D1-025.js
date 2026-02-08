window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-025",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.3",
  "type": "single",
  "difficulty": "easy",
  "question": "ある開発者が、Amazon Bedrock の FM を使用してテキスト生成アプリケーションを構築しています。InvokeModel API と Converse API の両方が利用可能です。複数の FM プロバイダー（Anthropic、Amazon Titan、Meta）を切り替えて使用する計画がある場合、API の選択として最も適切なのはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Converse API を使用する。統一されたリクエスト・レスポンス形式で複数のモデルプロバイダーに対応でき、モデル切り替え時のコード変更が最小限になる"
    },
    {
      "id": "B",
      "text": "InvokeModel API を使用する。各モデルプロバイダー固有の JSON スキーマで直接リクエストすることで、モデル固有の高度な機能をすべて活用できる"
    },
    {
      "id": "C",
      "text": "InvokeModelWithResponseStream API を使用する。ストリーミングレスポンスにより全モデルで統一された出力形式が保証される"
    },
    {
      "id": "D",
      "text": "各モデルプロバイダーの SDK（Anthropic SDK、Meta SDK）を直接使用し、Bedrock API を介さずにモデルを呼び出す"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "Converse API は複数のモデルプロバイダーに対して統一されたリクエスト・レスポンス形式を提供するため、モデルの切り替え時にコード変更が最小限で済みます。InvokeModel API（B）は各モデルプロバイダー固有の JSON スキーマを使用するため、モデル切り替え時にリクエスト形式の変更が必要になります。InvokeModelWithResponseStream（C）はストリーミングレスポンスを提供しますが、リクエスト形式はInvokeModelと同様にモデル固有であり、統一された出力形式は保証されません。各プロバイダーの SDK を直接使用（D）すると Bedrock のマネージド機能（ガードレール、ログ記録など）が利用できなくなります。（スキル1.3.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Converse API は、統一されたリクエスト・レスポンス形式での複数モデルプロバイダー対応とモデル切り替え時のコード変更最小化の要件を直接満たします。特にプロバイダー間の互換性を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。InvokeModel API はモデル固有の高度な機能を活用できる点はあるものの、プロバイダー切り替え時にリクエスト形式の変更が必要で、コード変更最小化の要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。InvokeModelWithResponseStream はストリーミングレスポンスを提供できる点はあるものの、リクエスト形式はモデル固有であり統一された形式は保証されず、プロバイダー間の互換性要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。プロバイダー SDK の直接使用はモデル固有の機能を活用できる点はあるものの、Bedrock のマネージド機能（ガードレール、ログ記録、アクセス制御など）が利用できなくなります。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Converse API",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html"
    },
    {
      "title": "Amazon Bedrock InvokeModel API",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html"
    }
  ]
});
