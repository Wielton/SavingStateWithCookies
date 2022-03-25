// How can I make the selection dynamic 
// so that the cookie.remove can accept a dynamic value?



function reselect() {
//  Cookies.remove(userSelection);
    for (let i = 0; i < cookieArray.length; i++) {
        if (cookieArray[i] = userSelection1) {
            Cookies.remove('Cappuccino');
            
        } else if (cookieArray[i] = userSelection2) {
            Cookies.remove('Pastel');
            
        } else if (cookieArray[i] = userSelection3) {
            Cookies.remove('Program');
            
        }
    }window.location.href='/index.html';
    
}
// 1. userselection[i] is the fetched cookie but I need to make this new 
//     variable dynamic so I can use it as the argument to Cookies.remove(userSelection)
//  For now I had to create a conditional block to remove a specific cookie
let userSelection1 = Cookies.get('Cappuccino');
let userSelection2 = Cookies.get('Pastel');
let userSelection3 = Cookies.get('Program');
let cookieArray = [userSelection1, userSelection2, userSelection3];


//  Create a forLoop to iterate through cookieArray[i] and 
//  a conditionl to inject innerText into ('choicename');
for (let n = 0; n < cookieArray.length; n++) {
    if (cookieArray[n] = userSelection1) {
        document.getElementById('choiceName').innerText='Cappuccino';
        document.body.style.backgroundImage="url('https://digitalsynopsis.com/wp-content/uploads/2017/06/beautiful-color-palettes-combinations-schemes-cappuccino.png')";
    } else if (cookieArray[n] = userSelection2) {
        document.getElementById('choiceName').innerText='Pastel';
        document.body.style.backgroundImage="url('https://digitalsynopsis.com/wp-content/uploads/2017/06/beautiful-color-palettes-combinations-schemes-pastel-rainbow.png')";
}else if (cookieArray[n] = userSelection3) {
    document.getElementById('choiceName').innerText='Program';
    document.body.style.backgroundImage="url('https://digitalsynopsis.com/wp-content/uploads/2017/06/beautiful-color-palettes-combinations-schemes-program-catalog.png')";
}}

// Make the #selectionDiv have the corresponding colours background
