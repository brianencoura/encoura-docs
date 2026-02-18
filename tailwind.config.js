
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
		fontSize: {
			xs: ["0.75rem", "1.58"],
			sm: ["0.875rem", "1.57"],
			base: ["1rem", "1.5"],
			lg: ["1.25rem", "1.5"],
			xl: ["1.563rem", "1.4"],
			h5: ["2rem", 1.25],
			h4: ["2.5rem", "1.1"],
			h3: ["3rem", "1.2"],
			h2: "3.813rem",
			h1: ["4.75rem", "1.1"],
			d2: "5.938rem",
			d1: "7.438rem",
			//Action plan font sizes
			"ap-sm": ["0.875rem", "1.25rem"],
			"ap-base": ["1rem", "1.5rem"],
			"ap-lg": ["1.125rem", "1.75rem"],
			"ap-xl": ["1.25rem", "1.75rem"],
			"ap-2xl": ["1.5rem", "2rem"],
			"ap-3xl": ["1.875rem", "2.25rem"],
			"ap-4xl": ["2.25rem", "2.5rem"],
			"ap-5xl": ["3rem", "1"],
			"ap-6xl": ["3.75rem", "1"],
			"ap-8xl": ["6rem", "1"],
			"ap-h4": ["1.625rem", "2.25rem"],
		},
  },
  plugins: []
}