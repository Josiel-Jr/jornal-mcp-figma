module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          'blue': '#002a80',
          'blue-light': '#002a801a',
          'blue-lighter': '#002a800d',
        },
        'text': {
          'primary': '#282c34',
          'secondary': '#6b7280',
        },
        'background': {
          'primary': '#ffffff',
          'secondary': '#fafafa',
          'neutral': '#f5f5f5',
        },
        'border': {
          'light': '#e5e7eb',
          'medium': '#e5e7eb80',
          'dark': '#e5e7eb4d',
        },
        'category': {
          'politics': {
            'bg': '#ef44441a',
            'bg-light': '#dc26260d',
          },
          'culture': {
            'bg': '#a855f71a',
            'bg-light': '#9333ea0d',
          },
          'sports': {
            'bg': '#22c55e1a',
            'bg-light': '#16a34a0d',
          },
          'tech': {
            'bg': '#3b82f61a',
            'bg-light': '#2563eb0d',
          },
        },
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '26px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '32.5px'],
        '2xl': ['24px', '32px'],
        '3xl': ['48px', '48px'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '10': '10px',
        '12': '12px',
        '16': '16px',
      },
      boxShadow: {
        'card': '0px 4px 12px -2px rgba(40,44,52,0.08)',
        'card-hover': '0px 2px 8px -2px rgba(40,44,52,0.12)',
        'hero': '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
