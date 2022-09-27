import { createApp } from 'vue';
// import '../src/assets/css/app.css';
// import '../src/assets/css/app.css.map';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(router).use(store).mount('#app');
