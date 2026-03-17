/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },
    extend: {
       colors: {
        primary: '#4f46e5',
            secondary: '#6366f1',
            accent: '#f59e0b',
      },
        fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Londrina: ["Londrina Outline", "sans-serif"],
      },
 
  keyframes: {
    
  },

  animation: {
   
  },

},
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        md: "30px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Londrina: ["Londrina Outline", "sans-serif"],
    },
  },
  plugins: [],
};
