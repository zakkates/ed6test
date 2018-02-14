var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var bs = require('browser-sync');

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(bs.reload({stream: true}));
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});