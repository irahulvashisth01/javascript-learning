// ============================================================
//              JAVASCRIPT BASICS & DATA TYPES
// ============================================================

// "use strict"
// Enables Strict Mode.
// It makes JavaScript apply stricter rules and helps catch
// common coding mistakes.

"use strict";


// ------------------------------------------------------------
// alert()
// ------------------------------------------------------------

// alert("Welcome to Modern JavaScript");

// `alert()` is a browser feature.
// It does NOT work directly in Node.js because Node.js
// does not provide the browser's window/alert API.
//
// In Node.js, use console.log() for output.


// ------------------------------------------------------------
// console.log()
// ------------------------------------------------------------

console.log(3 + 4);          // 7
console.log("Hello World");  // Hello World

// console.log() is commonly used to display output in Node.js
// and to debug JavaScript programs.


// ============================================================
//                 JAVASCRIPT DATA TYPES
// ============================================================

// JavaScript has two broad categories:
//
// 1. Primitive Data Types
// 2. Non-Primitive / Reference Data Types


// ============================================================
//                 1. PRIMITIVE DATA TYPES
// ============================================================

// There are 7 primitive data types:
//
// 1. Number
// 2. String
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt


// ------------------------------------------------------------
// 1. Number
// ------------------------------------------------------------

let age = 25;

// Number is used for both integer and floating-point values.
//
// Examples:
// 10
// -5
// 3.14
// 1000
//
// JavaScript Number uses 64-bit floating-point format.
//
// Safe integer range:
// -(2^53 - 1) to (2^53 - 1)
//
// Maximum safe integer:
// Number.MAX_SAFE_INTEGER
// 9007199254740991


// ------------------------------------------------------------
// 2. String
// ------------------------------------------------------------

let name = "Rahul";

// String represents text.
//
// Strings can be written using:
// "Double quotes"
// 'Single quotes'
// `Template literals`

let city = "Palwal";
let message = 'Hello';
let greeting = `Hello ${name}`;

//
// ⚠️ String does NOT have a "2^53 - 1" value range.
// Strings can contain sequences of characters and their
// maximum length depends on the JavaScript implementation.


// ------------------------------------------------------------
// 3. Boolean
// ------------------------------------------------------------

let isLoggedIn = true;

// Boolean has only two values:
//
// true
// false

let isStudent = true;
let isAdmin = false;


// ------------------------------------------------------------
// 4. null
// ------------------------------------------------------------

// null represents the intentional absence of a value.

let accountState = null;

// Example:
// We know that the account state currently has no value.
//
// ⚠️ Special JavaScript behavior:
//
// typeof null
// returns "object"
//
// This is a historical JavaScript bug/quirk.


console.log(typeof null);    // "object"


// ------------------------------------------------------------
// 5. undefined
// ------------------------------------------------------------

// undefined means a variable has been declared,
// but no value has been assigned to it.

let country;

console.log(country);        // undefined
console.log(typeof country); // "undefined"


// ------------------------------------------------------------
// 6. Symbol
// ------------------------------------------------------------

// Symbol creates a unique primitive value.
//
// Every Symbol is unique, even if they have the same description.

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);    // false


// ------------------------------------------------------------
// 7. BigInt
// ------------------------------------------------------------

// BigInt is used for integers larger than the safe range
// of the Number data type.
//
// Add `n` at the end of an integer to create a BigInt.

const bigNumber = 123456789012345678901234567890n;

console.log(typeof bigNumber); // "bigint"

// BigInt is NOT limited to 2^63 - 1.
// It can represent arbitrarily large integers,
// subject to implementation/memory limits.


// ============================================================
//          2. NON-PRIMITIVE / REFERENCE DATA TYPES
// ============================================================

// Common reference types include:
//
// Object
// Array
// Function
// Date
// Map
// Set
// etc.


// Object
const student = {
    name: "Rahul",
    age: 25
};


// Array
const subjects = ["JavaScript", "DBMS", "OOP"];


// Function
function greet() {
    console.log("Hello Rahul");
}


// Date
const today = new Date();


// ============================================================
//                     typeof OPERATOR
// ============================================================

// `typeof` is used to determine the type of a value.

console.log(typeof name);       // "string"
console.log(typeof age);        // "number"
console.log(typeof isLoggedIn); // "boolean"

console.log(typeof null);       // "object" ⚠️ historical quirk
console.log(typeof country);    // "undefined"

console.log(typeof bigNumber);  // "bigint"
console.log(typeof id1);        // "symbol"
console.log(typeof student);    // "object"
console.log(typeof subjects);   // "object"
console.log(typeof greet);      // "function"


// ============================================================
//                       QUICK SUMMARY
// ============================================================
//
// Primitive:
//
// Number     → 25, 3.14
// String     → "Rahul"
// Boolean    → true / false
// null       → intentional empty value
// undefined  → value not assigned
// Symbol     → unique identifier
// BigInt     → very large integers
//
// Reference / Non-Primitive:
//
// Object
// Array
// Function
// Date
// Map
// Set
// etc.
//
// ============================================================