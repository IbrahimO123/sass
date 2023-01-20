const { series, watch, dest, src } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function compiler() {
  return src("./shinobi/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
}

function watcher() {
  watch(["./shinobi/**/*.scss", "*.html"], compiler);
}

exports.default = series(compiler, watcher);
