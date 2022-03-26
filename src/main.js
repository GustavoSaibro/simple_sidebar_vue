import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/routes'
import '@fortawesome/fontawesome-free/js/all'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
