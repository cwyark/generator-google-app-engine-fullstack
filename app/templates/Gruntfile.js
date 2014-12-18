'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};
