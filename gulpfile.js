var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

var src = 'src';
var dist = 'dist';
var paths = {
    js: src + '/js/**/*.js',
    sass: src + '/sass/**/*.scss',
    css: dist + '/css/*.css'
};
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('js:combine', function() {
    gulp.src(paths.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(dist + '/js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest(dist + '/js'))
});

var sassOptions = {
    outputStyle: "expanded", // nested, expanded, compact, compressed
    indentType: "tab", // tab, space
    indentWidth: 1,
    precision: 6,
    sourceComments: true,
};

gulp.task('sass:compile', function() {
    gulp.src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        // .pipe(sourcemaps.write())
        .pipe(rename('main.css'))
        .pipe(gulp.dest(dist + '/css'))
})

gulp.task('watch', function() {
    gulp.watch(paths.js, ['js:combine']);
    gulp.watch(paths.sass, ['sass:compile']);
})

gulp.task('default', ['js:combine', 'sass:compile']);