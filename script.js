
let input2 = document.getElementById('numberinput')
let form = document.getElementById('form')
let p = document.getElementById('result')


form.addEventListener('submit', onButtonClicked);

function onButtonClicked(event) {
    let number = parseInt(numberinput.value);
    event.preventDefault();
    if (number > 20) {
        p.innerHTML = "Ditt tal är större än 20!"
    } else if (number < 20) {
        p.innerHTML = "Ditt tal är mindre än 20!"
    }
    else if (number === 20) {
        p.innerHTML = "Ditt tal är 20!"
    }
}