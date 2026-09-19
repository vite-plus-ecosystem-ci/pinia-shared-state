import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  pack: {
    deps: { resolveDepSubpath: true },
    entry: ['src/index.ts'],
    sourcemap: true,
    clean: true,
    dts: true,
    platform: 'neutral',
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
    // Node environment is sufficient: Vue/Pinia reactivity works without a
    // real browser DOM. Using 'node' keeps the tests fast and dependency-free.
    environment: 'node',
  },
  fmt: {
    singleQuote: true,
    semi: true,
  },
});
