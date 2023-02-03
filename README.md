<h1 align="center">@sserov/presets-lint</h1>
<p align="center">
  <img src="./logo.png" width="300" alt="Logo">
</p>

## Installation
To install all project dependencies, it is recommended to use [install-peerdeps](https://github.com/nathanhleung/install-peerdeps)

```
npx install-peerdeps --dev @sserov/presets-lint
```

If you are currently using yarn you may have problems using `install-peerdeps`.
Look at this [issue](https://github.com/nathanhleung/install-peerdeps/issues/70). A workaround would be to use the version `1.11.0`.

```
npx install-peerdeps@1.11.0 --dev @sserov/presets-lint
```

You can also supply all the necessary peerDependencies manually. For this, find out the required versions by command

```
npm info "@sserov/presets-lint@latest" peerDependencies
```

And add them to your project as dev dependency.


## Configuration linters using `package.json`


```json
{
    "prettier": "./node_modules/@sserov/presets-lint/prettier.js",
    "eslintConfig": {
        "extends": "./node_modules/@sserov/presets-lint/eslint.js"
    },
    "stylelint": {
        "extends": "./node_modules/@sserov/presets-lint/stylelint.js"
    },
    "commitlint": {
        "extends": ["./node_modules/@sserov/presets-lint/commitlint.js"]
    }
}
```
## Configuration scripts for linters and formatters using `package.json`

```json
{
    "scripts": {
        "lint:css": "stylelint ./src/**/*.css",
        "lint:scripts": "eslint \"**/*.{js,jsx,ts,tsx}\"",
        "lint": "yarn lint:css && yarn lint:scripts",
    }
}
```

## Configuration `simple-git-hooks` and `lint-staged`:

```json
{
	"lint-staged": {
		"**/*.{js,jsx,ts,tsx}": [
			"prettier-eslint --write",
			"eslint"
		],
		"**/*.css": [
			"prettier-eslint --write",
			"stylelint"
		]
	},
   	"simple-git-hooks": {
		"pre-commit": "npx lint-staged",
		"commit-msg": "npx commitlint -e"
	}
}
```
