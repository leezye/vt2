exports.files = {
	javascripts: {
		joinTo: 'app.js'
	},
	stylesheets: {
		joinTo: 'app.css',
        order: {
        after: ["app/scss/components/*.scss"] // concat app.css last
      }
	}
};
exports.plugins = {
	babel: {
		presets: ['es2015']
	},
	sass: {
		options: {
			includePaths: ['node_modules/bootstrap/scss']
		}
	}
}