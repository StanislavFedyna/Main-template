var gulp         = require('gulp'), 
    sass         = require('gulp-sass'),
    plugins      = require('gulp-load-plugins');

  gulp.task('sass',require('./gulp/tasks/sass')(gulp,plugins));
  gulp.task('server',require('./gulp/tasks/server')(gulp,plugins));
  gulp.task('img',require('./gulp/tasks/img')(gulp,plugins));
  gulp.task('scripts',require('./gulp/tasks/scripts')(gulp,plugins));
  gulp.task('css-libs',require('./gulp/tasks/css-libs',[sass])(gulp,plugins));
  gulp.task('clean',require('./gulp/tasks/clean')(gulp,plugins));
  gulp.task('cache', require('./gulp/tasks/cache')(gulp,plugins));
  gulp.task('watch', ['server', 'css-libs', 'scripts'], require('./gulp/tasks/watch')(gulp,plugins));
  gulp.task('build', ['clean', 'img', 'sass', 'scripts'], require('./gulp/tasks/build')(gulp,plugins));
  gulp.task('default', ['watch']);

    

  
    

