const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "1234567890";
const symbol = "!@#$%^&*";


function generate()
{
    const sizeofpass = Number(document.getElementById("sizeofpass").value);

    let generatePassSize = "";

    if(sizeofpass<6)
    {
        window.alert(`Password size can't be less than 6`);
        return;
    }

    if(document.getElementById("lower").checked)
    {
        generatePassSize += lower;
    }
    if(document.getElementById("upper").checked)
    {
        generatePassSize += upper;
    }
    if(document.getElementById("number").checked)
    {
        generatePassSize += number;
    }
    if(document.getElementById("symbol").checked)
    {
        generatePassSize += symbol;
    }

    if(generatePassSize.length == 0)
    {
        window.alert(`Please select at least one option`)
        return
    }

    let finalPass = ""
    for(let i= 0; i<sizeofpass; i++)
    {
        let index = Math.floor(Math.random() * generatePassSize.length);

        finalPass += generatePassSize[index]
    }


    document.getElementById("answer").textContent = `Generated Password: ${finalPass}`
}