let date;

function time() {
     date = new Date();
    hours = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;


}

setInterval(time, 1000);