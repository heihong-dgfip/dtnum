import { Config } from '@stencil/core';
import { vueOutputTarget as vue } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    vue({
      proxiesFile: '../vue/src/components.ts',
      includeDefineCustomElements: false,
      includeImportCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        { src: 'components/**/*.html' },
        { src: './../node_modules/@gouvfr/dsfr/dist/icons', dest: 'icons' },
        { src: './../node_modules/@gouvfr/dsfr/dist/icons', dest: 'components/icons' },
        { src: './../node_modules/@gouvfr/dsfr/dist/fonts', dest: 'fonts' },
        { src: './../node_modules/@gouvfr/dsfr/dist/fonts', dest: 'components/fonts' },
      ],
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: 'src/global/global.scss',
  globalScript: 'src/global/global.ts',
};
