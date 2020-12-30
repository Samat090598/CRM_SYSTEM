import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyCqK-J8YmdrAUGcJujKJgXKrFYoBwT_ZjI",
  authDomain: "vue--crm-d1d80.firebaseapp.com",
  projectId: "vue--crm-d1d80",
  storageBucket: "vue--crm-d1d80.appspot.com",
  messagingSenderId: "260123287734",
  appId: "1:260123287734:web:b18a6c68300b9d5da64617"
});

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
