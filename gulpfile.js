var gulp         = require('gulp'), 
    sass         = require('gulp-sass'), 
    
    concat       = require('gulp-concat'), 
    uglify       = require('gulp-uglifyjs'), 
    cssnano      = require('gulp-cssnano'), 
    rename       = require('gulp-rename'), 
    del          = require('del'), 
    imagemin     = require('gulp-imagemin'), 
    pngquant     = require('imagemin-pngquant'), 
    cache        = require('gulp-cache'), 
    
    
    requireDir   = require('require-dir');

var tasks = requireDir('gulp/tasks');

gulp.task('sass',tasks.sass);
    

    

  
    

