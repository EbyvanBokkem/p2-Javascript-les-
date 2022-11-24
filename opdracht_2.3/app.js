let blok = document.getElementById("blok");
let position = 0;
let vertical = 0;

window.addEventListener("keydown", function (event){
if (event.key == "w"){
vertical -= 50;
blok.style.top = vertical + "px"
}
if (event.key == "a"){
    position -= 50;
blok.style.left = position + "px"
}
if (event.key == "s"){
    vertical += 50;
blok.style.top = vertical + "px"
}
if (event.key == "d"){
    position += 50;
blok.style.left = position + "px"
}
}
)