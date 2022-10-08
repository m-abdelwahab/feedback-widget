/** @type {import('tailwindcss').Config} */

/**
| Step | Use Case                                |
| ---- | --------------------------------------- |
| 100   | App background                          |
| 200  | Subtle background                       |
| 300  | UI element background                   |
| 400  | Hovered UI element background           |
| 500  | Active / Selected UI element background |
| 600  | Subtle borders and separators           |
| 700  | UI element border and focus rings       |
| 800  | Hovered UI element border               |
| 900  | Solid backgrounds                       |
| 1000  | Hovered solid backgrounds               |
| 1100 | Low-contrast text                       |
| 1200 | High-contrast text                      |
*/

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#fdfcfd',
          200: '#f9f8f9',
          300: '#f4f2f4',
          400: '#eeedef',
          500: '#e9e8ea',
          600: '#e4e2e4',
          700: '#dcdbdd',
          700: '#c8c7cb',
          900: '#908e96',
          1000: '#86848d',
          1100: '#6f6e77',
          1200: '#1a1523',
        },
        violet: {
          100: '#fdfcfe',
          200: '#fbfaff',
          300: '#f5f2ff',
          400: '#ede9fe',
          500: '#e4defc',
          600: '#d7cff9',
          700: '#c4b8f3',
          800: '#aa99ec',
          900: '#6e56cf',
          1000: '#644fc1',
          1100: '#5746af',
          1200: '#20134b',
        },
        green: {
          100: '#fbfefc',
          200: '#f2fcf5',
          300: '#e9f9ee',
          400: '#ddf3e4',
          500: '#ccebd7',
          600: '#b4dfc4',
          700: '#92ceac',
          800: '#5bb98c',
          900: '#30a46c',
          1000: '#299764',
          1100: '#18794e',
          1200: '#153226',
        },
        red: {
          100: '#fffcfc',
          200: '#fff8f8',
          300: '#ffefef',
          400: '#ffe5e5',
          500: '#fdd8d8',
          600: '#f9c6c6',
          700: '#f3aeaf',
          800: '#eb9091',
          900: '#e5484d',
          1000: '#dc3d43',
          1100: '#cd2b31',
          1200: '#381316',
        },
        yellow: {
          100: '#fdfdf9',
          200: '#fffce8',
          300: '#fffbd1',
          400: '#fff8bb',
          500: '#fef2a4',
          600: '#f9e68c',
          700: '#efd36c',
          700: '#ebbc00',
          900: '#f5d90a',
          1000: '#f7ce00',
          1100: '#946800',
          1200: '#35290f',
        },
        // Dark mode colors
        'gray-dark': {
          100: '#161618',
          200: '#1c1c1f',
          300: '#232326',
          400: '#28282c',
          500: '#2e2e32',
          600: '#34343a',
          700: '#3e3e44',
          800: '#504f57',
          900: '#706f78',
          1000: '#7e7d86',
          1100: '#a09fa6',
          1200: '#ededef',
        },
        'violet-dark': {
          100: '#17151f',
          200: '#1c172b',
          300: '#251e40',
          400: '#2c2250',
          500: '#32275f',
          600: '#392c72',
          700: '#443592',
          800: '#5842c3',
          900: '#6e56cf',
          1000: '#7c66dc',
          1100: '#9e8cfc',
          1200: '#f1eefe',
        },
        'green-dark': {
          100: '#0d1912',
          200: '#0c1f17',
          300: '#0f291e',
          400: '#113123',
          500: '#133929',
          600: '#164430',
          700: '#1b543a',
          800: '#236e4a',
          900: '#30a46c',
          1000: '#3cb179',
          1100: '#4cc38a',
          1200: '#e5fbeb',
        },
        'red-dark': {
          100: '#1f1315',
          200: '#291415',
          300: '#3c181a',
          400: '#481a1d',
          500: '#541b1f',
          600: '#671e22',
          700: '#822025',
          800: '#aa2429',
          900: '#e5484d',
          1000: '#f2555a',
          1100: '#ff6369',
          1200: '#feecee',
        },
        'yellow-dark': {
          100: '#1c1500',
          200: '#221a00',
          300: '#2c2100',
          400: '#352800',
          500: '#3e3000',
          600: '#493c00',
          700: '#594a05',
          800: '#705e00',
          900: '#f5d90a',
          1000: '#ffef5c',
          1100: '#f0c000',
          1200: '#fffad1',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
