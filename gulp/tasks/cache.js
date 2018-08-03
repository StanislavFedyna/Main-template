module.exports = function() {
  gulp.task('clear', function (callback) {
    return cache.clearAll();
  })
};
