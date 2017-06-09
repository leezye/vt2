<template>
 <div class="container">
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
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <h3 class="text-muted">Project name</h3>
      </div>

      <div class="jumbotron">
        <h1 class="display-3">Jumbotron heading</h1>
        <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a class="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
      </div>

    
    <slot></slot>
     </div>

</template>

<script>
  import VLink from '../app.vue'

  export default {
    components: {
      VLink
    }
  }
</script>


<style scoped>

</style>