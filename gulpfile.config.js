module.exports = function() {
	var client = './src/client/';
	var server = './src/server/';

	var paths = {
        ts: [
            'src/server/**/*.ts',
            'src/client/**/*.ts',
            '!src/client/jspm_packages/**/*.ts'
        ],
        images: 'src/client/images/**/*',
        styles: 'src/client/styles/**/*',
        jspm: 'src/client/*.js',
        html: 'src/client/**/*.html',
        jspmIgnore: '!src/client/jspm_packages/**/*',
        libs: 'src/client/app/libs/*.js',
        www: 'src/server/bin/www',
        configs: 'src/server/config/*.json'
	};

	var config = {
		client: client,
		server: server,
        paths: paths,
        app: client + 'app/app.js',
        tscOptions: {
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            watch: true,
            module: "commonjs",
            target: "es5",
            emitError: false,
            sourceMap: true
        }
    }
	 
	 return config;
};