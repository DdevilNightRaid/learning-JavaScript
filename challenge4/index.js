var allButtons = document.getElementsByClassName('btn');

var allButtons_copy = [];

for (let i = 0; i < allButtons.length; i++){
    allButtons_copy.push(allButtons[i].classList[1]);
}

function changeBackground(selected_option){
    if(selected_option.value === "red"){
        buttonsRed();
    }else if(selected_option.value === "orange"){
        buttonsOrange();
    }else if(selected_option.value === "yellow"){
        buttonsYellow();
    }else if(selected_option.value === "blue"){
        buttonsBlue();
    }else if(selected_option.value === "random"){
        randomColors();
    }else if(selected_option.value === "reset"){
        resetColors();
    }
}

function buttonsRed(){
   for (let buttonCount = 0; buttonCount < allButtons.length; buttonCount++) {
    allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
    allButtons[buttonCount].classList.add('red');
   }
}
function buttonsOrange(){
    for (let buttonCount = 0; buttonCount < allButtons.length; buttonCount++){
        allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
        allButtons[buttonCount].classList.add('orange');
    }
}
function buttonsYellow(){
    for (let buttonCount = 0; buttonCount < allButtons.length; buttonCount++){
        allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
        allButtons[buttonCount].classList.add('yellow');
    }
}
function buttonsBlue(){
    for (let buttonCount = 0; buttonCount < allButtons.length; buttonCount++) {
        allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
        allButtons[buttonCount].classList.add('blue');
    }
}
function resetColors(){
    for(let buttonCount = 0; buttonCount < allButtons.length; buttonCount++){
        allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
        allButtons[buttonCount].classList.add(allButtons_copy[buttonCount]);
    }
}
function randomColors(){
 var randomChoice = intIntoChoices(randomInt());
 console.log(randomChoice);
 for (let buttonCount = 0; buttonCount < allButtons.length; buttonCount++){
    allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
    allButtons[buttonCount].classList.add(randomChoice);
 }
}
function randomInt(){
    return Math.floor(Math.random() * 3);
}
function intIntoChoices(numbers){
    return ['blue', 'yellow', 'orange', 'red'][numbers];
}