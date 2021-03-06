import * as firebase from 'firebase/app'
import 'firebase/auth'
import { vuexfireMutations } from 'vuexfire'

export const state = () => ({
  user: null
})

export const getters = {
  getterValue: (state) => {
    return state.value
  }
}

export const mutations = {
  setUser: (state, payload) => {
    state.user = payload
  },
  ...vuexfireMutations
}

export const actions = {
  signInWithGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/user.phonenumbers.read	')
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        const user = {
          ...result.user.providerData[0],
          uid: result.uid
        }
        commit('setUser', user)
        // eslint-disable-next-line
        console.log(result)
      })
      .then(() => {
        this.$router.push('/dashboard')
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error.code, error.message)
        // Handle Errors here.
        // const errorCode = error.code
        // const errorMessage = error.message
        // // The email of the user's account used.
        // const email = error.email
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential
        // ...
      })
  },
  SignOut({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.push('/')
        // eslint-disable-next-line
        console.log('signed out')
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error.code)
      })
    commit('setUser', null)
  }
}
