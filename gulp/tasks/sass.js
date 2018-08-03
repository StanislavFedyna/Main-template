module.exports = function() {
  gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('../../src/sass/*.scss') // Берем источник
      .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
      .pipe(gulp.dest('../../src/css')) // Выгружаем результата в папку app/css
      .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
  });  
};

// ДОБАВИТИ ІНШІ КОМПОНЕНТИ CSS COMB))))