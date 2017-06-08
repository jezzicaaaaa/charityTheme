var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require('browser-sync');
// var sourcemaps   = require('gulp-sourcemaps');
// var reload = browserSync.create();
// var uglify = require('gulp-uglify');
// var pump = require('pump');
// var sourcemaps = require('gulp-sourcemaps');
// var autoprefixer = require('gulp-autoprefixer');
// var concat = require('gulp-concat');
//gets the source and passes it to it's destination

gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('browserSync', () => {
    browserSync.init({
        server:'.'
    });
});

//gulp watch syntax
gulp.task('watch', function(){
    ('scss/**/*.scss', ['sass']);
});

gulp.task('watch', ['browserSync'], function(){
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('index.html').reload;
});

gulp.task('default', ['sass', 'watch']);