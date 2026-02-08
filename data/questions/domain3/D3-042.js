window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-042",
  "domain": 3,
  "task": "3.3",
  "skill": "3.3.1",
  "type": "single",
  "difficulty": "medium",
  "question": "ある医療テクノロジー企業が、Amazon SageMaker で複数の機械学習モデルを開発・運用しています。社内の AI ガバナンス委員会から、各モデルについて使用目的、既知の制限事項、評価結果、倫理的考慮事項を一元的にドキュメント化し、内部監査や外部規制当局のレビューに対応できる体制を整えるよう求められています。また、モデルのライフサイクル全体を通じてドキュメントを最新の状態に維持する必要があります。これらの要件を最も効率的に満たすアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "SageMaker Model Cards を使用して各モデルの使用目的、制限事項、評価結果、倫理的考慮事項を標準化されたフォーマットでドキュメント化し、モデルレジストリと連携してバージョン管理を行う"
    },
    {
      "id": "B",
      "text": "Amazon S3 にモデルごとの README ファイルを保存し、AWS Lambda でモデル更新時に自動的にドキュメントを更新するカスタムパイプラインを構築する"
    },
    {
      "id": "C",
      "text": "SageMaker Experiments を使用して各モデルの実験結果を記録し、実験メタデータを監査ドキュメントとして使用する"
    },
    {
      "id": "D",
      "text": "AWS Systems Manager Parameter Store に各モデルのメタデータを JSON 形式で保存し、CloudFormation テンプレートでドキュメント管理のバージョニングを行う"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "SageMaker Model Cards は、モデルの使用目的、制限事項、評価結果、倫理的考慮事項などを標準化されたフォーマットで一元管理するためのマネージド機能です。モデルレジストリと連携してバージョン管理を行うことで、モデルのライフサイクル全体を通じたドキュメントの維持が可能になり、内部監査や外部規制当局のレビューに効率的に対応できます。B の S3 + Lambda によるカスタムパイプラインは実装可能ですが、標準化されたフォーマットがなく、カスタム開発・運用の負荷が高くなります。C の SageMaker Experiments は実験の追跡・比較に特化しており、使用目的や倫理的考慮事項などのガバナンス情報を体系的にドキュメント化する機能ではありません。D の Parameter Store + CloudFormation はパラメータ管理には有用ですが、モデルガバナンスのドキュメント化に特化した機能ではなく、監査対応に必要な標準フォーマットが提供されません。（スキル3.3.1）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。SageMaker Model Cards は、モデルの使用目的・制限事項・評価結果・倫理的考慮事項の一元的なドキュメント化と、モデルレジストリ連携によるバージョン管理を直接満たします。特にマネージド機能による標準化されたフォーマットで、監査対応を最小の運用負荷で実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。S3 と Lambda によるカスタムパイプラインは実装可能であるものの、標準化されたガバナンスフォーマットがなくカスタム開発・運用の負荷が高いため、最も効率的という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。SageMaker Experiments は実験の追跡・比較には有用であるものの、使用目的や倫理的考慮事項などのガバナンス情報を体系的にドキュメント化する機能ではなく、一元的なドキュメント化という要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。Parameter Store と CloudFormation はパラメータ管理に有用であるものの、モデルガバナンスに特化した標準フォーマットが提供されず、監査対応に必要な体系的ドキュメント化という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Model Cards",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html"
    },
    {
      "title": "Amazon SageMaker Model Registry",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry.html"
    }
  ]
});
