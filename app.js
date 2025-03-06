// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


function agregarAmigo(){

    
    let nombre=document.getElementById('amigo').value;
    if(nombre ==' '){
            alert("Agregar un Nombre")
        } else{
                amigos.push(nombre);
                console.log(amigos.length);
                
    }
    limpiarcaja();
    agregarhtml()
}

function agregarhtml(){
    let ul = document.getElementById('listaAmigos'); 
    ul.innerHTML = ''; 

    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        ul.appendChild(li); 
    }

    
}

function sortearAmigo(){
    let ul = document.getElementById('resultado');
    let lr= amigos.length;
    console.log(lr);

    if(lr==0){
        alert("No tiene registros")
    }else{
        ul.innerHTML = '';
        numeroaleteorio = Math.floor(Math.random()*(lr));//
        //console.log(numeroaleteorio);
        //console.log(amigos[numeroaleteorio]);
        asignarTextoElemento('ul',`Se eligio a ${amigos[numeroaleteorio]}  `);
        amigos = [];
    }

}



function asignarTextoElemento(id, texto){
    let elementoHTML=document.querySelector(id);
    elementoHTML.innerHTML = texto;
    return
}



function limpiarcaja(){
let caja = document.getElementById('amigo');
caja.value= ' ';

}