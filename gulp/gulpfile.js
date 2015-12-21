/* Compilado  MDJplayer */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

/*configuracion de las tareas */

gulp.task('create_player',function(){


    gulp.src('../private/mdj_sources/js/*.js')
        .pipe(concat('mdj_player.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../public/mdj_sources/js'))

    console.log(">>>Tarea finalizada");

});