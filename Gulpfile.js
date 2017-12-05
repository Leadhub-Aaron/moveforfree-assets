var cleanCss = require('gulp-clean-css')
var concat = require('gulp-concat')
var gulp = require('gulp')
var gulpRemote = require('gulp-remote-src')
var uglify = require('gulp-uglify')
var merge = require('merge2')

var jQueryUrl = 'https://code.jquery.com/';

var dest = 'assets';

gulp.task('scripts', function() {
    var remote = gulpRemote([
        'jquery-1.12.4.js',
        'ui/1.12.1/jquery-ui.js',
    ], {
        base: jQueryUrl,
    });

    var local = gulp.src([
        'src/parrallax.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/waypoints/lib/jquery.waypoint.js',
        'src/jquery.counterup.js',
        'src/default.js',
    ]);

    merge(remote, local)
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest + '/js/'));
});

gulp.task('styles', function() {
    var remote = gulpRemote([
        'ui/1.12.1/themes/base/jquery-ui.css',
    ], {
        base: jQueryUrl,
    });

    var local = gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/animate.css/animate.css',
        'src/style.css',
    ]);

    merge(local)
        .pipe(concat('bundle.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(dest + '/css/'));
});

gulp.task('fonts', function() {
    gulp.src('node_modules/bootstrap/fonts/*').pipe(gulp.dest(dest + '/fonts/'));
});

gulp.task('build', [ 'scripts', 'styles', 'fonts' ]);
