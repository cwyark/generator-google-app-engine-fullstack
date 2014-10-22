'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-shell');
	grunt.initConfig({
		shell: {
			pythonServer: {
				command: 'python2 main.py'
			}
		}
	});
	grunt.registerTask('default', [
			'shell:pythonServer'
	]);
};
