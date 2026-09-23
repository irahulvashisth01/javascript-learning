// type conversion

// Type conversion means changing one data type into another

// common conversion functions:
// Number()
// String()
// Boolean()


// string -> number

let score = "null"

console.log(typeof score) // string

let valueInNumber = Number(score)

console.log(typeof valueInNumber) // number
console.log(valueInNumber) // NaN


// "null" and null are different

console.log(Number("null")) // NaN
console.log(Number(null))   // 0


// more examples

console.log(Number("33"))     // 33
console.log(Number("33abc"))  // NaN
console.log(Number(""))       // 0
console.log(Number(" "))      // 0


// boolean -> number

console.log(Number(true))  // 1
console.log(Number(false)) // 0


// boolean conversion

let isLoggedIn = "RAHUL"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn) // true


// number -> boolean

console.log(Boolean(1))    // true
console.log(Boolean(0))    // false

console.log(Boolean(100))  // true
console.log(Boolean(-10))  // true


// string -> boolean

console.log(Boolean(""))      // false
console.log(Boolean(" "))     // true
console.log(Boolean("Rahul")) // true


// null / undefined -> boolean

console.log(Boolean(null))      // false
console.log(Boolean(undefined)) // false


// falsy values

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

console.log(Boolean(false))     // false
console.log(Boolean(0))         // false
console.log(Boolean(""))        // false
console.log(Boolean(null))      // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN))       // false


// truthy values

console.log(Boolean("Rahul"))  // true
console.log(Boolean("0"))      // true
console.log(Boolean("false"))  // true
console.log(Boolean(1))        // true
console.log(Boolean(-1))       // true
console.log(Boolean([]))       // true
console.log(Boolean({}))       // true


// important

// "0" -> true
// "false" -> true
// because both are non-empty strings

// 0 -> false
// false -> false
// "" -> false