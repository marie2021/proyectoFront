const postulante={
    nombre:"Adriana",
    apellido:"Herrera",
    edad:"33",
    estadoCivil:"Soltera",
    get nombreCompleto(){
        return this.nombre+"  "+this.apellido;
    }
    
};
document.getElementById("colorHeader").addEventListener('click',function(){
    console.log("cambio de color del header");
    let elemen=document.getElementById("arriba");
    if(elemen.getAttribute("class")==null || elemen.getAttribute("class")!="nuevoColor"){
        elemen.setAttribute("class","nuevoColor");
        
    }else{
        elemen.setAttribute("class","oldColor");
    }    
});
document.getElementById("detallesIden").addEventListener('click',function(){
    console.log("Se agrega detalles como nombre completo edad estado civil");
    let elemen=document.getElementById("detalles");
    if(elemen.innerHTML==""){
        elemen.setAttribute("class","detalles");
        elemen.innerHTML="Nombre: "+postulante.nombreCompleto+'<br>'+
                         "Edad:"+ postulante.edad+'<br>'+
                         "Estado Civil:"+postulante.estadoCivil;
    }else{
        elemen.innerHTML="";
    }

});
document.getElementById("perfil").addEventListener('click',function(){
    let mensaje="Se agrega el perfil complementario";
    let elemen=document.getElementById("perfilGeneral");
    if(document.getElementById("perfilNuevo")==null){
        
        let nuevo=document.createElement("p");
        nuevo.setAttribute("id","perfilNuevo");
        nuevo.innerHTML="Experiencia en el sector minorista y culinario y experta en la gesti&oacute;n eficaz de todas las operaciones.";
        elemen.appendChild(nuevo);
    }else{
        mensaje="Se elimina el perfil complementario";
        let perfilRemove=document.getElementById("perfilNuevo");
        elemen.removeChild(perfilRemove);
    }
    console.log(mensaje);
});
