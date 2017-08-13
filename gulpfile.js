/**
 * Gulpfile for Chefkoch-Design-System
 *
 * Compiling of SCSS-Sources
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var execSync = require('child_process').execSync;
var browserSync = require('browser-sync').create();

// Use 'development' variable with 'gulpif' to toggle writing of sourcemaps
var development = false;

// Load config
var config  = {
    'appRootDir':  './components/app',
    'docsSource': './components/app/documentation/**/*',
    'webRootDir': './components/app/web',
    'CdsSourceFile' : './components/patterns/chefkoch-design-system.scss',
    'watchFiles' : ['./components/patterns/**/*', './components/app/documentation/**/*'],
    'destFolder' : './components/app/web/build/',
    'autoprefixerOptions' : {
        'browsers' : ['last 3 versions', '> 1% in DE', 'Android 4']
    }
};

/**
 * Task: Copy Documents
 * Description: Copy the example & description data of the patterns to the astrum webroot directory
 */
gulp.task('init-astrum', function() {
    execSync('npm run astrum init ./components/app/web', { stdio: [0,1,2]});
});

/**
 * Task: Copy Documents
 * Description: Copy the example & description data of the patterns to the astrum webroot directory
 */
gulp.task('copy-documents', function() {
    gulp.src(config.docsSource)
        .pipe(gulp.dest(config.webRootDir));

    gulp.src(config.appRootDir + '/assets/**/*')
        .pipe(gulp.dest(config.webRootDir));

    gulp.src(config.appRootDir + '/robots.txt')
        .pipe(gulp.dest(config.webRootDir));
});

/**
 * Task: Build
 * Description: Compiles SCSS to CSS.
 * Sourcemaps are written if 'development == true'
 */
gulp.task('compile-scss', function () {
    return gulp.src(config.CdsSourceFile)
        .pipe(gulpif(development, sourcemaps.init()))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sassErrorHandler))
        .pipe(autoprefixer(config.autoprefixerOptions))
        .pipe(gulpif(development, sourcemaps.write('./')))
        .pipe(gulp.dest(config.destFolder))
        .pipe(browserSync.stream());
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

// Static server
gulp.task('serve', function() {

    development = true;

    browserSync.init({
        server: {
            baseDir: "./components/app/web"
        }
    });

    gulp.watch("components/patterns/**/*.scss", ['compile-scss']);
    gulp.watch("components/app/documentation/**/*").on('change', browserSync.reload);
});

/**
 * Task: Build
 * Description: initializes astrum, copies all pattern description documents and finally compiles the assets
 */
gulp.task('build', ['init-astrum', 'copy-documents', 'compile-scss']);

gulp.task('default', ['build']);