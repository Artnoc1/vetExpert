var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	imagemin 	= require('gulp-imagemin'),
	minify 		= require('gulp-minify-css'),
	prefixer 	= require('gulp-autoprefixer'),
	rigger 		= require('gulp-rigger'),
	imagemin 	= require('gulp-imagemin'),
	browsersync = require('browser-sync').create(),
	concat 		= require('gulp-concat'),
	reload 		= browsersync.reload;

gulp.task('concat-sass', function() {
  return gulp.src('./src/scss/concated_scss/*.scss')
  	.pipe(rigger())
    .pipe(concat('style.scss'))
    .pipe(gulp.dest('./src/concated_scss/'));
});

gulp.task('compile-sass', ['concat-sass'], function (){
	gulp.src('./src/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./build/css/'));
});

gulp.task('htmlrigger', function(){
	gulp.src('./src/*.html')
	.pipe(rigger())
	.pipe(gulp.dest('./build/'));
})

gulp.task('watch', function(){
	gulp.watch('./src/scss/**/*.scss', ['concat-sass', 'compile-sass']);
	gulp.watch('./src/**/*.html', ['htmlrigger']);
});

gulp.task('imagemin', function(){
	gulp.src('./src/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./build/img/'))
})

gulp.task('server', function (){
    browsersync.init({
        server: {
            baseDir: "./build/"
        },
        notify: false
    }); 
    gulp.watch("./src/scss/**/*.scss").on("change", reload);
    gulp.watch("./build/**/*.html").on("change", reload);
});

gulp.task('default', ['concat-sass', 'compile-sass', 'htmlrigger','watch','server']);