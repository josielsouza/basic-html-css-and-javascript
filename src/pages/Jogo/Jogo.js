let person = document.querySelector('#person')
let square = document.querySelector('#square')

function jump(){
    if(person.classList != 'animar'){
        person.classList.add('animar')
    }

    setTimeout(function(){
        person.classList.remove('animar')
    }, 500)
}

var testColisao = setInterval( function(){

    var topPersona = parseInt(
     window.getComputedStyle(person).getPropertyValue('top')
    )
    var letfSquare = parseInt(
        window.getComputedStyle(square).getPropertyValue('left')
       )

       if(letfSquare < 20 && letfSquare > 0 && topPersona >= 130){
        square.style.animation = 'none'
        square.style.display = 'none'
        alert('You haver Lost !')
    }
    

}, 10)

var btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    location.reload();
})