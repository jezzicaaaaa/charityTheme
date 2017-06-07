var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require("gulp-autoprefixer");
var browserSync = require('browser-sync');
var reload = browserSync.create();
//gets the source and passes it to it's destination



gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
        stream: true
    }))
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