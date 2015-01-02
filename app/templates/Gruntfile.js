'use strict';

module.exports = function (grunt) {
	var param = {};
	param['host'] = grunt.option('host') || '127.0.0.1';
	param['port'] = grunt.option('port') || '8080';
	param['extra-argument'] = grunt.option('extra-argument') || ''
	grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
		shell: {
			app_server: {
				command: 'dev_appserver.py --host ' + param['host'] + ' --port ' + param['port'] + param['extra-argument'] + ' .',
				option: {
					strerr:true,
				}
			},
			gae_pip_install:{
				command: 'pip install -r requirements.txt -t lib'
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
				tasks: ['shell:app_server','watch'],
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
	grunt.registerTask('server', ['concurrent:target']);
	grunt.registerTask('install', ['shell:gae_pip_install']);
};
