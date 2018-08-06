var 
sass         = require('gulp-sass'),
csscomb      = require('gulp-csscomb'),
browserSync  = require('browser-sync'), 
autoprefixer = require('gulp-autoprefixer'),
sourcemaps   = require('gulp-sourcemaps');

module.exports = function (gulp, plugins) {
  
  return function () {
    gulp.src('src/sass/*.scss')
      .pipe(sourcemaps.init())
      .pipe(csscomb())
      .pipe(sass())
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('src/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  };
  
}





