//Eventos e argumentos event

const input = document.querySelector('input');
//ouvir um evento 

input.onclick = function(event){
    console.log(event);
}



//input.onkeydown aqui pode ser trocado por outras funcionalidade

input.onblur = function(event){
    console.log(event.currentTarget.value);
}

//caso queira saber mais no console aparece outras funções

console.log(event)