// ============================================================
//              JAVASCRIPT TYPE CONVERSION
// ============================================================

// Type Conversion means converting one data type into another.
//
// Common conversion functions:
//
// Number()
// String()
// Boolean()
//


/* ============================================================
   1. STRING → NUMBER
   ============================================================ */

let score = "null";

console.log(typeof score);        // "string"
console.log(typeof (score));      // "string"

// Convert String into Number
let valueInNumber = Number(score);

console.log(typeof valueInNumber); // "number"
console.log(valueInNumber);        // NaN


// IMPORTANT:
// "null"  → NaN
// null    → 0
//
// They are NOT the same.
//
// Example:

console.log(Number("null")); // NaN
console.log(Number(null));   // 0


// More String → Number examples:

console.log(Number("33"));      // 33
console.log(Number("33abc"));   // NaN
console.log(Number(""));        // 0
console.log(Number(" "));       // 0


// ============================================================
//              BOOLEAN → NUMBER
// ============================================================

console.log(Number(true));      // 1
console.log(Number(false));     // 0


// ============================================================
//              BOOLEAN CONVERSION
// ============================================================

// Boolean() converts a value into true or false.

let isLoggedIn = "RAHUL";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // true


// ============================================================
//              COMMON BOOLEAN CONVERSIONS
// ============================================================

// Number → Boolean

console.log(Boolean(1));        // true
console.log(Boolean(0));        // false

console.log(Boolean(100));      // true
console.log(Boolean(-10));      // true


// String → Boolean

console.log(Boolean(""));       // false
console.log(Boolean(" "));      // true
console.log(Boolean("Rahul"));  // true


// null / undefined → Boolean

console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false


// ============================================================
//                    FALSY VALUES
// ============================================================

// The following values are FALSY in JavaScript:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
//
// Everything else is generally TRUTHY.
//
// Examples:

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false


// ============================================================
//                    TRUTHY VALUES
// ============================================================

console.log(Boolean("Rahul"));   // true
console.log(Boolean("0"));       // true
console.log(Boolean("false"));   // true
console.log(Boolean(1));         // true
console.log(Boolean(-1));        // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true