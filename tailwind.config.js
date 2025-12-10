module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-main': 'linear-gradient(110deg, #963488 -20%, #FC6F32 50%, #FF4A59 120%)',
      },
      borderImage: {
        'gradient-main': 'linear-gradient(110deg, #963488 -20%, #FC6F32 50%, #FF4A59 120%) 1',
      },
       fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        inter: ['var(--font-inter)'],
        clash: ['var(--font-clash-grotesk)'],
      },
    },
  },
  plugins: [],
};