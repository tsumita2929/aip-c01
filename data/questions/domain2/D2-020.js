window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-020",
  "domain": 2,
  "task": "2.2",
  "skill": "2.2.4",
  "type": "multiple",
  "difficulty": "medium",
  "question": "ある国際企業が Amazon Bedrock を使用した顧客サポートチャットボットをグローバルに展開しています。アジア太平洋、欧州、北米の3リージョンのユーザーにサービスを提供しており、各リージョンでの応答レイテンシーを最小化しつつ、特定リージョンでの障害時にもサービスを継続する必要があります。この要件を満たすために正しいアプローチを2つ選択してください。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock のクロスリージョン推論を有効化し、リクエストを自動的に最も近い利用可能なリージョンにルーティングする"
    },
    {
      "id": "B",
      "text": "Amazon CloudFront を使用してモデルの推論結果をエッジロケーションにキャッシュし、繰り返しの同一クエリに対するレイテンシーを削減する"
    },
    {
      "id": "C",
      "text": "複数リージョンにBedrock推論プロファイルを構成し、Amazon Route 53のレイテンシーベースルーティングでユーザーを最寄りのエンドポイントに誘導する"
    },
    {
      "id": "D",
      "text": "単一リージョンでプロビジョンドスループットを最大に設定し、全リージョンからのトラフィックを集中処理する"
    },
    {
      "id": "E",
      "text": "各リージョンに同一のBedrock設定を手動で複製し、障害時はDNSフェイルオーバーで切り替える"
    }
  ],
  "correctAnswers": [
    "A",
    "C"
  ],
  "explanation": "正解はAとCです。Aの Amazon Bedrock クロスリージョン推論は、モデルの推論リクエストを複数のAWSリージョンに分散する機能で、特定リージョンの容量不足や障害時に自動的に別リージョンにフォールバックできます。Cの複数リージョンでの推論プロファイル構成とRoute 53レイテンシーベースルーティングを組み合わせることで、ユーザーは地理的に最も近いリージョンに自動的にルーティングされ、レイテンシーが最小化されます。Bの CloudFront キャッシュはLLMの動的なレスポンスに対してはキャッシュヒット率が極めて低く、効果が限定的です。Dの単一リージョン集中はレイテンシーと耐障害性の両方で要件を満たしません。Eの手動複製は運用負荷が高く、自動フェイルオーバーに比べて復旧時間が長くなります。（スキル2.2.4）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Amazon Bedrock クロスリージョン推論はリクエストを複数の AWS リージョンに分散し、特定リージョンの障害時に自動フォールバックすることで、サービス継続性の要件を直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。CloudFront キャッシュは静的コンテンツの配信に優れるものの、LLM の動的なレスポンスに対してはキャッシュヒット率が極めて低く、レイテンシー最小化の要件を効果的に満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。複数リージョンでの推論プロファイル構成と Route 53 レイテンシーベースルーティングの組み合わせは、各リージョンでのレイテンシー最小化の要件を直接満たします。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。単一リージョンの集中処理はシンプルであるものの、レイテンシー最小化と耐障害性の両方の要件を満たしません。"
    },
    "E": {
      "correct": false,
      "text": "不正解です。手動複製と DNS フェイルオーバーは障害対応が可能であるものの、運用負荷が高く自動フェイルオーバーに比べて復旧時間が長いため、迅速なサービス継続の要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock cross-region inference",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html"
    },
    {
      "title": "Amazon Route 53 routing policy",
      "url": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html"
    }
  ]
});
