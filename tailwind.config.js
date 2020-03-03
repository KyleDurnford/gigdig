module.exports = {
  theme: {
    fontFamily: {
      display: ['"Montserrat"', 'sans-serif'],
      body: ['"Montserrat"', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      purple: {
        light: '#272958',
        dark: '#14152F',
        med: '#3C3E6C'
      },
      teal: {
        bright: "#1EFAC5"
      },
      red: {
        bright: "#E42D35"
      },
      white: "#ffffff"
    },
    borderRadius: {
      'lg': '20px',
      'full': '9999px'
    },
    extend: {
      width: {
        '3/10': '30%',
        '1/10': '10%'
      }
    }
  },
  variants: {},
  plugins: [],
}
