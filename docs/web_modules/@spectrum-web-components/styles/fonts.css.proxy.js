if(typeof document!="undefined"){const n=`/*
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

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

:root,
:host {
    --spectrum-font-fallbacks-sans: -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, sans-serif;

    /* Not used
  --spectrum-font-fallbacks-serif: serif;
  --spectrum-font-fallbacks-mono: monospace;
  --spectrum-font-family-article: adobe-clean-serif, 'Source Serif', var(--spectrum-font-fallbacks-serif);
  --spectrum-font-family-article-ar: adobe-arabic, var(--spectrum-font-fallbacks-serif);
  --spectrum-font-family-article-he: adobe-hebrew, var(--spectrum-font-fallbacks-serif);
  --spectrum-font-family-article-ja: source-han-serif-japanese, var(--spectrum-font-fallbacks-serif);
  --spectrum-font-family-article-ko: source-han-serif-korean, var(--spectrum-font-fallbacks-serif);
  --spectrum-font-family-article-zh-hans: source-han-serif-sc, var(--spectrum-font-fallbacks-serif);
  --spectrum-font-family-article-zh-hant: source-han-serif-tc, 'MingLiu', var(--spectrum-font-fallbacks-serif);
  --spectrum-font-family-code: source-code-pro, 'Source Code Pro', var(--spectrum-font-fallbacks-mono);
  --spectrum-font-family-condensed: adobe-clean-condensed, var(--spectrum-font-family-base);
  */

    --spectrum-font-family-base: var(--spectrum-alias-body-text-font-family);
    --spectrum-font-family-ar: var(--spectrum-alias-font-family-ar);
    --spectrum-font-family-he: var(--spectrum-alias-font-family-he);
    --spectrum-font-family-zh: var(--spectrum-alias-font-family-zh);
    --spectrum-font-family-zhhans: var(--spectrum-alias-font-family-zhhans);
    --spectrum-font-family-ko: var(--spectrum-alias-font-family-ko);
    --spectrum-font-family-ja: var(--spectrum-alias-font-family-ja);
    --spectrum-font-family-han: var(--spectrum-alias-font-family-zh);
    --spectrum-font-family-zhhant: var(--spectrum-alias-font-family-zh);
    --spectrum-text-size: var(--spectrum-alias-font-size-default);
    --spectrum-text-body-line-height: var(--spectrum-alias-line-height-medium);
    --spectrum-text-size-text-label: var(--spectrum-label-text-size);
    --spectrum-line-height-text-label: var(--spectrum-label-text-line-height);
}

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

:root,
:host {
    font-family: var(--spectrum-font-family-base);
    font-size: var(--spectrum-text-size);

    &:lang(ar) {
        font-family: var(--spectrum-font-family-ar);
    }

    &:lang(he) {
        font-family: var(--spectrum-font-family-he);
    }

    &:lang(zh-Hans) {
        font-family: var(--spectrum-font-family-zhhans);
    }

    &:lang(zh-Hant) {
        font-family: var(--spectrum-font-family-zhhant);
    }

    &:lang(zh) {
        font-family: var(--spectrum-font-family-zh);
    }

    &:lang(ko) {
        font-family: var(--spectrum-font-family-ko);
    }

    &:lang(ja) {
        font-family: var(--spectrum-font-family-ja);
    }
}

/* stylelint-enable */
`,e=document.createElement("style"),t=document.createTextNode(n);e.type="text/css",e.appendChild(t),document.head.appendChild(e)}
