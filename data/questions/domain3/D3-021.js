window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-021",
  "domain": 3,
  "task": "3.2",
  "skill": "3.2.3",
  "type": "single",
  "difficulty": "medium",
  "question": "ある医療機関が Amazon Bedrock を使用した患者向けヘルスアシスタントを開発しています。患者が自身の症状を入力する際に、名前、電話番号、保険証番号などの個人情報を意図せず入力する場合があります。これらの情報がモデルに送信される前にフィルタリングし、かつモデルの応答にも個人情報が含まれないようにする必要があります。さらに、保険証番号のような業界固有の識別子も検出対象に含めたいと考えています。最も運用効率の高いアプローチはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "Amazon Comprehend の PII 検出 API で入力テキストの PII を検出・マスキングし、Bedrock の出力に対しても別途 Comprehend PII 検出を実行して出力側の PII を除去する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock ガードレールの機密情報フィルターで定義済み PII タイプを設定し、保険証番号の検出は Amazon Comprehend のカスタムエンティティ認識で別途実装する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock ガードレールの機密情報フィルターで、定義済み PII タイプ（NAME、PHONE 等）に加えてカスタム正規表現パターンで保険証番号を定義し、入力・出力の両方で PII を自動検出・マスキングする"
    },
    {
      "id": "D",
      "text": "Amazon Macie のカスタムデータ識別子で保険証番号のパターンを定義し、S3 に保存された入力データから PII を検出した後、Bedrock ガードレールの PII フィルターで出力側の保護を行う"
    }
  ],
  "correctAnswers": [
    "C"
  ],
  "explanation": "Amazon Bedrock ガードレールの機密情報フィルターは、定義済み PII タイプ（NAME、PHONE、EMAIL、SSN、CREDIT_DEBIT_NUMBER 等）に加えて、カスタム正規表現パターンを定義することで業界固有の識別子（保険証番号等）も検出対象に追加できます。入力と出力の両方で自動検出・マスキングが可能で、単一のガードレール設定で包括的な PII 保護を実現でき、運用効率が最も高くなります。A の Comprehend PII 検出 API は入力と出力それぞれに個別の API 呼び出しが必要で、Lambda 関数での統合実装と保守が必要となり、ガードレール単体と比較して運用負担が大きくなります。また、Comprehend の定義済み PII タイプに保険証番号は含まれないため、カスタム実装が追加で必要です。B はガードレールと Comprehend を組み合わせる方式ですが、2つのサービスの管理が必要となり、ガードレール単体でカスタム正規表現を使用する方が運用効率に優れます。D の Macie は S3 バケット内の保存データのスキャンに特化しており、リアルタイムの API リクエストの入力フィルタリングには適していません。（スキル3.2.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。Comprehend PII 検出は高精度な PII 検出が可能であるものの、入力・出力それぞれに個別 API 呼び出しと Lambda 統合が必要で、カスタム識別子の検出も追加実装が必要となるため、運用効率が高いという要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。ガードレールの定義済み PII タイプと Comprehend のカスタムエンティティ認識はそれぞれ高機能であるものの、2つのサービスの管理が必要となり、ガードレール単体のカスタム正規表現で対応できる保険証番号検出を別サービスで実装するのは運用効率が低下するため、最も運用効率が高いという要件を満たしません。"
    },
    "C": {
      "correct": true,
      "text": "正解です。ガードレールの機密情報フィルターは定義済み PII タイプとカスタム正規表現の両方を設定でき、入出力両方で自動検出・マスキングが可能なため、PII 保護と業界固有識別子の検出を直接満たします。特に単一設定で包括的な PII 保護を最小の運用負荷で実現できます。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Macie は S3 バケット内の保存データのスキャンに特化しているものの、リアルタイムの API リクエスト入力フィルタリングには適しておらず、リアルタイムのPIIフィルタリングという要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Guardrails Sensitive Information Filters",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html"
    },
    {
      "title": "Amazon Bedrock Guardrails",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
    }
  ]
});
