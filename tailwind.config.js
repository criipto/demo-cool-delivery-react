/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary600: '#604FED', // Base/600ID Primary bright purple
      primary700: '#5648CE',
      primary25: '#F9F9FF', // Light purple
      lightBlue: '#363F72',
      lightBlue800: '#424974',
      lightBlue700: '#5A6192',
      lightBlue100: '#DDDFF3',
      lightBlue200: '#D5D9EB',
      darkPurple: '#362644',
      base900DarkPurple: '#302935', // Text, headings
      ashGrey400: '#8B94A6', // Disabled buttons
      error: '#FEE4E2',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
});
