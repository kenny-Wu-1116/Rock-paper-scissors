let score = JSON.parse(localStorage.getItem('score'))
    if (score === null) {
        score = {
            wins: 0,
            losses: 0,
            ties: 0
        };
    }
    
updateScoreElement();

function reset() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    document.querySelector(".result").innerHTML = "";
    document.querySelector(".moves-left").innerHTML = "";
    document.querySelector(".moves-right").innerHTML = "";
}

function generatecomputerchoice() {
    const randomNum = Math.random() * 3;
    let computerchoice = '';
    if (randomNum >= 0 && randomNum < 1) {
        computerchoice = 'scissors';
    }
    else if (randomNum >= 1 && randomNum < 2) {
        computerchoice = 'rock';
    }
    else if (randomNum >= 2 && randomNum < 3) {
        computerchoice = 'paper';
    }
    return computerchoice;
}

function playgame(userchoice) {
    const computerchoice = generatecomputerchoice();
    let result = '';
    if (userchoice === 'scissors') {
        if (computerchoice === 'scissors') {
            result = `此局平手`;
        }
        else if (computerchoice === 'rock') {
            result = `你輸了`;
        }
        else if (computerchoice === 'paper') {
            result = `你贏了`;
        }
    }
    else if (userchoice === 'rock') {
        if (computerchoice === 'scissors') {
            result = `你贏了`;
        }
        else if (computerchoice === 'rock') {
            result = `此局平手`;
        }
        else if (computerchoice === 'paper') {
            result = `你輸了`;
        }
    }
    else {
        if (computerchoice === 'scissors') {
            result = `你輸了`;
        }
        else if (computerchoice === 'rock') {
            result = `你贏了`;
        }
        else if (computerchoice === 'paper') {
            result = `此局平手`;
        }
    }

    if (result === `你贏了`) {
        score.wins += 1;
    }
    else if (result === `你輸了`) {
        score.losses += 1;
    }
    else if (result === `此局平手`) {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector(".result").innerHTML = result;
    document.querySelector(".moves-left").innerHTML = `
        <h2>玩家出</h2>
        <div class="move-images">
            <img src="/img/${userchoice}.png" class="move-icon animated-player" alt="${userchoice}">
        </div>`
    document.querySelector(".moves-right").innerHTML = `
        <h2>電腦出</h2>
        <div class="move-images">
            <img src="/img/${computerchoice}.png" class="move-icon animated-computer" alt="${computerchoice}">
        </div>`
    updateScoreElement();
}

function updateScoreElement() {
    document.getElementById("wins").textContent = score.wins;
    document.getElementById("losses").textContent = score.losses;
    document.getElementById("ties").textContent = score.ties;
}