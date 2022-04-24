const {inherits} = require('util')
const {EventEmitter} = require('events')

function Character(name){
    this.name = name
}

//na linha 9, o inherits está faendo com que o construtor receba argumentos do EventEmitter que 
//seria o on, once e emit
inherits(Character, EventEmitter)

//linha 13 está criando um objeto com a propriedade name que recebe Chapolin como parametro
const chapolin = new Character('Chapolin');

//linha 16 execulta os evento com o nome  help  que recebeu do EventEmitter e logo em seguida execulta o console log
chapolin.on("help", () => console.log(`Eu ! o ${chapolin.name} colorado!`  ))

console.log("Oh! E agora, quem poderá me defender?")
chapolin.emit('help')