<template>
 <div class="container mainNav">
         <div class="header clearfix p-4 mt-3 mb-4">
        <nav>
          <ul class="nav nav-pills float-right">
            <li class="nav-item">
              <v-link class="nav-link" href="/">Home <span class="sr-only">(current)</span></v-link>
            </li>
            <li class="nav-item">
                <v-link class="nav-link" href="/about">About</v-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <h3 class="text-muted">{{ projectName }}</h3>
      </div>
</div>
</template>

<script>
  import VLink from '../app.vue'

  export default {
    props: ['projectName'],

    components: {
      VLink
    }
  }
</script>