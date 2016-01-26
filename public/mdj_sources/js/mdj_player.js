/* Creando espacio de nombres */

(function (window) {

    window.mdj = window.mdj || {};

    window.mdj.media = window.mdj.media || {};

    window.mdj.media.DataModel = window.mdj.media.DataModel || {};

    window.mdj.media.StatController = window.mdj.media.StatController || {}


}(window));

/* Declaración de eventos */

(function(namespace){

    console.log(">> Escuchando eventos..");


    var Events = function (data) {


        var StatData = new mdj.media.StatController;

        var ListEvent = [
            "abort",
            "play",
            "canplay",
            "canplaythrough",
            "durationchange",
            "emptied",
            "ended",
            "error",
            "loadeddata",
            "loadedmetadata",
            "loadstart",
            "pause",
            "play",
            "playing",
            "progress",
            "ratechange",
            "seeked",
            "seeking",
            "stalled",
            "suspend",
            "timeupdate",
            "volumechange",
            "waiting"
        ];

        for (var i = 0; i <= ListEvent.length; i++) {

            data.addEventListener(ListEvent[i], MDJEvent);

            //console.log(i,"-Evento>>",ListEvent[i]);

        }

       function  MDJEvent(e) {

            //console.log("MDJEvent>>", e.type);

           switch(e.type){

               case "canplay":

                   mdj.media.DataModel.duration = parseInt(data.duration);
                   //console.log(e, "-duracion>>", mdj.media.DataModel.duration);

                   break;

               case "play":

                   console.log("StatData>>>",StatData.RecoverStatData()); //--Recuperando Estadisticas

                   break;

               case "progress":

                   mdj.media.DataModel.currentTime = parseInt(data.currentTime);
                   //console.log(e, "-currentTime>>", mdj.media.DataModel.currentTime);

                   break;

           }


        }



    };

    //-- Creacion de espacio de nombres

    namespace.Events = Events;
}(mdj.media));

/* Modelos de datos por defecto*/


FAPI_URL = "http://fapi-top.prisasd.com/api";
BASE_WEB = location.hostname + "/mdj";
BASE_conf = "../conf";

BASE_profiles = "/profiles/mdj_profile.json"; //--Profiles para estadisticas
BASE_plugin = "/plugin/mdj_logtrust.json"; //--Profiles para estadisticas



(function(namespace){

    //--parametros configuracion fapi --/

    namespace.id_cuenta = "";                                              //--ID cuenta
    namespace.media_type = "";                                             //--Tipo de medio ej:video/audio
    namespace.id_player = "";                                              //--Identificador del player ej:20
    namespace.id_media = "";                                               //--Identificador del video
    namespace.id_container = "";                                           //--Identificador de la capa
    namespace.width = "";                                                  //--ancho por defecto del video
    namespace.height = "";                                                 //--alto por defecto del video

    //--parametros de videojs

    namespace.skin = "";                                                   //--skin por defecto
    namespace.playbackRates = "";                                          //--Velocidad de reproduccion
    namespace.techOrder = "";                                              //--Orden de tecnologias
    //namespace.width = "";                                                  //--ancho
    //namespace.height = "";                                                 //--alto
    namespace.controls = "";                                               //--controles
    namespace.autoplay = "";                                               //--Autoinicio
    namespace.preload = "";                                                //--Precarga del video

    //--Propiedades de player

    namespace.duration = 0;                                                 //--duracion del video
    namespace.currentTime = 0;                                              //--tiempo actual




    var CheckDataModel = function (data) {

        console.log(">> Cargando modelo de datos..");

        //console.log("datamodel>", data);

        var checkData = function (dataplayer) {

            if (typeof (dataplayer) == "undefined" || dataplayer == "") {

                return false;
            } else {

                return true;
            }
        }

        //--parametros configuracion fapi

        namespace.id_cuenta = (this.id_cuenta = data.id_cuenta);                                                 //--ID cuenta
        namespace.media_type = (this.media_type = data.media_type);                                              //--Tipo de medio ej:video/audio
        namespace.id_player = (this.id_player = data.id_player);                                                 //--Identificador del player ej:20
        namespace.id_media = (this.id_media = data.id_media);                                                    //--Identificador del video
        namespace.id_container = (this.id_container = data.id_container);                                        //--Identificador de la capa
        namespace.width = (this.width = (checkData(data.width)) ? data.width : "800");                           //--ancho por defecto del video
        namespace.height = (this.height = (checkData(data.height)) ? data.height : "360");                       //--alto por defecto del video

        //--parametros de videojs

        namespace.skin = (this.skin = (checkData(data.skin)) ? data.skin : "video-js vjs-default-skin");          //--skin por defecto
        namespace.playbackRates = (this.playbackRates = data.playbackRates);                                      //--Velocidad de reproduccion
        namespace.techOrder = (this.techOrder = data.techOrder);                                                  //--Orden de tecnologias
        //namespace.width=(this.width = data.width);                                                              //--ancho
        //namespace.height=(this.height = data.height);                                                           //--alto
        namespace.controls = (this.controls = data.controls);                                                     //--controles
        namespace.autoplay = (this.autoplay = data.autoplay);                                                     //--Autoinicio
        namespace.preload = (this.preload = data.preload);                                                        //--Precarga del video

    }

    //-- Funcion validadora

    namespace.CheckDataModel = CheckDataModel;


}(mdj.media.DataModel));
/* Componentes MDJPlayer */

