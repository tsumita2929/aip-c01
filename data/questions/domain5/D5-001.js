window.DOMAIN5_QUESTIONS = window.DOMAIN5_QUESTIONS || [];
window.DOMAIN5_QUESTIONS.push({
  "id": "D5-001",
  "domain": 5,
  "task": "5.1",
  "skill": "5.1.1",
  "type": "single",
  "difficulty": "easy",
  "question": "ある保険会社が Amazon Bedrock 上に構築した生成AIチャットボットを本番リリースする前に、応答品質の評価基盤を整備したいと考えています。要件は次のとおりです。\n\n・複数の基盤モデル候補（Anthropic Claude、Amazon Titan）を同一テストデータセットで比較できること\n・応答の事実正解率、関連性、有害性の各メトリクスを定量的にスコアリングできること\n・評価プロセスを自動化し、モデル更新のたびに手動で再評価する運用負荷を最小化すること\n\nこれらの要件を最も効率的に満たすアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon SageMaker Processing ジョブでカスタム評価スクリプトを作成し、各モデルのエンドポイントを呼び出して結果を Amazon S3 に保存し、Amazon Athena でクエリ分析する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のモデル評価機能で自動評価ジョブを作成し、テストデータセットに対して複数モデルの品質メトリクス（事実正解率、関連性、有害性）を自動スコアリングして比較する"
    },
    {
      "id": "C",
      "text": "AWS Lambda で各モデルの InvokeModel API を呼び出し、Amazon Comprehend のセンチメント分析で応答品質を評価して Amazon DynamoDB にスコアを記録する"
    },
    {
      "id": "D",
      "text": "Amazon CloudWatch メトリクスで各モデルの InvocationLatency と InvocationCount を比較し、レイテンシーが低くスループットが高いモデルを最良と判断する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。Amazon Bedrock のモデル評価機能は、複数の基盤モデルを同一テストデータセットに対して自動的に評価・比較する機能を提供しています。事実正解率、関連性、有害性などの品質メトリクスを自動計算でき、モデル更新のたびに評価ジョブを再実行するだけで再評価が完了するため、運用負荷を最小化できます。Aの SageMaker Processing + カスタムスクリプトの構成は実現可能ですが、評価ロジックの開発・保守が必要であり、Bedrock の組み込み機能と比較して運用負荷が高くなります。Cの Lambda + Comprehend の構成では、Comprehend のセンチメント分析は感情の極性を分析するツールであり、事実正解率や有害性といった生成AI固有の品質メトリクスの定量的なスコアリングには対応できません。Dの CloudWatch メトリクスはパフォーマンス指標（レイテンシー、スループット）のみを提供し、応答内容の品質評価には対応していません。（スキル5.1.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。SageMaker Processing + カスタムスクリプトの構成は技術的には実現可能ですが、評価ロジックの開発・保守が必要であり、Bedrock のモデル評価機能と比較して運用負荷が大幅に高くなります。評価プロセスの自動化と運用負荷最小化の要件を十分に満たしません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。Amazon Bedrock のモデル評価機能は、複数モデルの同一データセットでの比較、事実正解率・関連性・有害性の自動スコアリング、および評価プロセスの自動化という3つの要件をすべて直接満たします。マネージド機能として最小の運用負荷で品質評価基盤を実現できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Amazon Comprehend のセンチメント分析は感情の極性（ポジティブ/ネガティブ）を分析するツールであり、事実正解率や有害性といった生成AI固有の品質メトリクスの定量スコアリングには対応できません。また Lambda でのカスタム統合は運用負荷の最小化要件にも反します。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。CloudWatch メトリクスはレイテンシーやスループットといったパフォーマンス指標の比較には有用ですが、応答内容の事実正解率・関連性・有害性といった品質メトリクスの評価には対応していません。品質の定量的スコアリングという要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock モデル評価",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html"
    },
    {
      "title": "Amazon Bedrock モデル評価ジョブのセットアップ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-setup.html"
    }
  ]
});
