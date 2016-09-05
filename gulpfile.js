var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync')
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

/**
 * Compile sass
 */

gulp.task('sass', function() {
    return gulp.src('sass/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('static/css'))
        .pipe(browserSync.stream());
});

/**
 * Web server
 */

gulp.task('connect-sync', function() {
    connect.server({
        base: '../',
        open: false
    }, function (){
        browserSync({
            proxy: 'localhost:8000',
            startPath: 'viktorseb'
        });
    });
    
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('api/**/*.php').on('change', browserSync.reload);
    gulp.watch('ui/**/*.html').on('change', browserSync.reload);
    gulp.watch('ui/**/*.js').on('change', browserSync.reload);
});

/**
 * Gulp tasks
 */

gulp.task('build', ['sass']);
gulp.task('default', ['connect-sync']);