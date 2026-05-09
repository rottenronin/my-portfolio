export const useTheme = () => {
  const isDark = useState('theme-dark', () => true)

  const applyTheme = () => {
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', isDark.value)
      localStorage.setItem('portfolio-theme', isDark.value ? 'dark' : 'light')
    }
  }

  onMounted(() => {
    const storedTheme = localStorage.getItem('portfolio-theme')
    isDark.value = storedTheme ? storedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme()
  })

  watch(isDark, applyTheme)

  return {
    isDark,
    toggleTheme: () => {
      isDark.value = !isDark.value
    }
  }
}
