/* Default logic */

let arr = ["rock.png", "paper.png", "scissors.png"];

let userChoice = document.getElementById('user_choice');
let userImg = userChoice.children;
userImg[0].setAttribute('src', arr[0]);

let compChoice = document.getElementById('comp_choice');
let compImg = compChoice.children;
compImg[0].setAttribute('src', arr[0]);


/* Computer Logic */

let random = 0;
function compLogic() {
    random = Math.floor(Math.random() * 3);
    compImg[0].setAttribute('src', arr[random]);
}


/* User Logic */

let user_select = 0;
let rock = document.getElementById('main_container_rock');
rock.addEventListener('click', () => {
    userImg[0].setAttribute('src', arr[0]);
    user_select = 0;
    compLogic();
    gameLogic();
});

let paper = document.getElementById('main_container_paper');
paper.addEventListener('click', () => {
    userImg[0].setAttribute('src', arr[1]);
    user_select = 1;
    compLogic();
    gameLogic();
});

let scissor = document.getElementById('main_container_scissor');
scissor.addEventListener('click', () => {
    userImg[0].setAttribute('src', arr[2]);
    user_select = 2;
    compLogic();
    gameLogic();
});


/* Game Logic */

let result_text = document.getElementById('result_text');
let u_score = document.getElementById('u_score');
let c_score = document.getElementById('c_score');

let ucount = 0;
let ccount = 0;

function gameLogic() {
    // Win Condition
    if ((user_select == 0 && random == 2) || (user_select == 1 && random == 0) || (user_select == 2 && random == 1)) {
        ucount++;
        u_score.textContent = ucount;
        result_text.textContent = 'You Win!';
    }
    // Lose Condition
    else if ((user_select == 2 && random == 0) || (user_select == 0 && random == 1) || (user_select == 1 && random == 2)) {
        ccount++;
        c_score.textContent = ccount;
        result_text.textContent = 'You Lose!';
    }
    // Draw
    else {
        result_text.textContent = `It's a Draw`;
    }
}


/* Reset Logic */

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    userImg[0].setAttribute('src', arr[0]);
    compImg[0].setAttribute('src', arr[0]);
    ucount = 0;
    u_score.textContent = ucount;
    ccount = 0;
    c_score.textContent = ccount;
    result_text.textContent = 'Start Game!';
});