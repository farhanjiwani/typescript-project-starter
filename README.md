<h1 align="center">
  TypeScript Starter Project
</h1>

<p align="center">
  <a href="https://github.com/farhanjiwani/typescript-project-starter/releases"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/farhanjiwani/typescript-project-starter"></a> <a href="https://github.com/farhanjiwani/typescript-project-starter/commits/main/"><img alt="GitHub commits since latest release" src="https://img.shields.io/github/commits-since/farhanjiwani/typescript-project-starter/latest"></a>
  <br />
  <a href="https://github.com/farhanjiwani/typescript-project-starter/releases"><img alt="GitHub Downloads (specific asset, latest release)" src="https://img.shields.io/github/downloads/farhanjiwani/typescript-project-starter/latest/v0.0.2.zip"></a>
  <br /><br />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /><img alt="TS-Node" src="https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white" /> <img alt="SASS" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" /><img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /><img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <br />
  <img alt="Editor Config" src="https://img.shields.io/badge/Editor%20Config-E0EFEF?style=for-the-badge&logo=editorconfig&logoColor=000" /> <img alt="ESLint" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" /><img alt="Stylelint" src="https://img.shields.io/badge/stylelint-000?style=for-the-badge&logo=stylelint&logoColor=white" /> <img alt="Jest" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
  <br />
  <img alt="Webpack" src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" /> <img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" /> <img alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />

</p>

---



## What's Here

* [HTML5 Boilerplate](https://html5boilerplate.com/)
  * Webpack
    * configs: dev, prod, common
    * dev server
  * a basic HTML template
  * `.editorconfig`
  * `.gitattributes`
  * favicon: ICO, PNG, SVG
  * `LICENSE.txt`
  * `robots.txt`
  * `site.webmanifest`
* [Node `.gitginore`](https://github.com/github/gitignore/blob/main/Node.gitignore)
* A basic TypeScript config
* SASS
  * w/ H5B's CSS reset (includes print media query)
  * `sr-only` & [`sr-only-focusable`](https://gist.github.com/ffoodd/000b59f431e3e64e4ce1a24d5bb36034) mixins/classes
* ESLint
* Stylelint
* Jest

## TODOs

* There is a FOUC
  * Try to use the CSS extract plugin
* Make sure `LICENSE.txt` is actually the one listed in `package.json`

## How to Use

* Download the [latest zip](https://github.com/farhanjiwani/typescript-project-starter/releases)
* Unzip to new project directory
* Run `npm install` from your project directory
* Run `npm start:open` to open a new browser tab/window with the blank template
* ????
* Profit!


### `npm` Scripts

* `test`: runs Jest
  * `test:changed`: runs for files changed since last commit
  * `test:watch`: runs on file change
* `start`: starts dev environment
  * `start:open`: starts dev environment with browser tab
* `lint`: runs ESLint and Stylelint
  * `lint:styles`: runs Stylelint only
    * `lint:styles:fix`: runs Stylelint only and attempts to fix found issues
  * `lint:js`: runs ESLint only
    * `lint:js:fix`: runs ESLint only and attempts to fix found issues
* `build`: outputs to the `/dist` folder
* `serve`: runs the build and then serves the `/dist` folder
  * `serve:dist`: serves the `/dist` folder

### Notes

#### Jest

ECMAScript modules are activated for tests and they use `cross-env` for Windows users in the `package.json` file. If you are **not on Windows** but still need ESM modules, use one of the options on the [JestJS ESM modules docs page](https://jestjs.io/docs/ecmascript-modules).
