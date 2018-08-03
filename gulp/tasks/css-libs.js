module.exports = function() {
  gulp.task('css-libs', ['sass'], function() {
    return gulp.src('../../src/css/libs.css')
      .pipe(cssnano()) // Сжимаем
      .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
      .pipe(gulp.dest('../../src/css/'));
  });
};
