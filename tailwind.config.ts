import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f8fa',
          100: '#ebedf0',
          300: '#aeb5c0',
          500: '#697386',
          700: '#2d3442',
          900: '#0b0d12'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        soft: '0 20px 70px rgba(15, 23, 42, 0.10)'
      }
    }
  }
}
