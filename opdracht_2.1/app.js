let blok = document.getElementById("blok");
let position = 0;

console.log(window.innerWidth);

function move() {
    if(position >= window.innerWidth){
        position = 0

    }else{
        position += 50
    
        blok.style.left =  position + "px"
    }

   

    
}
setInterval(move, 100)