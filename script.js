var btnPlus = document.querySelectorAll('.btnPlus')
var btnMoins = document.querySelectorAll('.btnMoins')
var hearts = document.querySelectorAll('.fa-heart')
var trashs = document.querySelectorAll('.fa-trash')
// var trashs = document.getElementsByClassName('fa-trash')

console.log(trashs)

for(let i = 0; i < btnPlus.length;i++){
    btnPlus[i].addEventListener('click', function(){
        btnPlus[i].previousElementSibling.innerText++
        SommeTotal()
    })
}

for(let i = 0; i < btnMoins.length;i++){
    btnMoins[i].addEventListener('click', function(){
        if(btnMoins[i].nextElementSibling.innerText > 0){
            btnMoins[i].nextElementSibling.innerText--
            SommeTotal()
        }
    })
}

for(let i = 0; i < hearts.length; i++){
    hearts[i].addEventListener('click', function(){
        // if (hearts[i].style.color == 'black') {
        //     hearts[i].style.color = 'red'
        // } else {
        //     hearts[i].style.color = 'black'
        // }

        hearts[i].classList.toggle('ahmer')
    })
}

for(let i = 0; i < trashs.length; i++ ){
    trashs[i].addEventListener('click', function(){
        trashs[i].parentElement.remove()
        SommeTotal()
        console.log(trashs)
    })
}

function SommeTotal(){
    var price = document.querySelectorAll('.price')
    var qte = document.querySelectorAll('.qte')
    var total = document.querySelector('#total')

    var sum = 0


    for(let i = 0; i < price.length; i++){
        sum = sum + price[i].innerText * qte[i].innerText
    }

    total.innerText = sum

}