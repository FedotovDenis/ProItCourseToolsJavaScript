// Імпортуємо плагін nodeResolve для вирішення модулів Node.js
import nodeResolve from '@rollup/plugin-node-resolve';
// Імпортуємо плагін babel
import babel from '@rollup/plugin-babel';

import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss'

// Експортуємо конфігурацію збірки
export default {
  // Вказуємо вхідний файл
  input: 'src/index.jsx',

  // Вказуємо вихідний файл
  output: {
    // Вказуємо ім'я вихідного файлу
    file: 'dist/bundle.js',

    // Вказуємо формат вихідного файлу
    format: 'iife',
  },

  // Вказуємо список плагінів, які використовуватимуться для збірки
  plugins: [
    // Додаємо плагін nodeResolve в список плагінів
    nodeResolve({ extensions: ['.js', '.jsx'] }),
    // Додаємо плагін babel в список плагінів
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
    replace({
      presetAssignment: false,
      'process.env.NODE_ENV': '"development"',
    }),
    postcss({
      modules: true,
      plugins: [],
    }),
  ],
};
