// ============================================================
//              JAVASCRIPT VARIABLES - NOTES
// ============================================================

// 1. const
// ------------------------------------------------------------
// `const` is used when the variable should NOT be reassigned.
// It is BLOCK-SCOPED.
// A const variable MUST be initialized when declared.

const accountId = "121212";

// ❌ Not Allowed:
// accountId = "32323";
// Error: Assignment to a constant variable.


// 2. let
// ------------------------------------------------------------
// `let` is used when the variable value may change.
// It is BLOCK-SCOPED.
// A `let` variable can be declared without initialization.

let accountEmail = "Rahul@gmail.com";

// ✅ Allowed: `let` variables can be reassigned.
accountEmail = "Rahulsharma@gmail.com";


// 3. var
// ------------------------------------------------------------
// `var` is the older way of declaring variables.
// It is FUNCTION-SCOPED, not block-scoped.
// It can be reassigned and redeclared.
//
// ⚠️ Generally, avoid using `var` in modern JavaScript
// because its function scope can cause unexpected behavior
// in larger programs.

var accountPassword = "Rahul@123";

// ✅ Allowed: `var` variables can be reassigned.
accountPassword = "Rahul@1234";


// 4. Variable without let/const/var
// ------------------------------------------------------------
// ⚠️ NEVER declare variables this way.
//
// accountCity = "Palwal";
//
// In non-strict mode, JavaScript may create a global variable.
// In strict mode, it causes a ReferenceError.
//
// ✅ Always use `let`, `const`, or `var`.

let accountCity = "Palwal";

// ✅ Allowed because `let` can be reassigned.
accountCity = "Delhi";

accountCity = "Mumbai";


// 5. Declaring a variable without assigning a value
// ------------------------------------------------------------
// A `let` variable can be declared without a value.
// Its initial value will be `undefined`.

let accountState;


// ============================================================
//                    QUICK SUMMARY
// ============================================================

// const → Block scoped + Cannot be reassigned
// let   → Block scoped + Can be reassigned
// var   → Function scoped + Can be reassigned/redeclared
//
// Recommended:
// ✅ Use const by default
// ✅ Use let when the value needs to change
// ⚠️ Avoid var in modern JavaScript


// ============================================================
//                       OUTPUT
// ============================================================

// Display a single value
console.log(accountId);


// Display multiple variables in table format
console.table({
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
});