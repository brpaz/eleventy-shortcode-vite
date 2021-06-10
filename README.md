# Eleventy shortcode vite

> [Eleventy](https://www.11ty.dev/) shortcodes to integrate with [Vite](https://vitejs.dev/).

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/brpaz/eleventy-shortcode-vite/CI?style=for-the-badge)](https://github.com/brpaz/eleventy-shortcode-vite/actions/workflows/ci.yml)
![NPM](https://img.shields.io/npm/v/brpaz/eleventy-shortcode-vite?style=for-the-badge)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

## Install

```
npm i -D @brpaz/eleventy-shortcode-vite
```

## Usage

On your `.eleventy.js`, register the following shortcodes.

```js
const viteShortcodes = require('@brpaz/eleventy-shortcodes-vite)

module.exports = function (eleventyConfig) {
    viteShortcodes.register(eleventyConfig, '<path_to_vite_manifest_file>')
}    
```

This will register the following shortcodes, that you can use on your HTML:

| Shortcode           	| Description                                         	|
|---------------------	|-----------------------------------------------------	|
| viteScriptTag       	| Use to include a Javascript file with ES Modules    	|
| viteLegacyScriptTag 	| Use to include a Javascript file without ES Modules 	|
| viteStylesheetTag   	| Use to include a CSS File                           	|


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


