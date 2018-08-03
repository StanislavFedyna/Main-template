module.exports = function() {
  gulp.task('sass', function(){
    return gulp.src('../../src/sass/*.scss')
      .pipe(csscomb())
      .pipe(sass())
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(gulp.dest('../../src/css'))
      .pipe(browserSync.reload({stream: true}))
  });  
};
