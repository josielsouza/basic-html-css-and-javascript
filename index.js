//composição de function = uma função que retorna um dado que vai para 
//outra função que retorna um dado 

const array = ['Josiel', 'Diego', 'João', 'Dod']
const funcaoPegaNomeComLetraD = array
.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase())

funcaoPegaNomeComLetraD();

/**
 * linha 4 cria um array
 * linha 5 funcaoPegaNomeComLetraD vai receber uma função com o nome array atrelado a ele o .filter, que está que recebe a função person que tbm é uma função, filtrando os nomes que tem a letra D. que vai retornar uma array de dua pessoas. O retorno é armazenado na variável person
 * 
 * e na linha 7 o array com duas pessoas vai passar o map e vai retorna no dperson os dois nomes 
 * transformado com letra maiúscula
 * 
 * 
 */