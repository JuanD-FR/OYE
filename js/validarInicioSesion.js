function limpiarErrores(){
  var errores = document.getElementsByClassName("error");
  for(var i = 0; i < errores.length; i++){
    errores[i].innerHTML = "";
  }
}

function validar(inicioSesion) {

  limpiarErrores();
 
  var registroEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-z\-0-9]+\.)+[a-zA-z]{2,}))$/;
  
  if (!registroEmail.test(inicioSesion.email.value)) {
    document.getElementById("errorEmail").innerText = "Campo obligatorio";
    inicioSesion.email.focus();
    return false;
  }

  if (inicioSesion.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Campo obligatorio";
    inicioSesion.contrasena.focus();
    return false;
  } 

  if (inicioSesion.contrasena.value.trim().length < 8) {
    document.getElementById("errorCaracteresCont").innerText = "Debe incluir más de ocho (8) caracteres";
    inicioSesion.contrasena.focus();
    return false;
  } 
  
  alert("Datos enviados");

  return true;
}

