module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{html,njk}',
  ],
  theme: {
    extend: {
      colors: {
        greyhound: '#26333b',
        whitehouse: '#aeaeae',
      },
      fontFamily: {
        'body': ['Ubuntu'],
        'ubuntu': ['Ubuntu'],
      }
    }
  },
}
