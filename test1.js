/*
/ -------> 01---data type in javascript string, number, boolean, null, undefined
/ -------> 02---displaying/printing to console, string functions (case, split, length, substring)
/ -------> 03---object variable/literals, array of objects & arrays
/ -------> 04---loops (while, for, variations of for, forEach, map, filter)
/ -------> 05---conditional statements (if, ternary operator, switch)
/ -------> 06---functions (normal functions, fat arrow functions, one-liner functions)
/ -------> 07---OOPS concepts (constructors, prototype) --> ignore this and rather focus on classes
/ -------> 08---OOPS concepts (classes) 
/ -------> 08---working with DOM objects --> exercise continued in test2.html / test2.js
*/

const a = 5;
const b=10;
const c = null;
let d;
const color = "red"
const fruits = ['apple','orange','guava','banana']

const s="Testing and learning";
const person = {"name": "siva",
                "age" : 38,
                "qual": "M.S",
                "employed": "yes",
                "address":{"first line" : "12,trinity avenue",
                           "second line":"Cowboy street",
                           "city"       : "Mahom",
                           "state"      : "TX",
                           "postal code": "221 BY"},
                "phone num": 1234567890
            }

const todos = [
    {taskNo: 1,
     description: "need to look at tomorrow's loss",
     isCompleted: true},
    {taskNo: 2,
     description: "need to recover 1.5 lakhs",
     isCompleted: false},
    {taskNo: 3,
     description: "need to recover 10 lakhs",
     isCompleted: false}
]

//* -------> 09---working with DOM objects

/* -------> 08---OOPS concepts (classes) 
class car {
    constructor(maker, model, launchDate) {
        this.maker = maker
        this.model = model
        this.launchDate = new Date(launchDate)
    }

    getLaunchYear() {
        return this.launchDate.getFullYear()
    }
    getMakeAndModel() {
        return `${this.maker} ${this.model}`    
    }   
}

const car1 = new car ("alto", "maruti", "01-01-1990");
const car2 = new car ("i20", "hyundai", "02-02-2001");

console.log (car1);
console.log (car2.getLaunchYear());
console.log (car2.getMakeAndModel());

*/

/* -------> 07---OOPS concepts (constructors, prototype) --> ignore this and rather focus on classes
function car (model, maker, launchDate) {
    this.model = model
    this.maker = maker
    this.launchDate = new Date(launchDate)
    this.launchYear = function () {
        return this.launchDate.getFullYear()
    }
    this.makeAndModel = function () {
        return `${this.maker} ${this.model}`
    }
    car.prototype.makeAndModel1 = function () {                     // using a prototype function, since this will not log it as a function when displaying the object
        return `${this.maker} ${this.model}`                        // rather it will display the object first and then it will display the prototypes
    }
}

car1 = new car ("alto", "maruti", "01-01-1990")
car2 = new car ("i20", "hyundai", "02-02-2001")

console.log (car1)
console.log (car2.launchYear())
console.log (car2.makeAndModel())
console.log (car2.makeAndModel1())

*/

/* -------> 06---functions
todos.forEach((todo) => console.log(todo.description))              // FatArrow simplifying ForEach usage, useful if you want a one-liner, may not be feasible for block

const addNumFatArrow3 = num1 => num1 + 5                            // Function with fat arrow written as one line & with single parm. To pass default values use ()

const addNumFatArrow2 = (num1 = 2, num2 = 3) => num1 + num2         // Function with fat arrow written as one line

const addNumFatArrow1 = (num1 = 2, num2 = 3) => {                   // Function with fat arrow
     return num1 + num2
}

function addNumWithDefault (num1 = 2, num2 = 3) {                   // Function with default parms, default parms will take effect ONLY if actual parms aren't passed
    return num1 + num2
}

function addNum (num1 = 2, num2 = 3) {                              // Normal function
    return num1 + num2
}

result1 = addNum(3,5)
result2 = addNumWithDefault(4,5)
result3 = addNumFatArrow1(5,5)
result4 = addNumFatArrow2(6,5)
result5 = addNumFatArrow3(7)
console.log ("sum of parms is " + result1 + " | " + result2 + " | " + result3 + " | " + result4 + " | " + result5)

*/

/* -------> 05---conditional statements (if, ternary operator, switch)

if (a === 5) {
    console.log ("a is equal to 5")
}
if (a === 5 && b > 5) {
    console.log("a is equal to 5 and b is greater than 5")
}
if (a === 5 && b > 10) {
    console.log("a is equal to 5 and b is greater than 10")
}
if (a === 5 || b > 10) {
    console.log("a is equal to 5 or b is greater than 10")
}

const ternaryCheck = a > 5 ? "a is greater than 5" : "a is not greater than 5"; 
console.log ("ternary operator testing: " + ternaryCheck)

switch (color) {
    case "white": 
        console.log("color is " + color)
        break;
    case "black":
        console.log("color is " + color)
        break;
    case "red":
        console.log("color is " + color)
        break;
    default:
        console.log("color is " + color)
        break;
}

*/

