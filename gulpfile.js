var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('default', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("*.js").on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);
    gulp.watch("*.css").on('change', browserSync.reload);
});
