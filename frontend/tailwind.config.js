/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        // md: "968px",
        // lg: "1000px",
        xl: "1240px",
      }
    },
    colors: {
      white: '#fff',
      black: '#000000',
      green: {
        light: '#B0CD57',
        dark: '#94AD45'
      },
      gray: {
        light: '#FBFBFB',
        dark: '#282828'
      },
      transparent: 'transparent'
    },
    fontSize: {
      xs: '0.75rem',    //12px
      base: '1rem',     //16px
      md: '1.125rem',   //18px
      lg: '1.25rem',   //20px
      xl: '1.5rem',     //24px
      '2xl': '2rem',       //32px
      '3xl': '3.75rem'  //60px
    },
    spacing: {
      0: 0,
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px',
      40: '40px',
      50: '50px',
      60: '60px',
      70: '70px',
      80: '80px',
      90: '90px',
      100: '100px',
      120: '120px',
    },
    backgroundImage: {
      'arrow-left': 'url("/images/icons/arrow-left.svg")',
      'arrow-right': 'url("/images/icons/arrow-right.svg")',
      'contacts': 'url("/images/contacts.png")',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
