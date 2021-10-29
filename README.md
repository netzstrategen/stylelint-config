# Netzstrategen stylelint config

Standard stylelint config for Netzstrategen projects.

## Installation

Install the configuration and all peer dependencies:

```bash
npm install --save-dev @netzstrategen/stylelint-config stylelint-scss stylelint-selector-bem-pattern stylelint
```

## Usage

### Create the stylelint configuration

Create a [stylelint configuration](https://stylelint.io/user-guide/configuration/) json file:

**.stylelintrc.json**

```json
{
  "extends": [
    "@netzstrategen/stylelint-config"
  ]
}
```

### Modifying the config

Overwrite rules from the default Netzstrategen config:

```json
{
  "extends": [
    "stylelint-config-netzstrategen"
  ],
  "rules": {
    "no-empty-source": null
  }
}
```

Stylelint has an extensive [list of rules](https://stylelint.io/user-guide/rules/). Additional rules are provided by the following packages:

- [@zazen/stylelint-config](https://github.com/stormwarning/zazen-stylelint-config)
  - [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
  - [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss)
- [stylelint-selector-bem-pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern)
