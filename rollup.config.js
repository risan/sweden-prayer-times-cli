import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/sweden-prayer-times-cli.js',
      format: 'cjs'
    },
    external: [
      'chalk',
      'date-fns',
      'log-symbols',
      'meow',
      'ora',
      'redent',
      'sweden-prayer-times',
      'trim-newlines'
    ],
    plugins: [
      eslint({
        include: ['src/**'],
        throwOnError: true,
        throwOnWarning: true
      }),
      babel({ exclude: 'node_modules/**' })
    ]
  }
];
