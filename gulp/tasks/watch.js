module.exports = function() {
  gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('../../src/sass/**/*.scss', ['sass']);
    gulp.watch('../../src/**/*.html', browserSync.reload);
    gulp.watch('../../src/js/**/*.js', browserSync.reload);
  });
};
