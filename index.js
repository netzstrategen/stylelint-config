"use strict";

module.exports = {
  "plugins": [
    "stylelint-scss",
    "stylelint-selector-bem-pattern",
  ],
  "extends": [
    "stylelint-config-hudochenkov/order",
  ],
  "rules": {
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-before": "never",
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/declaration-nested-properties": "never",

    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",

    "block-closing-brace-newline-before": "always-multi-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",

    "color-hex-case": "lower",
    "color-no-invalid-hex": true,

    "comment-no-empty": true,
    "comment-whitespace-inside": "always",

    "declaration-bang-space-after": "never",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-before": "never",

    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 2,
    "declaration-block-trailing-semicolon": "always",

    "font-family-name-quotes": "always-where-required",
    "font-family-no-duplicate-names": true,

    "function-comma-newline-after": "never-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never-single-line",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 5,
    "function-name-case": "lower",
    "function-whitespace-after": "always",

    "indentation": 2,

    "length-zero-no-unit": true,

    "max-empty-lines": 10,
    "max-line-length": 180,
    "max-nesting-depth": 4,

    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",

    "no-descending-specificity": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,

    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,

    "plugin/selector-bem-pattern": {
      "componentName": "(([a-z0-9]+(?!-$)-?)+)",
      "componentSelectors": {
        "initial": "\\.{componentName}(((__|--)(([a-z0-9\\[\\]'=]+(?!-$)-?)+))+)?$"
      },
      "ignoreSelectors": [
        ".*\\.no-js.*",
        ".*\\.js-.*",
        ".*\\.lt-ie.*"
      ],
    },

    "property-case": "lower",

    "rule-empty-line-before": ["always-multi-line", {
      ignore: ["after-comment", "inside-block"],
    }],

    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "selector-max-compound-selectors": 5,
    "selector-max-empty-lines": 5,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "single",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,

    "string-no-newline": true,

    "unit-case": "lower",
    "unit-no-unknown": true,

    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-no-vendor-prefix": true,
  },
};
