---
layout: "../layouts/Layout.astro"
title: "游ゴシック用CSS（CSS for Yu Gothic）"
---

<span lang="en">[English](./en)</span>

<span lang="en">[GitHub](https://github.com/tats-u/yu-gothic-css) / [npm](https://www.npmjs.com/package/yu-gothic-css)</span>

## これは何

このCSSは、Windows版の游ゴシックをWebサイトで他のフォントとほぼ同じ適正な太さで表示するために、専用の仮想フォント名「Yu Gothic Weight Fix」を定義するものです。このCSSをインポートし、`font-family`に「Yu Gothic Weight Fix」を指定することで、他のフォントとほぼ同じ太さで游ゴシックを表示することができます。

## 使い方

まず、[npmパッケージ`yu-gothic-css`](https://www.npmjs.com/package/yu-gothic-css)をインストールします。

```sh
pnpm add yu-gothic-css
```

その後、CSSのグローバルインポートに対応しているフレームワーク（Astroなど）で、このパッケージを副作用インポートします。`import ... from "..."`のような形式には非対応です。

```ts
import "yu-gothic-css";
```

すると、「Yu Gothic Weight Fix」という仮想フォント名が定義されますので、`font-family`に指定することで、游ゴシックを他のフォントとほぼ同じ太さで表示することができます。

```css
/* または[lang]:where(:lang(ja)) */
[lang|=ja i] {
  font-family: Hiragino Sans, Noto Sans CJK, Noto Sans CJK JP, Noto Sans JP, Yu Gothic Weight Fix, Meiryo, sans-serif;
}
```

CSS変数を使う場合は、以下のように定義します。

```css
/* [lang]を入れないと、複数言語混在ページで正しくフォントが切り替わらない */
:root, [lang] {
  font-family: var(--lang-specific-font-family, ""), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

[lang|=ja i] {
  --lang-specific-font-family: Hiragino Sans, Noto Sans CJK, Noto Sans CJK JP, Noto Sans JP, Yu Gothic Weight Fix, Meiryo;
}
```

もちろん、Noto Sans CJKよりも游ゴシックの方がお好みというのであれば、Yu Gothic Weight FixをNoto Sans CJKやNoto Sans JPよりも前に置いて構いません。

```css
[lang]:where(:lang(ja)) {
  --lang-specific-font-family: Hiragino Sans, Yu Gothic Weight Fix, Noto Sans CJK, Noto Sans CJK JP, Noto Sans JP, Meiryo;
}
```

## サンプルページ

著作権が失効した作品を游ゴシック・メイリオ・Noto Sans JPで表示するサンプルページを用意しています。

- [吾輩は猫である](./i-am-a-cat)
- [注文の多い料理店](./the-restaurant-of-many-orders)
- [ポラーノの広場](./porano-square)

[青空文庫](https://www.aozora.gr.jp/)の2026年8月23日時点のテキストを一部修正して表示しています。JIS X 0208範囲外の文字は、画像・注釈からUnicodeの文字に変換しています。冒頭以外の部分を省略している場合があります。

## え？メイリオやNoto Sans JP（だけ）でよくね？と思った人へ

<strong>実はこれらのフォントは、日本語版のWindowsにしか最初から入っていません。日本語版以外のWindowsでは、日本語フォントとして最初から入っているのは、游ゴシックとYu Gothic UIだけです。</strong>游明朝すら入っていません。日本語版以外のWindowsでは、Webサイトで日本語ページを表示する場合、游ゴシックで表示されるため、日本語非ネイティブの閲覧者も想定する場合、この游ゴシック問題を避けて通ることはできません。

游ゴシックは、メイリオやNoto Sans JPに比べてより多くの機能があります。メイリオにはなく、Noto Sans JPと共通の機能として、以下のようなものがあります。

- 仮名や約物の字詰め（プロポーショナルメトリクス）
- 「『連続する』」「カッコ同士や、」・「カッコと句読点。」のアキの調整（Chromium系ブラウザ（現時点）では、メイリオとそれ以外でこの項目のカッコや句読点のアキ（空白部分）の大きさが異なります）
- 日本語文字のイタリック（メイリオでの非対応は意図的なものですが、一部ブラウザでは無理やりイタリック化されます）

Noto Sans JPにもなく、游ゴシックにしかない機能として、以下のようなものがあります。

- デフォルトのものよりさらに横組みに最適化された仮名
- [ルビ専用仮名](http://www.jiyu-kobo.co.jp/ygf-notes/#ygf-notes-07)
- プロポーショナル仮名
- その他Adobe Japan1-7限定グリフ

## 游ゴシックの問題点

游ゴシック（游ゴシック体）というフォントそれ自体は、本文を中心にDTPでも一定以上の評価を受けているフォントです。しかし、（Windows版の）游ゴシックは、ブラウザやOfficeなどのアプリケーションで使うにはいくつかの問題があります。

<dl>
  <dt>実際のウェイトが表記に比べて細い</dt>
  <dd>

Windows版に限りませんが、游ゴシック（游ゴシック体）は、`font-weight`の値やウェイト（太さ）を表す名前の接尾辞（Regular・Boldなど）に比べて、実際のウェイトが他のフォントに比べて細いです。

例えば、游ゴシックのRegularは、他の一般的なフォントのRegularに比べて細く、SemiLight程度の太さしかありません。他のフォントのRegularと同じ太さにするには、游ゴシックのMediumを使う必要があります。

Chromium系ブラウザでは、過去にフォントの線が過剰に細く表示されるというバグが存在していました。上述の游ゴシックの特性とのダブルパンチにより、Webサイト上における游ゴシックの世間での評価は地に落ち、メイリオやNoto Sans JPの影に隠れることになりました。

また、これは游ゴシックに限りませんが、Noto Sans JP（源ノ角ゴシック）やメイリオ以外の日本語フォントに付属しているBoldのウェイトは、ラテン文字用フォントのSemiBold程度の太さしかありません。このため、游ゴシックはNoto Sansやメイリオと比べて、太字と通常の太さの間のメリハリにやや欠けます。

  </dd>
  <dt>游ゴシックのMediumの太字化に対応したウェイトがない</dt>
  <dd>

Windows版の游ゴシック Mediumを太字化すると、ＭＳ ゴシックのように、擬似ボールド処理により無理やり作り出された太字になります。これによって作られた太字は、特に印刷した場合に、文字の輪郭がぼやけてしまい、見栄えが悪くなります。

Officeで游ゴシック Mediumと太字を使いたい場合、太字にしたい部分を通常の游ゴシック（Regular）にして太字ボタンを押すという非常に面倒な手段を取る必要があります。

  </dd>
</dl>

## 日本語以外のWindowsを使っているが、メイリオやNoto Sans JPを試したい

[Microsoft Docsの対応ページ](https://learn.microsoft.com/windows/deployment/windows-missing-fonts)

1. Windowsの設定の「[システム > オプション機能](ms-settings:optionalfeatures)」を開きます。
2. 「オプション機能を表示または編集する」の「機能を表示」ボタンを押します。
3. UACウインドウが出るので、システムの管理者権限を行使します。
4. 検索欄の上にある「使用可能な機能を表示する」のリンクを押します。
5. 検索欄に「日本語」に相当する検索語を入力し、出てきた「日本語補助フォント」にチェックを入れ、下の「追加」ボタンを押します。
