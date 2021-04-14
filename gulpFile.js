const { watch ,src, dest, series } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');


paths = {
    imagenes: 'src/img/**/*',
    sass: 'src/sass/app.sass',
    js: 'src/js/**/*.js'
}

function css() {
    return src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        // .pipe(rename({suffix: '.min'}))
        .pipe(dest('./build/css'));
}

function cssMin() {
    return src(paths.sass)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'));
}

function javaScript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/js'));
}

function watchFiles() {
    watch('src/sass/**/*.sass', css);
    watch('src/sass/**/*.scss', css);
    watch(paths.js, javaScript);
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notify({message: 'Imagen minificada'}));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({message: 'Version Webp'}));
        
}

exports.watchFiles = watchFiles;
exports.imagenes = imagenes;
exports.cssMin = cssMin;
exports.css = css;
exports.js = javaScript;

exports.default = series(css, javaScript, imagenes, versionWebp, watchFiles);