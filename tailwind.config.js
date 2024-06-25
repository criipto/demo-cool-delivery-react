/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light purple
        primary: {
          25: '#F9F9FF',
          50: '#F1EFFF',
          100: '#E9E7FF',
          200: '#DAD7FD',
          300: '#AFA6FB',
          400: '#9083FF',
          500: '#7969FF',
          600: '#604FED', // Base/600ID Primary bright purple
          700: '#4F3ED8',
          800: '#382AAD',
          900: '#271D7B',
        },
        ['light-blue']: {
          25: '#F7F7FF',
          50: '#EDEEFB',
          100: '#DDDFF3',
          200: '#D0D3EB',
          300: '#BABCD7',
          400: '#A3A6CA',
          500: '#898DBD',
          600: '#6E75A5',
          700: '#5A6192',
          800: '#424974',
          900: '#262E52',
        },
        ['deep-purple']: {
          25: '#F8F8F9',
          50: '#EFEEF1',
          100: '#E2DFE5',
          200: '#D0CBD4',
          300: '#B1ABB8',
          400: '#9B94A1',
          500: '#857D8C',
          600: '#726979',
          700: '#59515F',
          800: '#463F4B',
          900: '#302935',
        },
        ash: {
          25: '#F6F7FB',
          50: '#EFF1F5',
          100: '#E3E7EE',
          200: '#D3D9E4',
          300: '#C1C8D6',
          400: '#8B94A6',
          500: '#747F90',
          600: '#5D6878',
          700: '#485261',
          800: '#313B4A',
          900: '#111C2D',
        },
        error: {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F13A3A',
          600: '#DD3434',
          700: '#C20D00',
          800: '#912018',
          900: '#7A271A',
        }
      },
    },
  },
  plugins: [],
});
