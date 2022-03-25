//   Create a page where the user can select from 1 of 3 values ---- COMPLETE

//   The user should then be sent to a new page called selection.html that displays their selection to them
//   NOTE you can only have one selection.html page! You can't cheat by sending the user to one of three pages.
//   This selection.html page should read the cookie with the user's selection to get the selection from the page before
//   If the selection cookie is not set, the page should give a message to the user informing them to go make a selection.
//   BONUS: Give the user a "Select new option" which clears the cookie and sends them back to the option picking page
//          Once finished add, commit and push the code to GitHub. Submit the GitHub link.

//  C -- Create
//  R -- Read
//  U -- Update
//  D -- Delete(remove)

//   When the user clicks on one of these options, 
//   a cookie should be set to the value of the option they have selected.
function colourSelection1() {
    var item1 = document.getElementById('selectbtn1');
    console.log(item1);
    Cookies.set('Cappuccino', item1);
    window.location.href='/selection.html';
}
function colourSelection2() {
    var item2 = document.getElementById('selectbtn2');
    console.log(item2);
    Cookies.set('Pastel', item2);
    window.location.href='/selection.html'
}
function colourSelection3() {
    var item3 = document.getElementById('selectbtn3');
    console.log(item3);
    Cookies.set('Program', item3);
    window.location.href='/selection.html'
}