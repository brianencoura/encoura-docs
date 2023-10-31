
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {},
		colors: {
			black: "#000000",
			"navbar-gray": "#F8F8F8",
			"section-gray": "#F8F8F8",
			"navbar-submenu": "#EBEBEB",
			"green-primary": "#0D6061",
			mint: "#D6ECE5",
			"mint-darker": "#ADDED1",
			"orange-darker": "#A42809",
			// Colorols from updated design system
			"navy-blue": "#003359",
			"light-blue": "#0097C2",
			seafoam: "#ADDED1",
			white: "#FFFFFF",
			grey: "#595959",
			"light-gray": "#D9D9D9",
			teal: "#1E9C8A",
			green: "#00AE3F",
			orange: "#CF4A29",
			red: "#C20045",
			"web-copy": "#595959",
		},
  },
  plugins: []
}