<template>
  <main-layout>
    <p>About page</p>
    {{ value }}
  </main-layout>
</template>

<script>
  import Message from './Hello.vue'
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    }
  }
</script>