/* Controlador de estadisticas */

(function (namespace) {

    console.log("**>> Cargando estadisticas..");


    var StatMediator= function (parameters) {


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

        console.log("datos estadisticas>>", statData);



        //--recuperando profile

        var envio = function (data) {

            //--Recuperando archivos de configuracion

            //var ajaxData = data;
            //
            //var xhttp = new XMLHttpRequest();
            //xhttp.onreadystatechange = function () {
            //    if (xhttp.readyState == 4 && xhttp.status == 200) {
            //
            //
            //        console.log("profile-->", JSON.parse(xhttp.responseText));
            //
            //
            //    }
            //};
            //xhttp.open(BASE_conf + "/mdj_profile.json", true);
            //xhttp.send();

        };



    };


    //-- Creacion de espacio de nombres

    namespace.StatMediator= StatMediator;

}(mdj.media.StatController));