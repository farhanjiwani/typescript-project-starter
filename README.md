# TypeScript Starter Project

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
* Move source files to a `src` directory
* Make sure `LICENSE.txt` is actually the one listed in `package.json`

## `npm` Scripts

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

## Notes

### Jest

ECMAScript modules are activated for tests and they use `cross-env` for Windows users in the `package.json` file. If you are **not on Windows** but still need ESM modules, use one of the options on the [JestJS ESM modules docs page](https://jestjs.io/docs/ecmascript-modules).
