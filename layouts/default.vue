<template>
  <div>
    <p>Some default layout content shared across all pages</p>
    <pre>
      {{ auth.user}}
    </pre>
    <ul>
      <li>
        <nuxt-link to="/">home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/register">register</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/login">login</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/only-auth">auth</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/only-guest">guest</nuxt-link>
      </li>
    </ul>
    <slot/>
  </div>
</template>
<script lang="ts" setup>

  const auth = useAuthStore();
</script>