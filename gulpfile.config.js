module.exports = function() {
	var client = './src/client/';
	var server = './src/server/';
	var bowerLibs = [
		'bower_components/traceur-runtime/traceur-runtime.min.js',
		'bower_components/systemjs/build/system.min.js',
		'bower_components/angular2/angular.min.js',
		'bower_components/engine.io.js'
	];
	var lib = './src/client/app/libs';
	
	var config = {
		client: client,
		server: server,
		serverStart: server + '/bin/www.js',
		html: client + 'index.html',
		prodHtml: client + 'index.prod.html',
		bowerLibs: bowerLibs,
		lib: lib
	}
	
	/**
	 * Inject options
	 */
	 config.getInjectOptions = function() {
		 var options = {
			 read: false
		 }
		 
		 return options; 
	 }
	 
	 return config;
};