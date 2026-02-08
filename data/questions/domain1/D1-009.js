window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-009",
  "domain": 1,
  "task": "1.1",
  "skill": "1.1.2",
  "type": "single",
  "difficulty": "easy",
  "question": "あるスタートアップの開発者が、Amazon Bedrock を使用して社内FAQ応答システムの PoC を2日以内に完成させる必要があります。FAQ データは約200件あり、開発者はまだどのモデルが社内用語を含む日本語の質問に正確に回答できるか確認できていません。PoC の目標は、経営層に対してシステムの実現可能性をデモすることです。2日以内に動作するデモを用意するために最も効率的なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "Bedrock のプレイグラウンドで Claude 3.5 Sonnet、Claude 3 Haiku、Amazon Titan Text を対話的に試し、社内用語を含む代表的な質問10件で応答品質を比較する。最適なモデルを特定した後、Bedrock のナレッジベースに FAQ データをアップロードして RAG 構成のデモ環境を構築する"
    },
    {
      "id": "B",
      "text": "SageMaker Studio のノートブックで Bedrock API を呼び出す Python コードを作成し、200件の FAQ データで各モデルの応答品質を体系的に測定する。ROUGE スコアで定量評価を行い、最適なモデルを選定してから API Gateway + Lambda でデモ API を構築する"
    },
    {
      "id": "C",
      "text": "AWS CDK で Bedrock + API Gateway + Lambda + DynamoDB のインフラを IaC で構築し、FAQ データを DynamoDB に格納する。Lambda 関数で質問に対してベクトル検索を実行し、関連する FAQ を Bedrock FM のコンテキストに含めて回答を生成する"
    },
    {
      "id": "D",
      "text": "Bedrock のモデル評価ジョブを作成して、200件の FAQ をテストデータセットとして登録し、自動評価メトリクスで複数モデルの応答品質を定量的に比較する。評価完了後に最高スコアのモデルでデモ環境を構築する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "2日以内の PoC では迅速な実現可能性検証が最優先です。プレイグラウンドでの対話的テストはコード不要で即座にモデルの応答品質を確認でき、最短で最適モデルを特定できます。その後、Bedrock ナレッジベースは S3 上の FAQ データからマネージドな RAG パイプラインを最小限の設定で構築できるため、2日以内のデモ準備に最適です。SageMaker Studio + 定量評価（B）はモデル選定の精度は高いですが、Python コードの作成、200件分の評価実行、API 構築までを2日以内に完了するのは厳しく、PoC としてはオーバーエンジニアリングです。CDK でのインフラ構築（C）は本番環境に向けた設計としては優れていますが、IaC のコーディング、DynamoDB のスキーマ設計、ベクトル検索のカスタム実装など2日以内には完了困難で、PoC 段階では過剰です。モデル評価ジョブ（D）は体系的な比較に優れますが、テストデータセットの作成（入力-期待出力ペアの準備）に時間がかかり、評価ジョブの実行にも数時間を要します。2日以内のデモ準備には時間的制約が厳しくなります。（スキル1.1.2）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。プレイグラウンドでの即座のモデル比較と、ナレッジベースによるマネージド RAG 構成の組み合わせにより、コーディング最小限で2日以内にデモ可能な FAQ 応答システムを構築できます。経営層向けデモに必要な実現可能性の証明を最速で達成できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。SageMaker Studio での体系的評価は精度の高いモデル選定が可能ですが、Python コードの作成、200件分のバッチ評価、API Gateway + Lambda の構築までを2日以内に完了するのは時間的に厳しく、PoC のスピード要件を満たせません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。CDK による IaC は再現性のあるインフラ構築に適していますが、CDK コードの作成、DynamoDB スキーマ設計、ベクトル検索のカスタム実装は2日以内には困難です。Bedrock ナレッジベースで同等の RAG 機能をはるかに少ない工数で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。モデル評価ジョブは定量的な比較に優れていますが、テストデータセットの作成（200件の入力-期待出力ペアの準備）と評価ジョブの実行（数時間）に時間がかかります。PoC の初期段階ではプレイグラウンドでの定性的な比較の方が迅速です。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock プレイグラウンド",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/playgrounds.html"
    }
  ]
});
