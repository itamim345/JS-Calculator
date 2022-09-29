let calcScreen = document.getElementById('calc-screen');

// Funtion to get input into screen
function getInput (input){
    calcScreen.value = calcScreen.value+input;
}

// Function to calculate the result
function getResult(){
    let calculate = eval(calcScreen.value);
    calcScreen.value = calculate;
}

// Funtion to Clear Screen
function clearScreen(){
    calcScreen.value="";
}
