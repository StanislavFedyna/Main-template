module.exports = function (gulp, plugins) {

  return function () {
    gulp.task('clear', function (callback) {
      return cache.clearAll();
    })
  };
  
}