/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        PrimaryOrange:"#EE3123",
        MediamOrange:"#FCD6D3",
        LightOrange:"#FFF5F4",
        PrimaryGrey:"#DFDFDF",
        MediamGray:"#EAEAE8",
        MediamOrangeOpacity:'rgba(252, 214, 211,.5)',
      },
      skew: {
        '25': '25deg',
      },
      inset: {
        '50%': '50%',
      },
      translate: {
        '50%': '50%',
      },
      height: {
        '80vh': '80vh',
        '70':'70vh'
      },
      borderWidth:{
        '16':'1rem'
      }
    },
  },
  plugins: [],
}
