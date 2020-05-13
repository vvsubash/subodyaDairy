// eslint-disable-next-line no-unused-vars
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import db from '~/plugins/firebaseImport'

export const state = () => ({
  userInfo: null
})

export const getters = {
  getterValue: (state) => {
    return state.value
  }
}
export const mutations = {
  ...vuexfireMutations
}
export const actions = {
  getUserInfo: firestoreAction(({ state, bindFirestoreRef }) => {
    // eslint-disable-next-line no-console
    console.log('hello')
    return bindFirestoreRef(
      'userInfo',
      db.collection('users').doc('gmUukjPFxVX9Qk24wNhIaFXaUv52')
    )
  })
}
