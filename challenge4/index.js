var allButtons = document.getElementsByClassName('btn');

var allButtons_copy = [];

for (let i = 0; i < allButtons.length; i++){
    allButtons_copy.push(allButtons[i].classList[1]);
}

function changeBackground(selected_option){
    if (selected_option.value === 'blue') {
        buttonsBlue();
    } else if (selected_option.value === 'yellow'){
        buttonsYellow();
    } else if (selected_option.value === 'orange'){
        buttonsOrange();
    }else if (selected_option.value === 'red'){
        buttonsRed();
    } else if (selected_option.value === 'reset'){
        resetButtons();
    } else if (selected_option.value === 'random'){
        randomColors();
    }
}

function buttonsBlue(){
    for (let buttonCount = 0; buttonCount < allButtons.length; buttonCount++){
        allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
        allButtons[buttonCount].classList.add('blue');
    }
}
function buttonsYellow(){
    for (let buttonCount = 0; buttonCount < allButtons.length; buttonCount++){
        allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
        allButtons[buttonCount].classList.add('yellow');
    }
}
function buttonsOrange(){
    for (let buttonCount = 0; buttonCount < allButtons.length; buttonCount++){
        allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
        allButtons[buttonCount].classList.add('orange');
    }
}
function buttonsRed(){
    for (let buttonCount = 0; buttonCount < allButtons.length; buttonCount++){
        allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
        allButtons[buttonCount].classList.add('red');
    }
}

function resetButtons(){
    for (let buttonCount = 0; buttonCount < allButtons.length; buttonCount ++){
        allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
        allButtons[buttonCount].classList.add(allButtons_copy[buttonCount]);
    }
}
function randomColors(){
    for (let buttonCount  = 0; buttonCount < allButtons.length; buttonCount++){
        allButtons[buttonCount].classList.remove(allButtons[buttonCount].classList[1]);
        allButtons[buttonCount].classList.add(intToChoice(randomInt()));
    }
}

function randomInt(){
    return Math.floor(Math.random() * 4);
}

function intToChoice(number){
    return ['blue', 'yellow', 'orange', 'red'] [number];
}