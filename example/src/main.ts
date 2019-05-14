import Vue from 'vue';

import App from './App.vue';

import VueSweetalert2 from './vue-sweetalert2';

Vue.use(VueSweetalert2, { includeCss: false });

new Vue({
    el: '#app',
    render: h => h(App)
});
