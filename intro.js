//#100DAYSOFJS

//R U L E S
//(const) allows you to assign single declarable value for a variable while (let) could accomodate changes along the line to an initial declaration even after 100lines of code

let alpha = 40
document.write('hello brown')
alert = 'hello world'
console.log('Hello World')

const number = 10
const digits = 4
const amount = number % digits
console.log(amount)

//String concatenation

const name = 'john'
const lastName = 'Maguire'
const fullName = name + ' ' + lastName
console.log(fullName)

//Implicit type conversion
//This is scenerio whereby JS treats a string as a non-conversionable string - i.e you cannot use some number operators on them

const mainName = 'john'
const surName = 'jordan'
const result = mainName - surName
console.log(result)

//BUT...
//treats numbers enclosed in string tags as conversionable calculations
let number3 = '20'
let number4 = '23'
const sum = number3 + number4
console.log(sum)
//this gives an output of (2023) due to rule of string concatenation

let number5 = '20'
let number6 = '23'
const total = number3 / number4
console.log(total)
//this and other operator gives a normal computable result (result here will be -3)

let firstCar
console.log(firstCar)

let emptyValue = null
console.log(typeof undefined)

//

//

//11th January 2022

// ARRAYS IN JAVASCRIPT
// This offers a more convenient way to Storage, access and manaage varaible lists than creating a single varaible per each value available
//Example
//Instead of this....
const friend1 = 'peter'
const friend2 = 'jonny'
const friend3 = 'peker'

console.log(friend1)
//this becomes rundandant having to call all the available variables

//We use the ARRAYs instead....
const friends = ['pedro', 'james', 'gift', 45, undefined, null]

console.log(friends[0])
//this will return the first variable in the array list and which is PEDRO
//this is because ARRAYS are 0-index based

//const friends = ['pedro', 'james', 'gift', 45, undefined, null]

console.log(friends[3])
//return the fourth variable on the list which is 45

//ALSO

//one can access a defined value in the given array list to a new variable name
//Example

// const friends = ['pedro', 'james', 'gift', 45, undefined, null]

let girlFriend = friends[2]

console.log(girlFriend)
//the above will ouput GIFT as the girlfriend having called the value from the FRIENDS array list

//ALSO

//we can not only access but also reassign values in a given array list
//EXAMPLE

// const friends = ['pedro', 'james', 'gift', 45, undefined, null]

let newFriend = friends[1]

friends[1] = 'anna'

console.log(friends)
console.log(friends[1])

//

//

//FUNCTIONS
// They allow you to declare a variable and reuse it overtime in a project thereby reducing redundancy
//EXAMPLE

//FUNCTION DECLARATION/DEFINE

function hero() {
  //logic
  console.log(" I'm a boy")
  console.log(" I'm Indabohsky")
  console.log(" I'm the Pahose")
  console.log(' I represent the best thing in JS yet')
}

//FUNCTION INVOKE/RUN/CALL
//EXAMPLE 1
hero()

//EXAMPLE 2
hero()

//EXAMPLE 3
hero()

let Bob = hero[2]
hero[2] = " I'm a boy"

console.log(hero[2])

//any change to logic in the function authomatically updates in the exmaple console outputs
//the parenthesis is where you declare your parameters but if there's none just specify the parenthesis as empty
//also reference the right variable name(case sensitive)

//

//

//DECLARING AND PARSING PARAMETERS
//Parameters essentailly are variables that one can declare in adddition to a function but there is no obligation to pass it until it is needed
//You can use params to set up one function for different values
//EXAMPLE

function hello(person) {
  console.log('Greet ' + person)
}

hello('Bob')
hello('Joshua')
hello('Mercy')
//this return the initial function with the person parameter and (BOB), (JOSHUA), (MERCY) added to the statement
//the (BOB), (JOSHUA), (MERCY) are the arguments here and can also take in strings, numbers etc
//the above function outputs the paramater and adds the BOB and JOSHUA string to the function

//

//you can also create a CONST and give it a variable name to output same result
//EXAMPLE

const james = 'James'
const josh = 'Josh'
const mike = 'Mike'

// function hello(person) {
//   console.log('Greet ' + person)
// }

// hello('Bob')
// hello('Joshua')
// hello('Mercy')

hello(mike)
//this also outputs same result as above

//

//you can also declare multiple params for one function

function greet(second) {
  console.log('Hello there ' + second)
}

greet('Sammy')
//though this returns output as undefined, because we only declared it and havent given it a value yet

//

//

//RETURN VALUES FROM A FUNCTION

const width = 0
const height = 0

const dimension = [width, height]

console.log(dimension)
//the above statement will add two variables to an array and then return them in a list

//we can also declare a function and a paramenter and parse the parameter when a certain condition is met

//EXAMPLE
//lets say we want a function that convert a value from inches to centimeter

//1inches is 2.54cm

const wallStreet = 100

function convert(value) {
  console.log('The value in cm is: ' + value * 2.54 + 'cm')
}

const Centimeter = convert(100)
const Height = convert(wallStreet) //second example
//the above function multiplies whatever value we have(2.54) and returns the covertion as our new centimeter
//the console result will be "The value in cm is: 254cm"

//

//we can also declare a different variable with value and acces and append it to our existing function
//this is evident in the second example as we also get the same result as the first
