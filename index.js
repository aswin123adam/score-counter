const homeBoard = document.getElementById("home-score");
const guestBoard = document.getElementById("guest-score");

let home = 0;
let guest = 0;

function homeByOne(){
    home += 1;
    homeBoard.textContent = home;
}

function homeByTwo(){
    home += 2;
    homeBoard.textContent = home;
}

function homeByThree(){
    home += 3;
    homeBoard.textContent = home;
}

function guestByOne(){
    guest += 1;
    guestBoard.textContent = guest;
}

function guestByTwo(){
    guest += 2;
    guestBoard.textContent = guest;
}

function guestByThree(){
    guest += 3;
    guestBoard.textContent = guest;
}

function resetAll(){
    guest = 0;
    home = 0;
    homeBoard.textContent = 0
    guestBoard.textContent = 0;
}