(function (namespace) {

    console.log(">> Cargando Interface..");

    var UI = function () {


    }

    //-- Creacion de espacio de nombres

    namespace.UI = UI;
}(mdj.media));
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

            console.log("data>>",data);

            var checkFile = file;

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {

                    var configData = JSON.parse(xhttp.responseText);

                    if (checkFile == "profile") {

                        if(typeof (configData) =="undefined");
                        {console.log("--->ok undefined")}

                        that.configData(configData.config.plugins[0].url, "profile");//Mandar URL profile

                    }

                    if (checkFile == "plugin") {
                        that.configData(configData, "plugin");//-- Cargando plugin

                    }

                }
            };

                xhttp.open("GET", data, true);
                xhttp.send();


        };


        /* Carga de Modulos */

        this.statModules("profile", BASE_conf + BASE_profiles);// --cargando profile


        this.configData = function (data, type) {

            if (type == "profile") {

                console.log("profile->", data);  //--Visualizar profile
                that.statModules("plugin", data); //-- cargar plugin LogTrust

            }
            if (type == "plugin") {

                console.log("plugin-->", data); //--Visualizar LogTrust

            }


        }


    };


    //-- Creacion de espacio de nombres

    namespace.StatController= StatController;

}(mdj.media));
/* Estadisticas LogTrustModule*/

