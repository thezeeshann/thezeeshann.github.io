/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary: '#eff1f5',
        bgSecondary: '#ccd0da',
        darkBgPrimary: '#181825',
        darkBgSecondary: '#313244',

        primary: '#25d1b5',

        // textPrimary: '#1b123d',
        // textSecondary: '#353750',

        darkTextPrimary: '#cdd6f4',
        darkTextSecondary: '#bac2de',
      },
      fontFamily:{
        Poppins:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

