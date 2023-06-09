function limpiarErrores(){
  var errores = document.getElementsByClassName("error");
  for(var i = 0; i < errores.length; i++){
    errores[i].innerHTML = "";
  }
}

function validar(registro) {

  limpiarErrores();
 
  var regisEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-z\-0-9]+\.)+[a-zA-z]{2,}))$/;
  
  if (!regisEmail.test(registro.email.value)) {
    document.getElementById("errorEmail").innerText = "Campo obligatorio";
    registro.email.focus();
    return false;
  }

  if (registro.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Campo obligatorio";
    registro.contrasena.focus();
    return false;
  } 

  if (registro.contrasena.value.trim().length < 8) {
    document.getElementById("errorCaracteresCont").innerText = "Debe incluir más de ocho (8) caracteres";
    registro.contrasena.focus();
    return false;
  }

  if (registro.confirmacion.value.trim().length == 0) {
    document.getElementById("errorConfirmacionNada").innerText = "Campo obligatorio";
    registro.contrasena.focus();
	return false;
  }
  
  if (registro.contrasena.value != registro.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerText = "¡Las contraseñas no coinciden!";
    registro.contrasena.focus();
	return false;
  }

  if (registro.genero.value == "") {
    document.getElementById("errorGenero").innerText = "Campo obligatorio";
    registro.genero.focus();
    return false;
  }

  if (registro.edad.value == "") {
    document.getElementById("errorEdad").innerText = "Campo obligatorio";
    registro.edad.focus();
    return false;
  }

  if (!registro.terminos.checked) {
    document.getElementById("errorTerminos").innerText = "Campo obligatorio";
    registro.terminos.focus();
    return false;
  }
  
  alert("Datos enviados");

  return true;
}

