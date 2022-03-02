let number = Math.trunc(Math.random()*20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".reset").addEventListener('click', ()=>{
    number = Math.trunc(Math.random()*20 + 1);
    console.log("wassup");
    document.querySelector("#answer").innerHTML = `<p>
            ?
            </p>`;
    document.querySelector('.inputValue').value = "";
    document.querySelector('#clue').innerHTML = `Start Guessing ...`;
    score = 20;
    document.querySelector('#score').textContent = `score: ${score}`;
    document.querySelector('body').style.backgroundColor = 'black';
})

document.querySelector('.check').addEventListener('click', () => {
    let value = Number(document.querySelector('.inputValue').value);
    document.querySelector('#score').textContent = `score: ${--score}`;
    if(value>0 && value<= 20){
        if(value === number){
            document.querySelector('#clue').textContent = "Correct!!";
            document.querySelector("#answer").innerHTML = `<p>
            ${number}
            </p>`;
            if(score > highScore){
                highScore = score;
                document.querySelector('#Highscore').textContent = `Highscore: ${highScore}`;
            }
            document.querySelector('body').style.backgroundColor = '#60b347';
        }
        else if(value > number){
            document.querySelector('#clue').textContent = "Decrease your guess";
        }
        else if(value < number){
            document.querySelector('#clue').textContent = "Increase your guess";
        }
    }
    else{
        console.log("Enter Value from 1 to 20")
        document.querySelector('#clue').textContent = "Enter Value from 1 to 20";
    }

})





