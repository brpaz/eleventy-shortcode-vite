# Eleventy shortcode vite

> [Eleventy](https://www.11ty.dev/) shortcodes to integrate with [Vite](https://vitejs.dev/).

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/brpaz/eleventy-shortcode-vite/CI?style=for-the-badge)](https://github.com/brpaz/eleventy-shortcode-vite/actions/workflows/ci.yml)
![NPM](https://img.shields.io/npm/v/@brpaz/eleventy-shortcode-vite?style=for-the-badge)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

## Install

```
npm i -D @brpaz/eleventy-shortcode-vite
```

## Usage

On your `.eleventy.js`, register Vite shortcodes, like this:

```js
const viteShortcodes = require('@brpaz/eleventy-shortcodes-vite)

module.exports = function (eleventyConfig) {
    if (process.env.NODE_ENV === 'production') {
        viteShortcodes.register(eleventyConfig, '<path_to_vite_manifest_file>')
    }
}
```

It´s important to only register for the "production/build" envrionment, otherwise the manifest file won´t exist and it will fail.

This will register the following shortcodes, that you can use on your HTML:

| Shortcode           	| Description                                         	|
|---------------------	|-----------------------------------------------------	|
| viteScriptTag       	| Use to include a Javascript file with ES Modules    	|
| viteLegacyScriptTag 	| Use to include a Javascript file without ES Modules (if you have [Vite Legacy plugin](https://www.npmjs.com/package/@vitejs/plugin-legacy)) 	|
| viteStylesheetTag   	| Use to include a CSS File                           	|

### Add your scripts and stylesheets on your html file.

On development, we will use Vite dev server directly, so we have to know in which envrionment we are. 

We can use the [Global Data files](https://www.11ty.dev/docs/data-global/) feature of eleventy and create a `_data/build.js` that will read our envrionment variables and create a variable that Eleventy templates can access.

```js
module.exports = {
  env: process.env.NODE_ENV || 'production',
  viteServerUrl: process.env.VITE_URL || 'localhost:3000',
}
```

Then on your `layout` or `index.html`file:

```html
{% if build.env == "production" %}
    {% viteScript "src/assets/main.js" %}
    {% viteLegacyScript "vite/legacy-polyfills" %}
    {% viteLegacyScript "src/assets/main-legacy.js" %}
    {% viteStylesheet "src/assets/main.js" %}
{% else %}
    <script type="module" src="{{ build.viteServerUrl }}/@vite/client"></script>
    <script type="module" src="{{ build.viteServerUrl }}/src/assets/main.js"></script>
{% endif %}
``` 

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

👤 **Bruno Paz**

* Website: [brunopaz.dev](https://brunopaz.dev)
* Github: [@brpaz](https://github.com/brpaz)
* Twitter: [@brunopaz88](https://twitter.com/brunopaz88)

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.


