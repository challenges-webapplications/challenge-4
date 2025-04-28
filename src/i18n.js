import en from './en.json'
import es from './es.json'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    fallblackLocale: 'en',
    messages: {
        en,
        es
    }

})

export default i18n