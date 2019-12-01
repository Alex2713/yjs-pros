
const { watch } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

watch(['/style.scss'], { delay: 500 }, function (cb) {
    return gulp.src('style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style.css'));
});
exports.default = defaultTask