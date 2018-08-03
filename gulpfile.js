var gulp         = require('gulp'), 
    sass         = require('gulp-sass'), 
    browserSync  = require('browser-sync'), 
    concat       = require('gulp-concat'), 
    uglify       = require('gulp-uglifyjs'), 
    cssnano      = require('gulp-cssnano'), 
    rename       = require('gulp-rename'), 
    del          = require('del'), 
    imagemin     = require('gulp-imagemin'), 
    pngquant     = require('imagemin-pngquant'), 
    cache        = require('gulp-cache'), 
    autoprefixer = require('gulp-autoprefixer');

    