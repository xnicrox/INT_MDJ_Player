/* Componentes MDJPlayer */

(function (namespace) {

    var UI = function () {

        this.execute = function () {

            console.log(">>ejecucion correcta");
        }

    }

    //-- Creacion de espacio de nombres

    namespace.UI = UI;
}(mdj.media));