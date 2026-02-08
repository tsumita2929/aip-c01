window.DOMAIN4_QUESTIONS = window.DOMAIN4_QUESTIONS || [];
window.DOMAIN4_QUESTIONS.push({
  "id": "D4-028",
  "domain": 4,
  "task": "4.2",
  "skill": "4.2.1",
  "type": "single",
  "difficulty": "medium",
  "question": "あるリアルタイム翻訳サービスを提供する企業が、Amazon SageMaker リアルタイムエンドポイントでカスタム翻訳モデルをホスティングしています。ユーザーから推論レイテンシが高い（平均 500ms）というフィードバックがあり、目標レイテンシ 200ms 以下を達成する必要があります。モデルサイズは 2GB で、GPU インスタンス（ml.g4dn.xlarge）を使用しています。モデルの精度を維持しながら、推論レイテンシを改善するために最も効果的なアプローチはどれですか？",
  "options": [
    {
      "id": "A",
      "text": "インスタンスタイプをより大きな ml.g4dn.12xlarge にスケールアップし、GPU メモリと演算能力を増強する"
    },
    {
      "id": "B",
      "text": "SageMaker Neo でモデルをコンパイル・最適化し、ターゲットハードウェアに合わせた推論の高速化を行う"
    },
    {
      "id": "C",
      "text": "Auto Scaling でインスタンス数を増やし、リクエストを分散させることでレイテンシを改善する"
    },
    {
      "id": "D",
      "text": "SageMaker バッチ変換に切り替えて、リクエストをまとめて処理することで1リクエストあたりのレイテンシを削減する"
    }
  ],
  "correctAnswers": [
    "B"
  ],
  "explanation": "正解はBです。SageMaker Neo は、トレーニング済みモデルをターゲットハードウェア（GPU、CPU 等）に合わせてコンパイル・最適化し、推論パフォーマンスを大幅に向上させます。モデルの精度を維持しながら、計算グラフの最適化やオペレーターの融合により推論レイテンシを削減できるため、2つの要件を両立できます。A のインスタンスのスケールアップは、GPU メモリがボトルネックでない場合（2GB モデルに対して ml.g4dn.xlarge は 16GB の GPU メモリを持つ）、レイテンシ改善効果は限定的で、コストが大幅に増加します。C の Auto Scaling はスループット（同時リクエスト処理能力）の向上には有効ですが、個々のリクエストの推論レイテンシ自体は改善しません。D のバッチ変換はリアルタイム推論ではないため、リアルタイム翻訳サービスの要件を満たしません。（スキル: 4.2.1）",
  "optionExplanations": {
    "A": {
      "correct": false,
      "text": "不正解です。ml.g4dn.xlarge は 16GB の GPU メモリを持ち、2GB モデルに対して十分な余裕があるため、スケールアップによるレイテンシ改善効果は限定的であり、コスト増加に対して効果的ではありません。"
    },
    "B": {
      "correct": true,
      "text": "正解です。SageMaker Neo はモデルの精度を維持しながらターゲットハードウェアに最適化されたコンパイルを行い、推論レイテンシの大幅な削減を直接満たします。特に計算グラフの最適化やオペレーター融合により、追加コストなしで推論性能を向上できます。"
    },
    "C": {
      "correct": false,
      "text": "不正解です。Auto Scaling はスループットの向上には有効であるものの、個々のリクエストの推論レイテンシ自体は改善しないため、平均レイテンシ 200ms 以下という要件を直接満たしません。"
    },
    "D": {
      "correct": false,
      "text": "不正解です。バッチ変換はリアルタイム推論ではなくバッチ処理であるため、リアルタイム翻訳サービスのレイテンシ改善という要件を満たしません。"
    }
  },
  "references": [
    {
      "title": "Amazon SageMaker Neo",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/neo.html"
    },
    {
      "title": "Amazon SageMaker - 推論の最適化",
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html"
    }
  ]
});
