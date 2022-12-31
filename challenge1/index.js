/*
Step 1: ask the birth date of user
step 2: claculate the number of days till now
step 3: create a container where we can display the days
step 4: display the date with in the contianer.
*/

function find(){
    var birth_year = prompt("Please enter your birth year[AD]: ");
    var nDays = (2022 - birth_year) * 365;
    let strong = document.createElement("strong");
    let strong_value = document.createTextNode(`You are ${nDays} days old`);
    strong.setAttribute('id', 'fdays');
    strong.appendChild(strong_value);
    document.getElementById('box').appendChild(strong);
}

function reset(){
    document.getElementById('fdays').remove();
}