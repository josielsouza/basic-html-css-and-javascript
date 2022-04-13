//function constructor

 // * EXPRESSÃO NEW 
 // * CRIAR UM NOVO OBJETO
 // * THIS KEYMORD



//molde da Persona
 function Persona (name){
    this.name = name
    this.andar = function(){
        return this.name + " Estar andando"
    }
 }


 //objetos criados da persona
 const josiel = new Persona("Tadeu")
 const Maik = new Persona("Maik")

 console.log(josiel.name)
 console.log(Maik.name)

 console.log(josiel.andar())
 console.log(Maik.andar())
    





