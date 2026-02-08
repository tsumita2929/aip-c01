window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-002",
  "domain": 5,
  "task": "5.1",
  "skill": "5.1.2",
  "type": "single",
  "difficulty": "medium",
  "question": "ある金融機関が Amazon Bedrock で複数の基盤モデル（Anthropic Claude、Amazon Titan、Meta Llama）を検討しています。本番環境にデプロイするモデルを選定するため、同一のテストデータセットで各モデルの応答品質を比較し、コストパフォーマンスも含めて最適なモデルを特定したいと考えています。この要件を最も効率的に満たすアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon SageMaker の A/B テスト機能を使用して、各モデルをエンドポイントにデプロイしてトラフィックを分割する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のモデル評価機能を使用して、自動評価ジョブで複数モデルを同一データセットに対して比較評価する"
    },
    {
      "id": "C",
      "text": "AWS Lambda で各モデルの API を個別に呼び出し、結果を Amazon S3 に保存して手動で比較する"
    },
    {
      "id": "D",
      "text": "Amazon CloudWatch メトリクスでモデルごとのレイテンシーとスループットのみを比較し、最も高速なモデルを選択する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。Amazon Bedrock のモデル評価機能は、複数の基盤モデルを同一のテストデータセットに対して自動的に評価・比較する機能を提供しています。品質メトリクス（正確性、関連性、有害性など）を自動的に評価・比較する機能を提供しています。コストやレイテンシーは別途 CloudWatch メトリクスや AWS Cost Explorer で確認・比較できます。Aの SageMaker A/B テストは本番トラフィックの分割に適しており、事前のモデル選定段階での比較評価には過剰な構成です。Cの Lambda での手動比較は運用負荷が高く、標準化された評価メトリクスの算出が困難です。DのCloudWatch メトリクスだけでは応答品質の評価ができず、パフォーマンス指標のみの比較では不十分です。（スキル5.1.2）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。SageMaker の A/B テストは本番トラフィックの分割に適した機能であり、事前のモデル選定段階での比較評価には過剰な構成です。応答品質の比較という要件に対して、モデル評価のためにわざわざエンドポイントをデプロイする必要はありません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。Amazon Bedrock のモデル評価機能は、複数の基盤モデルを同一テストデータセットに対して自動的に評価・比較する機能を提供しています。品質メトリクス（正確性、関連性、有害性など）を自動計算でき、コストパフォーマンスを含めたモデル選定に最も効率的です。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Lambda で各モデルの API を個別に呼び出して手動比較する方法は、運用負荷が高く、標準化された評価メトリクスの算出が困難です。効率的な比較評価という要件を満たせません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。CloudWatch メトリクスだけではレイテンシーやスループットといったパフォーマンス指標しか取得できず、応答品質の評価ができません。品質比較とコストパフォーマンスの総合的な判断には不十分です。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock モデル評価",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html"
    },
    {
      "title": "Amazon Bedrock モデル評価ジョブの作成",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-create.html"
    }
  ]
});
