const gulp = require('gulp'),
  del = require('del'),
  typescript = require('gulp-typescript'),
  tscConfig = require('./tsconfig.json'),
  sourcemaps = require('gulp-sourcemaps'),
  tslint = require('gulp-tslint'),
  tsProject = typescript.createProject('tsconfig.json'),
  browserSync = require('browser-sync'),
  useref = require('gulp-useref'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  cssnano = require('gulp-cssnano'),
  runSequence = require('run-sequence');

gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('tslint', () => {
  return gulp.src("src/**/*.ts")
    .pipe(tslint({
      formatter: 'prose'
    }))
    .pipe(tslint.report());
});

gulp.task('compile', [], function () {
  return gulp
    .src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write('.'), {
      includeContent: false,
      sourceRoot: function (file) {
        var sourceFile = path.join(file.cwd, file.sourceMap.file);
        return path.relative(path.dirname(sourceFile), file.cwd);
      }
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('copy:assets', function () {
  gulp.src('resources/**/*', { base: './' })
    .pipe(gulp.dest('dist'));

  gulp.src(['src/**/*', '!src/**/*.ts'], { base: 'src' })
    .pipe(gulp.dest('dist'));

  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulpif('*.css', cssnano()))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function (done) {
  runSequence('clean', 'compile', 'copy:assets', function () {
    browserSync({
      notify: false,
      server: {
        baseDir: './'
      }
    });
  });
});

gulp.task('default', ['build']);