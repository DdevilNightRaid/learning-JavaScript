let time, hour, min, sec;
let checkSingleInt = [0,1,2,3,4,5,6,7,8,9];
let displayHour = document.getElementById('displayHour');
let displayMin = document.getElementById('displayMin');
let displaySec = document.getElementById('displaySec');

// For displaying time
setInterval(()=>{
    time = new Date();
    hour = time.getHours();
    min = time.getMinutes();
    sec = time.getSeconds();
    if (checkSingleInt.indexOf(hour) > -1){
        displayHour.innerHTML = `0${hour}`;
    }else{
        displayHour.innerHTML = hour;
    }
    if (checkSingleInt.indexOf(min) > -1){
        displayMin.innerHTML = `0${min}`;
    }else{
        displayMin.innerHTML = min;
    }
    if (checkSingleInt.indexOf(sec) > -1){
        displaySec.innerHTML = `0${sec}`;
    }else{
        displaySec.innerHTML = sec;
    }
    
}, 1000)

// for explaining:
// let myArray =[0,1,2,3,4,5,6,7,8,9];
// let minute = 6;
// console.log(myArray.indexOf(minute));
// if (myArray.indexOf(minute) > -1) {
//     console.log(`0${minute}`)
// }else{
//     console.log(minute)
// }