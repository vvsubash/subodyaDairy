<template>
  <div class="container">
    <h3>Hello please give us some details about you to continue</h3>
    <form class="form-group border col" @submit.prevent="lol">
      <div class="form-group">
        <label for="paperInputs1">Display Name</label>
        <sub></sub>
        <input v-model="documents.name" class="input-block" />
      </div>
      <div class="form-group">
        <label for="paperInputs1">Phone Number</label>
        <input v-model="documents.phoneNumber" class="input-block" />
      </div>
      <input type="submit" />
    </form>
    {{ documents }}
  </div>
</template>

<script>
// import { firestorePlugin } from 'vuefire'
import db from '~/plugins/firebaseImport'
export default {
  data() {
    return {
      // userName: 'name',
      phoneNumber: this.$store.state.user.phoneNumber,
      pinCode: 530003,
      documents: [],
      id: this.$store.state.user.uid
    }
  },
  // firestore: {
  //   documents: db.collection('users').doc('gmUukjPFxVX9Qk24wNhIaFXaUv52')
  // },
  watch: {
    id: {
      // call it upon creation too
      immediate: true,
      handler(id) {
        this.$bind('documents', db.collection('users').doc(id))
      }
    }
  },
  // created() {
  //   // db.collection('users')
  //   //   .doc(this.$store.state.user.uid)
  //   //   .get()
  //   //   .then((snapshot) => {
  //   //     const document = snapshot.data()
  //   //     // do something with document
  //   //   })
  // },
  methods: {
    lol() {
      this.$router.push('checkout')
    }
  },
  validate({ store }) {
    return store.state.user != null
  }
}
</script>

<style lang="scss" scoped></style>
