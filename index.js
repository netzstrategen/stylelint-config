"use strict";

module.exports = {
  "plugins": [
    "stylelint-scss",
    "stylelint-selector-bem-pattern",
  ],
  "extends": [
    "@zazen/stylelint-config",
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "at-rule-semicolon-newline-after": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "font-family-name-quotes": "always-where-required",

    "function-comma-newline-after": "never-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never-single-line",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 5,
    "function-name-case": "lower",
    "function-whitespace-after": "always",

    "indentation": 2,
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
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "number-leading-zero": "always",

    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "selector-max-empty-lines": 5,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-colon-notation": "single",

    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-before": "never",
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/declaration-nested-properties": "never",

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
  },
};
