/*
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. find the 2nd largest and the 2nd smallest element without sorting the array.
*/

let numberArray = new Array();
let largestNumber = 100;
let secondLargestNumber = 100;
let smallestNumber = 999;
let secondSmallestNumber = 999;

function generateRandomNumber(){
    return Math.round(Math.random() * 899 + 100);
}

console.log("The Generated Array is:")
for (let index = 0 ; index < 10 ; index++){
    numberArray.push(generateRandomNumber());
    console.log(numberArray[index] + " ");
}

for(index = 0 ; index < numberArray.length ; index ++){
    let currentElement = numberArray[index];
    if(currentElement > largestNumber)
        largestNumber = currentElement;

    if(currentElement < smallestNumber)
        smallestNumber = currentElement;
}