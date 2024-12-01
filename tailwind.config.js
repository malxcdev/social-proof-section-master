/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['"League Spartan"', 'sans-serif'],
      },
    },
    colors: {
      'very-dark-magenta': 'hsl(300, 43%, 22%)',
      'soft-pink': 'hsl(333, 80%, 67%)',
      'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
      'light-grayish-magenta': 'hsl(300, 24%, 96%)',
      'white': 'hsl(0, 0%, 100%)',
    },
  },
  plugins: [],
}