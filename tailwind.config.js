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
        jump: {
          '0%, 100%': { transform: 'translateY(-20px)' }, // At the start and end, stay at the bottom
          '20%, 80%': { transform: 'translateY(0)' }, // Jump higher (60px)
        },
      },
    },
  },
}

