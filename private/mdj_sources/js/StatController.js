/* Controlador de estadisticas */

(function (namespace) {

    console.log(">> Cargando estadisticas..");


    var StatController = function (parameters) {

        var that = this;

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

        };


        /* recuperando profile / plugin */


        this.statModules = function (file,data) {

            //--Recuperando archivos de configuracion

            var checkFile = file;

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {

                    var configData = JSON.parse(xhttp.responseText);

                    if (checkFile == "profile") {
                        that.configData(configData.config.plugins[0].url, "profile");//Mandar URL profile

                    }

                    if (checkFile == "plugin") {
                        that.configData("cargando plugin...", "plugin");//Caragando plugin

                    }

                }
            };

                xhttp.open("GET", data, true);
                xhttp.send();


        };


        /* Carga de Modulos */

        this.statModules("profile", BASE_conf + BASE_profiles);//--cargando profile


        this.configData = function (data, type) {

            if (type == "profile") {

                console.log("profile->", data); //--Visualizar profile
                that.statModules("plugin", data); //--cargar plugin LogTrust

            }

            if (type == "plugin") {

                console.log("plugin->", data); //--Visualizar profile

            }


        }


    };


    //-- Creacion de espacio de nombres

    namespace.StatController= StatController;

}(mdj.media));