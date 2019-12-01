
const { watch } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function css(cb) {
    gulp.src('style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
    console.log('scss loadding!!!');
    cb();
}

watch('style.scss', { delay: 500 }, css);
exports.default = css