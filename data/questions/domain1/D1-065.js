window.DOMAIN1_QUESTIONS = window.DOMAIN1_QUESTIONS || [];
window.DOMAIN1_QUESTIONS.push({
  "id": "D1-065",
  "domain": 1,
  "task": "1.3",
  "skill": "1.3.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある小売企業のデータサイエンスチームが、商品レコメンデーションモデルのトレーニングデータを準備しています。データソースは Amazon S3 上の CSV ファイル（顧客購買履歴）と Amazon Redshift 上の商品マスタテーブルです。チームメンバーの多くはコーディング経験が限られており、以下の要件があります。(1) GUI ベースの操作でデータの結合・変換・クレンジングを行えること、(2) データの分布や品質を視覚的に確認できること、(3) 準備したデータを SageMaker のトレーニングジョブに直接エクスポートできること。これらの要件を最も適切に満たすアプローチはどれですか？",
  "options": [
    { "id": "A", "text": "AWS Glue Studio のビジュアルエディタを使用して ETL ジョブを作成し、変換後のデータを S3 に出力してからSageMaker トレーニングジョブで参照する" },
    { "id": "B", "text": "SageMaker Data Wrangler を使用して S3 と Redshift からデータをインポートし、ビジュアルインターフェースでデータの変換・可視化を行い、SageMaker Pipelines にエクスポートする" },
    { "id": "C", "text": "Amazon Athena でクエリを作成してデータを結合し、QuickSight で可視化した後、手動で S3 にエクスポートする" },
    { "id": "D", "text": "SageMaker Studio のノートブックで pandas を使用してデータの結合・変換を行い、matplotlib でデータの分布を可視化する" }
  ],
  "correctAnswers": ["B"],
  "explanation": "SageMaker Data Wrangler は GUI ベースのノーコード/ローコードデータ準備ツールであり、S3 や Redshift を含む複数のデータソースからのインポート、ビジュアルインターフェースでのデータ変換・クレンジング、データ品質の可視化、SageMaker Pipelines への直接エクスポートをすべてサポートします。Glue Studio（A）は ETL に優れていますが、データの分布可視化機能が限定的で、SageMaker との直接統合が不十分です。Athena + QuickSight（C）は分析・可視化は可能ですが、データ変換のワークフローが分断され手動エクスポートが必要です。ノートブック（D）はコーディングが必要で、コーディング経験が限られたチームの要件を満たしません。（スキル1.3.1）",
  "optionExplanations": {
    "A": { "correct": false, "text": "不正解です。AWS Glue Studio は ETL ジョブの作成には適していますが、データの分布や品質の視覚的確認機能が限定的であり、SageMaker トレーニングジョブへの直接エクスポートもネイティブにサポートしていません。" },
    "B": { "correct": true, "text": "正解です。SageMaker Data Wrangler は GUI ベースのデータ準備、データ品質の可視化、SageMaker Pipelines への直接エクスポートを直接満たします。特にコーディング経験が限られたチームでもビジュアル操作でデータ準備を完結できます。" },
    "C": { "correct": false, "text": "不正解です。Athena と QuickSight の組み合わせはデータ分析・可視化は可能ですが、データ変換ワークフローが分断され、SageMaker への直接エクスポートができないため運用負荷が増大します。" },
    "D": { "correct": false, "text": "不正解です。SageMaker ノートブックは柔軟なデータ操作が可能ですが、pandas や matplotlib のコーディングが必要であり、コーディング経験が限られたチームメンバーの要件を満たしません。" }
  },
  "references": [
    { "title": "SageMaker Data Wrangler", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/data-wrangler.html" },
    { "title": "SageMaker Data Wrangler Import Data", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/data-wrangler-import.html" }
  ]
});
