/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubikMonoOne': ['RubikMonoOne', 'sans-serif'],
      },
      colors: {
        'dark-charcoal-gray': '#1C1C1C',
        'metallic-gold': '#D4AF37',
        'button-background': '#4B4B4B',
        'button-text': '#00FFFF',
      },
      animation: {
        'youtube-jump': 'jump 2s ease-in-out infinite', // 2 seconds for a longer wait
      },
      keyframes: {
        jiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '16.66%': { transform: 'translateX(-5px)' },
          '33.33%': { transform: 'translateX(5px)' },
          '50%': { transform: 'translateX(-5px)' },
          '66.66%': { transform: 'translateX(5px)' },
          '83.33%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        jiggle: 'jiggle 0.5s ease',
      },
    },
  },
}

