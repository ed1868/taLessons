// Names and Input
// Create a variable hacker1 with the driver's name

let hacker1 = "eddie";
// Print "The driver's name is XXXX"
console.log(`The driver's name is ${hacker1} `);
// Create a variable hacker2 and ask the user for the navigator's name
let hacker2 = "anthony"
// Print "The navigator's name is YYYY"

console.log(`The navigator's name is ${hacker2} `);
// Conditionals
// Depending on which name is longer, print:
// The Driver has the longest name, it has XX characters or
longestName = (nameOne, nameTwo) => {
  if(nameOne.length > nameTwo.length){
    console.log(`The Driver has The Longest name, it has ${nameOne.length} characters`);
  }
  else if (nameTwo.length > nameOne.length){
    console.log(`The Navigator has The Longest name, it has ${nameTwo.length} characters`);
  }
  else{
    console.log(`wow, You Both have the same amount of characters. Total : ${nameOne.length}`);
  }
}
// Yo, navigator got the longest name, it has XX characters or
// wow, you both got equally long names, XX characters!!
longestName(hacker1,hacker2);

// Loops
// Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
let upperCase = hacker1.toUpperCase();
let split = upperCase.split("");
console.log(split);
let result = [];
for(var i =0; i < split.length; i++){

  result.push(split[i] + " ");
  console.log(result.join(''));
}

// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
let reverse = hacker1.split('').reverse();
console.log(reverse);
// Depending on the lexicographic order of the strings, print:
let sortOne = hacker1.split('').sort().join('');
console.log(sortOne)
let sortTwo = hacker2.split('').sort().join('');
console.log(sortTwo)

sortOrder = (driver,navigator) => {
    let driverNumber = driver.charCodeAt(0) + 97;
    console.log(driverNumber);
    let navigatorNumber = navigator.charCodeAt(0) + 97;
    console.log(navigatorNumber)

  if(driverNumber < navigatorNumber){


    console.log('The drivers name goes first');
  }
  else if(driverNumber > navigatorNumber){
    console.log('Yo, the navigator goes first definitely');
  }
  else {
    console.log('What?! You both got the same name?')
  }
}

sortOrder(sortOne,sortTwo);
// The driver's name goes first
// Yo, the navigator goes first definitely
// What?! You both got the same name?
