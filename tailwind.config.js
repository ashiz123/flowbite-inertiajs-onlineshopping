module.exports = {
  content: [
    // "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    // "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  
    'node_modules/flowbite/dist/flowbite.min.css',
    'node_modules/flowbite/dist/flowbite.min.js',
    
    
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        'dark-blue' : "#1E429F"

      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}