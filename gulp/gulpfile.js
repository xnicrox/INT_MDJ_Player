/* Compilado  MDJplayer */

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

/*configuracion de las tareas */


//--compilar modulos

gulp.task('create_player',function(){

    gulp.src([
        '../private/mdj_sources/js/namespace.js',
        '../private/mdj_sources/js/Events.js',
        '../private/mdj_sources/js/DataModel.js',
        '../private/mdj_sources/js/UIController.js',
        '../private/mdj_sources/js/StatController.js',
        '../private/mdj_sources/js/mdj_logtrust.js',
        '../private/mdj_sources/js/PlayerController.js'

    ])

        .pipe(concat('mdj_player.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('../public/mdj_sources/js'));

    console.log(">>> Compilado");

});



//---compilar scss

gulp.task('create_skin',function(){

    gulp.src('../private/mdj_sources/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../public/mdj_sources/css'));

    console.log(">>> CSS actualizado");

});



/* Actualización en tiempo real */


//--Modulos y css
gulp.task('live_create_player', function () {

    gulp.watch('../private/mdj_sources/js/**/*.js',['create_player']);
    gulp.watch('../private/mdj_sources/scss/**/*.scss',['create_skin']);

    console.log(">>> ok");

});







