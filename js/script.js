document.querySelector(traerDatos());

function traerDatos(){
    
    var obtener = new XMLHttpRequest();
    obtener.open('Get','datos.json');

    obtener.onload = function(){
        if (obtener.status == 200){
            var datosCanciones = JSON.parse(obtener.response);
			console.log(datosCanciones)
            datosCanciones.canciones.sort(function(a,b){
                return b.reproducciones - a.reproducciones;
            })
            
            $("#cancion1").attr("src","/canciones/".concat(datosCanciones.canciones[0].ruta));
            $("#cancion2").attr("src","/canciones/".concat(datosCanciones.canciones[1].ruta));
            $("#cancion3").attr("src","/canciones/".concat(datosCanciones.canciones[2].ruta));

            var c1= document.getElementById('nombre1');
            c1.innerHTML = datosCanciones.canciones[0].nombre;
            var c2= document.getElementById('nombre2');
            c2.innerHTML = datosCanciones.canciones[1].nombre;
            var c3= document.getElementById('nombre3');
            c3.innerHTML = datosCanciones.canciones[2].nombre; 
            
        }   
    } 
    obtener.send();   
}
