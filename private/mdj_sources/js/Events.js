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
