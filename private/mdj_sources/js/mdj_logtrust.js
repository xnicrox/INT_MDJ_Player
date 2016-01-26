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