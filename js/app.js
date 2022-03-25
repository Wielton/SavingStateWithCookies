//   Create a page where the user can select from 1 of 3 values ---- COMPLETE

//   The user should then be sent to a new page called selection.html that displays their selection to them --- COMPLETE
//   NOTE you can only have one selection.html page! You can't cheat by sending the user to one of three pages. -- COMPLETE
//   This selection.html page should read the cookie with the user's selection to get the selection from the page before
//   If the selection cookie is not set, the page should give a message to the user informing them to go make a selection.
//   BONUS: Give the user a "Select new option" which clears the cookie and sends them back to the option picking page
//          Once finished add, commit and push the code to GitHub. Submit the GitHub link.

//  C -- Create
//  R -- Read
//  U -- Update
//  D -- Delete(remove)

//   When the user clicks on one of these options, 
//   a cookie should be set to the value of the option they have selected. --- COMPLETE
//   This selection.html page should read the cookie with the user's selection 
//   to get the selection from the page before  ----COMPLETE
function colourSelection1() {
    var item1 = document.getElementById('selectbtn1').value;
    Cookies.set('Cappuccino', item1);
    
}
function colourSelection2() {
    var item2 = document.getElementById('selectbtn2').value;
    Cookies.set('Pastel', item2);
    
}
function colourSelection3() {
    var item3 = document.getElementById('selectbtn3').value;
    Cookies.set('Program', item3);
    
}