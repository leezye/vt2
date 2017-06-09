import Vue from 'vue'
import page from 'page'
import 'vueify/lib/insert-css'
import App from './app.vue'
import Hello from './components/Hello'
import About from './components/About'
import routes from './routes'

document.addEventListener('DOMContentLoaded', function() {
	// load vue 
	var vue = require('vue');
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
	Object.keys(routes).forEach(route => {
		const Component = require('./components/' + routes[route] + '.vue')
		page(route, () => app.ViewComponent = Component)
	})
	page('*', () => app.ViewComponent = require('./components/404.vue'))
	page()
    
});