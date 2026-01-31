let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let running = false;

function updateDisplay() {
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;
    const ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    document.getElementById("display").innerText = `${m}:${s}:${ms}`;
}

function startStopwatch() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    running = false;
}

function resetStopwatch() {
    clearInterval(timer);
    running = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    if (running) {
        const lap = document.createElement("li");
        lap.innerText = document.getElementById("display").innerText;
        document.getElementById("laps").appendChild(lap);
    }
}
