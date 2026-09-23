"use strict";

// operations

let value = 3

let negvalue = -value
console.log(negvalue) // -3


console.log(2 + 2) // 4
console.log(2 - 2) // 0
console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 2) // 0
console.log(2 ** 2) // 4


// + operator with string

let str1 = "1"
let str2 = "2"

let str3 = str1 + str2

console.log(str3) // "12"

console.log("1" + "2") // "12"


// string + number

console.log("1" + 2) // "12"
console.log(1 + "2") // "12"


// important

console.log(1 + 2 + "2") // "32"
console.log("1" + 2 + 2) // "122"

// JS works from left to right


// assignment operators

let x = 10

x += 5
console.log(x) // 15

x -= 5
console.log(x) // 10

x *= 2
console.log(x) // 20

x /= 2
console.log(x) // 10

x %= 3
console.log(x) // 1


// comparison

console.log(2 > 1) // true
console.log(2 < 1) // false
console.log(2 >= 2) // true
console.log(2 <= 1) // false

console.log(2 == "2") // true
console.log(2 === "2") // false

console.log(2 != "2") // false
console.log(2 !== "2") // true


// logical operators

console.log(true && true) // true
console.log(true && false) // false

console.log(true || false) // true
console.log(false || false) // false

console.log(!true) // false
console.log(!false) // true


// increment and decrement

let count = 5

count++
console.log(count) // 6

count--
console.log(count) // 5


// prefix and postfix

let a = 5

console.log(a++) // 5
console.log(a)   // 6

console.log(++a) // 7


// ternary operator

let age = 18

let result = age >= 18 ? "adult" : "minor"

console.log(result) // adult


// nullish coalescing

let username = null

console.log(username ?? "Guest") // Guest

let name = "Rahul"

console.log(name ?? "Guest") // Rahul


// typeof

console.log(typeof "Rahul") // string
console.log(typeof 10)      // number
console.log(typeof true)    // boolean
console.log(typeof null)    // object
console.log(typeof undefined) // undefined


// type conversion with operations

console.log("5" + 2) // "52"
console.log("5" - 2) // 3
console.log("5" * 2) // 10
console.log("5" / 2) // 2.5


// operator precedence

console.log(2 + 3 * 4) // 14

console.log((2 + 3) * 4) // 20