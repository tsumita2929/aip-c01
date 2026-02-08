window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-030",
  "domain": 3,
  "task": "3.3",
  "skill": "3.3.3",
  "type": "single",
  "difficulty": "medium",
  "question": "ある企業が、EU 圏の顧客データを使用して Amazon Bedrock で保険見積もり支援AIサービスを提供しています。GDPR の要件として、顧客の個人データがモデルへの入出力で適切に保護され、データ主体のアクセス権・削除権への対応プロセスが確保され、データが EU 内のリージョンに留まる必要があります。これらの要件を技術的に実装するために最も適切なアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Bedrock ガードレールの PII フィルターで EU 市民の個人データを入出力の両方で自動検出・マスキングし、VPC エンドポイント経由で Bedrock を呼び出してデータを AWS ネットワーク内に限定する。AWS Organizations の SCP で eu-west-1 以外のリージョンでの Bedrock 利用を拒否し、データローカリティを強制する"
    },
    {
      "id": "B",
      "text": "AWS のデータ処理追加条項（DPA）に署名し、Amazon Bedrock の保管時暗号化を AWS KMS のカスタマーマネージドキー（CMK）で設定する。AWS Artifact から GDPR 準拠のコンプライアンスレポートを取得し、AWS Config で暗号化設定のコンプライアンスを継続監視する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock ガードレールの PII フィルターで個人データを保護し、Bedrock のモデル呼び出しログを S3 に保存してデータ主体のアクセス権・削除権への対応に備える。Amazon Macie で S3 上のログデータをスキャンし、残存する PII を検出・通知する。Bedrock の利用リージョンを eu-west-1 に設定する"
    },
    {
      "id": "D",
      "text": "Amazon Comprehend の PII 検出 API で入力テキストの個人データを検出・匿名化した後に Bedrock モデルを呼び出し、出力に対しても Comprehend で PII チェックを実行する。Lambda 関数でデータ主体の削除リクエストを処理し、DynamoDB に記録されたリクエスト履歴とともに S3 上の関連データを自動削除する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "GDPR の技術的実装には、個人データの保護、データローカリティの強制、ネットワーク経路の制御が必要です。A は Bedrock ガードレールの PII フィルターで入出力の両方で個人データを自動保護し、VPC エンドポイントでネットワーク経路をAWSネットワーク内に限定、SCP で EU 以外のリージョンでの Bedrock 利用を組織レベルで拒否することで、3つの要件を包括的かつマネージド機能で実現します。B の DPA 署名と KMS 暗号化は GDPR 対応の基盤として重要ですが、モデル入出力時の PII 保護やデータローカリティの技術的な強制は含まれておらず、個人データの保護とリージョン制限の技術的実装として不十分です。C の PII フィルター + ログ保存 + Macie の組み合わせは個人データ保護に有効ですが、モデル呼び出しログに PII が残存するリスクがあり、Macie でのスキャンは事後的な検出にとどまります。また、SCP によるリージョン強制がないため、人為的なリージョン設定ミスを防止できません。D の Comprehend + Lambda + DynamoDB の組み合わせは実装可能ですが、入出力それぞれに Comprehend API 呼び出しと Lambda 統合が必要で、ガードレール単体と比較して運用負荷が高くなります。また、削除処理のカスタム実装は保守コストが大きくなります。（スキル3.3.3）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。Bedrock ガードレール PII フィルター + VPC エンドポイント + SCP リージョン制限の組み合わせにより、個人データ保護・ネットワーク制御・データローカリティの強制を包括的にマネージド機能で実現し、GDPR の技術的要件を直接満たします。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。DPA 署名と KMS 暗号化は GDPR 対応の基盤として重要であるものの、モデル入出力時の PII 保護やリージョン制限の技術的強制が含まれておらず、個人データの保護とデータローカリティという要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。PII フィルター + Macie で個人データ保護は可能であるものの、ログ内の PII 残存リスクへの対応が事後的であり、SCP によるリージョン強制がないため人為的ミスを防止できず、データローカリティの確実な強制という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Comprehend + Lambda + DynamoDB で PII 保護と削除対応は実装可能であるものの、入出力各々の API 呼び出しと Lambda 統合が必要で運用負荷が高く、ガードレール単体と比較して最も適切とは言えません。"
    }
  },
  "references": [
    {
      "title": "AWS GDPR Center",
      "url": "https://docs.aws.amazon.com/whitepapers/latest/navigating-gdpr-compliance/navigating-gdpr-compliance.html"
    },
    {
      "title": "Amazon Bedrock Data Protection",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html"
    }
  ]
});
