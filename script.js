let currentCounter = 0;    // This is the global variable to track the counter


function updateDisplay() { // This will help the function to update the HTML display
    document.getElementById("counter").innerText = currentCounter;
}

function tickUp() {        // These are for the simple functions
    currentCounter++;
    updateDisplay();
}

function tickDown() {
    currentCounter--;
    updateDisplay();
}

function runForLoop() {    // The simple for loop 
    let output = "";
    for (let i = 0; i <= currentCounter; i++) { // Will loop from 0 up to and includs the current counter
        output += i + " ";
    }
    document.getElementById("forLoopResult").innerText = output;
}

function showOddNumbers() {// For teh repetition with condition
    let output = "";
    for (let i = 1; i <= currentCounter; i++) {// will loop from 1 up to the current counter
        if (i % 2 !== 0) { // Checks if the number is odd
            output += i + " ";
        }
    }
    document.getElementById("oddNumberResult").innerText = output;
}

function addMultiplesToArray() { // The Arrays!
    let multiples = [];
    
    for (let i = currentCounter; i >= 5; i--) {// Loop starst from currentCounter down to 5 in reverse order
        if (i % 5 === 0) {  // Checks if the number is a multiple of 5
            multiples.push(i);
        }
    }
    
    console.log(multiples);  // Prints the array itself to the console, almost forgot this lol
}


function printCarObject() { // The objects and form fields
    let typeInput = document.getElementById("carType").value;// Gets the values from the input fields
    let mpgInput = document.getElementById("carMPG").value;
    let colorInput = document.getElementById("carColor").value;
    
    
    let newCar = {         // Creates the object using keys matching the footer example
        cType: typeInput,
        cMPG: mpgInput,
        cColor: colorInput
    };
    
    console.log(newCar);
}

function loadCar(carNum) { // The second part of objects and form fields
    let selectedCar;       // Selects the correct global object based on which button was clicked, the carObject1,2,3 are defined in the HTML footer.    
    if (carNum === 1) {
        selectedCar = carObject1;
    } else if (carNum === 2) {
        selectedCar = carObject2;
    } else if (carNum === 3) {
        selectedCar = carObject3;
    }
    
    if (selectedCar) {  // Populate the form fields if a car was found
        document.getElementById("carType").value = selectedCar.cType;
        document.getElementById("carMPG").value = selectedCar.cMPG;
        document.getElementById("carColor").value = selectedCar.cColor;
    }
}

function changeColor(colorNum) { // For changing the styles
    let paragraph = document.getElementById("styleParagraph");
    
    if (colorNum === 1) {
        paragraph.style.color = "red";
    } else if (colorNum === 2) {
        paragraph.style.color = "green";
    } else if (colorNum === 3) {
        paragraph.style.color = "blue";
    }
}