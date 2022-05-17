module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    color: {
      'dark-1': '#112B3C',
      'dark-2': '#205375',
      'light-1': '#EFEFEF',
      'light-2': '#F8B400'
    },
    extend: {
      spacing: {
      'margin-small': '20px',
      'margin-medium': '40px',
      'margin-large': '60px',
      },
      font: {
        'font-small': '12px',
        'font-medium': '16px',
        'font-large': '20px',
        'font-weight-thin': '300',
        'font-weight-regular': '400',
        'font-weight-large': '700',
      }
    },
  },
  plugins: [],
}
