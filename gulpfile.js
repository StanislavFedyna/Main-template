var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins');

function getTask(task) {
  return require('./gulp/tasks/' + task)(gulp, plugins);
}

gulp.task('sass', getTask('sass'));
gulp.task('server', getTask('server'));
gulp.task('img', getTask('img'));
gulp.task('scripts', getTask('scripts'));
gulp.task('css-libs', getTask('css-libs'));
gulp.task('clean', getTask('clean'));
gulp.task('cache', getTask('cache'));
gulp.task('watch', ['server', 'css-libs', 'scripts'], getTask('watch'));
gulp.task('build', ['clean', 'img', 'sass', 'scripts'], getTask('build'));



// gulp.task('server',require('./gulp/tasks/server')(gulp,plugins));
// gulp.task('img',require('./gulp/tasks/img')(gulp,plugins));
// gulp.task('scripts',require('./gulp/tasks/scripts')(gulp,plugins));
// gulp.task('css-libs',require('./gulp/tasks/css-libs',[sass])(gulp,plugins));
// gulp.task('clean',require('./gulp/tasks/clean')(gulp,plugins));
// gulp.task('cache', require('./gulp/tasks/cache')(gulp,plugins));
// gulp.task('watch', ['server', 'css-libs', 'scripts'], require('./gulp/tasks/watch')(gulp,plugins));
// gulp.task('build', ['clean', 'img', 'sass', 'scripts'], require('./gulp/tasks/build')(gulp,plugins));
gulp.task('default', ['watch']);