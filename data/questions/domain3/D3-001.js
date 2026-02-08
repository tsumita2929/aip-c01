window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-001",
  "domain": 3,
  "task": "3.1",
  "skill": "3.1.1",
  "type": "single",
  "difficulty": "easy",
  "question": "ある金融サービス企業が、Amazon Bedrock を使用してカスタマーサポート用のチャットボットを構築しています。ユーザーが暴力的または性的に不適切なコンテンツを入力した場合、モデルが応答しないようにする必要があります。セキュリティチームは、フィルタリングカテゴリごとに異なる厳密度を設定したいと考えています。最小限の開発工数でこの要件を実装するには、どのアプローチが最も適切ですか？",
  "options": [
    {
      "id": "A",
      "text": "Amazon Comprehend のリアルタイム毒性検出 API を使用して入力テキストの有害性スコアを取得し、スコアに基づいてリクエストをブロックする AWS Lambda 関数を実装する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock ガードレールでコンテンツフィルターを設定し、暴力・性的コンテンツのカテゴリに対して入力フィルタリングのしきい値を HIGH に設定する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock のシステムプロンプトに安全性ガイドラインを詳細に記述し、モデル自身に不適切なコンテンツへの応答を拒否させる"
    },
    {
      "id": "D",
      "text": "Amazon Bedrock ガードレールの拒否トピック機能で暴力・性的コンテンツに関連するトピックを個別に定義し、各トピックのサンプルプロンプトを5つ以上登録する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "Amazon Bedrock ガードレールのコンテンツフィルターは、暴力、性的コンテンツ、侮辱、不正行為、プロンプト攻撃の各カテゴリに対して NONE / LOW / MEDIUM / HIGH の4段階でフィルタリングしきい値を個別に設定できるマネージドサービスです。カテゴリごとに異なる厳密度を設定でき、最小限の開発工数で入力コンテンツの安全性を確保できます。A の Comprehend 毒性検出 API は有害コンテンツの検出が可能ですが、Lambda 関数の開発・管理が必要となり、ガードレールのようにカテゴリ別のしきい値設定を宣言的に行う機能はありません。C のシステムプロンプトによる制御は、プロンプトインジェクション攻撃で回避される可能性があり、確実なコンテンツフィルタリングとは言えません。D の拒否トピックは特定のビジネス固有トピック（例：投資助言の禁止）を定義する機能であり、暴力・性的コンテンツのような汎用的なカテゴリフィルタリングにはコンテンツフィルター機能の方が適切です。（スキル3.1.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Amazon Comprehend の毒性検出 API はコンテンツの有害性を検出できるものの、Lambda 関数の開発・管理が必要で、カテゴリ別しきい値の宣言的設定もできないため、最小限の工数という要件を満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。Amazon Bedrock ガードレールのコンテンツフィルターは、暴力・性的コンテンツなどのカテゴリに対して NONE / LOW / MEDIUM / HIGH の4段階でしきい値を個別に設定できるマネージドサービスであり、カテゴリごとの厳密度設定と最小限の開発工数の両方を直接満たします。特にコンテンツフィルタリングを最小の運用負荷で実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。システムプロンプトによる安全性制御はプロンプトインジェクション攻撃で回避される可能性があるものの、確実なコンテンツフィルタリングの保証がなく、カテゴリ別の厳密度設定という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。拒否トピックは特定のビジネス固有トピックを定義する機能であるものの、暴力・性的コンテンツのような汎用カテゴリにはコンテンツフィルター機能の方が適切であり、サンプルプロンプトの登録等の追加作業も必要で最小限の工数という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Guardrails",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    },
    {
      "title": "Amazon Bedrock Guardrails Content Filters",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-content-filters.html"
    }
  ]
});
