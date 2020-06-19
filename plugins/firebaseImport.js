import Vue from 'vue'

import firebase from 'firebase/app'
import { firestorePlugin } from 'vuefire'

import 'firebase/firestore'

Vue.use(firestorePlugin)

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.NUXT_ENV_APIKEY,
  authDomain: process.env.NUXT_ENV_AUTHDOMAIN,
  databaseURL: process.env.NUXT_ENV_DATABASEURL,
  projectId: process.env.NUXT_ENV_PROJECTID,
  storageBucket: process.env.NUXT_ENV_STORAGEBUCKET,
  messagingSenderId: process.env.NUXT_ENV_MESSAGINGSENDERID,
  appId: process.env.NUXT_ENV_APPID
})
firebase
  .firestore()
  .enablePersistence()
  .catch(function(err) {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  })

export const db = firebaseApp.firestore()
export default db
