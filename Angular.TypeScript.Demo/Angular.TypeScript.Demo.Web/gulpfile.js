var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	browserSync.init({
		server: '.'
	});

	gulp.watch('css/*.css', function() {
		gulp.src('css/*.css')
			.pipe(browserSync.stream());
	});
});

gulp.task('default', ['serve']);