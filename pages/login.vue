<template>
  <div>
    <p>login</p>

    {{ isLoggedIn }}

    <form @submit.prevent="login">
      <div>
        <input type="password" v-model="form.email">
      </div>
      <div>
        <input type="password" v-model="form.password">
      </div>

      <button>Отправить</button>
    </form>

  </div>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import {useAuthStore} from "~/stores/useAuthStore.ts";

definePageMeta({
  layout: 'auth'
})

export default {
  data() {
    return {
      form: {
        email: 'test@example.com',
        password: 'password',
      }
    }
  },

  computed: {
    ...mapState(useAuthStore, ['isLoggedIn'])
  },

  methods: {
    ...mapActions(useAuthStore, ['login']),
  }


}


</script>