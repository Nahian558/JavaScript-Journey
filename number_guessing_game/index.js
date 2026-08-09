let min=1;
let max=100;

let answer = Math.floor(Math.random()* (max-min +1)) +min;

let attempts=0;
let run= true;

while(run)
{
    let guess = Number(window.prompt(`Guess a number between ${min} and ${max}`));

    if(isNaN(guess)){
        window.alert(`Enter a valid number`);
    }
    else if(guess>max || guess<min){
        window.alert(`Enter a valid number between ${min} - ${max}`);
    }
    else{
        attempts++;

        if(guess<answer){
            window.alert(`Too Low! Please Try Again.`);
        }
        else if(guess>answer){
            window.alert(`Too high! Please Try Again.`);
        }
        else{
            window.alert(`Congratulations!!! You guessed it.\nThe number was ${answer}.\nYou take ${attempts} attempts.`);

            run=false;
        }
    }
}