/*
create a function to take username & then display the length of their username in the site:
*/
function name() {
    let uname = prompt("Enter your name: ");
    let message = document.getElementById('msg');
    message.innerHTML = `There are ${uname.length} characters in ${uname}.`;
}
name();