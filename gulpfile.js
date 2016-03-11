var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    postcss      = require('gulp-postcss'),
    stylus       = require('gulp-stylus'),
    cp           = require('child_process'),
    jade         = require('gulp-jade'),
    prettify     = require('gulp-prettify'),
    // uglify       = require('gulp-uglify'),
    // rename       = require('gulp-rename'),
    // coffee       = require('gulp-coffee'),
    // concat       = require('gulp-concat'),
    sourcemaps   = require('gulp-sourcemaps'),
    lost         = require('lost'),
    autoprefixer = require('autoprefixer')
 ;

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['stylus', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _stylus into both _site/css (for live injecting) and site (for future jekyll builds)
 */

gulp.task('stylus', function() {
  var processors = [
    lost,
    autoprefixer({browsers: ['last 2 version']})
    // csswring
  ];

  return gulp.src('_assets/stylus/styles.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss(processors))
    // .pipe(minifycss())
    .pipe(sourcemaps.write())
    // .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/css'));
});


gulp.task('scriptspre', function() {
  return gulp.src([
                    // 'bower_components/modernizr/modernizr.js',
                    'project/assets/scripts/scriptspre.js'
                  ])
    .pipe(sourcemaps.init())
    .pipe(concat('pre.js'))
    .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest('../Build/Dev/assets/js/'))
    .pipe(gulp.dest('../Build/CMS/assets/js/'));
});

gulp.task('scriptspost', function() {
  return gulp.src([
                    // 'bower_components/jquery/dist/jquery.js',
                    // 'bower_components/wow.js/dist/wow.js',
                    // 'bower_components/jquery-simplyscroll/jquery.simplyscroll.js',
                    'project/assets/scripts/scriptspost.js',
                  ])
    .pipe(sourcemaps.init())
    .pipe(concat('post.js'))
    .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest('../Build/Dev/assets/js/'))
    .pipe(gulp.dest('../Build/CMS/assets/js/'));
});




/*
* Doing some fancy Gulp stuff here
*/
gulp.task('jaderoot', function(){
  return gulp.src('*.jade')
  .pipe(jade())
  .pipe(prettify({indent_size: 2}))
  .pipe(gulp.dest(''));
});

gulp.task('jadefiles', function(){
  return gulp.src('_jadefiles/*.jade')
  .pipe(jade())
  .pipe(prettify({indent_size: 2}))
  .pipe(gulp.dest('_includes'));
});

gulp.task('jadelayouts', function(){
  return gulp.src('_jadelayouts/*.jade')
  .pipe(jade())
  .pipe(prettify({indent_size: 2}))
  .pipe(gulp.dest('_layouts'));
});

gulp.task('jadepages', function(){
  return gulp.src('_jadepages/*.jade')
  .pipe(jade())
  .pipe(prettify({indent_size: 2}))
  .pipe(gulp.dest('_pages'));
});

gulp.task('jade', ['jaderoot', 'jadefiles', 'jadelayouts', 'jadepages']);

gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['stylus']);
    gulp.watch('**/*.jade', ['jade']);
    // gulp.watch('**/*.html', ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the stylus,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
