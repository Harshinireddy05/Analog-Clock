const hourNumbers = document.querySelector('.hour-numbers');
const seconds = document.querySelector('.seconds-hand');

const numberElement = [];
const secondsElement = [];

for (let i = 1; i <= 12; i++) {
    numberElement.push(`<span style="--index:${i}"><p>${i}</p></span>`);
}

hourNumbers.insertAdjacentHTML("afterbegin", numberElement.join(""));

for (let i = 1; i <= 60; i++) {
    secondsElement.push(`<span style="--index:${i}"><p><h>${i}</h></p></span>`);
}

seconds.insertAdjacentHTML("afterbegin", secondsElement.join(""));


//time

/*function updateClock() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('min');
    const secondHand = document.getElementById('sec');

    const hourDegrees = ((hours % 12) + minutes / 60) * 30; 
    const minuteDegrees = (minutes + seconds / 60) * 6; 
    const secondDegrees = seconds * 6; 

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(updateClock, 1000);

updateClock();*/


document.getElementById('playButton').addEventListener('click', startClock);
document.getElementById('pauseButton').addEventListener('click', pauseClock);

let isClockRunning = true;
let intervalId;

function startClock() {
    intervalId = setInterval(updateClock, 500);
    isClockRunning = true; 
}

function pauseClock() {
    clearInterval(intervalId);
    isClockRunning = false;
}

function toggleClock() {
    if (isClockRunning) {
        pauseClock();
    } else {
        startClock(); 
    }
}

function updateClock() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('min');
    const secondHand = document.getElementById('sec');

    const hourDegrees = ((hours % 12) + minutes / 60) * 30; 
    const minuteDegrees = (minutes + seconds / 60) * 6; 
    const secondDegrees = seconds * 6; 

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

startClock();


