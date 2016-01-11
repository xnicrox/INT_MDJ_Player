/* Controlador de estadisticas */

(function (namespace) {

    console.log("**>> Cargando estadisticas..");


    var StatController = function (parameters) {

        this.RecoverStatData = function () { //--Recuperamos los datos

            var data = mdj.media.DataModel; //--Recuperamos modelo de datos

            var statData = [

                data.id_cuenta,
                data.media_type,
                data.id_player,
                data.id_media,
                data.id_container,
                data.duration,
                data.currentTime
            ]

            return statData;


        }


        //--recuperando profile

        this.Profile = function (data) {

            //--Recuperando archivos de configuracion

            var ajaxData = data;

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {

                    console.log("profile-->", JSON.parse(xhttp.responseText));

                }
            };


            xhttp.open("GET", BASE_conf + BASE_profiles, true);
            xhttp.send();

        };

        this.Profile();//--cargando profile


    };


    //-- Creacion de espacio de nombres

    namespace.StatController= StatController;

}(mdj.media));