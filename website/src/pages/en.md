---
layout: "../layouts/Layout.astro"
title: "CSS for Yu Gothic"
lang: en
---

<span lang="ja">[日本語](../)</span>

[GitHub](https://github.com/tats-u/yu-gothic-css) / [npm](https://www.npmjs.com/package/yu-gothic-css)

## What is this?

This CSS defines a dedicated virtual font name "Yu Gothic Weight Fix" to display the Windows version of Yu Gothic on websites with almost the same appropriate weight as other fonts. By importing this CSS and specifying "Yu Gothic Weight Fix" in `font-family`, you can display Yu Gothic with almost the same weight as other fonts.

## How to use

First, install the [npm package `yu-gothic-css`](https://www.npmjs.com/package/yu-gothic-css).

```sh
pnpm add yu-gothic-css
```

Then, in a framework that supports global CSS imports (such as Astro), import this package for its side effects. The form `import ... from "..."` is not supported.

```ts
import "yu-gothic-css";
```

This defines the virtual font name "Yu Gothic Weight Fix", so by specifying it in `font-family`, you can display Yu Gothic with almost the same weight as other fonts.

```css
/* Or [lang]:where(:lang(ja)) */
[lang|=ja i] {
  font-family: Hiragino Sans, Noto Sans CJK, Noto Sans CJK JP, Noto Sans JP, Yu Gothic Weight Fix, Meiryo, sans-serif;
}
```

If you want to use CSS variables, define them as follows.

```css
/* If you don't include [lang], the font won't switch correctly on pages with multiple languages */
:root, [lang] {
  font-family: var(--lang-specific-font-family, ""), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

[lang|=ja i] {
  --lang-specific-font-family: Hiragino Sans, Noto Sans CJK, Noto Sans CJK JP, Noto Sans JP, Yu Gothic Weight Fix, Meiryo;
}
```

Of course, you can place "Yu Gothic Weight Fix" before Noto Sans CJK and Noto Sans JP if you prefer Yu Gothic to Noto Sans CJK:

```css
[lang]:where(:lang(ja)) {
  --lang-specific-font-family: Hiragino Sans, Yu Gothic Weight Fix, Noto Sans CJK, Noto Sans CJK JP, Noto Sans JP, Meiryo;
}
```

## Sample pages

I have prepared sample pages that display Japanese novels whose copyright has expired using Yu Gothic, Meiryo, and Noto Sans JP.

- [<span lang="ja">吾輩は猫である</span> (I Am a Cat)](./i-am-a-cat)
- [<span lang="ja">注文の多い料理店</span> (The Restaurant of Many Orders)](./the-restaurant-of-many-orders)
- [<span lang="ja">ポラーノの広場</span> (Porano Square)](./porano-square)

The text is partially modified from [Aozora Bunko](https://www.aozora.gr.jp/) as of August 23, 2026. Characters outside the JIS X 0208 range are converted from images and annotations to Unicode. Parts other than the beginning may be omitted.

## Wait, isn't Meiryo or Noto Sans JP (alone) good enough?

**In fact, these fonts are only pre-installed on Japanese versions of Windows (as you might suspect). On non-Japanese versions of Windows, the only Japanese fonts that are pre-installed are Yu Gothic and Yu Gothic UI.** Even Meiryo is not included. On non-Japanese versions of Windows, when displaying Japanese pages on websites, Yu Gothic will be used, so if you also consider non-native Japanese viewers, you cannot avoid this Yu Gothic issue.

Chromium-based browsers have had a bug in the past where the lines of fonts were displayed excessively thin. Combined with the aforementioned characteristics of Yu Gothic, this has led to a poor reputation for Yu Gothic on websites, overshadowed by Meiryo and Noto Sans JP.

Yu Gothic has more features compared to Meiryo and Noto Sans JP. Features that are not available in Meiryo but are common with Noto Sans JP include the following:

- Proportional spacing for kana and punctuation marks
- Adjustment of spacing for consecutive quotes and brackets (In Chromium-based browsers (as of now), the spacing for brackets and punctuation marks differs between Meiryo and other fonts)
- Italic for Japanese characters (The lack of support in Meiryo is intentional, but some browsers forcibly italicize them)

Features that are not available in Noto Sans JP but are unique to Yu Gothic include the following:

- Kana glyphs further optimized for horizontal writing than the default
- [Ruby-specific kana glyphs](http://www.jiyu-kobo.co.jp/ygf-notes/#ygf-notes-07)
- Proportional kana glyphs
- Other Adobe Japan1-7 limited glyphs

## Issues with Yu Gothic

Yu Gothic itself is a font that has received a certain level of evaluation in DTP, mainly for body text. However, the Windows version of Yu Gothic has several issues when used in browsers, Office, and other applications.

<dl>
  <dt>Actual weight is thinner than indicated</dt>
  <dd>

Not limited to the Windows version, Yu Gothic is actually thinner compared to other fonts than the value of `font-weight` or the suffix indicating the weight (Regular, Bold, etc.) would suggest.

For example, Yu Gothic Regular is thinner than the Regular of other common fonts (e.g. Segoe UI, Inter, and Noto Sans JP) and is only about the thickness of SemiLight. To match the thickness of Regular in other fonts, you need to use Yu Gothic Medium.

Also, this is not limited to Yu Gothic, but the Bold weight included in Japanese fonts other than Noto Sans JP (Source Han Sans) and Meiryo is only about the thickness of SemiBold for Latin fonts like Segoe UI and Inter. Therefore, Yu Gothic lacks a bit of contrast between bold and regular compared to Noto Sans and Meiryo.

  </dd>
  <dt>No weight corresponding to bold for Yu Gothic Medium</dt>
  <dd>

When you bold Yu Gothic Medium on Windows, it becomes a forcibly created bold through pseudo-bold processing, like MS Gothic. The bold created in this way, especially when printed, has blurred character outlines and looks unattractive.

If you want to use Yu Gothic Medium and bold in Office, you need to take the very cumbersome step of changing the part you want to bold to regular Yu Gothic (Regular) and then pressing the bold button.

  </dd>
</dl>

## I am using a non-Japanese version of Windows but want to try Meiryo or Noto Sans JP

[Corresponding Microsoft Docs page](https://learn.microsoft.com/windows/deployment/windows-missing-fonts)

1. Open "[System > Optional features](ms-settings:optionalfeatures)" in Windows settings.
2. Press the "Show features" button under "Show or edit optional features".
3. A UAC window will appear, so exercise your system administrator privileges.
4. Press the "Show available features" link above the search box.
5. Enter a search term corresponding to "Japanese" in the search box, check the "Japanese Supplemental Fonts" that appears, and press the "Add" button below.
