exports.files = {
	javascripts: {
		joinTo: 'app.js'
	},
	stylesheets: {
		joinTo: 'app.css'
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