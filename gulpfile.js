const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');

gulp.task('dev', ['html', 'css', 'js', 'images'], function () {
    browserSync.init({
        server: './dist'
    });

    gulp.watch('src/images/*', ['images']);
    gulp.watch('src/js/*.js', ['js-watch']);
    gulp.watch('src/scss/*.scss', ['css']);
    gulp.watch('src/html/*.html', ['html']).on('change', browserSync.reload);
});

gulp.task('html', function () {
    gulp.src('src/html/*.html')
        .pipe(gulp.dest('dist/html'))
});

gulp.task('css', function () {
    return gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
});

gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('images', function() {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('default', ['dev']);
