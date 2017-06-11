<template>

     <div class="container p-4">
     
        <!-- MAIN NAV -->
        <main-nav projectName="Brunch with VueJS + Bootstrap 4"></main-nav>

        <!-- MAIN CONTENT -->
        <slot></slot>
        
    </div>
</template>

<script>
import VLink from '../app.vue'
import MainNav from '../components/MainNav.vue';

  export default {
    components: {
      MainNav
    }
  }
</script>