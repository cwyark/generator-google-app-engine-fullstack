var jshint = require("gulp-jshint");
var gulp = require("gulp");


gulp.task('jscheck', function(){
	return gulp.src('./app/**/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('default', ['jscheck'], function() {
	gulp.watch('./app/**/*.js', ['jscheck']);
});
