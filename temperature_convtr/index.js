const temperature = document.getElementById("inTemp");
const toCelcius = document.getElementById("toCelcius");
const toFahrenheit = document.getElementById("toFahrenheit");
const answer = document.getElementById("answer");

let temp;

function convert()
{
    if(toCelcius.checked)
    {
        temp=temperature.value;
        temp= (temp-32) * (5/9);
        answer.textContent = temp.toFixed(1) + " C";
    }
    else if(toFahrenheit.checked)
    {
        temp=temperature.value;
        temp= temp * 9 / 5 + 32;
        answer.textContent = temp.toFixed(1) + " F";
    }
    else
    {
        answer.textContent = `Select a conversion type`;
    }
}
