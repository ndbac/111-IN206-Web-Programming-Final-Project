/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      montserrat: ['sans-serif', 'Montserrat'],
      base: ['PangeaAfrikan', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'home-banner': "url('../assets/vietNamDes/saigon.jpg')",
      },
    },
  },
  plugins: [],
};
