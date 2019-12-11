import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
// import 'vuetify/src/styles/main.sass'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#3F51B5',
    secondary: '#CE93D8',
    success: '#3cd1c2',
    info: '#ffaa2c',
    error: '#f83e70',
    gray: '#a0a0a0',
    black: '#000000',
    perple: '#9a59aa'
   }
})
