const btn = document.getElementById("Go_button");
const page = document.getElementById("page")
let startTimer;
let stopTimer;

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    page.style.backgroundColor = "red";
    setTimeout(function() {
        page.style.backgroundColor = "green";
        startTimer = Date.now()
    },Math.floor(Math.random() * 9 + 1 * 1000))
    if (document.getElementById("time").innerHTML != "") {
        document.getElementById("time").innerHTML = ""
    }
});

page.addEventListener('click', function() {
if (page.style.backgroundColor == "green") {
    stopTimer = Date.now();
    reactionTime =(stopTimer - startTimer);
    document.getElementById("time").innerHTML="Your reaction time is:" + reactionTime + "ms";
    stopTimer = btn.style.display = 'block'
    stopTimer = page.style.backgroundColor = "black" 
    }
})







