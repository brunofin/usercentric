const assets = require('./package.json').assets,
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require("gulp-rename"),
  del = require('del'),
  path = require('path'),
  concat = require('gulp-concat'),
  fs = require('fs'),
  babel = require('gulp-babel');

gulp.task('bundleJS', () =>
  gulp.src([
      ...assets.JS.map(asset => 'node_modules/'.concat(asset)),
      'src/js/**/*'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: [
          [ "env", { "modules": false } ]
        ]
    }))
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src'))
);

gulp.task('compileSCSS', () =>
  gulp.src([
      ...assets.SCSS.map(asset => 'node_modules/'.concat(asset)),
      ...assets.CSS.map(asset => 'node_modules/'.concat(asset)),
      'src/scss/**/*'
    ])
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src'))
);

gulp.task('default', ['bundleJS', 'compileSCSS']);

gulp.task('deploy-copy', ['default'], () =>
  gulp.src('src/**/*.*')
    .pipe(gulp.dest('dist'))
);

gulp.task('deploy-clean:after', ['deploy-copy'], () =>
  del([
    'dist/js',
    'dist/scss',
    'dist/bundle.*.map',
  ])
);

gulp.task('deploy-clean:before', () =>
  del([
    'dist',
  ])
);

gulp.task('deploy', ['deploy-clean:before', 'deploy-clean:after']);
