let menu=document.getElementById('hamburger')

menu.addEventListener("click",function(){
    console.log('button is clicked')

    document.getElementById('overlay').style.width="100%"

    


})
let ex=document.getElementById('close')

ex.addEventListener("click",function(){
    console.log('button is clicked')

    document.getElementById('overlay').style.width="0%"

    


})
