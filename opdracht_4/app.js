const btn = document.getElementById("Go_button");
const page = document.getElementById("page");
let startTimer;
let stopTimer;

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    page.style.backgroundColor = "red";
    setTimeout(function(){
        page.style.backgroundColor = "green";
        startTimer = Date.now()
    },Math.floor(Math.random() * 9 + 1 * 1000));
});

page.addEventListener('click', function() {

    if(page.style.backgroundColor == "red" || page.style.backgroundColor == "black") return
    stopTimer = Date.now();
    reactionTime =stopTimer - startTimer;
    document.getElementById("time").innerHTML="Your reaction time is: " + reactionTime + "ms"
    
 
    
})

// had geen zin om die setinterval erin te doen







