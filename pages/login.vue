<template>
  <div>
    <p>login</p>

    <form @submit.prevent="login">
      <div>
        <input v-model="form.email">
      </div>
      <div>
        <input type="password" v-model="form.password">
      </div>

      <button>Отправить</button>
    </form>

  </div>
</template>

<script lang="ts" setup>

const auth = useAuthStore()

const form = ref({
  email: 'test@example.com',
  password: 'password',
})

async function login() {
  const {error} = auth.login(form.value)
  console.log(error)
}


</script>