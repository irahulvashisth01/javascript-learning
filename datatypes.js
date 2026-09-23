"use strict";

// javascript basics & data types


// "use strict"
// strict mode
// helps catch some common mistakes
// makes javascript follow stricter rules


// alert()

// alert("Welcome to Modern JavaScript")

// alert() is mainly used in browser
// it will not work directly in node.js
// in node.js we normally use console.log()


// console.log()

console.log(3 + 4) // 7
console.log("Hello World") // Hello World

// console.log() is used to print output
// and also useful for debugging


// data types

// javascript data types are mainly divided into:

// 1. primitive
// 2. non-primitive / reference


// primitive data types

// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint


// number

let age = 25

// number can be integer or decimal

let marks = 90
let price = 99.99
let temperature = -5

// javascript uses Number type for normal numbers
// safe integer range is -(2^53 - 1) to (2^53 - 1)

console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991


// string

let name = "Rahul"

// string is used for text

let city = "Palwal"
let message = 'Hello'

// template literal
let greeting = `Hello ${name}`

console.log(greeting) // Hello Rahul

// strings can use:
// "double quotes"
// 'single quotes'
// `backticks`


// boolean

let isLoggedIn = true
let isStudent = true
let isAdmin = false

// boolean has only two values:
// true
// false


// null

let accountState = null

// null means intentional empty value
// we are saying that the value is empty right now

console.log(accountState) // null

// typeof null gives "object"
// this is a javascript historical behavior

console.log(typeof null) // object


// undefined

let country

// variable is declared but no value is assigned

console.log(country) // undefined
console.log(typeof country) // undefined


// symbol

const id1 = Symbol("id")
const id2 = Symbol("id")

// every symbol is unique

console.log(id1 === id2) // false
console.log(typeof id1) // symbol


// bigint

const bigNumber = 123456789012345678901234567890n

// bigint is used for very large integers
// n is added at the end

console.log(bigNumber)
console.log(typeof bigNumber) // bigint


// non-primitive / reference data types

// common examples:
// object
// array
// function
// date
// map
// set


// object

const student = {
    name: "Rahul",
    age: 25
}

console.log(student)


// array

const subjects = ["JavaScript", "DBMS", "OOP"]

console.log(subjects)


// function

function greet() {
    console.log("Hello Rahul")
}

greet()


// date

const today = new Date()

console.log(today)


// typeof

// typeof is used to check the data type

console.log(typeof name)        // string
console.log(typeof age)         // number
console.log(typeof isLoggedIn)  // boolean

console.log(typeof null)        // object
console.log(typeof country)     // undefined

console.log(typeof bigNumber)   // bigint
console.log(typeof id1)         // symbol

console.log(typeof student)     // object
console.log(typeof subjects)    // object
console.log(typeof greet)       // function


// quick notes

// primitive
// number
// string
// boolean
// null
// undefined
// symbol
// bigint


// non-primitive / reference
// object
// array
// function
// date
// map
// set


// important

// typeof null -> "object"
// this is a known javascript quirk

// typeof array -> "object"
// typeof function -> "function"