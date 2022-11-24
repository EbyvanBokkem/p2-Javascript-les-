let blok = document.getElementById("blok");
let position = 0;

function move() {

    position += 50
    
    blok.style.left =  position + "px"

    
}
setInterval(move, 1000)