import {
  CAlert,
  CButton,
  CCard,
  CProgressBar,
  CSwitch,
  CTag,
  CVerticalStepper,
  CVerticalStepperAlt
} from '@long2x/cresh-ui/ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('CAlert', CAlert)
  nuxtApp.vueApp.component('CButton', CButton)
  nuxtApp.vueApp.component('CCard', CCard)
  nuxtApp.vueApp.component('CProgressBar', CProgressBar)
  nuxtApp.vueApp.component('CSwitch', CSwitch)
  nuxtApp.vueApp.component('CTag', CTag)
  nuxtApp.vueApp.component('CVerticalStepper', CVerticalStepper)
  nuxtApp.vueApp.component('CVerticalStepperAlt', CVerticalStepperAlt)
})
