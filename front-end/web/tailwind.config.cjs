/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 27.88%, #43E7AD 37.94%, #E1D55D 42.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0,0) 0%, rgba(0, 0, 0, 0.9) 67.88%)',
      },
    },
  },
  plugins: [],
}
