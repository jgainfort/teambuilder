module.exports = function() {
	var client = './src/client/';
	var server = './src/server/';

	var paths = {
		ts: [
            'src/server/**/*.ts',
            'src/client/**/*.ts',
            '!src/client/jspm_packages/**/*.ts'
        ]
	};

	var config = {
		client: client,
		server: server,
        paths: paths
    }
	 
	 return config;
};