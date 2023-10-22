<template>
  <h1>Index page</h1>

  <button @click="logout">qweqw</button>

</template>

<script>
import {mapActions} from 'pinia'
import {useAuthStore} from "~/stores/useAuthStore.ts";
export default {

  methods: {
    ...mapActions(useAuthStore, ['logout']),
  }
}

</script>
