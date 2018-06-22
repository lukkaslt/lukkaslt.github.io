let
	gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass');

// Compilar Sass
gulp.task('sass', function() {
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
	.pipe(sass())
	.pipe(gulp.dest("src/css"))
	.pipe(browserSync.stream());
})

// Mover js para src/js
gulp.task('js', function() {
	return gulp.src([
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/popper.js/dist/umd/popper.min.js'
	])
	.pipe(gulp.dest("src/js"))
	.pipe(browserSync.stream());
})

// Servidor para olhar o HTML/SCSS
gulp.task('server', ['sass'], function() {
	browserSync.init({
		server: "./"
	});

	gulp.watch([
		'node_modules/bootstrap/scss/bootstrap.scss',
		'src/scss/*.scss'
	], ['sass'])

	gulp.watch("./*.html").on('change', browserSync.reload)
});

gulp.task('default', ['js', 'server']);