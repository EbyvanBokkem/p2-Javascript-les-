let output = document.getElementById("paragraaf");
let input = document.getElementById("input");
const shop = [];
function add_product(){
    let product = input.value;
    shop.push(product);
    output.innerText = shop;
}
