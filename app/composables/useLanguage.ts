import { languages, messages, type LanguageCode } from '~/data/i18n'

const STORAGE_KEY = 'portfolio-language'

const isLanguageCode = (value: string | null): value is LanguageCode =>
  value === 'en' || value === 'fr' || value === 'zh'

export const useLanguage = () => {
  const language = useState<LanguageCode>('portfolio-language', () => 'en')

  const setLanguage = (nextLanguage: LanguageCode) => {
    language.value = nextLanguage

    if (import.meta.client) {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage)
    }
  }

  if (import.meta.client) {
    onMounted(() => {
      const storedLanguage = window.localStorage.getItem(STORAGE_KEY)

      if (isLanguageCode(storedLanguage)) {
        language.value = storedLanguage
      }
    })
  }

  const content = computed(() => messages[language.value])
  const availableLanguages = languages

  useHead(() => ({
    htmlAttrs: {
      lang: language.value
    }
  }))

  return {
    availableLanguages,
    content,
    language,
    setLanguage
  }
}
