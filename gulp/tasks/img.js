module.exports = function() {
  gulp.task('img', function() {
    return gulp.src('../../src/img/*')
      .pipe(cache(imagemin({ // С кешированием
      // .pipe(imagemin({ // Сжимаем изображения без кеширования
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }))/**/)
      .pipe(gulp.dest('../../dist/img')); // Выгружаем на продакшен
  });
};
