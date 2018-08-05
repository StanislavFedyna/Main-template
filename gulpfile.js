var gulp         = require('gulp'), 
    cssnano      = require('gulp-cssnano'), 
    rename       = require('gulp-rename'), 
    del          = require('del'), 
    plugins      = require('gulp-load-plugins');
    
var path = '../main-template/gulp/tasks/',
    task   = gulp.task;


task('sass',require(path + 'sass')(gulp,plugins));
task('server',require(path + 'server')(gulp,plugins));
task('img',require(path + 'img')(gulp,plugins));
task('scripts',require(path + 'scripts')(gulp,plugins));
task('css-libs',require(path + 'css-libs')(gulp,plugins));
task('clean',require(path + 'clean')(gulp,plugins));
task('clear', require(path +'cache')(gulp,plugins));
task('watch', ['server', 'css-libs', 'scripts'], require(path + 'watch')(gulp,plugins));
task('build', ['clean', 'img', 'sass', 'scripts'], require(path + 'build')(gulp,plugins));


    

  
    

