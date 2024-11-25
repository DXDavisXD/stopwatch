const clock = document.getElementById("clock");
const saved = document.getElementById("save");
const btn = document.getElementById("BTN");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let num = 1;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
        btn.textContent = `STOP`;
    }

    else if(isRunning){
        clearInterval(timer);
        isRunning = false;
        btn.textContent = `RESUME`;
    }
}

function record() {
    saved.textContent = clock.textContent;
    /* couldn't figure out how to print each saved time in new line ( ˘︹˘ ).
    if(saved.textContent === "--:--:--:--"){
        saved.textContent = `${num}. ` + clock.textContent;
        num++;
    }
    else{
        saved.textContent = saved.textContent + `${num}. ${clock.textContent} \n`;
        num++;
    }*/
}

function reset() {
    if(isRunning){
        clearInterval(timer);
        btn.textContent = `RESUME`;
        isRunning = false;
    }
    else{
        clearInterval(timer);
        startTime = 0;
        elapsedTime = 0;
        isRunning = false;
        clock.textContent = `00:00:00:00`;
        saved.textContent = `--:--:--:--`;
        btn.textContent = `START`;
    }
}
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minuites = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, 0);
    minuites = String(minuites).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);

    clock.textContent = `${hours}:${minuites}:${seconds}:${milliseconds}`;

}
