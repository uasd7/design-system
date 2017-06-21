/**
 * Gulpfile for Chefkoch-Design-System
 *
 * Compiling of SCSS-Sources
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
require('es6-promise').polyfill();
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');

// Use 'development' variable with 'gulpif' to toggle writing of sourcemaps
var development = false;

// Load config
var config  = {
    "CdsSourceFile" : "./source/scss/chefkoch-design-system.scss",
    "watchFolder" : "./source/scss/",
    "destFolder" : "./chefkoch-design-system/build/",
    "autoprefixerOptions" : {
        "browsers" : ["last 3 versions", "> 1% in DE", "Android 4"]
    }
};

/**
 * Task: Build
 * Description: Compiles SCSS to CSS.
 * Sourcemaps are written if 'development == true'
 */
gulp.task('build', function () {
    return gulp.src(config.CdsSourceFile)
        .pipe(gulpif(development, sourcemaps.init()))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sassErrorHandler))
        .pipe(autoprefixer(config.autoprefixerOptions))
        .pipe(gulpif(development, sourcemaps.write('./')))
        .pipe(gulp.dest(config.destFolder));
});

/**
 * Custom Error-handler for SASS-Compiler
 * @param err
 * @src https://github.com/gulpjs/gulp/issues/259
 */
function sassErrorHandler(err) {
    // Display errormessage
    console.log(err.message);

    if (development) {
        // Returns to watcher, when in development-mode
        this.emit('end');
    } else {
        // Stops process when in production-mode
        process.exit(1);
    }
}

/**
 * Task: Watch
 * Description: Watcher, sets 'development' so that sourcemaps are written
 */
gulp.task('watch', function () {
    development = true;
    gulp.watch(config.watchFolder, ['frontend-scss:build']);
});