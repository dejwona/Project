var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

// static server 
//Static Server + watching scss/ html file
gulp.task('serve', ['rwd'], function() {
   browserSync.init ({
     server:"./",
     online:true
   }); 
   gulp.watch("./scss/**/*.scss", ['rwd']);
   gulp.watch("./*.html").on('change', browserSync.reload);
   gulp.watch("./js/**/*.js").on('change', browserSync.reload);
});


gulp.task('zadanie2', function() { // funkcja callback
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})

gulp.task('rwd', function() { // funkcja callback
    return gulp.src('./scss/**/*.scss') //-->zrodlo
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole:true}))
        .pipe(sourcemaps.write())        
        .pipe(gulp.dest('css')) // --> gdzie laduja
        .pipe(browserSync.stream())
})

gulp.task('default', ['serve']);

/*
gulp.task('default', ['task2', 'zadanie'], function() {
});
*/