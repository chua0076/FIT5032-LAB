// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from './router'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

const firebaseConfig = {
  apiKey: "AIzaSyBU7RtzwEzcP9qChhJUksS1uDrWOg0jj3o",
  authDomain: "fit5032-week7-1429f.firebaseapp.com",
  projectId: "fit5032-week7-1429f",
  storageBucket: "fit5032-week7-1429f.firebasestorage.app",
  messagingSenderId: "402513592233",
  appId: "1:402513592233:web:d957e50f0f47af9d008eb8"
};

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')

