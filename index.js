//Decrease, Reset, Increase Counter
let count = 0
document.getElementById("decrease").onclick = function() {
    count-=1;
    document.getElementById("countlabel").innerHTML = count;

}
document.getElementById("reset").onclick = function() {
    count = 0;
    document.getElementById("countlabel").innerHTML = count;
    
}
document.getElementById("increase").onclick = function() {
    count+=1;
    document.getElementById("countlabel").innerHTML = count;
}

//Animated counter

let button = document.getElementById("button");
let timer = document.getElementById("timer");

let seconds = 10;

button.addEventListener('click', () => {
    let interval = setInterval(() => { 
        if(seconds === 0) {
            timer.innerText = seconds;
            clearInterval(interval);
            return;
        }
        timer.innerText = seconds;
        seconds--;
    },1000)

})

//Click Counter
let counter = document.getElementById('counter');

 
let c = 0;

counter.innerText = 'The Button was clicked $(c) times';

button.addEventListener('click',() => {
    c++;
    counter.innerText = 'The Button was clicked $(c) times'; 
})

