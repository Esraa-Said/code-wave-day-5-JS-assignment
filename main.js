// Question 1
function isPalindrome() {
  let str = prompt("Enter a string To Check if Palindrome or not");
  let considerCase = confirm("Do you want to consider the case of the string?");
  if (!considerCase) {
    str = str.toLowerCase();
  }
  let strRev = str.split("").reverse().join("");
  if (str === strRev) {
    alert(`The string "${str}" is a palindrome.`);
    console.log(`The string "${str}" is a palindrome.`);
  } else {
    alert(`The string "${str}" is not a palindrome.`);
    console.log(`The string "${str}" is not a palindrome.`);
  }
}

// Question 2
function countE() {
  let str = prompt(
    "Enter a string To count the number of 'e' characters in it:"
  );
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "e") count++;
  }
  alert(`The number of 'e' characters in the string ${str} is: ${count}`);
  console.log(`The number of 'e' characters in the string ${str} is: ${count}`);
}

// Question 3
function getUserInfo() {
  alert("Enter Your Info");
  const name = prompt("Enter your name:");
  const age = prompt("Enter your age:");
  const email = prompt("Enter your email:");
  if (name && age && email) {
    alert(`Welcome, ${name}! \nName: ${name}\nAge: ${age}\nEmail: ${email}`);
    console.log(
      `Welcome, ${name}! \nName: ${name}\nAge: ${age}\nEmail: ${email}`
    );
  } else {
    alert("All fields are required.");
    console.log("All fields are required.");
  }
}

// Question 4
function circleArea() {
  let radius = parseFloat(
    prompt("Enter The Radius of the circle to calculate its area")
  );
  if (isNaN(radius) || !radius || radius <= 0) {
    alert(`Invalid Radius ${radius}`);
    console.log(`Invalid Radius ${radius}`);
  } else {
    const area = Math.PI * Math.pow(radius, 2);
    alert(
      `The area of the circle with radius ${radius} is: ${area.toFixed(2)}`
    );
    console.log(
      `The area of the circle with radius ${radius} is: ${area.toFixed(2)}`
    );
  }
}

// Question 5
function squareRoot() {
  let value = parseFloat(prompt("Enter a value to calculate its square root:"));
  if (isNaN(value) || !value || value < 0) {
    alert(`Invalid Value ${value}`);
    console.log(`Invalid Value ${value}`);
  } else {
    const sqrt = Math.sqrt(value);
    alert(`The square root of ${value} is: ${sqrt.toFixed(2)}`);
    console.log(`The square root of ${value} is: ${sqrt.toFixed(2)}`);
  }
}

// Functions Call
console.log("Task - 1");
console.log("Function check if string is palindrome or not");
isPalindrome();
console.log("-------------------------------------------");

console.log("Task - 2");
console.log("Function counts the number of ‘e’ characters");
countE();
console.log("-------------------------------------------");

console.log("Task - 3");
console.log("Function reads user's info");
getUserInfo();
console.log("-------------------------------------------");

console.log("Task - 4");
console.log("Function calculates the area of circle");
circleArea();
console.log("-------------------------------------------");

console.log("Task - 5");
console.log("Function calculates the square root of value");
squareRoot();
console.log("-------------------------------------------");
