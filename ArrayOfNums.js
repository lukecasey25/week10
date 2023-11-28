//question 4 Create a preset array of numbers. 
//Create a piece of code that chooses the largest number from that array

let myArray = []; //take input from the customer
function createArray() {
    arrayLength = parseInt(prompt("how many numbers are in the array"));

    for (let i = 0; i < arrayLength; i++) {
        myArray[i] = prompt("enter a number " + (i + 1));
        document.getElementById("main").innerHTML += (myArray[i] + "<br>");

    }

    hide();



}

function maxNum() {
    var largest = myArray[0];

    for (let i = 1; i < arrayLength; i++) {
        if (myArray[i] > largest) {
            largest = myArray[i];
        }
    }
    document.getElementById("max").innerHTML += ("The Max number in the array is " + largest);

}

function hide() {
    document.getElementById("createButton").style.display = "none";
}

