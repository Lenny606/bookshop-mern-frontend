/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      './src/**/*.{jsx, tsx,html,js}'
  ],
  theme: {
    extend: {
        colors: {
            'primary': '#f1c40f',
            'secondary': '#e74c3c',
            "bgColor": '#e67e22',
            'dark-gray': '#333',
            'light-gray': '#f5f5f5',
            // 'gray': '#ccc',
            'dark-blue': '#3498db',
            'blue': '#34495e',
            'green': '#2ecc71',
            'yellow': '#f1c40f',
            // 'red': '#e74c3c',
            'orange': '#e67e22',
            // 'purple': '#9b59b6',
            'pink': '#e91e63',
            'light-pink': '#f8c4e8',
            // 'white': '#fff',
            'black': '#000',
            'dark-green': '#27ae60',
            'light-green': '#3498db',
            'dark-yellow': '#f1c40f',
        },
        fontFamily: {
        'primary': ["Nunito Sans",' sans-serif'],
        'secondary': ["Montserrat",' sans-serif']
        }
    },
  },
  plugins: [],
}

