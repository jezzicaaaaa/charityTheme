var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require("gulp-autoprefixer");
var browserSync = require('browser-sync');
var reload = browserSync.create();
//gets the source and passes it to it's destination



gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});


gulp.task('browserSync', () => {
    browserSync.init({
        server:'app'
    });
});

//gulp watch syntax
gulp.task('watch', function(){
    ('app/scss/**/*.scss', ['sass']);
});

gulp.task('watch', ['browserSync'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('index.html').reload;
});

gulp.task('default', ['sass', 'watch']);