document.querySelector(obtenerDatos());

function obtenerDatos(){ 
    
    var listaCan = JSON.parse(localStorage.getItem("datosCanciones"));
    
    $("#can1").attr("src","/canciones/".concat(listaCan.canciones[0].ruta));
    var n1 = document.getElementById('nomb1');
    n1.innerHTML = listaCan.canciones[0].nombre;

    $("#can2").attr("src","/canciones/".concat(listaCan.canciones[1].ruta));
    var n2 = document.getElementById('nomb2');
    n2.innerHTML = listaCan.canciones[1].nombre;

    $("#can3").attr("src","./canciones/".concat(listaCan.canciones[2].ruta));
    var n3 = document.getElementById('nomb3');
    n3.innerHTML = listaCan.canciones[2].nombre;

    $("#can4").attr("src","/canciones/".concat(listaCan.canciones[3].ruta));
    var n4 = document.getElementById('nomb4');
    n4.innerHTML = listaCan.canciones[3].nombre;

    $("#can5").attr("src","/canciones/".concat(listaCan.canciones[4].ruta));
    var n5 = document.getElementById('nomb5');
    n5.innerHTML = listaCan.canciones[4].nombre;

    $("#can6").attr("src","/canciones/".concat(listaCan.canciones[5].ruta));
    var n6 = document.getElementById('nomb6');
    n6.innerHTML = listaCan.canciones[5].nombre;

    $("#can7").attr("src","/canciones/".concat(listaCan.canciones[6].ruta));
    var n7 = document.getElementById('nomb7');
    n7.innerHTML = listaCan.canciones[6].nombre;

    $("#can8").attr("src","/canciones/".concat(listaCan.canciones[7].ruta));
    var n8 = document.getElementById('nomb8');
    n8.innerHTML = listaCan.canciones[7].nombre;

    $("#can9").attr("src","/canciones/".concat(listaCan.canciones[8].ruta));
    var n9 = document.getElementById('nomb9');
    n9.innerHTML = listaCan.canciones[8].nombre;

}

function myFunction() {
    var input = document.getElementById('myInput').value
    input=input.toLowerCase();
    var x = document.getElementsByClassName('can');
    console.log(x);
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}

