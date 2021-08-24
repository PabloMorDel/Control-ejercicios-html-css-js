'use strict';
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
function time() {
    seconds += 5;
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    if (minutes >= 60) {
        hours += 1;
        minutes = 0;
    }
    if (hours >= 24) {
        days += 1;
        hours = 0;
    }
    console.log(
        `El programa lleva encendido ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`
    );
}

setInterval(time, 5000);
