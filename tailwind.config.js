/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        'paragraph': '1rem',
        '12': '0.75rem',
        '13': '0.8125rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.25rem',
        '22': '1.35rem',
        '24': '1.5rem',
        '26': '1.625rem',
        '28': '1.75rem',
        '32': '2rem',
        '36': '2.25rem',
        '40': '2.5rem',
        '44': '2.75rem',
        '48': '3rem',
        '56': '3.5rem',
        '64': '4rem',
      },
      lineHeight: {
        '90':  '0.90',
        '100': '1.00',
        '110': '1.10',
        '115': '1.15',
        '125': '1.25',
        '135': '1.35',
        '150': '1.50',
        '165': '1.65',
        '175': '1.75',
      },
      letterSpacing: {
        'title': '-0.05em',
        'subtitle': '-0.03em',
        'paragraph': '-0.01em'
      },
      zIndex: {
        'above-content': '101',
        'sticky-ui': '102',
        'sidebar': '103',
        'header': '104',
        'modal': '105',
      },
      borderRadius: {
        '2': '0.15rem',
        '4': '0.25rem',
        '8': '0.5rem',
        '12': '0.75rem',
        '16': '1rem',
        '20': '1.25rem',
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '192': '48rem',
        '256': '64rem',
      },
      height: {
        'unset': 'unset',
      },
      minWidth: ({ theme }) => ({
        'screen': '100vw',
        ...theme('spacing')
      }),
      maxWidth: ({ theme }) => ({
        '24em': '24em',
        '30em': '30em',
        '40em': '40em',
        '80rem': '80rem',
        ...theme('spacing')
      }),
      borderWidth: {
        '3': '3px'
      },
      outlineWidth: {
        '3': '3px'
      },
      colors: {
        primary: {
          "50": "#e6f9ff",
          "100": "#b3edff",
          "200": "#80e2fe",
          "300": "#4dd6fe",
          "400": "#1acafe",
          "500": "#01b1e5",
          "600": "#0189b2",
          "700": "#01627f",
          "800": "#003b4c",
          "900": "#001419",
        }
      }
    },
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  variants: {
    extends: {
      margin: ['last']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}