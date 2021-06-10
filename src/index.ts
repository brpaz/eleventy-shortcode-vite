import { ManifestParser } from '@brpaz/vite-manifest-parser';

interface EleventyConfig {
  addShortcode(name: string, callback: Function): void; // eslint-disable-line @typescript-eslint/ban-types
}

export default class ViteShortcodes {
  private manifestParser: ManifestParser;

  private constructor(eleventyConfig: EleventyConfig, manifestPath: string) {
    this.manifestParser = new ManifestParser(manifestPath);
    eleventyConfig.addShortcode('viteScript', this.viteScriptTag);
    eleventyConfig.addShortcode('viteLegacyScript', this.viteLegacyScriptTag);
    eleventyConfig.addShortcode('viteSytlesheet', this.viteStylesheetTag);
  }

  static register(eleventyConfig: EleventyConfig, manifestPath: string): ViteShortcodes {
    return new ViteShortcodes(eleventyConfig, manifestPath);
  }

  viteScriptTag(entry: string): string {
    const filePath = this.manifestParser.getScript(entry);

    return `<script type="module" src="${filePath}"></script>`;
  }

  viteLegacyScriptTag(entry: string): string {
    const filePath = this.manifestParser.getScript(entry);

    return `<script type="nomodule" src="${filePath}"></script>`;
  }

  viteStylesheetTag(entry: string): string {
    const cssFiles = this.manifestParser.getCss(entry);

    return cssFiles.map((cssFile) => `<link rel="stylesheet" href="${cssFile}"></link>`).join('\n');
  }
}
