import { defineConfig } from 'vite';
/** solid js plugin */
import solidPlugin from 'vite-plugin-solid';
import autoprefixer from 'autoprefixer';
import cssnanoPlugin from 'cssnano';
import { visualizer } from 'rollup-plugin-visualizer';
import postcssTsClassnames from 'postcss-ts-classnames';
import postcss, { AcceptedPlugin } from 'postcss';
import scssAutoindexPlugin from '@inlite/vite-scss-generate-index';
import solidSvg from 'vite-plugin-solid-svg';
//import devtools from 'solid-devtools/vite';

const postCssPlugins: postcss.AcceptedPlugin[] = [
  autoprefixer({
    // do not remove any rules
    remove: false,
  }),
  cssnanoPlugin({
    preset: [
      'cssnano-preset-default',
      { mergeIdents: true, uniqueSelectors: false, autoprefixer: false },
    ],
  }),
  postcssTsClassnames({
    dest: 'src/classnames.d.ts',
    // Set isModule if you want to import ClassNames from another file
    isModule: true,
    exportAsDefault: true, // to use in combination with isModule
  }) as AcceptedPlugin,
];
export default defineConfig({
  plugins: [
    scssAutoindexPlugin({ src: 'src', singleQuotes: true }),
    solidPlugin(),
    solidSvg({
      defaultAsComponent: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        api: 'modern-compiler',
        silenceDeprecations: ['import'],
      },
    },
    postcss: {
      plugins: postCssPlugins,
    },
  },
  server: {
    port: 3000,
    watch: {
      ignored: ['**/src/classnames.d.ts'],
    },
  },
  build: {
    minify: true,
    manifest: `manifest.json`,
    rollupOptions: {
      plugins: [visualizer({ open: true, brotliSize: true, filename: 'build-size.html' })],
    },
    //    sourcemap: true,
    target: 'modules',
  },
});
