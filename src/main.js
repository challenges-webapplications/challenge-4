import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import i18n from './i18n'
import Aura from '@primeuix/themes/aura';




const app = createApp(App);
app.use(PrimeVue, {

    theme: {

        preset: Aura

    }

});

app.use(i18n);
app.mount('#app');