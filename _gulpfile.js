var gulp = require('gulp');
var sass = require('gulp-sass');
var autoPreFixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');


gulp.task('scss', function () {
  gulp.src('src/scss/style.scss')
    .pipe(plumber())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoPreFixer({
      browsers: ['last 2 versions', 'ie >= 9', 'Android >= 4', 'ios_saf >= 8'],
      cascade: false
    }))
    .pipe(gulp.dest('src'))
});

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: './src/'       //対象ディレクトリ
      , index: 'index.html'
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});


gulp.task('watch', function () {
  gulp.watch(['src/_index.html', 'src/scss/*.scss'], ['scss', 'bs-reload']);
  gulp.watch('src/_index.html', ['bs-reload']);
});


gulp.task('default', ['watch', 'browser-sync', 'scss']);
