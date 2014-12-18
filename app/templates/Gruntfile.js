'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			option: {
				strerr:false,
				command: 'dev_appserver.py --host <%= pkg.gae_host_ip %> --port <%= pkg.gae_host_port %> .'
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: '<%= pkg.static_folder %>/{sass,scss}',
					cssDir: '<%= pkg.static_folder %>/{css,stylesheet}'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.{scss,sass}',
				tasks: ['compass']
			}
		},
		concurrent: {
			target: {
				tasks: ['shell','watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.registerTask('default', ['concurrent:target']);
};
