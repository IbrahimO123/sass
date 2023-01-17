const {series, watch, dest, src} = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function compiler() {
    return src('./shinobi/**/*.scss')
    .pipe(sass())
    .pipe( dest('css'))
}

function watcher() {
    watch(['./shinobi/**/*.scss'], compiler)
}

exports.default = series(compiler, watcher)