window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-006",
  "domain": 1,
  "task": "1.1",
  "skill": "1.1.3",
  "type": "multiple",
  "difficulty": "hard",
  "question": "ある企業が、AWS Well-Architected Framework の Generative AI Lens を活用して、Amazon Bedrock を使用した生成 AI アプリケーションのアーキテクチャレビューを実施しています。セキュリティの柱またはコスト最適化の柱で推奨されるベストプラクティスを2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "IAM ポリシーで bedrock:InvokeModel アクションを特定のモデル ARN に限定し、最小権限の原則でアクセスを制御する"
    },
    {
      "id": "B",
      "text": "Bedrock のモデル呼び出しログを CloudWatch Logs に記録し、不正なプロンプトパターンを CloudWatch Logs Insights で分析する"
    },
    {
      "id": "C",
      "text": "予測可能なワークロードに対してプロビジョンドスループットを使用し、オンデマンド料金と比較してコストを最適化する"
    },
    {
      "id": "D",
      "text": "Bedrock ガードレールのコンテンツフィルターを有効にして、FM の入出力に含まれる有害コンテンツを自動的にブロックする"
    },
    {
      "id": "E",
      "text": "CloudWatch メトリクスで推論レイテンシーとスループットを監視し、異常値に対してアラームを設定する"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "A: IAM ポリシーで bedrock:InvokeModel アクションを特定のモデル ARN に限定することは、セキュリティの柱における最小権限の原則の実装です。不要なモデルへのアクセスを防止し、攻撃面を縮小できます。C: プロビジョンドスループットは予測可能なワークロードでオンデマンドより最大50%のコスト削減が可能で、コスト最適化の柱のベストプラクティスです。モデル呼び出しログの記録（B）はセキュリティの監査に有用ですが、これは運用上の優秀性の柱（可観測性）に該当します。ガードレールのコンテンツフィルター（D）はアプリケーションの安全性に重要ですが、Well-Architected Framework のセキュリティの柱では主にインフラレベルのアクセス制御・暗号化・ネットワーク保護を扱います。CloudWatch のレイテンシー監視（E）はパフォーマンス効率の柱に該当します。（スキル1.1.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。IAM ポリシーでモデル ARN を限定した最小権限制御は、セキュリティの柱における不要なモデルへのアクセス防止と攻撃面縮小の要件を直接満たします。特にインフラレベルのアクセス制御を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。モデル呼び出しログの記録と分析はセキュリティ監査に有用な点はあるものの、運用上の優秀性の柱（可観測性）に該当し、セキュリティやコスト最適化の柱のプラクティスではありません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。プロビジョンドスループットで予測可能なワークロードのコストを最適化することは、コスト最適化の柱の要件を直接満たします。特にオンデマンドと比較して最大50%のコスト削減を実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。ガードレールのコンテンツフィルターはアプリケーションの安全性に重要な点はあるものの、Well-Architected のセキュリティの柱ではインフラレベルの制御を主に扱うため、直接該当しません。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。CloudWatch でのレイテンシー・スループット監視は運用上重要な点はあるものの、パフォーマンス効率の柱に該当し、セキュリティやコスト最適化の柱のプラクティスではありません。"
    }
  },
  "references": [
    {
      "title": "AWS Well-Architected Framework - Generative AI Lens",
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/generative-ai-lens.html"
    },
    {
      "title": "Amazon Bedrock のセキュリティ",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/security.html"
    },
    {
      "title": "Amazon Bedrock プロビジョニングスループット",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html"
    }
  ]
});
