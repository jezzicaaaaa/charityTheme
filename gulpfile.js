var gulp = require('gulp');

var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

gulp.task('hello', function(){
    console.log('Hi Jezz!');
});

//gets the source and passes it to it's destination
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('browserSync', fucntion(){
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

//gulp watch syntax
gulp.task('watch', function(){
    
    ('app/scss/**/*.scss', ['sass']);
});

gulp.task('watch', ['browserSync'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
});