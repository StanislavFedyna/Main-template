module.exports = function() {
  gulp.task('clean', function() {
    return del.sync('../../dist'); // Удаляем папку dist перед сборкой
  });
};
