// variables

// const
// const is used when we don't want to change the value later
// const is block scoped
// const must be given a value when declared

const accountId = "121212"

// accountId = "32323"
// not allowed because const value cannot be reassigned


// let
// let is used when the value can be changed
// let is block scoped

let accountEmail = "Rahul@gmail.com"

accountEmail = "Rahulsharma@gmail.com"
// allowed because let can be reassigned


// var
// var is function scoped
// var can be reassigned and redeclared
// generally avoid var in modern javascript

var accountPassword = "Rahul@123"

accountPassword = "Rahul@1234"
// allowed


// variable without let, const or var

// accountCity = "Palwal"

// don't do this
// in strict mode it will give ReferenceError

let accountCity = "Palwal"

accountCity = "Delhi"
accountCity = "Mumbai"


// variable declared but value not given
// default value is undefined

let accountState


// quick notes

// const -> block scope, cannot be reassigned
// let   -> block scope, can be reassigned
// var   -> function scope, can be reassigned/redeclared


// check values

console.log(accountId)

console.table({
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
})