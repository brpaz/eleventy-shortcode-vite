import ViteShortcodes from './index';

import * as path from 'path';

const manifestPath = path.join(__dirname, '..', 'test', 'resources', 'manifest.json');
const mockEleventyConfig = {
  addShortcode: jest.fn(),
};

describe('Eleventy Vite shorcodes', () => {
  it('registry the shortcodes', () => {
    ViteShortcodes.register(mockEleventyConfig, manifestPath);
    expect(mockEleventyConfig.addShortcode).toBeCalledTimes(3);
  });

  it('returns script tag for JS assets', () => {
    // TODO we should probably mock the "Manifest Parser" but had issues mocking with Tyepscript. To be investigated
    const shortcodes = ViteShortcodes.register(mockEleventyConfig, manifestPath);

    const result = shortcodes.viteScriptTag('src/assets/main.js');

    expect(result).toBe('<script type="module" src="assets/main.2d87e327.js"></script>');
  });

  it('returns legacy script tag for JS assets', () => {
    const shortcodes = ViteShortcodes.register(mockEleventyConfig, manifestPath);

    const result = shortcodes.viteLegacyScriptTag('src/assets/main.js');

    expect(result).toBe('<script type="nomodule" src="assets/main.2d87e327.js"></script>');
  });

  it('returns stylesheet tag for CSS assets', () => {
    const shortcodes = ViteShortcodes.register(mockEleventyConfig, manifestPath);

    const result = shortcodes.viteStylesheetTag('src/assets/main.js');

    expect(result).toBe('<link rel="stylesheet" href="assets/main.402e9001.css"/>');
  });
});
