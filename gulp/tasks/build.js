
module.exports = function() {
  gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

    var buildCss = gulp.src([ // Переносим ФАЙЛ ТА библиотеки в продакшен(типу CSS SHAKE або інших)
      'src/css/main.css'
      // 'app/css/libs.min.css' //Записати потрібну лібу
      ])
    .pipe(gulp.dest('dist/css'))

    //Fonts
    var buildFonts = gulp.src('src/fonts/*')
    .pipe(gulp.dest('/dist/fonts'))

    //JS
    var buildJs = gulp.src('src/js/*')
    .pipe(gulp.dest('dist/js'))

    //HTML
    var buildHtml = gulp.src('src/*.html')
    .pipe(gulp.dest('/dist'));
  
  });
};
