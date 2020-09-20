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
    --spectrum-global-dimension-scale-factor: 1;
    --spectrum-global-dimension-size-0: 0px;
    --spectrum-global-dimension-size-10: 1px;
    --spectrum-global-dimension-size-25: 2px;
    --spectrum-global-dimension-size-40: 3px;
    --spectrum-global-dimension-size-50: 4px;
    --spectrum-global-dimension-size-65: 5px;
    --spectrum-global-dimension-size-75: 6px;
    --spectrum-global-dimension-size-85: 7px;
    --spectrum-global-dimension-size-100: 8px;
    --spectrum-global-dimension-size-115: 9px;
    --spectrum-global-dimension-size-125: 10px;
    --spectrum-global-dimension-size-130: 11px;
    --spectrum-global-dimension-size-150: 12px;
    --spectrum-global-dimension-size-160: 13px;
    --spectrum-global-dimension-size-175: 14px;
    --spectrum-global-dimension-size-200: 16px;
    --spectrum-global-dimension-size-225: 18px;
    --spectrum-global-dimension-size-250: 20px;
    --spectrum-global-dimension-size-300: 24px;
    --spectrum-global-dimension-size-350: 28px;
    --spectrum-global-dimension-size-400: 32px;
    --spectrum-global-dimension-size-450: 36px;
    --spectrum-global-dimension-size-500: 40px;
    --spectrum-global-dimension-size-550: 44px;
    --spectrum-global-dimension-size-600: 48px;
    --spectrum-global-dimension-size-675: 54px;
    --spectrum-global-dimension-size-700: 56px;
    --spectrum-global-dimension-size-800: 64px;
    --spectrum-global-dimension-size-900: 72px;
    --spectrum-global-dimension-size-1000: 80px;
    --spectrum-global-dimension-size-1200: 96px;
    --spectrum-global-dimension-size-1250: 100px;
    --spectrum-global-dimension-size-1600: 128px;
    --spectrum-global-dimension-size-1700: 136px;
    --spectrum-global-dimension-size-2000: 160px;
    --spectrum-global-dimension-size-2400: 192px;
    --spectrum-global-dimension-size-3000: 240px;
    --spectrum-global-dimension-size-3400: 272px;
    --spectrum-global-dimension-size-3600: 288px;
    --spectrum-global-dimension-size-4600: 368px;
    --spectrum-global-dimension-size-5000: 400px;
    --spectrum-global-dimension-size-6000: 480px;
    --spectrum-global-dimension-font-size-25: 10px;
    --spectrum-global-dimension-font-size-50: 11px;
    --spectrum-global-dimension-font-size-75: 12px;
    --spectrum-global-dimension-font-size-100: 14px;
    --spectrum-global-dimension-font-size-150: 15px;
    --spectrum-global-dimension-font-size-200: 16px;
    --spectrum-global-dimension-font-size-300: 18px;
    --spectrum-global-dimension-font-size-400: 20px;
    --spectrum-global-dimension-font-size-500: 22px;
    --spectrum-global-dimension-font-size-600: 25px;
    --spectrum-global-dimension-font-size-700: 28px;
    --spectrum-global-dimension-font-size-800: 32px;
    --spectrum-global-dimension-font-size-900: 36px;
    --spectrum-global-dimension-font-size-1000: 40px;
    --spectrum-global-dimension-font-size-1100: 45px;
    --spectrum-global-dimension-font-size-1200: 50px;
    --spectrum-global-dimension-font-size-1300: 60px;
    --spectrum-actionbutton-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-emphasized-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-quiet-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-quiet-emphasized-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-actionbutton-quiet-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-barloader-large-border-radius: 3px;
    --spectrum-barloader-large-indeterminate-border-radius: 3px;
    --spectrum-barloader-large-over-background-border-radius: 3px;
    --spectrum-barloader-small-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-barloader-small-indeterminate-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-barloader-small-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-breadcrumb-compact-item-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-breadcrumb-compact-button-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-breadcrumb-item-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-breadcrumb-button-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-breadcrumb-multiline-item-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-breadcrumb-multiline-button-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-text-padding-bottom: var(
        --spectrum-global-dimension-size-85
    );
    --spectrum-button-cta-min-width: var(--spectrum-global-dimension-size-900);
    --spectrum-button-cta-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-cta-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-text-padding-bottom: var(
        --spectrum-global-dimension-size-85
    );
    --spectrum-button-over-background-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-over-background-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-over-background-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-text-padding-bottom: var(
        --spectrum-global-dimension-size-85
    );
    --spectrum-button-primary-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-primary-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-primary-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-text-padding-bottom: var(
        --spectrum-global-dimension-size-85
    );
    --spectrum-button-quiet-over-background-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-over-background-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-button-quiet-over-background-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-over-background-cursor-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-button-quiet-primary-text-padding-bottom: var(
        --spectrum-global-dimension-size-85
    );
    --spectrum-button-quiet-primary-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-primary-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-button-quiet-primary-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-primary-cursor-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-button-quiet-secondary-text-padding-bottom: var(
        --spectrum-global-dimension-size-85
    );
    --spectrum-button-quiet-secondary-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-secondary-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-button-quiet-secondary-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-secondary-cursor-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-button-quiet-warning-text-padding-bottom: var(
        --spectrum-global-dimension-size-85
    );
    --spectrum-button-quiet-warning-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-quiet-warning-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-button-quiet-warning-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-quiet-warning-cursor-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-button-secondary-text-padding-bottom: var(
        --spectrum-global-dimension-size-85
    );
    --spectrum-button-secondary-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-secondary-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-secondary-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-text-padding-bottom: var(
        --spectrum-global-dimension-size-85
    );
    --spectrum-button-warning-min-width: var(
        --spectrum-global-dimension-size-900
    );
    --spectrum-button-warning-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-button-warning-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-checkbox-text-gap-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-text-gap-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-text-gap-indeterminate-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-text-gap-error-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-text-gap-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-text-gap-error-indeterminate-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-checkbox-emphasized-text-gap-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-emphasized-text-gap-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-emphasized-text-gap-indeterminate-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-emphasized-text-gap-error-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-emphasized-text-gap-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-emphasized-text-gap-error-indeterminate-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-checkbox-quiet-text-gap-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-quiet-text-gap-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-quiet-text-gap-indeterminate-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-quiet-text-gap-error-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-quiet-text-gap-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-quiet-text-gap-error-indeterminate-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-checkbox-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-circleloader-medium-border-size: 3px;
    --spectrum-circleloader-medium-over-background-border-size: 3px;
    --spectrum-circleloader-small-border-size: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-circleloader-small-over-background-border-size: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-colorhandle-loupe-margin: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-colorloupe-colorhandle-gap: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-colorslider-touch-hit-y: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-colorslider-vertical-touch-hit-x: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-colorwheel-min-size: var(--spectrum-global-dimension-size-2400);
    --spectrum-colorwheel-touch-hit-outer: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-colorwheel-touch-hit-inner: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-cyclebutton-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-cyclebutton-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-dialog-confirm-max-width: var(
        --spectrum-global-dimension-static-size-6000
    );
    --spectrum-dialog-confirm-title-text-size: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-dialog-confirm-description-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-dialog-confirm-padding: var(
        --spectrum-global-dimension-static-size-500
    );
    --spectrum-dialog-confirm-description-margin-bottom: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-dialog-max-width: var(
        --spectrum-global-dimension-static-size-6000
    );
    --spectrum-dialog-title-text-size: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-dialog-content-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-dialog-padding: var(--spectrum-global-dimension-static-size-500);
    --spectrum-dialog-content-margin-bottom: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-dialog-destructive-max-width: var(
        --spectrum-global-dimension-static-size-6000
    );
    --spectrum-dialog-destructive-title-text-size: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-dialog-destructive-description-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-dialog-destructive-padding: var(
        --spectrum-global-dimension-static-size-500
    );
    --spectrum-dialog-destructive-description-margin-bottom: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-dialog-error-max-width: var(
        --spectrum-global-dimension-static-size-6000
    );
    --spectrum-dialog-error-title-text-size: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-dialog-error-description-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-dialog-error-padding: var(
        --spectrum-global-dimension-static-size-500
    );
    --spectrum-dialog-error-description-margin-bottom: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-dialog-info-max-width: var(
        --spectrum-global-dimension-static-size-6000
    );
    --spectrum-dialog-info-title-text-size: var(
        --spectrum-global-dimension-font-size-300
    );
    --spectrum-dialog-info-description-text-size: var(
        --spectrum-global-dimension-font-size-100
    );
    --spectrum-dialog-info-padding: var(
        --spectrum-global-dimension-static-size-500
    );
    --spectrum-dialog-info-description-margin-bottom: var(
        --spectrum-global-dimension-static-size-600
    );
    --spectrum-dropdown-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-dropdown-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-dropdown-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-dropdown-thumbnail-small-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-dropdown-thumbnail-small-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-fieldbutton-quiet-min-width: var(
        --spectrum-global-dimension-size-225
    );
    --spectrum-icon-arrow-down-small-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-arrow-left-medium-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-checkmark-medium-width: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-checkmark-medium-height: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-checkmark-small-width: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-checkmark-small-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-chevron-down-medium-width: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-chevron-left-large-width: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-chevron-left-medium-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-chevron-right-large-width: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-chevron-right-medium-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-cross-large-width: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-cross-large-height: var(
        --spectrum-global-dimension-size-150
    );
    --spectrum-icon-dash-small-width: var(--spectrum-global-dimension-size-125);
    --spectrum-icon-dash-small-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-skip-left-width: 9px;
    --spectrum-icon-skip-left-height: var(--spectrum-global-dimension-size-125);
    --spectrum-icon-skip-right-width: 9px;
    --spectrum-icon-skip-right-height: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-icon-triplegripper-width: var(
        --spectrum-global-dimension-size-125
    );
    --spectrum-listitem-option-icon-size: var(
        --spectrum-global-dimension-static-size-150
    );
    --spectrum-listitem-option-icon-margin-top: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-listitem-option-height: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-listitem-option-icon-padding-y: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-listitem-thumbnail-option-icon-margin-top: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-listitem-thumbnail-option-icon-padding-y: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-selectlist-thumbnail-small-option-icon-margin-top: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-selectlist-thumbnail-small-option-icon-padding-y: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-selectlist-option-icon-size: var(
        --spectrum-global-dimension-static-size-150
    );
    --spectrum-selectlist-option-icon-padding-y: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-selectlist-option-icon-margin-top: var(
        --spectrum-global-dimension-static-size-65
    );
    --spectrum-selectlist-option-height: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-selectlist-thumbnail-option-icon-padding-y: var(
        --spectrum-global-dimension-static-size-125
    );
    --spectrum-loader-bar-large-border-radius: 3px;
    --spectrum-loader-bar-large-over-background-border-radius: 3px;
    --spectrum-loader-bar-small-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-loader-bar-small-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-loader-circle-medium-border-size: 3px;
    --spectrum-loader-circle-medium-over-background-border-size: 3px;
    --spectrum-loader-circle-small-border-size: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-loader-circle-small-over-background-border-size: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-meter-large-border-radius: 3px;
    --spectrum-meter-small-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-pagination-page-button-line-height: 26px;
    --spectrum-picker-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-quiet-min-width: var(
        --spectrum-global-dimension-size-225
    );
    --spectrum-picker-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-picker-thumbnail-small-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-picker-thumbnail-small-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-progressbar-large-border-radius: 3px;
    --spectrum-progressbar-large-indeterminate-border-radius: 3px;
    --spectrum-progressbar-large-over-background-border-radius: 3px;
    --spectrum-progressbar-small-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progressbar-small-indeterminate-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progressbar-small-over-background-border-radius: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progresscircle-medium-border-size: 3px;
    --spectrum-progresscircle-medium-over-background-border-size: 3px;
    --spectrum-progresscircle-small-border-size: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progresscircle-small-indeterminate-border-size: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progresscircle-small-over-background-border-size: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-progresscircle-medium-indeterminate-border-size: 3px;
    --spectrum-radio-text-gap-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-text-gap-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-text-gap-error-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-text-gap-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-margin-bottom: 0px;
    --spectrum-radio-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-radio-emphasized-text-gap-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-emphasized-text-gap-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-emphasized-text-gap-error-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-emphasized-text-gap-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-emphasized-margin-bottom: 0px;
    --spectrum-radio-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-radio-quiet-text-gap-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-quiet-text-gap-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-quiet-text-gap-error-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-quiet-text-gap-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-radio-quiet-margin-bottom: 0px;
    --spectrum-radio-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-rating-icon-width: 24px;
    --spectrum-rating-indicator-width: 16px;
    --spectrum-rating-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-rating-emphasized-icon-width: 24px;
    --spectrum-rating-emphasized-indicator-width: 16px;
    --spectrum-rating-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-rating-quiet-icon-width: 24px;
    --spectrum-rating-quiet-indicator-width: 16px;
    --spectrum-rating-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-icon-frame: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-search-quiet-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-search-quiet-icon-frame: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-sidenav-item-touch-hit-bottom: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-sidenav-multilevel-item-touch-hit-bottom: var(
        --spectrum-global-dimension-static-size-25
    );
    --spectrum-slider-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-editable-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-editable-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-editable-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-fill-track-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-slider-fill-handle-touch-hit-x: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-slider-fill-handle-touch-hit-y: var(
        --spectrum-global-dimension-static-size-200
    );
    --spectrum-switch-focus-ring-border-radius-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-text-gap-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-text-gap-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-text-gap-error-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-text-gap-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-track-width: 26px;
    --spectrum-switch-handle-border-radius: 7px;
    --spectrum-switch-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-switch-emphasized-focus-ring-border-radius-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-emphasized-text-gap-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-emphasized-text-gap-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-emphasized-text-gap-error-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-emphasized-text-gap-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-emphasized-track-width: 26px;
    --spectrum-switch-emphasized-handle-border-radius: 7px;
    --spectrum-switch-emphasized-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-switch-quiet-focus-ring-border-radius-key-focus: var(
        --spectrum-global-dimension-static-size-130
    );
    --spectrum-switch-quiet-text-gap-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-quiet-text-gap-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-quiet-text-gap-error-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-quiet-text-gap-error-selected-key-focus: var(
        --spectrum-global-dimension-static-size-115
    );
    --spectrum-switch-quiet-track-width: 26px;
    --spectrum-switch-quiet-handle-border-radius: 7px;
    --spectrum-switch-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-tabs-compact-focus-ring-border-radius: 5px;
    --spectrum-tabs-compact-margin-left: -8px;
    --spectrum-tabs-compact-margin-right: -8px;
    --spectrum-tabs-compact-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-compact-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-baseline: var(--spectrum-global-dimension-size-225);
    --spectrum-tabs-focus-ring-border-radius: 5px;
    --spectrum-tabs-margin-left: -8px;
    --spectrum-tabs-margin-right: -8px;
    --spectrum-tabs-emphasized-baseline: var(
        --spectrum-global-dimension-size-225
    );
    --spectrum-tabs-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-emphasized-margin-left: -8px;
    --spectrum-tabs-emphasized-margin-right: -8px;
    --spectrum-tabs-quiet-baseline: var(--spectrum-global-dimension-size-225);
    --spectrum-tabs-quiet-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-margin-left: -8px;
    --spectrum-tabs-quiet-margin-right: -8px;
    --spectrum-tabs-quiet-compact-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-compact-margin-left: -8px;
    --spectrum-tabs-quiet-compact-margin-right: -8px;
    --spectrum-tabs-quiet-compact-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-compact-emphasized-margin-left: -8px;
    --spectrum-tabs-quiet-compact-emphasized-margin-right: -8px;
    --spectrum-tabs-quiet-compact-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-compact-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-emphasized-baseline: var(
        --spectrum-global-dimension-size-225
    );
    --spectrum-tabs-quiet-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-emphasized-margin-left: -8px;
    --spectrum-tabs-quiet-emphasized-margin-right: -8px;
    --spectrum-tabs-quiet-vertical-baseline: var(
        --spectrum-global-dimension-size-225
    );
    --spectrum-tabs-quiet-vertical-focus-ring-border-radius: 5px;
    --spectrum-tabs-quiet-vertical-emphasized-baseline: var(
        --spectrum-global-dimension-size-225
    );
    --spectrum-tabs-quiet-vertical-emphasized-focus-ring-border-radius: 5px;
    --spectrum-tabs-vertical-baseline: var(
        --spectrum-global-dimension-size-225
    );
    --spectrum-tabs-vertical-focus-ring-border-radius: 5px;
    --spectrum-textarea-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-icon-frame: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-textarea-quiet-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textarea-quiet-icon-frame: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-textfield-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-icon-frame: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-textfield-quiet-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-quiet-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-textfield-quiet-icon-frame: var(
        --spectrum-global-dimension-static-size-400
    );
    --spectrum-tool-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-tool-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-tool-high-emphasis-touch-hit-x: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-tool-high-emphasis-touch-hit-y: var(
        --spectrum-global-dimension-static-size-100
    );
    --spectrum-tooltip-padding-bottom: 5px;
    --spectrum-tooltip-content-max-width: 101px;
    --spectrum-tooltip-info-padding-bottom: 5px;
    --spectrum-tooltip-info-content-max-width: 101px;
    --spectrum-tooltip-negative-padding-bottom: 5px;
    --spectrum-tooltip-negative-content-max-width: 101px;
    --spectrum-tooltip-positive-padding-bottom: 5px;
    --spectrum-tooltip-positive-content-max-width: 101px;
}

/* stylelint-enable */
`,styleEl=document.createElement("style"),codeEl=document.createTextNode(code);styleEl.type="text/css",styleEl.appendChild(codeEl),document.head.appendChild(styleEl);
