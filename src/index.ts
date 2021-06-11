import { ManifestParser } from '@brpaz/vite-manifest-parser';
import * as fs from 'fs';
interface EleventyConfig {
  addShortcode(name: string, callback: Function): void; // eslint-disable-line @typescript-eslint/ban-types
}

export default class ViteShortcodes {
  private manifestParser: ManifestParser;

  private constructor(eleventyConfig: EleventyConfig, manifestPath: string) {
    this.manifestParser = new ManifestParser(manifestPath);
    eleventyConfig.addShortcode('viteScript', this.viteScriptTag.bind(this));
    eleventyConfig.addShortcode('viteLegacyScript', this.viteLegacyScriptTag.bind(this));
    eleventyConfig.addShortcode('viteStylesheet', this.viteStylesheetTag.bind(this));
    eleventyConfig.addShortcode('viteScriptPreload', this.viteScriptPreload.bind(this));
  }

  static register(eleventyConfig: EleventyConfig, manifestPath: string): ViteShortcodes {
    return new ViteShortcodes(eleventyConfig, manifestPath);
  }

  viteScriptTag(entryFilename: string): string {
    const filePath = this.manifestParser.getScript(entryFilename);

    return `<script type="module" src="${filePath}"></script>`;
  }

  viteLegacyScriptTag(entryFilename: string): string {
    const filePath = this.manifestParser.getScript(entryFilename);

    return `<script type="nomodule" src="${filePath}"></script>`;
  }

  viteStylesheetTag(entryFilename: string): string {
    const cssFiles = this.manifestParser.getCss(entryFilename);

    return cssFiles.map((cssFile) => `<link rel="stylesheet" href="${cssFile}"/>`).join('\n');
  }

  viteScriptPreload(entryFilename: string): string {
    const imports = this.manifestParser.getImports(entryFilename);

    return imports
      .map((file) => {
        return `<link rel="modulepreload" href="${file}"/>`;
      })
      .join('\n');
  }
}
