// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://yu.los40.com/
// @grant        none
// ==/UserScript==
/* jshint -W097 */

var idTOP="container_video_1433236824";

var xPlayer = document.getElementById(idTOP);
var divPlayer="";

var time=setInterval(function(){
    
    divPlayer= document.getElementById(idTOP+"_base");

    console.log("divPlayer-->",divPlayer);
    
   if(divPlayer!==null){

           xPlayer.innerHTML='<iframe src="http://mdjplayer.esy.es/Iframe_sample.html" width="640" height="360"></iframe>';

           clearInterval(time);
                  console.log("parado");
   }

},1000)

console.log("nodo>>",xPlayer);


