import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import en from '@/locale/en'
import zhHans from '@/locale/zh-Hans'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { zhHans, en },
    current: 'en'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#808080',
        error: '#000000',
        info: '#000000',
        success: '#000000',
        warning: '#000000'

      }
    }
  }
})
