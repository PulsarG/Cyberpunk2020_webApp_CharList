import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/store"
import '@/fonts/CyberpunkFont/font.css'

import 'firebase/database';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAEoDugezqAzpygOzLk9lrSCn9OMPCBA_8",
    authDomain: "cp2020-bcaf6.firebaseapp.com",
    databaseURL: "https://cp2020-bcaf6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cp2020-bcaf6",
    storageBucket: "cp2020-bcaf6.appspot.com",
    messagingSenderId: "82713711734",
    appId: "1:82713711734:web:99dbba4cc63f3384ab7b57",
    measurementId: "G-4VC2102SER"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
