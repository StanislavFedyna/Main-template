var
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant');

module.exports = function (gulp, plugins) {

  return function() {
    gulp.src('../../src/img/')
      // .pipe(cache(imagemin({ // С кешированием
      .pipe(imagemin({ // Сжимаем изображения без кеширования
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }))
      .pipe(gulp.dest('../../dist/img')); // Выгружаем на продакшен
  };
  
}