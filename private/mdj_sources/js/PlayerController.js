(function (namespace) {


    FAPI_URL = "http://fapi-top.prisasd.com/api";


//--Instanciación del playerMDJ

    var PlayerMDJ = function (data) {

        //--Configuracion para el player
        var dataConfiguration = data;
        var that = this;


        //--Creacion e instanciacion del player
        this.PlayerInstance = function (parameters, player) {

            // Crear nodo - etiqueta
            var playerElement = document.createElement("video");
            playerElement.id = player.id_container + "_video";
            document.getElementById(player.id_container).appendChild(playerElement);

            //Configuramos el player
            var playerID = document.getElementById(playerElement.id);

            playerID.className = player.skin;

            playerID.src = parameters.asset[0].url[2].url; //---video mp4 por defecto

            var mainPlayer = videojs(playerID, {
                techOrder: player.techOrder,
                "width": player.width,
                "height": player.height,
                "controls": player.controls,
                "autoplay": player.autoplay,
                "preload": player.preload,
                "poster": parameters.url_video_still
            }, function () {

                console.log("video inicializado");

            });

        }

        this.PlayerReset = function (parameters, player) {

            var playerID = document.getElementById(player.id_container + "_video_html5_api");

            playerID.pause();

            playerID.src = parameters.asset[0].url[2].url; //---video mp4 por defecto

            playerID.play();


        }


//---Mediador , cargando la configuracon de la fapi

        this.PlayerMediator = function (data, reset) {


            //--Recuperando la configuracion inicial
            var ajaxData = data;

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {

                    //--parseamos e instanciacion del player

                    if (reset) {

                        that.PlayerReset(JSON.parse(xhttp.responseText), data);               //--cargar nueva configuracion

                    } else {

                        that.PlayerInstance(JSON.parse(xhttp.responseText), dataConfiguration); //--configuracion por defecto
                    }


                }
            };
            xhttp.open("GET", FAPI_URL + "/" + ajaxData.id_cuenta + "/" + ajaxData.media_type + "/" + ajaxData.id_media + "/", true);
            xhttp.send();

        };


        //--Inicio de configuracion y reset

        this.PlayerFactory = function (data) {


            if (data == "" || data === undefined) {

                that.PlayerMediator(dataConfiguration);  //--Configuracion inicial
            } else {
                that.PlayerMediator(data, true);         //--nueva configuracion

            }


        }


    }


    //-- Creacion de espacio de nombres

    namespace.PlayerMDJ = PlayerMDJ;

}(mdj.media))
