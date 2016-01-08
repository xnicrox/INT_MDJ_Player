/* Controlador de estadisticas */

(function (namespace) {

    console.log("**>> Cargando estadisticas..");

    var StatController = function () {

        var data = mdj.media.DataModel;

        var statData = [

            data.id_cuenta,
            data.media_type,
            data.id_player,
            data.id_media,
            data.id_container,
            data.duration,
            data.currentTime
        ];

        console.log("datos estadisticas>>",statData);


    };


    //-- Creacion de espacio de nombres

    namespace.StatController = StatController;
}(mdj.media));