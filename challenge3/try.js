// function rpsGame(yourChoice){
//     alert(yourChoice.id);
//     // console.log(yourChoice)
//     // step 1:
//     var humanChoice, botChoice;
//     humanChoice = yourChoice.id;
//     // step 2:
//     // function for bot to choose 
//     // botChoice = 
//     // Step 3: decide the winner 
//     // results = decideWinner(humanChoice, botChoice); // [1, 0] [.5, .5] [0, 1]
//     // step 4:
//     // message = finalMessage(results); //output: {'message': "You won", 'color': 'blue'}
//     // step 5: function for frontend
//     rpsFrontend(yourChoice.id, botChoice, message);

// };
function rpsGame(yourChoice){
    // alert(yourChoice.id);
    // console.log(yourChoice)
    // step 1:
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    // step 2:
    // function for bot to choose 
    botChoice = numberToChoice(randomToRpsInt());

    // Step 3: decide the winner 
    results = decideWinner(humanChoice, botChoice); // [1, 0] [.5, .5] [0, 1]
    //  alert(results);
    
    // step 4:
    message = finalMessage(results); //output: {'message': "You won", 'color': 'blue'}
    // console.log(message);

    // step 5: function for frontend
    rpsFrontend(yourChoice.id, botChoice, message);

};
// Getting the bot choice 
function randomToRpsInt(){eMath.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

// cleaner version of if else statement alternative 
// deciding the winner:
function decideWinner(yourChoice, botChoice){
    var rpsPosibilites = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
    var playerScore = rpsPosibilites[yourChoice][botChoice];
    var botScore = rpsPosibilites[botChoice][yourChoice];
    return [playerScore, botScore];
}

function finalMessage([playerScore, botScore]){
    if (playerScore === 0) {
        return {'message': 'You lost', 'color': 'red'};
    }else if(playerScore === 0.5){
        return {'message': 'You tied', 'color': 'yellow'};
    }else{
        return {'message': 'You won', 'color': 'green'};
    }
}

// now for the frontend part:
function rpsFrontend(playerImgChoice, botImgChoice, finalMessage){
    let objects = {
        'rock': document.getElementById('rock').innerHTML,
        'paper': document.getElementById('paper').innerHTML,
        'scissor': document.getElementById('scissors').innerHTML
    };
    // remove imgs after player clicks:
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // creating elements
    let playerDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    playerDiv.innerHTML = `${objects[playerImgChoice]}`;
    document.getElementById('mainContainer').appendChild(playerDiv);
}