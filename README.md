# AIP-C01 模擬試験

AWS Certified Generative AI Developer - Professional (AIP-C01) の模擬試験Webアプリケーションです。

## 機能

- **模擬試験モード** — 本番と同じ65問 / 205分の制限時間でランダム出題。合格スコア750を目指す
- **学習モード** — 全200問を1問ずつ解答し、即座に解説を確認
- **分野別学習** — 苦手な分野を選択して集中学習
- **復習モード** — 過去に間違えた問題だけを再出題

## 出題分野

| #   | 分野                                 | 問題数 | 比率 |
| --- | ------------------------------------ | ------ | ---- |
| 1   | FM統合・データ管理・コンプライアンス | 62問   | 31%  |
| 2   | 実装と統合                           | 52問   | 26%  |
| 3   | AI安全性・セキュリティ・ガバナンス   | 40問   | 20%  |
| 4   | 運用効率と最適化                     | 24問   | 12%  |
| 5   | テスト・検証・トラブルシューティング | 22問   | 11%  |

## 使い方

静的なHTML/CSS/JSで構成されているため、ビルド不要です。

1. `index.html` をブラウザで開く
2. ホーム画面からモードを選択して開始

または任意のHTTPサーバーで配信できます。

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

## 技術スタック

- HTML / CSS / JavaScript（バニラ、フレームワーク不使用）
- localStorage による成績・復習データの保存

## 問題データの管理

- 問題は `data/questions/domainX/` 配下に **1問1ファイル** で管理
- `data/question-manifest.js` に全問題ファイルの一覧を保持し、起動時に動的ロード

### 編集ルール

- ファイル名は問題IDに合わせる（例: `D1-001.js`）
- 各ファイルは `window.DOMAINX_QUESTIONS.push({...})` で **1問だけ** 定義
- `domain` の値と配置先ディレクトリ（`domain1` など）を一致させる

### 変更手順

1. 対象の問題ファイルを編集（例: `data/questions/domain2/D2-010.js`）
2. 問題ファイルを追加・削除した場合はマニフェストを再生成
3. ローカルサーバーで起動して表示確認

```bash
# 問題ファイルの追加・削除後に実行
node scripts/build-question-manifest.mjs

# ローカル確認
python3 -m http.server 8080
```

### 動作チェック

```bash
node --check js/app.js
node --check scripts/build-question-manifest.mjs
```

## ファイル構成

```
├── index.html              # メインHTML
├── css/
│   └── style.css           # スタイルシート
├── js/
│   ├── app.js              # アプリケーション本体・Storage
│   ├── quiz-engine.js      # 出題・解答ロジック
│   ├── question-renderer.js # 問題描画
│   └── results.js          # 結果画面
├── scripts/
│   └── build-question-manifest.mjs # 問題一覧マニフェスト再生成
└── data/
    ├── question-manifest.js # 動的ロード用マニフェスト
    ├── questions/
    │   ├── domain1/         # D1-001.js ... D1-062.js
    │   ├── domain2/         # D2-001.js ... D2-052.js
    │   ├── domain3/         # D3-001.js ... D3-040.js
    │   ├── domain4/         # D4-001.js ... D4-024.js
    │   └── domain5/         # D5-001.js ... D5-022.js
```

## ライセンス

MIT
