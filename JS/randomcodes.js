/* ------ RANDOM CODES ------ */

// Function to generate combination of characters
function generateCode() {
    var code = ''; // to store generated codes and initialize to empty value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    // Generate character multiple times using a loop
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length); // random select a character from the variable and then store in a new variable
        code += str.charAt(char); // accumulate the generated character into a string of 8 characters
    }
    return code; // return the final accumulated string when loop ends
}

// Function to enable or disable the submit button
function disableButton(btnvalue) {
    var submitButton = document.getElementById("submit");
    submitButton.disabled = btnvalue; // enable/disable button
    if (btnvalue) { // test if button is disabled or enabled
        // set button and label color translucent
        submitButton.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        submitButton.style.color = "rgba(255, 255, 255, 0.5)";
        submitButton.style.cursor = "not-allowed";
    } else {
        // set button and label color with no transparency
        submitButton.style.backgroundColor = "rgba(73, 119, 209, 1)";
        submitButton.style.color = "rgba(255, 255, 255, 1)";
        submitButton.style.cursor = "pointer";
    }
}

// Function to evaluate the entered code
function evaluateCode() {
    var getCode = document.getElementById("codeentered").value; // get character entered
    var charset1 = getCode.trim(); // remove any hidden characters entered
    var charset2 = code.trim(); // remove any hidden characters generated
    // test if code entered matches the number of generated characters
    if (charset1.length === charset2.length && charset1 === charset2) {
        disableButton(false); // if match, run the function to enable button
    } else {
        disableButton(true); // if not match, disable the button
    }
}

// Initialize and display the generated code
var code = generateCode();
document.getElementById("codes").innerHTML = code;

// Listen to user input code
document.getElementById("codeentered").addEventListener("input", evaluateCode);

// Disable the button initially
disableButton(true);

// Function to redirect to a new page on submit
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // prevent default form submission
    window.location.href = "empty.html"; // replace with the URL of the empty page
});