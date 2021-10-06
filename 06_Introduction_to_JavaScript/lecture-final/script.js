/*
    Example of a multi-line comment just like in C#/Java
*/

// Single line comment


function demo(){

//Shadowing
  {//outer scope
    let i = 5;
    { //inner scope
      let i = 41; // new variable
      
      console.log(i);// print 41


    }
    console.log(i) //5

  }

//var use case (why not to use)
  for (let i = 0; i < 5; i++){
    console.log(i)
  }
  console.log(i)


  for (var i = 0; i < 5; i++){
    console.log(i)
  }
  console.log(i)




}

function demoCoreExamples(){



}


/**
 * Functions start with the word function.
 * They don't have a return type and the naming convention is camel-case.
 */
function variables() {
  // Declares a variable where the value cannot be changed
  const daysPerWeek = 7;
  console.log(`There are ${daysPerWeek} days in the week.`);
  // Declares a variable whose value can be changed
  let daysPerMonth = 30;
  console.log(`There are ${daysPerMonth} days in the month.`);

  // Declares a variable that will always be an array
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  console.table(weekdays);
  


}

/**
 * Functions can also accept parameters.
 * Notice the parameters do not have types.
 * @param {Number} param1 The first number to display
 * @param {Number} param2 The second number to display
 */
function printParameters(param1, param2) {
  console.log(`The value of param1 is ${param1}`);
  console.log(`The value of param2 is ${param2}`);
}

/**
 * Compares two values x and y.
 * == is loose equality
 * === is strict equality
 * @param {Object} x
 * @param {Object} y
 */
function equality(x, y) {
  console.log(`x is ${typeof x}`);
  console.log(`y is ${typeof y}`);

  console.log(`x == y : ${x == y}`); // true
  console.log(`x === y : ${x === y}`); // false
}

/**
 * Each value is inherently truthy or falsy.
 * false, 0, '', null, undefined, and NaN are always falsy
 * everything else is always truthy
 * @param {Object} x The object to check for truthy or falsy,
 */
function falsy(x) {
  if (x) {
    console.log(`${x} is truthy`);
  } else {
    console.log(`${x} is falsy`);
    
  }
}

/**
 *  Objects are simple key-value pairs
    - values can be primitive data types
    - values can be arrays
    - or they can be functions
*/
function objects() {
  const person = {
    firstName: "Bill",
    lastName: "Lumbergh",
    age: 42,
    employees: [
      "Peter Gibbons",
      "Milton Waddams",
      "Samir Nagheenanajar",
      "Michael Bolton"
    ],
    toString: function() {
      return `${this.lastName}, ${this.firstName} (${this.age})`; 
    }
  };

  console.table(person);

  for (let i= 0; i < person.employees.length; i++){
  console.log(`Employee ${i + 1} is ${person.employees[i]}`)

  }
  console.log(person.toString());

  console.log(person);
  // Log the object


  // Log the first and last name

  // Log each employee
}

/*
########################
Function Overloading
########################

Function Overloading is not available in Javascript. If you declare a
function with the same name, more than one time in a script file, the
earlier ones are overriden and the most recent one will be used.
*/

function Add(num1, num2) {
  return num1 + num2;
}

function Add(num1, num2, num3) {
  return num1 + num2 + num3;
}


    
/*
########################
Math Library
########################

A built-in `Math` object has properties and methods for mathematical constants and functions.
*/

function mathFunctions() {
  console.log("Math.PI : " + Math.PI);
  console.log("Math.LOG10E : " + Math.LOG10E);
  console.log("Math.abs(-10) : " + Math.abs(-10));
  console.log("Math.floor(1.99) : " + Math.floor(1.99));
  console.log("Math.ceil(1.01) : " + Math.ceil(1.01));
  console.log("Math.random() : " + Math.random());
}

/*
########################
String Methods
########################

The string data type has a lot of properties and methods similar to strings in Java/C#
*/

function stringFunctions(value) {
  console.log(`.length -  ${value.length}`);
  console.log(`.endsWith('World') - ${value.endsWith("World")}`);
  console.log(`.startsWith('Hello') - ${value.startsWith("Hello")}`);
  console.log(`.indexOf('Hello') - ${value.indexOf("Hello")}`);

  /*
    Other Methods
        - split(string)
        - substr(number, number)
        - substring(number, number)
        - toLowerCase()
        - trim()
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    */


   
    


}

 //Push 
 function pushExample(){
  let numbers = [1, 2, 3];
  numbers.push(4);
  console.table(numbers);

}


//unshift 
function unshiftExample(){
let numbers  = [2, 3, 4];
numbers.unshift(1);
console.table(numbers);
}

//pop()
function popExample(){
let numbers = [1, 2, 3, 4];
console.table(numbers);
let removedElement = numbers.pop();
console.table(numbers);
console.log(removedElement);

}

//shift
function shiftExample(){
  let numbers = [1, 2, 3, 4];
  console.table(numbers);
  let removedElement = numbers.shift();
  console.table(numbers);
console.log(removedElement);

}

//includes
function includesExample(){
  let numbers = [5, 6, 7, 8];
  let hasFive = numbers.includes(5);
  let hasNine = numbers.includes(9);

  console.log(hasFive);
  console.log(hasNine);

}

//indexOf()
function indexOfExample(){
let numbers = ["one", "two", "four", "nine", "two"];
let indexOfTwo = numbers.indexOf("two");
let indexOfNine = numbers.indexOf("nine");

console.log(indexOfTwo);
console.log(indexOfNine);

}



//LastIndexOf()
function lastIndexOfExample(){
  let numbers = ["one", "two", "four", "nine", "two", "five"];
  let indexOfTwo = numbers.lastIndexOf("two");
  let indexOfNine = numbers.lastIndexOf("nine");
  
  console.log(indexOfTwo);
  console.log(indexOfNine);
  
  }

  //join()
function joinExample(){
let numbers = [1, 2, 3];
let joinedNumbers = numbers.join("|");
console.log(joinedNumbers);

  }


  //reverse()
  function reverseExample() {
    let numbers = [1, 2, 3];
    console.table(numbers);
    let revNums = numbers.reverse();
    console.table(revNums);

  }


