window.DOMAIN3_QUESTIONS = window.DOMAIN3_QUESTIONS || [];
window.DOMAIN3_QUESTIONS.push({
  "id": "D3-003",
  "domain": 3,
  "task": "3.1",
  "skill": "3.1.3",
  "type": "single",
  "difficulty": "medium",
  "question": "ある法律事務所が、Amazon Bedrock のナレッジベースを使用して、過去の判例データベースから情報を検索し、弁護士に回答を提供するRAGシステムを構築しています。弁護士は回答の根拠となった判例を確認したいと考えています。モデルが判例に基づかない情報を生成する（ハルシネーション）リスクを最小化しながら、回答の信頼性を向上させるには、どのアプローチが最も効果的ですか？",
  "options": [
    {
      "id": "A",
      "text": "ナレッジベースの検索結果のチャンク数を最大値に設定してコンテキストウィンドウを最大限活用し、モデルにより多くの情報を提供する"
    },
    {
      "id": "B",
      "text": "Amazon Bedrock のカスタムモデルインポート機能で法律専門の基盤モデルをインポートし、ナレッジベースと併用する"
    },
    {
      "id": "C",
      "text": "Amazon Bedrock ガードレールのグラウンディングチェック機能を有効にし、ガードレールのみでハルシネーションを検出・ブロックする"
    },
    {
      "id": "D",
      "text": "ナレッジベースの RetrieveAndGenerate API を使用し、応答にソースチャンクの引用元情報（S3 URI、ページ番号）を含めるよう設定する"
    }
  ],
  "correctAnswers": [
    "D"
  ],
  "explanation": "Amazon Bedrock ナレッジベースの RetrieveAndGenerate API は、検索されたドキュメントチャンクに基づいて応答を生成し、各チャンクのソース情報（S3 URI、ページ番号等）を引用として返す機能を持ちます。弁護士が引用元の判例を直接確認できるため、ハルシネーションリスクの低減と回答の検証可能性の向上を同時に実現できます。A のチャンク数最大化は、関連性の低いチャンクが含まれる可能性が高まり、むしろモデルが不正確な情報に基づいて回答するリスクが増加します。B のカスタムモデルインポートはモデルの法律知識を強化しますが、モデルの内部知識に基づく回答はハルシネーションの原因となるため、引用元の明示によるRAGアプローチの方が信頼性向上に効果的です。C のガードレールのグラウンディングチェックはハルシネーション検出に有用ですが、ブロックするだけで引用元の明示は行わず、単独では回答の信頼性向上には不十分です。（スキル3.1.3）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。チャンク数の最大化は関連性の低いチャンクを含む可能性が高まるものの、モデルが不正確な情報に基づく回答を生成するリスクがむしろ増加し、ハルシネーション最小化という要件を満たしません。"
    },
    "B": {
      "correct": false,
      "text": "不正解です。カスタムモデルインポートは法律知識を強化できるものの、モデルの内部知識に基づく回答はハルシネーションの原因となり、引用元明示による回答の検証可能性という要件を満たしません。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。ガードレールのグラウンディングチェックはハルシネーション検出に有用であるものの、ブロックするだけで引用元の明示は行わないため、回答の信頼性向上という要件を満たしません。"
    },
    "D": {
      "correct": true,
      "text": "正解です。RetrieveAndGenerate API は検索チャンクに基づく応答生成とソース情報（S3 URI、ページ番号等）の引用を提供し、ハルシネーションリスク低減と回答の検証可能性向上を直接満たします。特に引用元の明示を最小の運用負荷で実現できます。"
    }
  },
  "references": [
    {
      "title": "Amazon Bedrock Knowledge Bases",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
    },
    {
      "title": "Retrieve and Generate with Amazon Bedrock Knowledge Bases",
      "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-retrieve-generate.html"
    }
  ]
});
