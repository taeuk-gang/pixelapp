const code=`/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/* stylelint-disable */
:root,
:host {
    font-family: var(
        --spectrum-alias-body-text-font-family,
        var(--spectrum-global-font-family-base)
    );
    font-size: var(
        --spectrum-alias-font-size-default,
        var(--spectrum-global-dimension-font-size-100)
    );
}

.spectrum:lang(ar) {
    font-family: var(
        --spectrum-alias-font-family-ar,
        myriad-arabic,
        adobe-clean,
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Ubuntu,
        'Trebuchet MS',
        'Lucida Grande',
        sans-serif
    );
}

.spectrum:lang(he) {
    font-family: var(
        --spectrum-alias-font-family-he,
        myriad-hebrew,
        adobe-clean,
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Ubuntu,
        'Trebuchet MS',
        'Lucida Grande',
        sans-serif
    );
}

.spectrum:lang(zh-Hans) {
    font-family: var(
        --spectrum-alias-font-family-zhhans,
        adobe-clean-han-simplified-c,
        source-han-simplified-c,
        'SimSun',
        'Heiti SC Light',
        'sans-serif'
    );
}

.spectrum:lang(zh-Hant) {
    font-family: var(
        --spectrum-alias-font-family-zh,
        adobe-clean-han-traditional,
        source-han-traditional,
        'MingLiu',
        'Heiti TC Light',
        'sans-serif'
    );
}

.spectrum:lang(zh) {
    font-family: var(
        --spectrum-alias-font-family-zh,
        adobe-clean-han-traditional,
        source-han-traditional,
        'MingLiu',
        'Heiti TC Light',
        'sans-serif'
    );
}

.spectrum:lang(ko) {
    font-family: var(
        --spectrum-alias-font-family-ko,
        adobe-clean-han-korean,
        source-han-korean,
        'Malgun Gothic',
        'Apple Gothic',
        'sans-serif'
    );
}

.spectrum:lang(ja) {
    font-family: var(
        --spectrum-alias-font-family-ja,
        adobe-clean-han-japanese,
        source-han-japanese,
        'Yu Gothic',
        '\\\\30E1 \\\\30A4 \\\\30EA \\\\30AA',
        '\\\\30D2 \\\\30E9 \\\\30AE \\\\30CE \\\\89D2 \\\\30B4  Pro W3',
        'Hiragino Kaku Gothic Pro W3',
        'Osaka',
        '\\\\FF2D \\\\FF33 \\\\FF30 \\\\30B4 \\\\30B7 \\\\30C3 \\\\30AF',
        'MS PGothic',
        'sans-serif'
    );
}

.spectrum,
.spectrum.spectrum-Body,
.spectrum-Body {
    font-size: var(
        --spectrum-body-4-text-size,
        var(--spectrum-alias-font-size-default)
    );
    font-weight: var(
        --spectrum-body-4-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-4-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-4-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
}

.spectrum-Body--italic {
    font-style: var(
        --spectrum-body-4-emphasis-text-font-style,
        var(--spectrum-global-font-style-italic)
    );
}

.spectrum-Body1 {
    font-size: var(
        --spectrum-body-1-text-size,
        var(--spectrum-global-dimension-font-size-400)
    );
    font-weight: var(
        --spectrum-body-1-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-1-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Body2,
.spectrum-Body--large {
    font-size: var(
        --spectrum-body-2-text-size,
        var(--spectrum-global-dimension-font-size-300)
    );
    font-weight: var(
        --spectrum-body-2-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-2-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Body3 {
    font-size: var(
        --spectrum-body-3-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-body-3-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-3-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-3-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-3-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-3-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Body4,
.spectrum-Body--secondary {
    font-size: var(
        --spectrum-body-4-text-size,
        var(--spectrum-alias-font-size-default)
    );
    font-weight: var(
        --spectrum-body-4-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-4-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-4-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-4-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-4-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Body5,
.spectrum-Body--small {
    font-size: var(
        --spectrum-body-5-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-body-5-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-5-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-5-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-5-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-5-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading1 {
    font-size: var(
        --spectrum-heading-1-text-size,
        var(--spectrum-alias-heading1-text-size)
    );
    font-weight: var(
        --spectrum-heading-1-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-1-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading2 {
    font-size: var(
        --spectrum-heading-2-text-size,
        var(--spectrum-alias-heading2-text-size)
    );
    font-weight: var(
        --spectrum-heading-2-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-2-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading3 {
    font-size: var(
        --spectrum-heading-3-text-size,
        var(--spectrum-alias-heading3-text-size)
    );
    font-weight: var(
        --spectrum-heading-3-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-3-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-3-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-3-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-3-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading4,
.spectrum-Heading--subtitle1 {
    font-size: var(
        --spectrum-heading-4-text-size,
        var(--spectrum-alias-heading4-text-size)
    );
    font-weight: var(
        --spectrum-heading-4-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-4-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-4-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-4-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-4-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading5 {
    font-size: var(
        --spectrum-heading-5-text-size,
        var(--spectrum-alias-heading5-text-size)
    );
    font-weight: var(
        --spectrum-heading-5-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-5-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-5-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-5-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-5-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading6,
.spectrum-Heading--subtitle2 {
    font-size: var(
        --spectrum-heading-6-text-size,
        var(--spectrum-alias-heading6-text-size)
    );
    font-weight: var(
        --spectrum-heading-6-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-6-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-6-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-6-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-6-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Subheading,
.spectrum-Heading--subtitle3 {
    font-size: var(
        --spectrum-subheading-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-subheading-text-font-weight,
        var(--spectrum-alias-subheading-text-font-weight)
    );
    line-height: var(
        --spectrum-subheading-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-subheading-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-subheading-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-subheading-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail {
    font-size: var(
        --spectrum-detail-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-detail-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading1--quiet {
    font-size: var(
        --spectrum-heading-quiet-1-text-size,
        var(--spectrum-alias-heading1-text-size)
    );
    font-weight: var(
        --spectrum-heading-quiet-1-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-heading-quiet-1-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-quiet-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-quiet-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-quiet-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading2--quiet,
.spectrum-Heading--pageTitle {
    font-size: var(
        --spectrum-heading-quiet-2-text-size,
        var(--spectrum-alias-heading2-text-size)
    );
    font-weight: var(
        --spectrum-heading-quiet-2-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-heading-quiet-2-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-quiet-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-quiet-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-quiet-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading1--strong {
    font-size: var(
        --spectrum-heading-strong-1-text-size,
        var(--spectrum-alias-heading1-text-size)
    );
    font-weight: var(
        --spectrum-heading-strong-1-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-strong)
    );
    line-height: var(
        --spectrum-heading-strong-1-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-strong-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-strong-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-strong-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading2--strong {
    font-size: var(
        --spectrum-heading-strong-2-text-size,
        var(--spectrum-alias-heading2-text-size)
    );
    font-weight: var(
        --spectrum-heading-strong-2-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-strong)
    );
    line-height: var(
        --spectrum-heading-strong-2-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-strong-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-strong-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-strong-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading1--display {
    font-size: var(
        --spectrum-display-1-text-size,
        var(--spectrum-alias-heading-display1-text-size)
    );
    font-weight: var(
        --spectrum-display-1-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-display-1-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-display-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-display-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading2--display {
    font-size: var(
        --spectrum-display-2-text-size,
        var(--spectrum-alias-heading-display2-text-size)
    );
    font-weight: var(
        --spectrum-display-2-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-display-2-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-display-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-display-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading1--display.spectrum-Heading1--strong {
    font-size: var(
        --spectrum-display-strong-1-text-size,
        var(--spectrum-alias-heading-display1-text-size)
    );
    font-weight: var(
        --spectrum-display-strong-1-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-strong)
    );
    line-height: var(
        --spectrum-display-strong-1-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-display-strong-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-strong-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-display-strong-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading2--display.spectrum-Heading2--strong {
    font-size: var(
        --spectrum-display-strong-2-text-size,
        var(--spectrum-alias-heading-display2-text-size)
    );
    font-weight: var(
        --spectrum-display-strong-2-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-strong)
    );
    line-height: var(
        --spectrum-display-strong-2-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-display-strong-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-strong-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-display-strong-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading1--display.spectrum-Heading1--quiet {
    font-size: var(
        --spectrum-display-quiet-1-text-size,
        var(--spectrum-alias-heading-display1-text-size)
    );
    font-weight: var(
        --spectrum-display-quiet-1-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-display-quiet-1-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-display-quiet-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-quiet-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-display-quiet-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading2--display.spectrum-Heading2--quiet,
.spectrum-Heading--display {
    font-size: var(
        --spectrum-display-quiet-2-text-size,
        var(--spectrum-alias-heading-display2-text-size)
    );
    font-weight: var(
        --spectrum-display-quiet-2-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-display-quiet-2-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-display-quiet-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-quiet-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-display-quiet-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Typography .spectrum-Body1 {
    margin-top: var(--spectrum-body-1-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-1-margin-bottom,
        var(--spectrum-global-dimension-size-200)
    );
}

.spectrum-Typography .spectrum-Body2,
.spectrum-Typography .spectrum-Body--large {
    margin-top: var(--spectrum-body-2-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-2-margin-bottom,
        var(--spectrum-global-dimension-size-160)
    );
}

.spectrum-Typography .spectrum-Body3 {
    margin-top: var(--spectrum-body-3-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-3-margin-bottom,
        var(--spectrum-global-dimension-size-150)
    );
}

.spectrum-Typography .spectrum-Body4,
.spectrum-Typography .spectrum-Body--secondary {
    margin-top: var(--spectrum-body-4-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-4-margin-bottom,
        var(--spectrum-global-dimension-size-125)
    );
}

.spectrum-Typography .spectrum-Body5,
.spectrum-Typography .spectrum-Body--small {
    margin-top: var(--spectrum-body-5-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-5-margin-bottom,
        var(--spectrum-global-dimension-size-115)
    );
}

.spectrum-Typography .spectrum-Heading1 {
    margin-top: var(
        --spectrum-heading-1-margin-top,
        var(--spectrum-alias-heading1-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-1-margin-bottom,
        var(--spectrum-global-dimension-size-115)
    );
}

.spectrum-Typography .spectrum-Heading2 {
    margin-top: var(
        --spectrum-heading-2-margin-top,
        var(--spectrum-alias-heading2-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-2-margin-bottom,
        var(--spectrum-global-dimension-size-85)
    );
}

.spectrum-Typography .spectrum-Heading3 {
    margin-top: var(
        --spectrum-heading-3-margin-top,
        var(--spectrum-alias-heading3-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-3-margin-bottom,
        var(--spectrum-global-dimension-size-75)
    );
}

.spectrum-Typography .spectrum-Heading4,
.spectrum-Typography .spectrum-Heading--subtitle1 {
    margin-top: var(
        --spectrum-heading-4-margin-top,
        var(--spectrum-alias-heading4-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-4-margin-bottom,
        var(--spectrum-global-dimension-size-65)
    );
}

.spectrum-Typography .spectrum-Heading5 {
    margin-top: var(
        --spectrum-heading-5-margin-top,
        var(--spectrum-alias-heading5-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-5-margin-bottom,
        var(--spectrum-global-dimension-size-50)
    );
}

.spectrum-Typography .spectrum-Heading6,
.spectrum-Typography .spectrum-Heading--subtitle2 {
    margin-top: var(
        --spectrum-heading-6-margin-top,
        var(--spectrum-alias-heading6-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-6-margin-bottom,
        var(--spectrum-global-dimension-size-40)
    );
}

.spectrum-Typography .spectrum-Subheading,
.spectrum-Typography .spectrum-Heading--subtitle3 {
    margin-top: var(
        --spectrum-subheading-margin-top,
        var(--spectrum-global-dimension-font-size-75)
    );
    margin-bottom: var(
        --spectrum-subheading-margin-bottom,
        var(--spectrum-global-dimension-size-40)
    );
}

.spectrum-Typography .spectrum-Detail {
    margin-top: var(--spectrum-detail-margin-top, 0px);
    margin-bottom: var(
        --spectrum-detail-margin-bottom,
        var(--spectrum-global-dimension-size-100)
    );
}

.spectrum-Typography .spectrum-Heading1--quiet {
    margin-top: var(
        --spectrum-heading-quiet-1-margin-top,
        var(--spectrum-alias-heading1-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-quiet-1-margin-bottom,
        var(--spectrum-global-dimension-size-115)
    );
}

.spectrum-Typography .spectrum-Heading2--quiet,
.spectrum-Typography .spectrum-Heading--pageTitle {
    margin-top: var(
        --spectrum-heading-quiet-2-margin-top,
        var(--spectrum-alias-heading2-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-quiet-2-margin-bottom,
        var(--spectrum-global-dimension-size-85)
    );
}

.spectrum-Typography .spectrum-Heading1--strong {
    margin-top: var(
        --spectrum-heading-strong-1-margin-top,
        var(--spectrum-alias-heading1-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-strong-1-margin-bottom,
        var(--spectrum-global-dimension-size-115)
    );
}

.spectrum-Typography .spectrum-Heading2--strong {
    margin-top: var(
        --spectrum-heading-strong-2-margin-top,
        var(--spectrum-alias-heading2-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-strong-2-margin-bottom,
        var(--spectrum-global-dimension-size-85)
    );
}

.spectrum-Typography .spectrum-Heading1--display {
    margin-top: var(
        --spectrum-display-1-margin-top,
        var(--spectrum-alias-heading-display1-margin-top)
    );
    margin-bottom: var(
        --spectrum-display-1-margin-bottom,
        var(--spectrum-global-dimension-size-130)
    );
}

.spectrum-Typography .spectrum-Heading2--display {
    margin-top: var(
        --spectrum-display-2-margin-top,
        var(--spectrum-alias-heading-display2-margin-top)
    );
    margin-bottom: var(
        --spectrum-display-2-margin-bottom,
        var(--spectrum-global-dimension-size-125)
    );
}

.spectrum-Typography .spectrum-Heading1--display.spectrum-Heading1--strong {
    margin-top: var(
        --spectrum-display-strong-1-margin-top,
        var(--spectrum-alias-heading-display1-margin-top)
    );
    margin-bottom: var(
        --spectrum-display-strong-1-margin-bottom,
        var(--spectrum-global-dimension-size-130)
    );
}

.spectrum-Typography .spectrum-Heading2--display.spectrum-Heading2--strong {
    margin-top: var(
        --spectrum-display-strong-2-margin-top,
        var(--spectrum-alias-heading-display2-margin-top)
    );
    margin-bottom: var(
        --spectrum-display-strong-2-margin-bottom,
        var(--spectrum-global-dimension-size-125)
    );
}

.spectrum-Typography .spectrum-Heading1--display.spectrum-Heading1--quiet {
    margin-top: var(
        --spectrum-display-quiet-1-margin-top,
        var(--spectrum-alias-heading-display1-margin-top)
    );
    margin-bottom: var(
        --spectrum-display-quiet-1-margin-bottom,
        var(--spectrum-global-dimension-size-130)
    );
}

.spectrum-Typography .spectrum-Heading2--display.spectrum-Heading2--quiet,
.spectrum-Typography .spectrum-Heading--display {
    margin-top: var(
        --spectrum-display-quiet-2-margin-top,
        var(--spectrum-alias-heading-display2-margin-top)
    );
    margin-bottom: var(
        --spectrum-display-quiet-2-margin-bottom,
        var(--spectrum-global-dimension-size-125)
    );
}

.spectrum-Article {
    font-family: var(
        --spectrum-body-article-1-text-font-family,
        var(--spectrum-alias-article-text-font-family)
    );
}

.spectrum-Article .spectrum-Body1 {
    font-size: var(
        --spectrum-body-article-1-text-size,
        var(--spectrum-global-dimension-font-size-400)
    );
    font-weight: var(
        --spectrum-body-article-1-text-font-weight,
        var(--spectrum-alias-article-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-article-1-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-article-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-article-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-article-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Body2,
.spectrum-Article .spectrum-Body--large {
    font-size: var(
        --spectrum-body-article-2-text-size,
        var(--spectrum-global-dimension-font-size-300)
    );
    font-weight: var(
        --spectrum-body-article-2-text-font-weight,
        var(--spectrum-alias-article-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-article-2-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-article-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-article-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-article-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Body3 {
    font-size: var(
        --spectrum-body-article-3-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-body-article-3-text-font-weight,
        var(--spectrum-alias-article-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-article-3-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-article-3-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-article-3-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-article-3-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Body4,
.spectrum-Article .spectrum-Body--secondary {
    font-size: var(
        --spectrum-body-article-4-text-size,
        var(--spectrum-alias-font-size-default)
    );
    font-weight: var(
        --spectrum-body-article-4-text-font-weight,
        var(--spectrum-alias-article-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-article-4-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-article-4-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-article-4-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-article-4-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Body5,
.spectrum-Article .spectrum-Body--small {
    font-size: var(
        --spectrum-body-article-5-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-body-article-5-text-font-weight,
        var(--spectrum-alias-article-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-article-5-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-article-5-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-article-5-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-article-5-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading1 {
    font-size: var(
        --spectrum-heading-article-1-text-size,
        var(--spectrum-alias-heading1-text-size)
    );
    font-weight: var(
        --spectrum-heading-article-1-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-article-1-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-article-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-article-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(--spectrum-heading-article-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading2 {
    font-size: var(
        --spectrum-heading-article-2-text-size,
        var(--spectrum-alias-heading2-text-size)
    );
    font-weight: var(
        --spectrum-heading-article-2-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-article-2-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-article-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-article-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(--spectrum-heading-article-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading3 {
    font-size: var(
        --spectrum-heading-article-3-text-size,
        var(--spectrum-alias-heading3-text-size)
    );
    font-weight: var(
        --spectrum-heading-article-3-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-article-3-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-article-3-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-article-3-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(--spectrum-heading-article-3-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading4,
.spectrum-Article .spectrum-Heading--subtitle1 {
    font-size: var(
        --spectrum-heading-article-4-text-size,
        var(--spectrum-alias-heading4-text-size)
    );
    font-weight: var(
        --spectrum-heading-article-4-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-article-4-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-article-4-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-article-4-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(--spectrum-heading-article-4-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading5 {
    font-size: var(
        --spectrum-heading-article-5-text-size,
        var(--spectrum-alias-heading5-text-size)
    );
    font-weight: var(
        --spectrum-heading-article-5-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-article-5-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-article-5-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-article-5-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(--spectrum-heading-article-5-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading6,
.spectrum-Article .spectrum-Heading--subtitle2 {
    font-size: var(
        --spectrum-heading-article-6-text-size,
        var(--spectrum-alias-heading6-text-size)
    );
    font-weight: var(
        --spectrum-heading-article-6-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-article-6-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-article-6-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-article-6-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(--spectrum-heading-article-6-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Subheading,
.spectrum-Article .spectrum-Heading--subtitle3 {
    font-size: var(
        --spectrum-subheading-article-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-subheading-article-text-font-weight,
        var(--spectrum-alias-article-subheading-text-font-weight)
    );
    line-height: var(
        --spectrum-subheading-article-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-subheading-article-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-subheading-article-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(--spectrum-subheading-article-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Detail {
    font-size: var(
        --spectrum-detail-article-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-detail-article-text-font-weight,
        var(--spectrum-alias-article-body-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-article-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-article-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-article-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-detail-article-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading1--quiet {
    font-size: var(
        --spectrum-heading-quiet-article-1-text-size,
        var(--spectrum-alias-heading1-text-size)
    );
    font-weight: var(
        --spectrum-heading-quiet-article-1-text-font-weight,
        var(--spectrum-alias-article-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-heading-quiet-article-1-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-quiet-article-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-quiet-article-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(
        --spectrum-heading-quiet-article-1-text-transform,
        none
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading2--quiet,
.spectrum-Article .spectrum-Heading--pageTitle {
    font-size: var(
        --spectrum-heading-quiet-article-2-text-size,
        var(--spectrum-alias-heading2-text-size)
    );
    font-weight: var(
        --spectrum-heading-quiet-article-2-text-font-weight,
        var(--spectrum-alias-article-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-heading-quiet-article-2-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-quiet-article-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-quiet-article-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(
        --spectrum-heading-quiet-article-2-text-transform,
        none
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading1--display {
    font-size: var(
        --spectrum-display-article-1-text-size,
        var(--spectrum-alias-heading-display1-text-size)
    );
    font-weight: var(
        --spectrum-display-article-1-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-display-article-1-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-display-article-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-article-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(--spectrum-display-article-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading2--display {
    font-size: var(
        --spectrum-display-article-2-text-size,
        var(--spectrum-alias-heading-display2-text-size)
    );
    font-weight: var(
        --spectrum-display-article-2-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-display-article-2-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-display-article-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-article-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(--spectrum-display-article-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading1--display.spectrum-Heading1--quiet {
    font-size: var(
        --spectrum-display-quiet-article-1-text-size,
        var(--spectrum-alias-heading-display1-text-size)
    );
    font-weight: var(
        --spectrum-display-quiet-article-1-text-font-weight,
        var(--spectrum-alias-article-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-display-quiet-article-1-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-display-quiet-article-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-quiet-article-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(
        --spectrum-display-quiet-article-1-text-transform,
        none
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Article .spectrum-Heading2--display.spectrum-Heading2--quiet,
.spectrum-Article .spectrum-Heading--display {
    font-size: var(
        --spectrum-display-quiet-article-2-text-size,
        var(--spectrum-alias-heading-display2-text-size)
    );
    font-weight: var(
        --spectrum-display-quiet-article-2-text-font-weight,
        var(--spectrum-alias-article-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-display-quiet-article-2-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-display-quiet-article-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-quiet-article-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-small)
    );
    text-transform: var(
        --spectrum-display-quiet-article-2-text-transform,
        none
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Body1,
.spectrum:lang(ko) .spectrum-Body1,
.spectrum:lang(zh) .spectrum-Body1 {
    font-size: var(
        --spectrum-body-han-1-text-size,
        var(--spectrum-global-dimension-font-size-400)
    );
    font-weight: var(
        --spectrum-body-han-1-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-1-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Body2,
.spectrum:lang(ko) .spectrum-Body2,
.spectrum:lang(zh) .spectrum-Body2,
.spectrum:lang(ja) .spectrum-Body--large,
.spectrum:lang(ko) .spectrum-Body--large,
.spectrum:lang(zh) .spectrum-Body--large {
    font-size: var(
        --spectrum-body-han-2-text-size,
        var(--spectrum-global-dimension-font-size-300)
    );
    font-weight: var(
        --spectrum-body-han-2-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-2-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Body3,
.spectrum:lang(ko) .spectrum-Body3,
.spectrum:lang(zh) .spectrum-Body3 {
    font-size: var(
        --spectrum-body-han-3-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-body-han-3-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-3-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-3-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-3-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-3-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Body4,
.spectrum:lang(ko) .spectrum-Body4,
.spectrum:lang(zh) .spectrum-Body4,
.spectrum:lang(ja) .spectrum-Body--secondary,
.spectrum:lang(ko) .spectrum-Body--secondary,
.spectrum:lang(zh) .spectrum-Body--secondary {
    font-size: var(
        --spectrum-body-han-4-text-size,
        var(--spectrum-alias-font-size-default)
    );
    font-weight: var(
        --spectrum-body-han-4-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-4-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-4-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-4-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-4-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Body5,
.spectrum:lang(ko) .spectrum-Body5,
.spectrum:lang(zh) .spectrum-Body5,
.spectrum:lang(ja) .spectrum-Body--small,
.spectrum:lang(ko) .spectrum-Body--small,
.spectrum:lang(zh) .spectrum-Body--small {
    font-size: var(
        --spectrum-body-han-5-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-body-han-5-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-5-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-5-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-5-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-5-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading1,
.spectrum:lang(ko) .spectrum-Heading1,
.spectrum:lang(zh) .spectrum-Heading1 {
    font-size: var(
        --spectrum-heading-han-1-text-size,
        var(--spectrum-alias-heading1-han-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-1-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-1-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading2,
.spectrum:lang(ko) .spectrum-Heading2,
.spectrum:lang(zh) .spectrum-Heading2 {
    font-size: var(
        --spectrum-heading-han-2-text-size,
        var(--spectrum-alias-heading2-han-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-2-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-2-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading3,
.spectrum:lang(ko) .spectrum-Heading3,
.spectrum:lang(zh) .spectrum-Heading3 {
    font-size: var(
        --spectrum-heading-han-3-text-size,
        var(--spectrum-alias-heading3-han-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-3-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-3-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-3-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-3-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-3-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading4,
.spectrum:lang(ko) .spectrum-Heading4,
.spectrum:lang(zh) .spectrum-Heading4,
.spectrum:lang(ja) .spectrum-Heading--subtitle1,
.spectrum:lang(ko) .spectrum-Heading--subtitle1,
.spectrum:lang(zh) .spectrum-Heading--subtitle1 {
    font-size: var(
        --spectrum-heading-han-4-text-size,
        var(--spectrum-alias-heading4-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-4-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-4-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-4-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-4-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-4-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading5,
.spectrum:lang(ko) .spectrum-Heading5,
.spectrum:lang(zh) .spectrum-Heading5 {
    font-size: var(
        --spectrum-heading-han-5-text-size,
        var(--spectrum-alias-heading5-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-5-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-5-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-5-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-5-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-5-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading6,
.spectrum:lang(ko) .spectrum-Heading6,
.spectrum:lang(zh) .spectrum-Heading6,
.spectrum:lang(ja) .spectrum-Heading--subtitle2,
.spectrum:lang(ko) .spectrum-Heading--subtitle2,
.spectrum:lang(zh) .spectrum-Heading--subtitle2 {
    font-size: var(
        --spectrum-heading-han-6-text-size,
        var(--spectrum-alias-heading6-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-6-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-6-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-6-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-6-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-6-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Subheading,
.spectrum:lang(ko) .spectrum-Subheading,
.spectrum:lang(zh) .spectrum-Subheading,
.spectrum:lang(ja) .spectrum-Heading--subtitle3,
.spectrum:lang(ko) .spectrum-Heading--subtitle3,
.spectrum:lang(zh) .spectrum-Heading--subtitle3 {
    font-size: var(
        --spectrum-subheading-han-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-subheading-han-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-subheading-han-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-subheading-han-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-subheading-han-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-subheading-han-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail,
.spectrum:lang(ko) .spectrum-Detail,
.spectrum:lang(zh) .spectrum-Detail {
    font-size: var(
        --spectrum-detail-han-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-detail-han-text-font-weight,
        var(--spectrum-alias-han-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-han-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-detail-han-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading1--quiet,
.spectrum:lang(ko) .spectrum-Heading1--quiet,
.spectrum:lang(zh) .spectrum-Heading1--quiet {
    font-size: var(
        --spectrum-heading-quiet-han-1-text-size,
        var(--spectrum-alias-heading1-han-text-size)
    );
    font-weight: var(
        --spectrum-heading-quiet-han-1-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-heading-quiet-han-1-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-quiet-han-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-quiet-han-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-quiet-han-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading2--quiet,
.spectrum:lang(ko) .spectrum-Heading2--quiet,
.spectrum:lang(zh) .spectrum-Heading2--quiet,
.spectrum:lang(ja) .spectrum-Heading--pageTitle,
.spectrum:lang(ko) .spectrum-Heading--pageTitle,
.spectrum:lang(zh) .spectrum-Heading--pageTitle {
    font-size: var(
        --spectrum-heading-quiet-han-2-text-size,
        var(--spectrum-alias-heading2-han-text-size)
    );
    font-weight: var(
        --spectrum-heading-quiet-han-2-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-heading-quiet-han-2-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-quiet-han-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-quiet-han-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-quiet-han-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading1--strong,
.spectrum:lang(ko) .spectrum-Heading1--strong,
.spectrum:lang(zh) .spectrum-Heading1--strong {
    font-size: var(
        --spectrum-heading-strong-han-1-text-size,
        var(--spectrum-alias-heading1-han-text-size)
    );
    font-weight: var(
        --spectrum-heading-strong-han-1-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-strong)
    );
    line-height: var(
        --spectrum-heading-strong-han-1-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-strong-han-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-strong-han-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-strong-han-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading2--strong,
.spectrum:lang(ko) .spectrum-Heading2--strong,
.spectrum:lang(zh) .spectrum-Heading2--strong {
    font-size: var(
        --spectrum-heading-strong-han-2-text-size,
        var(--spectrum-alias-heading2-han-text-size)
    );
    font-weight: var(
        --spectrum-heading-strong-han-2-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-strong)
    );
    line-height: var(
        --spectrum-heading-strong-han-2-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-strong-han-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-strong-han-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-strong-han-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading1--display,
.spectrum:lang(ko) .spectrum-Heading1--display,
.spectrum:lang(zh) .spectrum-Heading1--display {
    font-size: var(
        --spectrum-display-han-1-text-size,
        var(--spectrum-alias-heading-han-display1-text-size)
    );
    font-weight: var(
        --spectrum-display-han-1-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-display-han-1-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-display-han-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-han-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-display-han-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading2--display,
.spectrum:lang(ko) .spectrum-Heading2--display,
.spectrum:lang(zh) .spectrum-Heading2--display {
    font-size: var(
        --spectrum-display-han-2-text-size,
        var(--spectrum-alias-heading-han-display2-text-size)
    );
    font-weight: var(
        --spectrum-display-han-2-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-display-han-2-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-display-han-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-han-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-display-han-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading1--display.spectrum-Heading1--strong,
.spectrum:lang(ko) .spectrum-Heading1--display.spectrum-Heading1--strong,
.spectrum:lang(zh) .spectrum-Heading1--display.spectrum-Heading1--strong {
    font-size: var(
        --spectrum-display-strong-han-1-text-size,
        var(--spectrum-alias-heading-han-display1-text-size)
    );
    font-weight: var(
        --spectrum-display-strong-han-1-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-strong)
    );
    line-height: var(
        --spectrum-display-strong-han-1-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-display-strong-han-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-strong-han-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-display-strong-han-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading2--display.spectrum-Heading2--strong,
.spectrum:lang(ko) .spectrum-Heading2--display.spectrum-Heading2--strong,
.spectrum:lang(zh) .spectrum-Heading2--display.spectrum-Heading2--strong {
    font-size: var(
        --spectrum-display-strong-han-2-text-size,
        var(--spectrum-alias-heading-han-display2-text-size)
    );
    font-weight: var(
        --spectrum-display-strong-han-2-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-strong)
    );
    line-height: var(
        --spectrum-display-strong-han-2-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-display-strong-han-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-strong-han-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-display-strong-han-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading1--display.spectrum-Heading1--quiet,
.spectrum:lang(ko) .spectrum-Heading1--display.spectrum-Heading1--quiet,
.spectrum:lang(zh) .spectrum-Heading1--display.spectrum-Heading1--quiet {
    font-size: var(
        --spectrum-display-quiet-han-1-text-size,
        var(--spectrum-alias-heading-han-display1-text-size)
    );
    font-weight: var(
        --spectrum-display-quiet-han-1-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-display-quiet-han-1-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-display-quiet-han-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-quiet-han-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-display-quiet-han-1-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading2--display.spectrum-Heading2--quiet,
.spectrum:lang(ko) .spectrum-Heading2--display.spectrum-Heading2--quiet,
.spectrum:lang(zh) .spectrum-Heading2--display.spectrum-Heading2--quiet,
.spectrum:lang(ja) .spectrum-Heading--display,
.spectrum:lang(ko) .spectrum-Heading--display,
.spectrum:lang(zh) .spectrum-Heading--display {
    font-size: var(
        --spectrum-display-quiet-han-2-text-size,
        var(--spectrum-alias-heading-han-display2-text-size)
    );
    font-weight: var(
        --spectrum-display-quiet-han-2-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-quiet)
    );
    line-height: var(
        --spectrum-display-quiet-han-2-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-display-quiet-han-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-display-quiet-han-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-display-quiet-han-2-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Code1 {
    font-size: var(
        --spectrum-body-code-1-text-size,
        var(--spectrum-global-dimension-font-size-400)
    );
    font-weight: var(
        --spectrum-body-code-1-text-font-weight,
        var(--spectrum-alias-code-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-code-1-text-line-height,
        var(--spectrum-alias-code-text-line-height)
    );
    font-style: var(
        --spectrum-body-code-1-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-code-1-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-body-code-1-text-font-family,
        var(--spectrum-alias-code-text-font-family)
    );
}

.spectrum-Code2 {
    font-size: var(
        --spectrum-body-code-2-text-size,
        var(--spectrum-global-dimension-font-size-300)
    );
    font-weight: var(
        --spectrum-body-code-2-text-font-weight,
        var(--spectrum-alias-code-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-code-2-text-line-height,
        var(--spectrum-alias-code-text-line-height)
    );
    font-style: var(
        --spectrum-body-code-2-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-code-2-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-body-code-2-text-font-family,
        var(--spectrum-alias-code-text-font-family)
    );
}

.spectrum-Code3 {
    font-size: var(
        --spectrum-body-code-3-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-body-code-3-text-font-weight,
        var(--spectrum-alias-code-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-code-3-text-line-height,
        var(--spectrum-alias-code-text-line-height)
    );
    font-style: var(
        --spectrum-body-code-3-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-code-3-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-body-code-3-text-font-family,
        var(--spectrum-alias-code-text-font-family)
    );
}

.spectrum-Code4 {
    font-size: var(
        --spectrum-body-code-4-text-size,
        var(--spectrum-alias-font-size-default)
    );
    font-weight: var(
        --spectrum-body-code-4-text-font-weight,
        var(--spectrum-alias-code-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-code-4-text-line-height,
        var(--spectrum-alias-code-text-line-height)
    );
    font-style: var(
        --spectrum-body-code-4-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-code-4-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-body-code-4-text-font-family,
        var(--spectrum-alias-code-text-font-family)
    );
}

.spectrum-Code5 {
    font-size: var(
        --spectrum-body-code-5-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-body-code-5-text-font-weight,
        var(--spectrum-alias-code-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-code-5-text-line-height,
        var(--spectrum-alias-code-text-line-height)
    );
    font-style: var(
        --spectrum-body-code-5-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-code-5-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-body-code-5-text-font-family,
        var(--spectrum-alias-code-text-font-family)
    );
}

.spectrum-Heading--XXXL {
    font-size: var(
        --spectrum-heading-xxxl-text-size,
        var(--spectrum-alias-heading-xxxl-text-size)
    );
    font-weight: var(
        --spectrum-heading-xxxl-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-xxxl-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-xxxl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-xxxl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-xxxl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading--XXL {
    font-size: var(
        --spectrum-heading-xxl-text-size,
        var(--spectrum-alias-heading-xxl-text-size)
    );
    font-weight: var(
        --spectrum-heading-xxl-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-xxl-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-xxl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-xxl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-xxl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading--XL {
    font-size: var(
        --spectrum-heading-xl-text-size,
        var(--spectrum-alias-heading-xl-text-size)
    );
    font-weight: var(
        --spectrum-heading-xl-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-xl-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-xl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-xl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-xl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading--L {
    font-size: var(
        --spectrum-heading-l-text-size,
        var(--spectrum-alias-heading-l-text-size)
    );
    font-weight: var(
        --spectrum-heading-l-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-l-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-l-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-l-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-l-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading--M {
    font-size: var(
        --spectrum-heading-m-text-size,
        var(--spectrum-alias-heading-m-text-size)
    );
    font-weight: var(
        --spectrum-heading-m-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-m-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-m-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-m-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-m-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading--S {
    font-size: var(
        --spectrum-heading-s-text-size,
        var(--spectrum-alias-heading-s-text-size)
    );
    font-weight: var(
        --spectrum-heading-s-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-s-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-s-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-s-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-s-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading--XS {
    font-size: var(
        --spectrum-heading-xs-text-size,
        var(--spectrum-alias-heading-xs-text-size)
    );
    font-weight: var(
        --spectrum-heading-xs-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-xs-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-xs-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-xs-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-xs-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading--XXS {
    font-size: var(
        --spectrum-heading-xxs-text-size,
        var(--spectrum-alias-heading-xxs-text-size)
    );
    font-weight: var(
        --spectrum-heading-xxs-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-xxs-text-line-height,
        var(--spectrum-alias-heading-text-line-height)
    );
    font-style: var(
        --spectrum-heading-xxs-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-xxs-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-heading-xxs-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Heading {
    font-family: var(
        --spectrum-heading-xl-text-font-family,
        var(--spectrum-alias-body-text-font-family)
    );
    font-weight: var(
        --spectrum-heading-xl-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
}

.spectrum-Heading em,
.spectrum-Heading .spectrum-Heading-emphasis {
    font-style: var(
        --spectrum-heading-xl-emphasis-text-font-style,
        var(--spectrum-global-font-style-italic)
    );
}

.spectrum-Heading strong,
.spectrum-Heading .spectrum-Heading-strong {
    font-weight: var(
        --spectrum-heading-xl-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
}

.spectrum-Heading--serif {
    font-family: var(
        --spectrum-body-serif-xl-text-font-family,
        var(--spectrum-alias-serif-text-font-family)
    );
}

.spectrum-Heading--heavy {
    font-weight: var(
        --spectrum-heading-heavy-xl-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
}

.spectrum-Heading--heavy em,
.spectrum-Heading--heavy .spectrum-Heading-emphasis {
    font-style: var(
        --spectrum-heading-heavy-xl-emphasis-text-font-style,
        var(--spectrum-global-font-style-italic)
    );
}

.spectrum-Heading--heavy strong,
.spectrum-Heading--heavy .spectrum-Heading-strong {
    font-weight: var(
        --spectrum-heading-heavy-xl-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
}

.spectrum-Heading--light {
    font-weight: var(
        --spectrum-heading-light-xl-emphasis-text-font-weight,
        var(--spectrum-global-font-weight-light)
    );
}

.spectrum-Heading--light em,
.spectrum-Heading--light .spectrum-Heading-emphasis {
    font-style: var(
        --spectrum-heading-light-xl-emphasis-text-font-style,
        var(--spectrum-global-font-style-italic)
    );
}

.spectrum-Heading--light strong,
.spectrum-Heading--light .spectrum-Heading-strong {
    font-weight: var(
        --spectrum-heading-light-xl-strong-text-font-weight,
        var(--spectrum-global-font-weight-bold)
    );
}

.spectrum-Body--XXXL {
    font-size: var(
        --spectrum-body-xxxl-text-size,
        var(--spectrum-global-dimension-font-size-600)
    );
    font-weight: var(
        --spectrum-body-xxxl-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-xxxl-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-xxxl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-xxxl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-xxxl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Body--XXL {
    font-size: var(
        --spectrum-body-xxl-text-size,
        var(--spectrum-global-dimension-font-size-500)
    );
    font-weight: var(
        --spectrum-body-xxl-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-xxl-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-xxl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-xxl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-xxl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Body--XL {
    font-size: var(
        --spectrum-body-xl-text-size,
        var(--spectrum-global-dimension-font-size-400)
    );
    font-weight: var(
        --spectrum-body-xl-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-xl-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-xl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-xl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-xl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Body--L {
    font-size: var(
        --spectrum-body-l-text-size,
        var(--spectrum-global-dimension-font-size-300)
    );
    font-weight: var(
        --spectrum-body-l-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-l-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-l-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-l-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-l-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Body--M {
    font-size: var(
        --spectrum-body-m-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-body-m-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-m-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-m-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-m-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-m-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Body--S {
    font-size: var(
        --spectrum-body-s-text-size,
        var(--spectrum-alias-font-size-default)
    );
    font-weight: var(
        --spectrum-body-s-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-s-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-s-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-s-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-s-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Body--XS {
    font-size: var(
        --spectrum-body-xs-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-body-xs-text-font-weight,
        var(--spectrum-alias-body-text-font-weight)
    );
    line-height: var(
        --spectrum-body-xs-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-body-xs-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-xs-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    text-transform: var(--spectrum-body-xs-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Body {
    font-family: var(
        --spectrum-body-xl-text-font-family,
        var(--spectrum-alias-body-text-font-family)
    );
}

.spectrum-Body strong,
.spectrum-Body .spectrum-Body-strong {
    font-weight: var(
        --spectrum-body-xl-strong-text-font-weight,
        var(--spectrum-global-font-weight-bold)
    );
}

.spectrum-Body em,
.spectrum-Body .spectrum-Body-emphasis {
    font-style: var(
        --spectrum-body-xl-emphasis-text-font-style,
        var(--spectrum-global-font-style-italic)
    );
}

.spectrum-Body--serif {
    font-family: var(
        --spectrum-body-serif-xl-text-font-family,
        var(--spectrum-alias-serif-text-font-family)
    );
}

.spectrum-Detail {
    font-family: var(
        --spectrum-heading-xl-text-font-family,
        var(--spectrum-alias-body-text-font-family)
    );
}

.spectrum-Detail strong,
.spectrum-Detail .spectrum-Detail-strong {
    font-weight: var(
        --spectrum-detail-xl-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
}

.spectrum-Detail em,
.spectrum-Detail .spectrum-Detail-emphasis {
    font-style: var(
        --spectrum-detail-xl-emphasis-text-font-style,
        var(--spectrum-global-font-style-italic)
    );
}

.spectrum-Detail--light {
    font-style: var(
        --spectrum-detail-light-xl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    font-weight: var(
        --spectrum-detail-light-xl-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight-light)
    );
}

.spectrum-Detail--serif {
    font-family: var(
        --spectrum-body-serif-xl-text-font-family,
        var(--spectrum-alias-serif-text-font-family)
    );
}

.spectrum-Detail--XL {
    font-size: var(
        --spectrum-detail-xl-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-detail-xl-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-xl-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-xl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-xl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-xl-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail--XL em {
    font-size: var(
        --spectrum-detail-xl-emphasis-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-detail-xl-emphasis-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-xl-emphasis-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-xl-emphasis-text-font-style,
        var(--spectrum-global-font-style-italic)
    );
    letter-spacing: var(
        --spectrum-detail-xl-emphasis-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(
        --spectrum-detail-xl-emphasis-text-transform,
        uppercase
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail--XL strong {
    font-size: var(
        --spectrum-detail-xl-strong-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-detail-xl-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
    line-height: var(
        --spectrum-detail-xl-strong-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-xl-strong-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-xl-strong-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-xl-strong-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail--L {
    font-size: var(
        --spectrum-detail-l-text-size,
        var(--spectrum-global-dimension-font-size-100)
    );
    font-weight: var(
        --spectrum-detail-l-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-l-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-l-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-l-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-l-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail--L em {
    font-size: var(
        --spectrum-detail-l-emphasis-text-size,
        var(--spectrum-global-dimension-font-size-100)
    );
    font-weight: var(
        --spectrum-detail-l-emphasis-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-l-emphasis-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-l-emphasis-text-font-style,
        var(--spectrum-global-font-style-italic)
    );
    letter-spacing: var(
        --spectrum-detail-l-emphasis-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-l-emphasis-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail--L strong {
    font-size: var(
        --spectrum-detail-l-strong-text-size,
        var(--spectrum-global-dimension-font-size-100)
    );
    font-weight: var(
        --spectrum-detail-l-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
    line-height: var(
        --spectrum-detail-l-strong-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-l-strong-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-l-strong-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-l-strong-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail--M {
    font-size: var(
        --spectrum-detail-m-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-detail-m-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-m-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-m-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-m-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-m-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail--M em {
    font-size: var(
        --spectrum-detail-m-emphasis-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-detail-m-emphasis-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-m-emphasis-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-m-emphasis-text-font-style,
        var(--spectrum-global-font-style-italic)
    );
    letter-spacing: var(
        --spectrum-detail-m-emphasis-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-m-emphasis-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail--M strong {
    font-size: var(
        --spectrum-detail-m-strong-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-detail-m-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
    line-height: var(
        --spectrum-detail-m-strong-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-m-strong-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-m-strong-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-m-strong-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail--S {
    font-size: var(
        --spectrum-detail-s-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-detail-s-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-s-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-s-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-s-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-s-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail--S em {
    font-size: var(
        --spectrum-detail-s-emphasis-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-detail-s-emphasis-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-s-emphasis-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-s-emphasis-text-font-style,
        var(--spectrum-global-font-style-italic)
    );
    letter-spacing: var(
        --spectrum-detail-s-emphasis-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-s-emphasis-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Detail--S strong {
    font-size: var(
        --spectrum-detail-s-strong-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-detail-s-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
    line-height: var(
        --spectrum-detail-s-strong-text-line-height,
        var(--spectrum-alias-body-text-line-height)
    );
    font-style: var(
        --spectrum-detail-s-strong-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-s-strong-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-medium)
    );
    text-transform: var(--spectrum-detail-s-strong-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum-Code {
    font-family: var(
        --spectrum-heading-xl-text-font-family,
        var(--spectrum-alias-body-text-font-family)
    );
}

.spectrum-Code strong,
.spectrum-Code .spectrum-Code-strong {
    font-weight: var(
        --spectrum-code-xl-strong-text-font-weight,
        var(--spectrum-global-font-weight-bold)
    );
}

.spectrum-Code em,
.spectrum-Code .spectrum-Code-emphasis {
    font-style: var(
        --spectrum-code-xl-emphasis-text-font-style,
        var(--spectrum-global-font-style-italic)
    );
}

.spectrum-Code--serif {
    font-family: var(
        --spectrum-body-serif-xl-text-font-family,
        var(--spectrum-alias-serif-text-font-family)
    );
}

.spectrum-Code--XL {
    font-size: var(
        --spectrum-code-xl-text-size,
        var(--spectrum-global-dimension-font-size-400)
    );
    font-weight: var(
        --spectrum-code-xl-text-font-weight,
        var(--spectrum-alias-code-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-code-xl-text-line-height,
        var(--spectrum-alias-code-text-line-height)
    );
    font-style: var(
        --spectrum-code-xl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-code-xl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-code-xl-text-font-family,
        var(--spectrum-alias-code-text-font-family)
    );
}

.spectrum-Code--L {
    font-size: var(
        --spectrum-code-l-text-size,
        var(--spectrum-global-dimension-font-size-300)
    );
    font-weight: var(
        --spectrum-code-l-text-font-weight,
        var(--spectrum-alias-code-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-code-l-text-line-height,
        var(--spectrum-alias-code-text-line-height)
    );
    font-style: var(
        --spectrum-code-l-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-code-l-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-code-l-text-font-family,
        var(--spectrum-alias-code-text-font-family)
    );
}

.spectrum-Code--M {
    font-size: var(
        --spectrum-code-m-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-code-m-text-font-weight,
        var(--spectrum-alias-code-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-code-m-text-line-height,
        var(--spectrum-alias-code-text-line-height)
    );
    font-style: var(
        --spectrum-code-m-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-code-m-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-code-m-text-font-family,
        var(--spectrum-alias-code-text-font-family)
    );
}

.spectrum-Code--S {
    font-size: var(
        --spectrum-code-s-text-size,
        var(--spectrum-alias-font-size-default)
    );
    font-weight: var(
        --spectrum-code-s-text-font-weight,
        var(--spectrum-alias-code-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-code-s-text-line-height,
        var(--spectrum-alias-code-text-line-height)
    );
    font-style: var(
        --spectrum-code-s-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-code-s-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-code-s-text-font-family,
        var(--spectrum-alias-code-text-font-family)
    );
}

.spectrum-Code--XS {
    font-size: var(
        --spectrum-code-xs-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-code-xs-text-font-weight,
        var(--spectrum-alias-code-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-code-xs-text-line-height,
        var(--spectrum-alias-code-text-line-height)
    );
    font-style: var(
        --spectrum-code-xs-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-code-xs-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-none)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-code-xs-text-font-family,
        var(--spectrum-alias-code-text-font-family)
    );
}

.spectrum-Typography .spectrum-Heading--XXXL {
    margin-top: var(
        --spectrum-heading-xxxl-margin-top,
        var(--spectrum-alias-heading-xxxl-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-xxxl-margin-bottom,
        var(--spectrum-global-dimension-size-130)
    );
}

.spectrum-Typography .spectrum-Heading--XXL {
    margin-top: var(
        --spectrum-heading-xxl-margin-top,
        var(--spectrum-alias-heading-xxl-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-xxl-margin-bottom,
        var(--spectrum-global-dimension-size-125)
    );
}

.spectrum-Typography .spectrum-Heading--XL {
    margin-top: var(
        --spectrum-heading-xl-margin-top,
        var(--spectrum-alias-heading-xl-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-xl-margin-bottom,
        var(--spectrum-global-dimension-size-115)
    );
}

.spectrum-Typography .spectrum-Heading--L {
    margin-top: var(
        --spectrum-heading-l-margin-top,
        var(--spectrum-alias-heading-l-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-l-margin-bottom,
        var(--spectrum-global-dimension-size-85)
    );
}

.spectrum-Typography .spectrum-Heading--M {
    margin-top: var(
        --spectrum-heading-m-margin-top,
        var(--spectrum-alias-heading-m-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-m-margin-bottom,
        var(--spectrum-global-dimension-size-75)
    );
}

.spectrum-Typography .spectrum-Heading--S {
    margin-top: var(
        --spectrum-heading-s-margin-top,
        var(--spectrum-alias-heading-s-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-s-margin-bottom,
        var(--spectrum-global-dimension-size-65)
    );
}

.spectrum-Typography .spectrum-Heading--XS {
    margin-top: var(
        --spectrum-heading-xs-margin-top,
        var(--spectrum-alias-heading-xs-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-xs-margin-bottom,
        var(--spectrum-global-dimension-size-50)
    );
}

.spectrum-Typography .spectrum-Heading--XXS {
    margin-top: var(
        --spectrum-heading-xxs-margin-top,
        var(--spectrum-alias-heading-xxs-margin-top)
    );
    margin-bottom: var(
        --spectrum-heading-xxs-margin-bottom,
        var(--spectrum-global-dimension-size-40)
    );
}

.spectrum-Typography .spectrum-Body--XXXL {
    margin-top: var(--spectrum-body-xxxl-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-xxxl-margin-bottom,
        var(--spectrum-global-dimension-size-400)
    );
}

.spectrum-Typography .spectrum-Body--XXL {
    margin-top: var(--spectrum-body-xxl-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-xxl-margin-bottom,
        var(--spectrum-global-dimension-size-300)
    );
}

.spectrum-Typography .spectrum-Body--XL {
    margin-top: var(--spectrum-body-xl-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-xl-margin-bottom,
        var(--spectrum-global-dimension-size-200)
    );
}

.spectrum-Typography .spectrum-Body--L {
    margin-top: var(--spectrum-body-l-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-l-margin-bottom,
        var(--spectrum-global-dimension-size-160)
    );
}

.spectrum-Typography .spectrum-Body--M {
    margin-top: var(--spectrum-body-m-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-m-margin-bottom,
        var(--spectrum-global-dimension-size-150)
    );
}

.spectrum-Typography .spectrum-Body--S {
    margin-top: var(--spectrum-body-s-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-s-margin-bottom,
        var(--spectrum-global-dimension-size-125)
    );
}

.spectrum-Typography .spectrum-Body--XS {
    margin-top: var(--spectrum-body-xs-margin-top, 0px);
    margin-bottom: var(
        --spectrum-body-xs-margin-bottom,
        var(--spectrum-global-dimension-size-115)
    );
}

.spectrum:lang(ja) .spectrum-Heading--XXXL,
.spectrum:lang(ko) .spectrum-Heading--XXXL,
.spectrum:lang(zh) .spectrum-Heading--XXXL {
    font-size: var(
        --spectrum-heading-han-xxxl-text-size,
        var(--spectrum-alias-heading-xxxl-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-xxxl-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-xxxl-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-xxxl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-xxxl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-xxxl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading--XXL,
.spectrum:lang(ko) .spectrum-Heading--XXL,
.spectrum:lang(zh) .spectrum-Heading--XXL {
    font-size: var(
        --spectrum-heading-han-xxl-text-size,
        var(--spectrum-alias-heading-han-xxl-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-xxl-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-xxl-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-xxl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-xxl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-xxl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading--XL,
.spectrum:lang(ko) .spectrum-Heading--XL,
.spectrum:lang(zh) .spectrum-Heading--XL {
    font-size: var(
        --spectrum-heading-han-xl-text-size,
        var(--spectrum-alias-heading-han-xl-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-xl-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-xl-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-xl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-xl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-xl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading--L,
.spectrum:lang(ko) .spectrum-Heading--L,
.spectrum:lang(zh) .spectrum-Heading--L {
    font-size: var(
        --spectrum-heading-han-l-text-size,
        var(--spectrum-alias-heading-han-l-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-l-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-l-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-l-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-l-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-l-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading--M,
.spectrum:lang(ko) .spectrum-Heading--M,
.spectrum:lang(zh) .spectrum-Heading--M {
    font-size: var(
        --spectrum-heading-han-m-text-size,
        var(--spectrum-alias-heading-han-m-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-m-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-m-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-m-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-m-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-m-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading--S,
.spectrum:lang(ko) .spectrum-Heading--S,
.spectrum:lang(zh) .spectrum-Heading--S {
    font-size: var(
        --spectrum-heading-han-s-text-size,
        var(--spectrum-alias-heading-s-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-s-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-s-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-s-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-s-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-s-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading--XS,
.spectrum:lang(ko) .spectrum-Heading--XS,
.spectrum:lang(zh) .spectrum-Heading--XS {
    font-size: var(
        --spectrum-heading-han-xs-text-size,
        var(--spectrum-alias-heading-xs-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-xs-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-xs-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-xs-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-xs-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-xs-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading--XXS,
.spectrum:lang(ko) .spectrum-Heading--XXS,
.spectrum:lang(zh) .spectrum-Heading--XXS {
    font-size: var(
        --spectrum-heading-han-xxs-text-size,
        var(--spectrum-alias-heading-xxs-text-size)
    );
    font-weight: var(
        --spectrum-heading-han-xxs-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-heading-han-xxs-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-heading-han-xxs-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-heading-han-xxs-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-heading-han-xxs-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Heading--heavy,
.spectrum:lang(ko) .spectrum-Heading--heavy,
.spectrum:lang(zh) .spectrum-Heading--heavy {
    font-weight: var(
        --spectrum-heading-han-xl-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
}

.spectrum:lang(ja) .spectrum-Heading--heavy em,
.spectrum:lang(ja) .spectrum-Heading--heavy .spectrum-Heading--emphasis,
.spectrum:lang(ko) .spectrum-Heading--heavy em,
.spectrum:lang(ko) .spectrum-Heading--heavy .spectrum-Heading--emphasis,
.spectrum:lang(zh) .spectrum-Heading--heavy em,
.spectrum:lang(zh) .spectrum-Heading--heavy .spectrum-Heading--emphasis {
    font-style: var(
        --spectrum-heading-han-heavy-xl-emphasis-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    font-weight: var(
        --spectrum-heading-han-heavy-xl-emphasis-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-heavy-emphasis)
    );
}

.spectrum:lang(ja) .spectrum-Heading--heavy strong,
.spectrum:lang(ja) .spectrum-Heading--heavy .spectrum-Heading--strong,
.spectrum:lang(ko) .spectrum-Heading--heavy strong,
.spectrum:lang(ko) .spectrum-Heading--heavy .spectrum-Heading--strong,
.spectrum:lang(zh) .spectrum-Heading--heavy strong,
.spectrum:lang(zh) .spectrum-Heading--heavy .spectrum-Heading--strong {
    font-style: var(
        --spectrum-heading-heavy-xl-strong-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    font-weight: var(
        --spectrum-heading-heavy-xl-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
}

.spectrum:lang(ja) .spectrum-Heading--light,
.spectrum:lang(ko) .spectrum-Heading--light,
.spectrum:lang(zh) .spectrum-Heading--light {
    font-weight: var(
        --spectrum-heading-han-xl-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular)
    );
}

.spectrum:lang(ja) .spectrum-Heading--light em,
.spectrum:lang(ja) .spectrum-Heading--light .spectrum-Heading--emphasis,
.spectrum:lang(ko) .spectrum-Heading--light em,
.spectrum:lang(ko) .spectrum-Heading--light .spectrum-Heading--emphasis,
.spectrum:lang(zh) .spectrum-Heading--light em,
.spectrum:lang(zh) .spectrum-Heading--light .spectrum-Heading--emphasis {
    font-style: var(
        --spectrum-heading-han-light-xl-emphasis-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    font-weight: var(
        --spectrum-heading-han-light-xl-emphasis-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-light-emphasis)
    );
}

.spectrum:lang(ja) .spectrum-Heading--light strong,
.spectrum:lang(ja) .spectrum-Heading--light .spectrum-Heading--strong,
.spectrum:lang(ko) .spectrum-Heading--light strong,
.spectrum:lang(ko) .spectrum-Heading--light .spectrum-Heading--strong,
.spectrum:lang(zh) .spectrum-Heading--light strong,
.spectrum:lang(zh) .spectrum-Heading--light .spectrum-Heading--strong {
    font-style: var(
        --spectrum-heading-han-light-xl-strong-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    font-weight: var(
        --spectrum-heading-han-light-xl-strong-text-font-weight,
        var(--spectrum-global-font-weight-bold)
    );
}

.spectrum:lang(ja) .spectrum-Body--XXXL,
.spectrum:lang(ko) .spectrum-Body--XXXL,
.spectrum:lang(zh) .spectrum-Body--XXXL {
    font-size: var(
        --spectrum-body-han-xxxl-text-size,
        var(--spectrum-global-dimension-font-size-600)
    );
    font-weight: var(
        --spectrum-body-han-xxxl-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-xxxl-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-xxxl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-xxxl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-xxxl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Body--XXL,
.spectrum:lang(ko) .spectrum-Body--XXL,
.spectrum:lang(zh) .spectrum-Body--XXL {
    font-size: var(
        --spectrum-body-han-xxl-text-size,
        var(--spectrum-global-dimension-font-size-500)
    );
    font-weight: var(
        --spectrum-body-han-xxl-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-xxl-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-xxl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-xxl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-xxl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Body--XL,
.spectrum:lang(ko) .spectrum-Body--XL,
.spectrum:lang(zh) .spectrum-Body--XL {
    font-size: var(
        --spectrum-body-han-xl-text-size,
        var(--spectrum-global-dimension-font-size-400)
    );
    font-weight: var(
        --spectrum-body-han-xl-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-xl-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-xl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-xl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-xl-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Body--L,
.spectrum:lang(ko) .spectrum-Body--L,
.spectrum:lang(zh) .spectrum-Body--L {
    font-size: var(
        --spectrum-body-han-l-text-size,
        var(--spectrum-global-dimension-font-size-300)
    );
    font-weight: var(
        --spectrum-body-han-l-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-l-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-l-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-l-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-l-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Body--M,
.spectrum:lang(ko) .spectrum-Body--M,
.spectrum:lang(zh) .spectrum-Body--M {
    font-size: var(
        --spectrum-body-han-m-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-body-han-m-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-m-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-m-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-m-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-m-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Body--S,
.spectrum:lang(ko) .spectrum-Body--S,
.spectrum:lang(zh) .spectrum-Body--S {
    font-size: var(
        --spectrum-body-han-s-text-size,
        var(--spectrum-alias-font-size-default)
    );
    font-weight: var(
        --spectrum-body-han-s-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-s-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-s-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-s-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-s-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Body--XS,
.spectrum:lang(ko) .spectrum-Body--XS,
.spectrum:lang(zh) .spectrum-Body--XS {
    font-size: var(
        --spectrum-body-han-xs-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-body-han-xs-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-body-han-xs-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-body-han-xs-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-body-han-xs-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-body-han-xs-text-transform, none);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--XL,
.spectrum:lang(ko) .spectrum-Detail--XL,
.spectrum:lang(zh) .spectrum-Detail--XL {
    font-size: var(
        --spectrum-detail-han-xl-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-detail-han-xl-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-han-xl-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-xl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-xl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-detail-han-xl-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--XL em,
.spectrum:lang(ko) .spectrum-Detail--XL em,
.spectrum:lang(zh) .spectrum-Detail--XL em {
    font-size: var(
        --spectrum-detail-han-xl-emphasis-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-detail-han-xl-emphasis-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis)
    );
    line-height: var(
        --spectrum-detail-han-xl-emphasis-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-xl-emphasis-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-xl-emphasis-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(
        --spectrum-detail-han-xl-emphasis-text-transform,
        uppercase
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--XL strong,
.spectrum:lang(ko) .spectrum-Detail--XL strong,
.spectrum:lang(zh) .spectrum-Detail--XL strong {
    font-size: var(
        --spectrum-detail-han-xl-strong-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-detail-han-xl-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
    line-height: var(
        --spectrum-detail-han-xl-strong-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-xl-strong-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-xl-strong-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(
        --spectrum-detail-han-xl-strong-text-transform,
        uppercase
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--L,
.spectrum:lang(ko) .spectrum-Detail--L,
.spectrum:lang(zh) .spectrum-Detail--L {
    font-size: var(
        --spectrum-detail-han-l-text-size,
        var(--spectrum-global-dimension-font-size-100)
    );
    font-weight: var(
        --spectrum-detail-han-l-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-han-l-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-l-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-l-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-detail-han-l-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--L em,
.spectrum:lang(ko) .spectrum-Detail--L em,
.spectrum:lang(zh) .spectrum-Detail--L em {
    font-size: var(
        --spectrum-detail-han-l-emphasis-text-size,
        var(--spectrum-global-dimension-font-size-100)
    );
    font-weight: var(
        --spectrum-detail-han-l-emphasis-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis)
    );
    line-height: var(
        --spectrum-detail-han-l-emphasis-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-l-emphasis-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-l-emphasis-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(
        --spectrum-detail-han-l-emphasis-text-transform,
        uppercase
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--L strong,
.spectrum:lang(ko) .spectrum-Detail--L strong,
.spectrum:lang(zh) .spectrum-Detail--L strong {
    font-size: var(
        --spectrum-detail-han-l-strong-text-size,
        var(--spectrum-global-dimension-font-size-100)
    );
    font-weight: var(
        --spectrum-detail-han-l-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
    line-height: var(
        --spectrum-detail-han-l-strong-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-l-strong-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-l-strong-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(
        --spectrum-detail-han-l-strong-text-transform,
        uppercase
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--M,
.spectrum:lang(ko) .spectrum-Detail--M,
.spectrum:lang(zh) .spectrum-Detail--M {
    font-size: var(
        --spectrum-detail-han-m-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-detail-han-m-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-han-m-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-m-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-m-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-detail-han-m-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--M em,
.spectrum:lang(ko) .spectrum-Detail--M em,
.spectrum:lang(zh) .spectrum-Detail--M em {
    font-size: var(
        --spectrum-detail-han-m-emphasis-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-detail-han-m-emphasis-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis)
    );
    line-height: var(
        --spectrum-detail-han-m-emphasis-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-m-emphasis-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-m-emphasis-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(
        --spectrum-detail-han-m-emphasis-text-transform,
        uppercase
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--M strong,
.spectrum:lang(ko) .spectrum-Detail--M strong,
.spectrum:lang(zh) .spectrum-Detail--M strong {
    font-size: var(
        --spectrum-detail-han-m-strong-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-detail-han-m-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
    line-height: var(
        --spectrum-detail-han-m-strong-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-m-strong-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-m-strong-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(
        --spectrum-detail-han-m-strong-text-transform,
        uppercase
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--S,
.spectrum:lang(ko) .spectrum-Detail--S,
.spectrum:lang(zh) .spectrum-Detail--S {
    font-size: var(
        --spectrum-detail-han-s-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-detail-han-s-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
    line-height: var(
        --spectrum-detail-han-s-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-s-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-s-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(--spectrum-detail-han-s-text-transform, uppercase);
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--S em,
.spectrum:lang(ko) .spectrum-Detail--S em,
.spectrum:lang(zh) .spectrum-Detail--S em {
    font-size: var(
        --spectrum-detail-han-s-emphasis-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-detail-han-s-emphasis-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis)
    );
    line-height: var(
        --spectrum-detail-han-s-emphasis-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-s-emphasis-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-s-emphasis-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(
        --spectrum-detail-han-s-emphasis-text-transform,
        uppercase
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--S strong,
.spectrum:lang(ko) .spectrum-Detail--S strong,
.spectrum:lang(zh) .spectrum-Detail--S strong {
    font-size: var(
        --spectrum-detail-han-s-strong-text-size,
        var(--spectrum-global-dimension-font-size-50)
    );
    font-weight: var(
        --spectrum-detail-han-s-strong-text-font-weight,
        var(--spectrum-global-font-weight-black)
    );
    line-height: var(
        --spectrum-detail-han-s-strong-text-line-height,
        var(--spectrum-alias-heading-han-text-line-height)
    );
    font-style: var(
        --spectrum-detail-han-s-strong-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-detail-han-s-strong-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    text-transform: var(
        --spectrum-detail-han-s-strong-text-transform,
        uppercase
    );
    margin-top: 0;
    margin-bottom: 0;
}

.spectrum:lang(ja) .spectrum-Detail--light,
.spectrum:lang(ko) .spectrum-Detail--light,
.spectrum:lang(zh) .spectrum-Detail--light {
    font-weight: var(
        --spectrum-detail-han-xl-text-font-weight,
        var(--spectrum-alias-detail-text-font-weight)
    );
}

.spectrum:lang(ja) .spectrum-Detail--light em,
.spectrum:lang(ja) .spectrum-Detail--light .spectrum-Detail--emphasis,
.spectrum:lang(ko) .spectrum-Detail--light em,
.spectrum:lang(ko) .spectrum-Detail--light .spectrum-Detail--emphasis,
.spectrum:lang(zh) .spectrum-Detail--light em,
.spectrum:lang(zh) .spectrum-Detail--light .spectrum-Detail--emphasis {
    font-style: var(
        --spectrum-detail-han-light-xl-emphasis-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    font-weight: var(
        --spectrum-detail-han-light-xl-emphasis-text-font-weight,
        var(--spectrum-alias-han-heading-text-font-weight-light-emphasis)
    );
}

.spectrum:lang(ja) .spectrum-Detail--light strong,
.spectrum:lang(ja) .spectrum-Detail--light .spectrum-Detail--strong,
.spectrum:lang(ko) .spectrum-Detail--light strong,
.spectrum:lang(ko) .spectrum-Detail--light .spectrum-Detail--strong,
.spectrum:lang(zh) .spectrum-Detail--light strong,
.spectrum:lang(zh) .spectrum-Detail--light .spectrum-Detail--strong {
    font-style: var(
        --spectrum-detail-han-light-xl-strong-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    font-weight: var(
        --spectrum-detail-han-light-xl-strong-text-font-weight,
        var(--spectrum-alias-heading-text-font-weight-regular)
    );
}

.spectrum:lang(ja) .spectrum-Code--XL,
.spectrum:lang(ko) .spectrum-Code--XL,
.spectrum:lang(zh) .spectrum-Code--XL {
    font-size: var(
        --spectrum-code-han-xl-text-size,
        var(--spectrum-global-dimension-font-size-400)
    );
    font-weight: var(
        --spectrum-code-han-xl-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-code-han-xl-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-code-han-xl-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-code-han-xl-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-code-han-xl-text-font-family,
        var(--spectrum-alias-font-family-zh)
    );
}

.spectrum:lang(ja) .spectrum-Code--L,
.spectrum:lang(ko) .spectrum-Code--L,
.spectrum:lang(zh) .spectrum-Code--L {
    font-size: var(
        --spectrum-code-han-l-text-size,
        var(--spectrum-global-dimension-font-size-300)
    );
    font-weight: var(
        --spectrum-code-han-l-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-code-han-l-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-code-han-l-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-code-han-l-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-code-han-l-text-font-family,
        var(--spectrum-alias-font-family-zh)
    );
}

.spectrum:lang(ja) .spectrum-Code--M,
.spectrum:lang(ko) .spectrum-Code--M,
.spectrum:lang(zh) .spectrum-Code--M {
    font-size: var(
        --spectrum-code-han-m-text-size,
        var(--spectrum-global-dimension-font-size-200)
    );
    font-weight: var(
        --spectrum-code-han-m-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-code-han-m-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-code-han-m-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-code-han-m-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-code-han-m-text-font-family,
        var(--spectrum-alias-font-family-zh)
    );
}

.spectrum:lang(ja) .spectrum-Code--S,
.spectrum:lang(ko) .spectrum-Code--S,
.spectrum:lang(zh) .spectrum-Code--S {
    font-size: var(
        --spectrum-code-han-s-text-size,
        var(--spectrum-alias-font-size-default)
    );
    font-weight: var(
        --spectrum-code-han-s-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-code-han-s-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-code-han-s-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-code-han-s-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-code-han-s-text-font-family,
        var(--spectrum-alias-font-family-zh)
    );
}

.spectrum:lang(ja) .spectrum-Code--XS,
.spectrum:lang(ko) .spectrum-Code--XS,
.spectrum:lang(zh) .spectrum-Code--XS {
    font-size: var(
        --spectrum-code-han-xs-text-size,
        var(--spectrum-global-dimension-font-size-75)
    );
    font-weight: var(
        --spectrum-code-han-xs-text-font-weight,
        var(--spectrum-alias-han-body-text-font-weight-regular)
    );
    line-height: var(
        --spectrum-code-han-xs-text-line-height,
        var(--spectrum-alias-body-han-text-line-height)
    );
    font-style: var(
        --spectrum-code-han-xs-text-font-style,
        var(--spectrum-global-font-style-regular)
    );
    letter-spacing: var(
        --spectrum-code-han-xs-text-letter-spacing,
        var(--spectrum-global-font-letter-spacing-han)
    );
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(
        --spectrum-code-han-xs-text-font-family,
        var(--spectrum-alias-font-family-zh)
    );
}

.spectrum-Heading--XXXL {
    color: var(
        --spectrum-heading-xxxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading--XXL {
    color: var(
        --spectrum-heading-xxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading--XL {
    color: var(
        --spectrum-heading-xl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading--L {
    color: var(
        --spectrum-heading-l-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading--M {
    color: var(
        --spectrum-heading-m-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading--S {
    color: var(
        --spectrum-heading-s-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading--XS {
    color: var(
        --spectrum-heading-xs-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading--XXS {
    color: var(
        --spectrum-heading-xxs-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-XXXL--light {
    color: var(
        --spectrum-heading-light-xxxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-XXL--light {
    color: var(
        --spectrum-heading-light-xxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-XL--light {
    color: var(
        --spectrum-heading-light-xl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-L--light {
    color: var(
        --spectrum-heading-light-l-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-XXXL--heavy {
    color: var(
        --spectrum-heading-heavy-xxxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-XXL--heavy {
    color: var(
        --spectrum-heading-heavy-xxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-XL--heavy {
    color: var(
        --spectrum-heading-heavy-xl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-L--heavy {
    color: var(
        --spectrum-heading-heavy-l-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-XXXL--heading {
    color: var(
        --spectrum-heading-xxxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-XXL--heading {
    color: var(
        --spectrum-heading-xxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-XL--heading {
    color: var(
        --spectrum-heading-xl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading-L--heading {
    color: var(
        --spectrum-heading-l-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Body--XXXL {
    color: var(
        --spectrum-body-xxxl-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Body--XXL {
    color: var(
        --spectrum-body-xxl-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Body--XL {
    color: var(--spectrum-body-xl-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Body--L {
    color: var(--spectrum-body-l-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Body--M {
    color: var(--spectrum-body-m-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Body--S {
    color: var(--spectrum-body-s-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Body--XS {
    color: var(--spectrum-body-xs-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Detail--XL {
    color: var(
        --spectrum-detail-xl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Detail--L {
    color: var(
        --spectrum-detail-l-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Detail--M {
    color: var(
        --spectrum-detail-m-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Detail--S {
    color: var(
        --spectrum-detail-s-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Code--XL {
    color: var(--spectrum-code-xl-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Code--L {
    color: var(--spectrum-code-l-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Code--M {
    color: var(--spectrum-code-m-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Code--S {
    color: var(--spectrum-code-s-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Code--XS {
    color: var(--spectrum-code-xs-text-color, var(--spectrum-alias-text-color));
}

.spectrum:lang(ja) .spectrum-Body--XXXL,
.spectrum:lang(ko) .spectrum-Body--XXXL,
.spectrum:lang(zh) .spectrum-Body--XXXL {
    color: var(
        --spectrum-body-han-xxxl-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Body--XXL,
.spectrum:lang(ko) .spectrum-Body--XXL,
.spectrum:lang(zh) .spectrum-Body--XXL {
    color: var(
        --spectrum-body-han-xxl-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Body--XL,
.spectrum:lang(ko) .spectrum-Body--XL,
.spectrum:lang(zh) .spectrum-Body--XL {
    color: var(
        --spectrum-body-han-xl-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Body--L,
.spectrum:lang(ko) .spectrum-Body--L,
.spectrum:lang(zh) .spectrum-Body--L {
    color: var(
        --spectrum-body-han-l-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Body--M,
.spectrum:lang(ko) .spectrum-Body--M,
.spectrum:lang(zh) .spectrum-Body--M {
    color: var(
        --spectrum-body-han-m-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Body--S,
.spectrum:lang(ko) .spectrum-Body--S,
.spectrum:lang(zh) .spectrum-Body--S {
    color: var(
        --spectrum-body-han-s-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Body--XS,
.spectrum:lang(ko) .spectrum-Body--XS,
.spectrum:lang(zh) .spectrum-Body--XS {
    color: var(
        --spectrum-body-han-xs-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading--XXXL,
.spectrum:lang(ko) .spectrum-Heading--XXXL,
.spectrum:lang(zh) .spectrum-Heading--XXXL {
    color: var(
        --spectrum-heading-xxxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading--XXL,
.spectrum:lang(ko) .spectrum-Heading--XXL,
.spectrum:lang(zh) .spectrum-Heading--XXL {
    color: var(
        --spectrum-heading-xxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading--XL,
.spectrum:lang(ko) .spectrum-Heading--XL,
.spectrum:lang(zh) .spectrum-Heading--XL {
    color: var(
        --spectrum-heading-xl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading--L,
.spectrum:lang(ko) .spectrum-Heading--L,
.spectrum:lang(zh) .spectrum-Heading--L {
    color: var(
        --spectrum-heading-l-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading--M,
.spectrum:lang(ko) .spectrum-Heading--M,
.spectrum:lang(zh) .spectrum-Heading--M {
    color: var(
        --spectrum-heading-m-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading--S,
.spectrum:lang(ko) .spectrum-Heading--S,
.spectrum:lang(zh) .spectrum-Heading--S {
    color: var(
        --spectrum-heading-s-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading--XS,
.spectrum:lang(ko) .spectrum-Heading--XS,
.spectrum:lang(zh) .spectrum-Heading--XS {
    color: var(
        --spectrum-heading-xs-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading--XXS,
.spectrum:lang(ko) .spectrum-Heading--XXS,
.spectrum:lang(zh) .spectrum-Heading--XXS {
    color: var(
        --spectrum-heading-xxs-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-XXXL--light,
.spectrum:lang(ko) .spectrum-Heading-XXXL--light,
.spectrum:lang(zh) .spectrum-Heading-XXXL--light {
    color: var(
        --spectrum-heading-light-xxxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-XXL--light,
.spectrum:lang(ko) .spectrum-Heading-XXL--light,
.spectrum:lang(zh) .spectrum-Heading-XXL--light {
    color: var(
        --spectrum-heading-light-xxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-XL--light,
.spectrum:lang(ko) .spectrum-Heading-XL--light,
.spectrum:lang(zh) .spectrum-Heading-XL--light {
    color: var(
        --spectrum-heading-light-xl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-L--light,
.spectrum:lang(ko) .spectrum-Heading-L--light,
.spectrum:lang(zh) .spectrum-Heading-L--light {
    color: var(
        --spectrum-heading-light-l-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-XXXL--heavy,
.spectrum:lang(ko) .spectrum-Heading-XXXL--heavy,
.spectrum:lang(zh) .spectrum-Heading-XXXL--heavy {
    color: var(
        --spectrum-heading-heavy-xxxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-XXL--heavy,
.spectrum:lang(ko) .spectrum-Heading-XXL--heavy,
.spectrum:lang(zh) .spectrum-Heading-XXL--heavy {
    color: var(
        --spectrum-heading-heavy-xxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-XL--heavy,
.spectrum:lang(ko) .spectrum-Heading-XL--heavy,
.spectrum:lang(zh) .spectrum-Heading-XL--heavy {
    color: var(
        --spectrum-heading-heavy-xl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-L--heavy,
.spectrum:lang(ko) .spectrum-Heading-L--heavy,
.spectrum:lang(zh) .spectrum-Heading-L--heavy {
    color: var(
        --spectrum-heading-heavy-l-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-XXXL--heading,
.spectrum:lang(ko) .spectrum-Heading-XXXL--heading,
.spectrum:lang(zh) .spectrum-Heading-XXXL--heading {
    color: var(
        --spectrum-heading-xxxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-XXL--heading,
.spectrum:lang(ko) .spectrum-Heading-XXL--heading,
.spectrum:lang(zh) .spectrum-Heading-XXL--heading {
    color: var(
        --spectrum-heading-xxl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-XL--heading,
.spectrum:lang(ko) .spectrum-Heading-XL--heading,
.spectrum:lang(zh) .spectrum-Heading-XL--heading {
    color: var(
        --spectrum-heading-xl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading-L--heading,
.spectrum:lang(ko) .spectrum-Heading-L--heading,
.spectrum:lang(zh) .spectrum-Heading-L--heading {
    color: var(
        --spectrum-heading-l-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Detail--XL,
.spectrum:lang(ko) .spectrum-Detail--XL,
.spectrum:lang(zh) .spectrum-Detail--XL {
    color: var(
        --spectrum-detail-xl-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Detail--L,
.spectrum:lang(ko) .spectrum-Detail--L,
.spectrum:lang(zh) .spectrum-Detail--L {
    color: var(
        --spectrum-detail-l-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Detail--M,
.spectrum:lang(ko) .spectrum-Detail--M,
.spectrum:lang(zh) .spectrum-Detail--M {
    color: var(
        --spectrum-detail-m-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Detail--S,
.spectrum:lang(ko) .spectrum-Detail--S,
.spectrum:lang(zh) .spectrum-Detail--S {
    color: var(
        --spectrum-detail-s-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Code--XL,
.spectrum:lang(ko) .spectrum-Code--XL,
.spectrum:lang(zh) .spectrum-Code--XL {
    color: var(--spectrum-code-xl-text-color, var(--spectrum-alias-text-color));
}

.spectrum:lang(ja) .spectrum-Code--L,
.spectrum:lang(ko) .spectrum-Code--L,
.spectrum:lang(zh) .spectrum-Code--L {
    color: var(--spectrum-code-l-text-color, var(--spectrum-alias-text-color));
}

.spectrum:lang(ja) .spectrum-Code--M,
.spectrum:lang(ko) .spectrum-Code--M,
.spectrum:lang(zh) .spectrum-Code--M {
    color: var(--spectrum-code-m-text-color, var(--spectrum-alias-text-color));
}

.spectrum:lang(ja) .spectrum-Code--S,
.spectrum:lang(ko) .spectrum-Code--S,
.spectrum:lang(zh) .spectrum-Code--S {
    color: var(--spectrum-code-s-text-color, var(--spectrum-alias-text-color));
}

.spectrum:lang(ja) .spectrum-Code--XS,
.spectrum:lang(ko) .spectrum-Code--XS,
.spectrum:lang(zh) .spectrum-Code--XS {
    color: var(--spectrum-code-xs-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Body1 {
    color: var(--spectrum-body-1-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Body2,
.spectrum-Body--large {
    color: var(--spectrum-body-2-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Body3 {
    color: var(--spectrum-body-3-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Body4,
.spectrum-Body--secondary {
    color: var(--spectrum-body-4-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Body5,
.spectrum-Body--small {
    color: var(--spectrum-body-5-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Heading1 {
    color: var(
        --spectrum-heading-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading2 {
    color: var(
        --spectrum-heading-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading3 {
    color: var(
        --spectrum-heading-3-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading4,
.spectrum-Heading--subtitle1 {
    color: var(
        --spectrum-heading-4-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading5 {
    color: var(
        --spectrum-heading-5-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading6,
.spectrum-Heading--subtitle2 {
    color: var(
        --spectrum-heading-6-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Subheading,
.spectrum-Heading--subtitle3 {
    color: var(
        --spectrum-subheading-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Detail {
    color: var(--spectrum-detail-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Heading1--quiet {
    color: var(
        --spectrum-heading-quiet-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading2--quiet,
.spectrum-Heading--pageTitle {
    color: var(
        --spectrum-heading-quiet-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading1--strong {
    color: var(
        --spectrum-heading-strong-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading2--strong {
    color: var(
        --spectrum-heading-strong-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading1--display {
    color: var(
        --spectrum-display-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading2--display {
    color: var(
        --spectrum-display-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading1--display.spectrum-Heading1--strong {
    color: var(
        --spectrum-display-strong-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading2--display.spectrum-Heading2--strong {
    color: var(
        --spectrum-display-strong-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading1--display.spectrum-Heading1--quiet {
    color: var(
        --spectrum-display-quiet-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading2--display.spectrum-Heading2--quiet,
.spectrum-Heading--display {
    color: var(
        --spectrum-display-quiet-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Body1 {
    color: var(
        --spectrum-body-article-1-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Article .spectrum-Body2,
.spectrum-Article .spectrum-Body--large {
    color: var(
        --spectrum-body-article-2-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Article .spectrum-Body3 {
    color: var(
        --spectrum-body-article-3-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Article .spectrum-Body4,
.spectrum-Article .spectrum-Body--secondary {
    color: var(
        --spectrum-body-article-4-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Article .spectrum-Body5,
.spectrum-Article .spectrum-Body--small {
    color: var(
        --spectrum-body-article-5-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Article .spectrum-Heading1 {
    color: var(
        --spectrum-heading-article-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Heading2 {
    color: var(
        --spectrum-heading-article-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Heading3 {
    color: var(
        --spectrum-heading-article-3-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Heading4,
.spectrum-Article .spectrum-Heading--subtitle1 {
    color: var(
        --spectrum-heading-article-4-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Heading5 {
    color: var(
        --spectrum-heading-article-5-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Heading6,
.spectrum-Article .spectrum-Heading--subtitle2 {
    color: var(
        --spectrum-heading-article-6-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Subheading,
.spectrum-Article .spectrum-Heading--subtitle3 {
    color: var(
        --spectrum-subheading-article-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Detail {
    color: var(
        --spectrum-detail-article-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Article .spectrum-Heading1--quiet {
    color: var(
        --spectrum-heading-quiet-article-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Heading2--quiet,
.spectrum-Article .spectrum-Heading--pageTitle {
    color: var(
        --spectrum-heading-quiet-article-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Heading1--display {
    color: var(
        --spectrum-display-article-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Heading2--display {
    color: var(
        --spectrum-display-article-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Heading1--display.spectrum-Heading1--quiet {
    color: var(
        --spectrum-display-quiet-article-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Article .spectrum-Heading2--display.spectrum-Heading2--quiet,
.spectrum-Article .spectrum-Heading--display {
    color: var(
        --spectrum-display-quiet-article-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Body1,
.spectrum:lang(ko) .spectrum-Body1,
.spectrum:lang(zh) .spectrum-Body1 {
    color: var(
        --spectrum-body-han-1-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Body2,
.spectrum:lang(ko) .spectrum-Body2,
.spectrum:lang(zh) .spectrum-Body2,
.spectrum:lang(ja) .spectrum-Body--large,
.spectrum:lang(ko) .spectrum-Body--large,
.spectrum:lang(zh) .spectrum-Body--large {
    color: var(
        --spectrum-body-han-2-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Body3,
.spectrum:lang(ko) .spectrum-Body3,
.spectrum:lang(zh) .spectrum-Body3 {
    color: var(
        --spectrum-body-han-3-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Body4,
.spectrum:lang(ko) .spectrum-Body4,
.spectrum:lang(zh) .spectrum-Body4,
.spectrum:lang(ja) .spectrum-Body--secondary,
.spectrum:lang(ko) .spectrum-Body--secondary,
.spectrum:lang(zh) .spectrum-Body--secondary {
    color: var(
        --spectrum-body-han-4-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Body5,
.spectrum:lang(ko) .spectrum-Body5,
.spectrum:lang(zh) .spectrum-Body5,
.spectrum:lang(ja) .spectrum-Body--small,
.spectrum:lang(ko) .spectrum-Body--small,
.spectrum:lang(zh) .spectrum-Body--small {
    color: var(
        --spectrum-body-han-5-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading1,
.spectrum:lang(ko) .spectrum-Heading1,
.spectrum:lang(zh) .spectrum-Heading1 {
    color: var(
        --spectrum-heading-han-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading2,
.spectrum:lang(ko) .spectrum-Heading2,
.spectrum:lang(zh) .spectrum-Heading2 {
    color: var(
        --spectrum-heading-han-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading3,
.spectrum:lang(ko) .spectrum-Heading3,
.spectrum:lang(zh) .spectrum-Heading3 {
    color: var(
        --spectrum-heading-han-3-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading4,
.spectrum:lang(ko) .spectrum-Heading4,
.spectrum:lang(zh) .spectrum-Heading4,
.spectrum:lang(ja) .spectrum-Heading--subtitle1,
.spectrum:lang(ko) .spectrum-Heading--subtitle1,
.spectrum:lang(zh) .spectrum-Heading--subtitle1 {
    color: var(
        --spectrum-heading-han-4-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading5,
.spectrum:lang(ko) .spectrum-Heading5,
.spectrum:lang(zh) .spectrum-Heading5 {
    color: var(
        --spectrum-heading-han-5-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading6,
.spectrum:lang(ko) .spectrum-Heading6,
.spectrum:lang(zh) .spectrum-Heading6,
.spectrum:lang(ja) .spectrum-Heading--subtitle2,
.spectrum:lang(ko) .spectrum-Heading--subtitle2,
.spectrum:lang(zh) .spectrum-Heading--subtitle2 {
    color: var(
        --spectrum-heading-han-6-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Subheading,
.spectrum:lang(ko) .spectrum-Subheading,
.spectrum:lang(zh) .spectrum-Subheading,
.spectrum:lang(ja) .spectrum-Heading--subtitle3,
.spectrum:lang(ko) .spectrum-Heading--subtitle3,
.spectrum:lang(zh) .spectrum-Heading--subtitle3 {
    color: var(
        --spectrum-subheading-han-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Detail,
.spectrum:lang(ko) .spectrum-Detail,
.spectrum:lang(zh) .spectrum-Detail {
    color: var(
        --spectrum-detail-han-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading1--quiet,
.spectrum:lang(ko) .spectrum-Heading1--quiet,
.spectrum:lang(zh) .spectrum-Heading1--quiet {
    color: var(
        --spectrum-heading-quiet-han-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading2--quiet,
.spectrum:lang(ko) .spectrum-Heading2--quiet,
.spectrum:lang(zh) .spectrum-Heading2--quiet,
.spectrum:lang(ja) .spectrum-Heading--pageTitle,
.spectrum:lang(ko) .spectrum-Heading--pageTitle,
.spectrum:lang(zh) .spectrum-Heading--pageTitle {
    color: var(
        --spectrum-heading-quiet-han-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading1--strong,
.spectrum:lang(ko) .spectrum-Heading1--strong,
.spectrum:lang(zh) .spectrum-Heading1--strong {
    color: var(
        --spectrum-heading-strong-han-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading2--strong,
.spectrum:lang(ko) .spectrum-Heading2--strong,
.spectrum:lang(zh) .spectrum-Heading2--strong {
    color: var(
        --spectrum-heading-strong-han-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading1--display,
.spectrum:lang(ko) .spectrum-Heading1--display,
.spectrum:lang(zh) .spectrum-Heading1--display {
    color: var(
        --spectrum-display-han-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading2--display,
.spectrum:lang(ko) .spectrum-Heading2--display,
.spectrum:lang(zh) .spectrum-Heading2--display {
    color: var(
        --spectrum-display-han-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading1--display.spectrum-Heading1--strong,
.spectrum:lang(ko) .spectrum-Heading1--display.spectrum-Heading1--strong,
.spectrum:lang(zh) .spectrum-Heading1--display.spectrum-Heading1--strong {
    color: var(
        --spectrum-display-strong-han-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading2--display.spectrum-Heading2--strong,
.spectrum:lang(ko) .spectrum-Heading2--display.spectrum-Heading2--strong,
.spectrum:lang(zh) .spectrum-Heading2--display.spectrum-Heading2--strong {
    color: var(
        --spectrum-display-strong-han-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading1--display.spectrum-Heading1--quiet,
.spectrum:lang(ko) .spectrum-Heading1--display.spectrum-Heading1--quiet,
.spectrum:lang(zh) .spectrum-Heading1--display.spectrum-Heading1--quiet {
    color: var(
        --spectrum-display-quiet-han-1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum:lang(ja) .spectrum-Heading2--display.spectrum-Heading2--quiet,
.spectrum:lang(ko) .spectrum-Heading2--display.spectrum-Heading2--quiet,
.spectrum:lang(zh) .spectrum-Heading2--display.spectrum-Heading2--quiet,
.spectrum:lang(ja) .spectrum-Heading--display,
.spectrum:lang(ko) .spectrum-Heading--display,
.spectrum:lang(zh) .spectrum-Heading--display {
    color: var(
        --spectrum-display-quiet-han-2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Code1 {
    color: var(
        --spectrum-body-code-1-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Code2 {
    color: var(
        --spectrum-body-code-2-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Code3 {
    color: var(
        --spectrum-body-code-3-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Code4 {
    color: var(
        --spectrum-body-code-4-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Code5 {
    color: var(
        --spectrum-body-code-5-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum,
.spectrum-Body {
    color: var(--spectrum-body-text-color, var(--spectrum-alias-text-color));
}

.spectrum-Body--large {
    color: var(
        --spectrum-body-large-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Body--small {
    color: var(
        --spectrum-body-small-text-color,
        var(--spectrum-alias-text-color)
    );
}

.spectrum-Body--secondary {
    color: var(
        --spectrum-body-secondary-text-color,
        var(--spectrum-global-color-gray-700)
    );
}

.spectrum-Heading--display {
    color: var(
        --spectrum-heading-display-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading--pageTitle {
    color: var(
        --spectrum-heading-page-title-text-color,
        var(--spectrum-global-color-gray-700)
    );
}

.spectrum-Heading--subtitle1 {
    color: var(
        --spectrum-heading-subtitle1-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading--subtitle2 {
    color: var(
        --spectrum-heading-subtitle2-text-color,
        var(--spectrum-alias-heading-text-color)
    );
}

.spectrum-Heading--subtitle3 {
    color: var(
        --spectrum-heading-subtitle3-text-color,
        var(--spectrum-global-color-gray-700)
    );
}

/* stylelint-enable */
`,styleEl=document.createElement("style"),codeEl=document.createTextNode(code);styleEl.type="text/css",styleEl.appendChild(codeEl),document.head.appendChild(styleEl);