/* -------> 04---loops (while, for, variations of for, forEach, map, filter)

todoDescFilteredMapList = todos.filter(function(todo) {        // Filter w/Map --> this will return readable array/list of values
    return todo.isCompleted === false
}).map(function(todo){return todo.description})
console.log("todoDescFilteredMapList: " + todoDescFilteredMapList)

todoDescFilteredList = todos.filter(function(todo) {           // Filter --> this will return objects which are qualifying the criteria
    return todo.isCompleted === false
})
console.log("todoDescFilteredList: " + todoDescFilteredList)

todoDescList = todos.map(function(todo) {                      // Map
    return todo.description
})
console.log("todoDescList: " + todoDescList)

todos.forEach(function(todo) {                                 // forEach loop 
    console.log("printing w/foreach: " + todo.description)
});

for (let todo of todos) {                                      // for loop variation, recommended
    console.log(todo.description)
}
for (i=0; i< todos.length; i++) {                              // for loop dynamic ending with array length
    console.log("printing todos: " + todos[i].description)
}

for (i=0; i < 10; i++) {                                      // basic for loop
    console.log("printing i in for loop: " + i)
}

i = 0;
while (i < 10) {                                              // basic while loop
    console.log('printing i in while loop: ' + i)
    i++
}

*/

/* -------> 03---object variable/literals, array of objects & arrays

console.log(person.name)
console.log(person.address.city)
const {name, employed, address:{state}} = person;             // creating a variable out of an object variable, step 1
const {city} = person.address;                                // creating a variable out of an object variable, step 2
console.log(name + ' | ' + ' | ' + city + ' | ' + state)
person.email = 'abc@xyz.com'                                  // adding a new field to the object
console.log(person)

const todosJSON = JSON.stringify(todos)                       // converting into JSON format for sending to server
console.log('showing todosJSON : ' + todosJSON)
console.log('pending activities: ' + todos(isComplete(false))

console.log("before: " + fruits[3])                           // this will display banana
fruits[3] = 'peach'                                           // note that arrays allow overwriting, even though they are defined as constant
console.log("after : " + fruits[3])                           // this will display peach
fruits[4] = 'pine apple'                                      // method 1 to add an element to an array
fruits.push('strawberry')                                     // method 2 to add an element to an array
console.log("fruits array: " + fruits)
fruits.pop('orange')                                          // pop will remove array's last element. Though 'orange' is passed as argument 'strawberry' will be deleted
console.log("fruits array after pop: " + fruits)
fruits.unshift("jack fruit")                                  // inserts the passed value as the first element of the array
console.log("fruits array after unshift: " + fruits)
console.log(Array.isArray('something'))                       // checking if something is an array or not, step 1
console.log(Array.isArray(fruits))                            // checking if something is an array or not, step 2
console.log(fruits.indexOf('jack fruit'))                     // getting the index of a particular array value, step 1 --> this will return 0
console.log(fruits.indexOf('mango'))                          // getting the index of a particular array value, step 2 --> this will return -1

*/

/* -------> 02---displaying/printing to console, string functions (case, split, length, substring)

console.log('testing, value of a is ' + a + 'and value of b is ' + b + 5);    // method 1 to display. Note that the + operator in the end acts as concatenate operator
console.log(`testing, value of a is ${a} and value of b is ${b * 10}`);       // method 2 to display. Note that the quotation mark used is not " ' ", rather it is " ` "
outputVal = 'testing, value of a is ' + a + 'and value of b is ' + (b - 5);   // method 1 to display. Note that the + operator in the end acts as arithmetic operator  

console.log (outputVal);

console.log(s.toLowerCase());                        // -> converts input string to lower case
console.log(s.toUpperCase());                        // -> converts input string to upper case
console.log(s.split(" "));                           // -> splits input text into a list of strings
console.log("length of string s is " + s.length)     // -> gets the length of the string
console.log(s.substring(2,5))                        // -> substring / reference modification. Note that the 2nd argument is not displacement, rather it is end pos + 1
console.log(s.substring(0,5))                        // -> this will return "testi". Note that the '0' denotes 't' in the string and '5' denotes 'n' in the string

*/

/* -------> 01---data type in javascript string, number, boolean, null, undefined

console.log(typeof(a)) // -> data type number
console.log(typeof(s)) // -> data type string
console.log(typeof(c)) // -> data type null; value assigned is null, but it will treat it as an object
console.log(typeof(d)) // -> data type undefined

*/