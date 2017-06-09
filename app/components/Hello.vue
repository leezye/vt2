<template>
  <main-layout>
    <p>Welcome home</p>
  <p>{{ message }}</p>
  <input v-bind:value="value" v-model="message">

  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    },
         props: {
      value: Number,
      required: true
    },
      data: function () {
      return {
          message: "hello"
      }
  }
  }
    

</script>
