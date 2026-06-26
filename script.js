
document.addEventListener("DOMContentLoaded",function(){
    const imagenes = [
       "img/imagenPrincipal.jpg",
       "img/mente2.jpg",
       "img/terapia.jpg" 
    ];
    let indiceActual = 0;

    const imagenPrincipal = document.getElementById("imagenPrincipal");
    const anterior = document.getElementById("btnAnterior");
    const siguiente = document.getElementById("btnSiguiente");

    function mostrarImagen(indice){
        imagenPrincipal.src = imagenes[indice];
    }
    
    btnSiguiente.addEventListener("click", function(){
         indiceActual++;
         if(indiceActual >= imagenes.length) indiceActual = 0;
         mostrarImagen(indiceActual)
    });

    btnAnterior.addEventListener("click", function(){
        indiceActual--;
         if(indiceActual < 0) indiceActual = imagenes.length -1;
         mostrarImagen(indiceActual)
    });

    mostrarImagen(indiceActual);
})


const formulario = document.getElementById("contactoForm");
const mensajeExito = document.getElementById("mensajeExito");

const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbx2IuLSQzRD1hHKoN3wOBsZ_Wz87qY0RdIQRvloMQ8DGZk5HSZHCqEQVH0YTD096FkoAg/exec";

formulario.addEventListener("submit", async function(e){

    e.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    const datos = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        mensaje: document.getElementById("mensaje").value
    };

    try{

        const respuesta = await fetch(URL_SCRIPT,{

            method:"POST",

            body:JSON.stringify(datos)

        });

        if(respuesta.ok){

            mensajeExito.style.display="block";

            formulario.reset();

            setTimeout(function(){

                mensajeExito.style.display="none";

            },3000);

        }else{

            alert("Ocurrió un error al enviar el formulario.");

        }

    }catch(error){

        alert("No se pudo conectar con el servidor.");

    }

});