function reselect() {
    Cookies.remove('Cappuccino');
    window.location.href='/index.html';
}

let userSelection1 = Cookies.get('Cappuccino');
document.getElementById('choiceName').innerText=userSelection1;
let userSelection2 = Cookies.get('Pastel');
document.getElementById('choiceName').innerText=userSelection2;
let userSelection3 = Cookies.get('Program');
document.getElementById('choiceName').innerText=userSelection3;