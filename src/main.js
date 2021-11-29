import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888'

let app = createApp(App);
app.config.globalProperties.axios = axios;

app.use(store).mount('#app')
// app.mount('#app')