(function (namespace) {

    var LogTrust = function (parameters) {

        //****************Conversion de Datos***************


        //Configuracion de Eventos

        varAux0 = {};

        for (var c1 in _mapaData) {


            varAux1 = c1;

            //Configuracion de variables
            for (var c2 in _mapaDataMap) {


                varAux2 = _mapaDataMap[c2];

                if (varAux1 == varAux2) {


                    sendlogTrust[c2] = _mapaData[c1];       //captura variables utiles

                    //totalSizeString++;

                    varAux0[c2] = _mapaDataMap[c2];
                    delete _mapaDataMap[c2];


                } else if (varAux2.indexOf("data.") == -1) {


                    sendlogTrust[c2] = varAux2;           //Superponer variables "text."

                    //totalSizeString++;

                    varAux0[c2] = _mapaDataMap[c2];
                    delete _mapaDataMap[c2];

                }


            }

        }

        for (var c3 in varAux0) {

            _mapaDataMap[c3] = varAux0[c3];  //-- Recupera datos para una nueva pasada


        }

        //--Restriccion de envio

        for (var r0 in sendlogTrust) {

            varRes0 = r0;

            for (var r1 in eventMap.vars) {

                varRes1 = eventMap.vars[r1];

                if (varRes0 == varRes1) {

                    totalSizeString++;

                    sendlogTrustEnvio[varRes1] = sendlogTrust[varRes0];
                }
            }

        }


        //--Composicion y envio de datos

        (function () {

            var stringConversion = "";

            var TimeRandom = new Date();

            var compoURL = "?event=" + eventMap.events[0] + "&";


            for (var c3 in sendlogTrustEnvio) {

                sizeString++;

                stringConversion = String(sendlogTrustEnvio[c3]);

                if (stringConversion != "") {      //--comprobar campo vacio


                    if (urlDecodi()) {  //-- Codificando en caso de recibir el parametro del iframe


                        if (c3 == varMedio) {
                            sendlogTrustEnvio[c3] = urlDecodi();
                        }
                    }
                    ;


                    compoURL += c3 + "=" + sendlogTrustEnvio[c3];

                    if (sizeString != totalSizeString) {
                        compoURL += "&";
                    } else {
                        compoURL += "&rnd=" + TimeRandom.getTime() + "_" + Math.floor((Math.random() * 1000) + 1);
                    }
                }
            }

            objImagen.src = logtrustURL + compoURL;


        }())//--Envio


        //****************Fin de Conversion de Datos********


    }


    //-- Creacion de espacio de nombres*/

    namespace.LogTrust = LogTrust;


}(mdj.media.StatController));
/* Instanciación y configuración del player */

(function (namespace) {



//--Instanciación del playerMDJ


    var PlayerMDJ = function (data) {

        console.log(">> Cargando configuracion..");


        //--Configuracion para el player
        var dataConfiguration = data;
        var that = this;


        //--Creacion e instanciacion del player
        this.PlayerInstance = function (parameters, player) {

            //--Validacion de datos
            var playerDataModel = new mdj.media.DataModel.CheckDataModel(player);

            // Crear nodo - etiqueta
            var playerElement = document.createElement("video");
            playerElement.id = playerDataModel.id_container + "_video";
            document.getElementById(playerDataModel.id_container).appendChild(playerElement);

            //Configuramos el player
            var playerID = document.getElementById(playerElement.id);

            var PlayerEvents = new mdj.media.Events(playerID);

            playerID.className = playerDataModel.skin;

            playerID.src = parameters.asset[0].url[2].url; //---video mp4 por defecto

            var mainPlayer = videojs(playerID, {
                "playbackRates": playerDataModel.playbackRates,
                "techOrder": playerDataModel.techOrder,
                "width": playerDataModel.width,
                "height": playerDataModel.height,
                "controls": playerDataModel.controls,
                "autoplay": playerDataModel.autoplay,
                "preload": playerDataModel.preload,
                "poster": parameters.url_video_still
            }, function () {


                /* esta funcion se inicializa despues de la carga del player */

                //--estadisticas
                //mdj.media.StatController();



                console.log("video inicializado...");

                //--Incluir boton bitrate

                var buttonBitrate = mainPlayer.controlBar.addChild('button', {
                    text: 'Press Me'
                });

                buttonBitrate.addClass("mdj_button_bitrate");

                buttonBitrate.on('click', function () {
                    console.log('->Cambio de calidad');
                });


                //buttonBitrate.trigger('customevent');


                //--Incluir boton bitrate

           /*     var buttonshare = mainPlayer.controlBar.addChild('button', {
                    text: 'Press Me'
                });

                buttonBitrate.addClass("mdj_button_share");

                buttonBitrate.on('click', function () {
                    console.log('->Compartir redes sociales');
                });*/



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
                that.PlayerMediator(data, true);         // --nueva configuracion

            }


        }


    }


    //-- Creacion de espacio de nombres

    namespace.PlayerMDJ = PlayerMDJ;

}(mdj.media))
