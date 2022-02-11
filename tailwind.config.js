module.exports = {
  content: [
    "./src/app/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-1': '#100E1D',
        'dark-2': '#1E213A',
        'white-1': '#E7E7EB',
        'gray-1': '#585676',
        'gray-2': '#A09FB1',
        'gray-3': '#88869D',
        'gray-4': '#FFFFFF4D',
        'yellow-1': '#FFEC65'
      },
      backgroundImage: {
        'cloud-bg': "url(/assets/img/Cloud-background.png)"
      }
    },
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif']
    }
  },
  plugins: [],
}
