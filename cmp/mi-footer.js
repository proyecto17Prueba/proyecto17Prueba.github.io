"use strict";
var forma = document.getElementById("forma"),
    campos = ["nombre", "secreto", "email", "usuario", "url",
               "telefono"],
    salidas = ["salidaNombre", "salidaSecreto", "salidaEmail",
               "salidaUsuario", "salidaUrl", "salidaTelefono"];
forma.addEventListener("submit", procesa, false);

 

function procesa(){
    for (var i = 0, longitud = campos.length;  i<longitud; i++) {
      var campo = forma[campos[i]];
      var salida = document.getElementById(salidas[i]);
      salida.value = campo.value;
    }
}
