# PetLife - ペット情報・飼い方ガイド

## 概要
PetLife は、ペットとの暮らしを支える情報サイトです。テンプレート7ページを修正し、
ログイン・新規登録ページを追加して計9ページの構成にしました。

## ページ構成（9ページ）
- ホーム: index.html
- ペット図鑑: pet-guide-list.html
- ペット詳細: pet-guide-detail.html
- 飼い方ガイド: pet-care-guide.html
- Q&A: pet-guide-qa.html
- 飼育記録: pet-guide-record.html
- 記録投稿: pet-guide-form.html
- ログイン（新規）: login.html
- 新規登録（新規）: signup.html

## 使用したBootstrapコンポーネント
以下のコンポーネントを10種類以上使用しています。

- Navbar（全ページ）
- Grid（Container / Row / Col）
- Cards（一覧・特集表示）
- Accordion（飼い方ガイド / ペット詳細）
- Carousel（ペット詳細の画像切替）
- Tabs / Pills（Q&Aカテゴリ）
- Breadcrumb（詳細ページ）
- Toast（ログイン/登録の通知）
- Forms（検索・登録・投稿フォーム）
- Progress Bars（評価や強度表示）
- Badges（カテゴリ・状態表示）
- Buttons / Button group

## 工夫した点（要点）
### 1. 共通CSS/JSの外部ファイル化
重複していたスタイル・スクリプトを以下に集約し、保守性を向上させました。
- assets/css/common.css
- assets/js/common.js

### 2. レイアウト改善（2箇所）
**(1) ホームの統計情報セクション**
- 4列のグリッドで「情報数/ユーザー数/更新頻度/満足度」を視覚化
- 画面幅に応じて 4 → 2 → 1 列へ自動調整

**(2) ログイン・新規登録フォーム**
- 背景をグラデーションにして視認性を向上
- 新規登録はフォームを2列配置（名前入力など）
- ペット選択を CSS Grid で自動折り返し表示

### 3. ナビゲーションの機能化
- すべてのリンクを実ページに接続
- パンくずリストもリンク化
- 現在ページを `active` 表示

## オリジナル要素
- サイト名「PetLife」
- ブランドカラー（グリーン/アンバー/オレンジ/ブラウン）
- 共通カードデザイン（pet-card）
- ログイン・登録の新規UI
- SVGファビコン（ペットのハートアイコン）

## レスポンシブ対応
- md（768px）を基準にモバイル対応
- カード、フォーム、ナビゲーションが崩れないよう調整済み

## デザインガイド（抜粋）
- Primary: #10b981
- Secondary: #f59e0b
- Accent: #fb923c
- Brown: #78350f

## ファイル構成（主要）
```
final-task-level3/
├─ index.html
├─ pet-care-guide.html
├─ pet-guide-detail.html
├─ pet-guide-form.html
├─ pet-guide-list.html
├─ pet-guide-qa.html
├─ pet-guide-record.html
├─ login.html
├─ signup.html
├─ favicon.svg
├─ assets/
│  ├─ css/common.css
│  └─ js/common.js
└─ README.md
```
