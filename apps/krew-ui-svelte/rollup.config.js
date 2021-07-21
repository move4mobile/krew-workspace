const svelte = require('rollup-plugin-svelte');
const sveltePreprocess = require('svelte-preprocess');
const typescript = require('rollup-plugin-typescript2');
const alias = require("@rollup/plugin-alias");
const nodeResolve = require('@rollup/plugin-node-resolve').nodeResolve;

module.exports = (config, options) => {

  const production = options.prod;
  const predefinedPluginsToExclude = ['svelte', 'typescript'];

  let filteredPredefinedPlugins = config.plugins.filter(plugin => !predefinedPluginsToExclude.includes(plugin.name));

  let myPlugins = [
    alias({
      entries: [
        { find: '@krew/api-client', replacement: 'libs/api-client/src/index.ts' },
      ]
    }),

    nodeResolve({
      browser: true
    }),

    typescript({
      tsconfig: options.tsConfig,
    }),

    svelte({
      preprocess: sveltePreprocess({ sourceMap: !production }),
      compilerOptions: {
        dev: !production,
        // customElement: true
      }
    }),

    ...filteredPredefinedPlugins,
  ];

  return {
    ...config,
    plugins: myPlugins,
  };
}