import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        10: '#F7F9F9',
        20: '#F3F4F6',
        30: '#DBDFE4',
        40: '#A2AAB4',
        60: '#6F7680',
        70: '#5E646D',
        80: '#25292E',
        50: '#212328',
        100: '#0C1014',
      },
      yellow: {
        10: '#FFFDF1',
        20: '#FFF4B8',
        40: '#FFEC8A',
        60: '#FFE55C',
        80: '#FFDD2E',
        100: '#FFD600',
      },
      orange: {
        10: '#FFF8F1',
        20: '#FFDAB8',
        40: '#FFC28A',
        60: '#FFAA5C',
        80: '#FF922E',
        100: '#FF7A00',
      },
      pink: {
        10: '#FFF1F7',
        20: '#FFB8D5',
        40: '#FF8ABA',
        60: '#FF5C9F',
        80: '#FF2E84',
        100: '#FF0069',
      },
      magenta: {
        10: '#FFF0FE',
        20: '#FFA8F9',
        40: '#FF5EF4',
        60: '#FF30F1',
        80: '#FF02EE',
        100: '#D300C5',
      },
      purple: {
        10: '#F2EBFF',
        20: '#D3BFFD',
        40: '#B492FC',
        60: '#9565FB',
        80: '#7638FA',
        100: '#5C12F9',
      },
      blue: {
        10: '#EFF9FF',
        20: '#9AD6FF',
        40: '#4FB9FF',
        60: '#0098FD',
        80: '#006BB3',
        100: '#00386E',
      },
      red: {
        10: '#FFF1F4',
        20: '#FFB8C6',
        40: '#FF8AA2',
        60: '#FF5C7D',
        80: '#FF2E59',
        100: '#FF0034',
      },
      green: {
        10: '#CCFFCC',
        20: '#93FF93',
        40: '#65FF65',
        60: '#37FF37',
        80: '#09FF09',
        100: '#00DA00',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans]
      },
    }
  },

  plugins: [typography, forms]
};
