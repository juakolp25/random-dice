


document.getElementById('roll-btn').addEventListener('click', roll);

function roll(){
    resetResult();
    const diceCount = document.getElementById('count-dice').value;
    for (let idx = 0; idx < diceCount; idx++){
        addResult();
    }
}

function resetResult(){
    document.getElementById('final-score').innerHTML = '';
}

function addResult(){
    const rollResult = document.createElement('DIV');
    rollResult.classList.add('result');
    rollResult.innerText = rollValue();
    document.getElementById('final-score').appendChild(rollResult);
}

function rollValue(){
    const sides = document.getElementById('sides').value;
    return Math.floor(Math.random()* sides) + 1;
}