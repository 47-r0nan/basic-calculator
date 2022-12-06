const $ = function(selector) {
    return document.querySelector(selector);
} 

// error method
function showInfo(error) {
    alert("Remember: do not enter the same operation twice\n\n\n"
                       +"\"+\" and \"-\" don\'t count as they show positive and minus numbers\n"
                        +"\"**\" is how the computer reads powers\n\n\n\n"
                        +error);
    clearScreen();

}

// resets screen
function clearScreen() {
    $('#current').innerText = "";
    $('#previous').innerText = "";

}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".butt").forEach(button => {
        button.addEventListener('click', (evt) => {

            try{
                // initialises changeable variables
                let key = evt.currentTarget.innerText;
                let ans = "";

                switch(key) {
                    // "equals" button
                    case "=":
                        // changes "power" so eval() can read it and chages it back
                        if($('#current').innerText.includes("^")) {
                            $('#current').innerText = $('#current').innerText.replace("^", "**");
                            ans = eval($('#current').innerText);
                            $('#current').innerText = $('#current').innerText.replace("**", "^");
                            $('#previous').innerText = $('#current').innerText;
                        }
                        else {
                            // evaluates current and copies to previous
                            ans = eval($('#current').innerText);
                            $('#previous').innerText = $('#current').innerText;
                        }
                        // puts new answer in current
                        $('#current').innerText = ans;
                        break;

                    // deletes last button pressed using slice() and the string length
                    case "del":
                        $('#current').innerText = $('#current').innerText.slice(0, -1);
                        break;

                    case "AC":
                        clearScreen();
                        break;

                    // puts the key value onto the current screen
                    default:
                        $('#current').innerText += key;
                        break;
                }
            }
            catch(error) {
                showInfo(error);
                // I tried to write a catch exception for if there were multiple
                // operations in the string e.g. "123///321", but I couldn't
                // figure out how for the life of me 
            }
        });
    });
});


