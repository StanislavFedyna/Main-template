module.exports = function() {
  gulp.task('scripts', function() {
    return gulp.src([
      '../../src/libs', //>>>> ADD LIBS
      '../../src/libs' // ADD ANOTHER LIBS
      ])
      .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
      .pipe(uglify()) // Сжимаем JS файл
      .pipe(gulp.dest('../../src/js')); //Вигружаємо
  });
};
