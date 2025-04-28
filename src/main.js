
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import i18n from './i18n'
import Aura from '@primeuix/themes/aura';
import  SelectButton  from 'primevue/selectbutton';
import Card from 'primevue/card';
import Button from 'primevue/button';




const app = createApp(App);
app.use(PrimeVue, {

    theme: {

        preset: Aura

    }

});

app.component('pv-button', Card);
app.component('pv-card', Card);
app.component('select-button', SelectButton);
app.use(i18n);
app.mount('#app');