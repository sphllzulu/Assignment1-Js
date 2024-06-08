//Exercise 1 if else statements
function checkTemp(temperature) {
    if (temperature < 0) {
      console.log("It's freezing!");
    } else if (temperature >= 0 && temperature <= 15) {
      console.log("It's cold.");
    } else if (temperature >= 16 && temperature <= 25) {
      console.log("It's mild.");
    } else if (temperature > 25) {
      console.log("It's warm.");
    }
  }
  checkTemp(-1);

  //Switch statement
  function checkTemperature(temp) {
    switch (true) {
      case (temp < 0):
        console.log("It's freezing!");
        break;
      case (temp >= 0 && temp <= 15):
        console.log("It's cold.");
        break;
      case (temp >= 16 && temp <= 25):
        console.log("It's mild.");
        break;
      case (temp > 25):
        console.log("It's warm.");
        break;
      default:
        console.log("Temperature out of range.");
    }
  }
  checkTemperature(30)

  //Exercise 2 Divisibility Check
  

  function checkDivisibility(number) {
    if (number % 2 === 0 && number % 3 === 0) {
      console.log("Divisible by both.");
    } else if (number % 2 === 0) {
      console.log("Divisible by 2.");
    } else if (number % 3 === 0) {
      console.log("Divisible by 3.");
    } else {
      console.log("Not divisible by 2 or 3.");
    }
  }
  checkDivisibility(23);

  function checkIfDivisible(number) {
    switch (true) {
      case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
      case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
      case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
      default:
        console.log("Not divisible by 2 or 3.");
    }
  }
  checkIfDivisible(35);

  //Exercise 3
  // for Loops numbers from 1 to 10
  for (let j = 1; j <= 10; j++) {
    console.log(j);
  }

  //even numbers 1 to 20
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }

  //Calculate the sum 
  let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// first array [1, 2, 3, 4, 5];
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
  }

//second array [3,7,2,5,10,6]
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0]; 

for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > largest) {
    largest = numbers2[i];
  }
}
console.log("The largest number is: " + largest);  

//Exercise 4
//print numbers from 1 to 10 using while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//even numbers using while loop
let j = 2;
while (j <= 20) {
  console.log(j);
  j += 2;
}

//Calculate the sum of numbers from 1 to 100
let sumOfNumbs = 0;
let k = 1;
while (k <= 100) {
  sumOfNumbs += k;
  k++;
}
console.log(sumOfNumbs);

//print all multiples of 5
let m = 1;
while (m < 50) {
  if (m % 5 === 0) {
    console.log(m);
  }
  m++;
}

//Exercise 5
//print numbers from 1 to 10 using doWhile loop
let l = 1;
do {
  console.log(l);
  l++;
} while (l <= 10);

//calculate the sum of numbers from 1-100 using doWhile loop
let sumOfNumbers = 0;
let z = 1;
do {
  sumOfNumbers += z;
  z++;
} while (z <= 100);
console.log(sum);

//prompt user to enter number greater than 10
let userInput;
do {
  userInput = prompt("Enter a number greater than 10:");
  userInput = Number(userInput); //this is to explicitly cast the user's input into a number e.g in case user inputs "20" it will be converted to a number 
} while (isNaN(userInput) || userInput <= 10);//checks if the user inputs a number, if not the loop continues until user inputs the correct number then the loop will be terminated
console.log("Thank you! You entered: " + userInput);

//Simple guessing game using a doWhileLoop
const correctNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;

do {
  
  userGuess = prompt("Guess a number between 1 and 10:");
  userGuess = Number(userGuess);

  if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
    console.log("Please enter a valid number between 1 and 10.");
  } else if (userGuess !== correctNumber) {
    console.log("Errrrrrrrrr! Try again.");
  }
} while (userGuess !== correctNumber);

console.log("Are you a clairvoyant?Congratulations! You guessed the correct number: " + correctNumber);

