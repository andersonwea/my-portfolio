import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4DB5FF',
        secondary: 'rgba(77, 181, 255, 0.4)',
        light: 'rgba(255, 255, 255, 0.6)',
        'bg-primary': '#1F1F38',
        'bg-secondary': '#2C2C6C',
      },

      fontFamily: {
        primary: 'var(--font-poppins)',
        secondary: 'var(--font-lora)',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              foreground: '#1F1F38',
              DEFAULT: '#4DB5FF',
            },
            secondary: {
              foreground: '#4DB5FF',
            },
          },
        },
      },
    }),
  ],
}
export default config
