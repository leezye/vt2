//import vue 
import Vue from 'vue'
import page from 'page'
import 'vueify/lib/insert-css'
 

// main app
import App from './app.vue'

//components
import Home from './pages/Home'
import About from './pages/About'

//routes
import routes from './routes'

//create Vue instance with basic routing
window.addEventListener('DOMContentLoaded', function() {

    // load vue 
    var vue = require('vue');

    // create vue instance
    const app = new Vue({
        el: '#app',
        data: {
            ViewComponent: {
                // root container
                render: h => h('div', 'loading...')
            }
        },
        render(h) {
            return h(this.ViewComponent)
        }
    })
    
    //routing using page.js
    Object.keys(routes).forEach(route => {
        const Component = require('./pages/' + routes[route] + '.vue')
        page(route, () => app.ViewComponent = Component)
    })
    page('*', () => app.ViewComponent = require('./pages/404.vue'))
    page() 
});






