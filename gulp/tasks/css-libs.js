var
cssnano      = require('gulp-cssnano'), 
rename       = require('gulp-rename');

module.exports = function (gulp, plugins) {

  return function () {
    return gulp.src('src/css/libs.css')
      .pipe(cssnano()) // Сжимаем
      .pipe(rename({
        suffix: '.min'
      })) // Добавляем суффикс .min
      .pipe(gulp.dest('src/css/'));
  };

};
