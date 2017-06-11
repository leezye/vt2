<template>
       
<main-layout>
<transition appear>  
<div class="animated fadeIn">
          
             <p class="bs-component">
              <a href="#" class="btn btn-default">Default</a>
              <a href="#" class="btn btn-primary">Primary</a>
              <a href="#" class="btn btn-success">Success</a>
              <a href="#" class="btn btn-info">Info</a>
              <a href="#" class="btn btn-warning">Warning</a>
              <a href="#" class="btn btn-danger">Danger</a>
              <a href="#" class="btn btn-link">Link</a>
            </p>

            <p class="bs-component">
              <a href="#" class="btn btn-default disabled">Default</a>
              <a href="#" class="btn btn-primary disabled">Primary</a>
              <a href="#" class="btn btn-success disabled">Success</a>
              <a href="#" class="btn btn-info disabled">Info</a>
              <a href="#" class="btn btn-warning disabled">Warning</a>
              <a href="#" class="btn btn-danger disabled">Danger</a>
              <a href="#" class="btn btn-link disabled">Link</a>
            </p>
            
        <hr class="m-5">
        <!-- Headings -->

        <div class="row">
          <div class="col-lg-4">
            <div class="bs-component">
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
              <p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="bs-component">
              <h2>Example body text</h2>
              <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
              <p><small>This line of text is meant to be treated as fine print.</small></p>
              <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
              <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
              <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
            </div>

          </div>
          <div class="col-lg-4">
            <div class="bs-component">
              <h2>Emphasis classes</h2>
              <p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
              <p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
              <p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
              <p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>

          </div>
        </div>

        <!-- Blockquotes -->

        <div class="row">
          <div class="col-lg-12">
            <h2 id="type-blockquotes">Blockquotes</h2>
          </div>
        </div>
        <div class="row" data-anijs="if: scroll, on: window, do: fadeInDown animated, before: $scrollReveal repeat">
          <div class="col-lg-6">
            <div class="bs-component">
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
              </blockquote>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="bs-component">
              <blockquote class="blockquote-reverse">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
              </blockquote>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laudantium recusandae consequuntur suscipit, sit fugiat rerum, sequi quod, cum deserunt modi, repellat officiis ab harum molestias assumenda minus similique distinctio.</p>
          <p>Esse fugit nobis neque maiores eveniet eius iure, consectetur nulla dolorum eligendi, omnis sed ipsa distinctio voluptas aperiam consequatur velit fuga, sunt. Iure porro quis suscipit placeat possimus doloremque! Eos.</p>
          <p>Eligendi quos ullam hic maiores velit ipsa est. Praesentium nobis in nihil repellendus quas adipisci natus rerum beatae unde at vitae aliquam ullam inventore quos, atque exercitationem minima sapiente blanditiis.</p>
          <p>Dignissimos nulla ducimus dolores, deserunt saepe doloremque amet quae. Cupiditate quidem excepturi asperiores accusamus, modi minus perspiciatis ut fugit aut, distinctio voluptate inventore quos! Autem earum facilis molestiae amet beatae!</p>
          <p>Odit possimus, at consectetur adipisci incidunt sequi ea accusantium dolores, cumque, nobis aliquam quod inventore natus doloribus soluta nemo mollitia, maiores culpa similique quam ex. Minus, debitis numquam eum cumque.</p>
          <p>Nobis quia modi, eius ex nam ea ad neque iusto accusantium cumque illo quam aspernatur ipsa labore explicabo deserunt asperiores vero dolorum voluptatum delectus hic in alias! Modi, doloribus, repudiandae?</p>
          <p>Rerum ut sed consequuntur ipsa eaque est tenetur, fugit tempora eveniet numquam qui similique veniam exercitationem vero quaerat facilis expedita aliquam voluptate, deleniti atque et non ex! Debitis nobis, sed!</p>
        </div>
      </div>
    </transition>
          </main-layout>

</template>

<script>
  import MainLayout from '../views/Main.vue'

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
          message: "hello",
      }
  }
  }

</script>
