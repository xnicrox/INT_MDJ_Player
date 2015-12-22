/* Modelos de datos por defecto*/

(function(namespace){


    var DataModel = function (data) {

        //console.log("datamodel>", data);

        var checkData = function (dataplayer) {

            if (typeof (dataplayer) == "undefined" || dataplayer == "") {

                return false;
            } else {

                return true;
            }
        }

        //--parametros configuracion fapi

        this.id_cuenta = data.id_cuenta;                                                  //--ID cuenta
        this.media_type = data.media_type;                                                //--Tipo de medio ej:video/audio
        this.id_player = data.id_player;                                                  //--Identificador del player ej:20
        this.id_media = data.id_media;                                                    //--Identificador del video
        this.id_container = data.id_container;                                            //--Identificador de la capa
        this.width = (checkData(data.width)) ? data.width : "800";                        //--ancho por defecto del video
        this.height = (checkData(data.height)) ? data.height : "360";                     //--alto por defecto del video

        //--parametros de videojs

        this.skin = (checkData(data.skin)) ? data.skin : "video-js vjs-default-skin";     //--skin por defecto
        this.playbackRates = data.playbackRates;                                          //--Velocidad de reproduccion
        this.techOrder = data.techOrder;                                                  //--Orden de tecnologias
        this.width = data.width;                                                          //--ancho
        this.height = data.height;                                                        //--alto
        this.controls = data.controls;                                                    //--controles
        this.autoplay = data.autoplay;                                                    //--Autoinicio
        this.preload = data.preload;                                                      //--Precarga del video



    }

    //-- Creacion de espacio de nombres

    namespace.DataModel = DataModel;
}(mdj.media));