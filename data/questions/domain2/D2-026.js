window.DOMAIN2_QUESTIONS = window.DOMAIN2_QUESTIONS || [];
window.DOMAIN2_QUESTIONS.push({
  "id": "D2-026",
  "domain": 2,
  "task": "2.3",
  "skill": "2.3.4",
  "type": "single",
  "difficulty": "hard",
  "question": "ある医療機関が患者データを扱う生成 AI アプリケーションを構築していますが、データ主権の要件により一部のデータはオンプレミスのデータセンターから移動できません。ただし、Amazon Bedrock のモデルは利用したいと考えています。この要件に対応する最も適切なアーキテクチャはどれですか。",
  "options": [
    {
      "id": "A",
      "text": "AWS Outposts を使用してオンプレミス環境に AWS インフラを構築し、ローカルでデータ処理を行いながら VPN 経由で Bedrock API を呼び出す"
    },
    {
      "id": "B",
      "text": "すべてのデータをクラウドに移行し、暗号化で保護する"
    },
    {
      "id": "C",
      "text": "完全にオンプレミスの独自 AI システムを構築する"
    },
    {
      "id": "D",
      "text": "AWS Wavelength を使用して5G ネットワーク上でデータを処理する"
    }
  ],
  "correctAnswers": [
    "A"
  ],
  "explanation": "正解は A です。AWS Outposts によりオンプレミス環境に AWS のインフラを構築でき、患者データをローカルに保持しながらデータ前処理を行い、匿名化されたデータや処理済みのプロンプトのみを VPN 経由で Bedrock API に送信する構成が可能です。B はデータ主権の要件を満たしません。C は Bedrock のモデルを利用できません。D の Wavelength は通信事業者のエッジ向けであり、オンプレミスのデータ主権要件には対応しません。（スキル2.3.4）",
  "optionExplanations": {
    "A": {
      "correct": true,
      "text": "正解です。AWS Outposts と VPN 経由の Bedrock API 呼び出しは、データ主権の維持と Bedrock モデルの利用の両方を直接満たします。特にオンプレミスでのデータ処理と匿名化により最小のリスクで実現できます。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。クラウドへの移行と暗号化はデータ保護が可能であるものの、データ主権の要件によりデータをオンプレミスから移動できないため、データ主権の要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。完全なオンプレミス AI システムはデータ主権を維持できるものの、Amazon Bedrock のモデルを利用できず、Bedrock 利用の要件を満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。AWS Wavelength は超低遅延処理が可能であるものの、通信事業者のエッジ向けであり、オンプレミスのデータ主権要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "AWS Outposts",
      "url": "https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html"
    },
    {
      "title": "Amazon Bedrock security",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/security.html"
    }
  ]
});
