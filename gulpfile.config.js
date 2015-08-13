module.exports = function() {
	var client = './src/client/';
	var server = './src/server/';
    var dist = './dist/';

	var paths = {
		libs: [
            'bower_components/traceur-runtime/traceur-runtime.min.js',
            'bower_components/systemjs/build/system.min.js',
            'bower_components/angular2/angular.min.js',
            'bower_components/engine.io-client/engine.io.js',
        ],
		ts: 'src/**/*.ts',
	};
    
    var devPaths = {
        'libs': client + 'app/libs'
    }
    
    var prodPaths = {
        'libs': dist + 'libs/'
    };
	
    var copyOptions = {
        prefix: 5
    };
    
	var config = {
		client: client,
		server: server,
        dist: dist,
		html: client + 'index.html',
        paths: paths,
		devPaths: devPaths,
        prodPaths: prodPaths,
        copyOptions: copyOptions
	}
	
	/**
	 * inject options
	 */
	 config.getInjectOptions = function() {
		 var options = {
			 read: false
		 }
		 
		 return options; 
	 }
	 
	 return config;
};