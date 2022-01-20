import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

// const imagemin = require('gulp-imagemin');

/*
    -- A VERY LIGHTWEIGHT API --
    gulp.task - define tasks
    gulp.src - point to files to use
    gulp.dest - point to folder for output
    gulp.watch - watch files and folders for changes
*/

// log messages
gulp.task('message', async function(){
    return console.log('Hello Gulp');
});

// copy HTML
gulp.task('copy', async function(){
    gulp.src('*.html')
        .pipe(gulp.dest('dist'));
});

// copy CSS
gulp.task('copyCSS', async function(){
    gulp.src('assets/css/*.css')
        .pipe(gulp.dest('dist/css'));
});


// minify scripts
gulp.task('minify', function(){
    gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

// minimize images
gulp.task('imageMin', async () => {
    gulp.src('assets/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/assets/img'))
});


gulp.task('scripts', async () => {
    gulp.src('assets/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('default', gulp.series('copy', 'copyCSS', 'imageMin', 'scripts'));