import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-fetch',
  input: 'openapi.json',
  output: {
    format: 'prettier',
    lint: false,
    path: './src/api',
  },
  plugins: [
    //    '@hey-api/schemas',
    '@hey-api/types',
    {
      name: '@hey-api/services',
    },
    // {
    //   name: '@hey-api/transformers',
    //   dates: true,
    // },
    '@hey-api/types',
    '@tanstack/solid-query',
  ],
});
