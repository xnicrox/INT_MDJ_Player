/* Modelos de datos por defecto*/

(function(namespace){

    //--parametros configuracion fapi --/

    namespace.id_cuenta = ""                                               //--ID cuenta
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