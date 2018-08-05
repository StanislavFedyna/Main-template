var gulp         = require('gulp'), 
    cssnano      = require('gulp-cssnano'), 
    rename       = require('gulp-rename'), 
    del          = require('del'), 
    cache        = require('gulp-cache'), 
    requireDir   = require('require-dir'),
    plugins      = require('gulp-load-plugins');
    

gulp.task('sass',require('../main-template/gulp/tasks/sass')(gulp,plugins));

gulp.task('server',require('../main-template/gulp/tasks/server')(gulp,plugins));

gulp.task('img',require('../main-template/gulp/tasks/img')(gulp,plugins));

gulp.task('scripts',require('../main-template/gulp/tasks/scripts')(gulp,plugins));

gulp.task('css-libs',require('../main-template/gulp/tasks/css-libs')(gulp,plugins));

gulp.task('clean',require('../main-template/gulp/tasks/clean')(gulp,plugins));

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], require('../main-template/gulp/tasks/build')(gulp,plugins));

gulp.task('watch', ['server', 'css-libs', 'scripts'], require('../main-template/gulp/tasks/watch')(gulp,plugins));

    

  
    

