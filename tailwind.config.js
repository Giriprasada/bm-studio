module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // black
        secondary: "#FFFFFF", // white
        accent: "#D4AF37", // gold
        background: "#FAFAFA", // neutral-50
        surface: "#F5F5F5", // neutral-100
        border: "#E5E5E5", // neutral-200
        text: {
          primary: "#1A1A1A", // neutral-900
          secondary: "#666666", // neutral-500
        },
        success: "#2D5A27", // green-800
        warning: "#B8860B", // yellow-600
        error: "#8B0000", // red-800
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          500: "#666666",
          900: "#1A1A1A",
        },
        green: {
          800: "#2D5A27",
        },
        yellow: {
          600: "#B8860B",
        },
        red: {
          800: "#8B0000",
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        subtle: '0 4px 12px rgba(0, 0, 0, 0.1)',
        modal: '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '8px',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}