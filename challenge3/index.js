function rpsGame(yourChoice){
    let playerChoice, botChoice;
    playerChoice = yourChoice.id;
    // console.log(playerChoice);
    
    botChoice = numberIntoChoice(randomInt());
    // console.log(`bot choose: ${botChoice}`);

    let result = decideWinner(playerChoice, botChoice);
    // console.log(result);

    message = finalMessage(result);
    // console.log(message);

    rpsFrontend(playerChoice, botChoice, message);
}

function randomInt(){
    return Math.floor(Math.random() * 3);
};
function numberIntoChoice(number){
    return ['rock', 'paper', 'scissors'][number];
};

function decideWinner(playerChoice, botChoice){
    var allPosibilities = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'sicissors': 0.5, 'rock': 0}
    };
    var playerScore = allPosibilities[playerChoice][botChoice];
    var botScore = allPosibilities[botChoice][playerChoice];
    return [playerScore, botScore];
}
function finalMessage([playerScore, botScore]){
    if (playerScore === 0) {
        return {'message': "You lost", 'color': 'red'};
    } else if (playerScore === 0.5){
        return {'message': "Draw", 'color': 'blue'};
    } else{
        return {'message': "You won", 'color': 'green'};
    }
}

function rpsFrontend(player, bot, msg){
    var textDBS = {
        'rock': document.getElementById('rock').innerHTML,
        'paper': document.getElementById('paper').innerHTML,
        'scissors': document.getElementById('scissors').innerHTML
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let playerDiv = document.createElement('div');
    playerDiv.setAttribute('class', 'box')
    playerDiv.innerHTML = `${textDBS[player]}`;
    document.getElementById('mainContainer').appendChild(playerDiv)
    
    let messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${msg['message']}</strong>`;
    messageDiv.setAttribute('id', 'message');
    messageDiv.style = `color: ${msg['color']}`
    document.getElementById('mainContainer').appendChild(messageDiv)
    
    let botDiv = document.createElement('div');
    botDiv.setAttribute('class', 'box')
    botDiv.innerHTML = `${textDBS[bot]}`
    document.getElementById('mainContainer').appendChild(botDiv)
}