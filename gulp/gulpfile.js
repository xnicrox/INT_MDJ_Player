/* Compilado  MDJplayer */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

/*configuracion de las tareas */

gulp.task('create_player',function(){


    gulp.src([
        '../private/mdj_sources/js/namespace.js',
        '../private/mdj_sources/js/Events.js',
        '../private/mdj_sources/js/DataModel.js',
        '../private/mdj_sources/js/UIController.js',
        '../private/mdj_sources/js/PlayerController.js'
    ])

        .pipe(concat('mdj_player.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('../public/mdj_sources/js'))

    console.log(">>> Compilado");

});

//--Actualización en tiempo real

gulp.task('live_create_player', function () {

    gulp.watch('../private/mdj_sources/js/*.js',['create_player']) ;

    console.log(">>> Actualizado");

})

