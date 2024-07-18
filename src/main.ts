import './assets/main.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Aura from '../node_modules/@primevue/themes/aura';
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import DialogService from 'primevue/dialogservice';
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import DatePicker from 'primevue/datepicker';
import Dropdown from 'primevue/dropdown';
import OverlayPanel from 'primevue/overlaypanel';
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia =createPinia()
app.use(PrimeVue, {
    theme:{
        preset:Aura
    }
})
app.use(pinia)
app.use(ConfirmationService)
app.use(ToastService)
app.use(DialogService)
app.use(router)
app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("FloatLabel", FloatLabel);
app.component("InputText", InputText);
app.component("Select", Select);
app.component("Textarea", Textarea);
app.component("DatePicker", DatePicker);
app.component("DropDown", Dropdown)
app.component("OverlayPanel", OverlayPanel)

// app.component("FloatLabel", FloatLabel);

app.mount('#app')
