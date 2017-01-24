const gulp = require('gulp');
const rollup = require('rollup').rollup;
const babel = require('rollup-plugin-babel');
const less = require('gulp-less');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const combine = require('stream-combiner2').obj;
const del = require('del');

const isDevelopment = !(process.env.NODE_ENV === 'production');

gulp.task('clean', () => del('./public'));

gulp.task('scripts', () =>
  rollup({
    entry: './src/scripts/app.js',
    globals: {
      Vue: 'Vue',
      window: 'window',
    },
    plugins: [
      babel({ runtimeHelpers: true }),
    ],
  })
  .then((bundle) => {
    bundle.write({
      format: 'iife',
      moduleName: 'app',
      dest: './public/scripts/app.js',
    });
  })
);

gulp.task('styles', () =>
  combine(
    gulp.src('./src/styles/app.less'),
    less({
      paths: ['./src/styles'],
    }),
    postcss([
      autoprefixer({ browsers: ['last 5 versions', 'ie 10-11'] }),
    ]),
    concat('app.css'),
    gulp.dest('./public/styles')
  )
);

gulp.task('images', () =>
  gulp.src('./src/images/**')
    .pipe(gulp.dest('./public/images'))
);

gulp.task('vendors', () =>
  gulp.src('./src/vendors/**')
    .pipe(gulp.dest('./public/vendors'))
);

gulp.task('build', ['scripts', 'styles', 'images', 'vendors']);
