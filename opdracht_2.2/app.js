let blok = document.getElementById("blok");
let position = 0;
const colors = ["red", "orange", "purple", "blue", "green"]
console.log(window.innerWidth);

function move() {
    if(position >= window.innerWidth){
        position = 0

    }else{
        position += 50
    
        blok.style.left =  position + "px"
    }
}

setInterval(move, 1000)

function change_color() {

    let change = Math.floor(Math.random() * 5)

    blok.style.backgroundColor = colors[change]

}
document.getElementById("blok").addEventListener("click", change_color);

