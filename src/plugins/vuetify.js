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
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
})
