import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import routes from './routes/routes'
import '@fortawesome/fontawesome-free/js/all'

createApp(App)
    .use(store)
    .use(routes)
    .mount('#app')
