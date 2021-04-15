// EX1 Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
const calculateArea = function (l1, l2) {
    let area = l1 * l2
    return area
}
console.log(calculateArea(4, 8))

const calculateVolume = function (a, b, c) {
    let valum = a * b * c
    return valum
}
console.log(calculateVolume(1, 3, 2))

// EX2 Write a function "crazySum" which receives two integers. It should return the sum of those two values, 
// but if the two values are the same then it should return their sum multiplied by 3.
const crazySum = function (n1, n2) {
    let sum = n1 + n2
    // we need to check if they are the same
    if (n1 === n2) {
        // if they are the same, add them up and return the total * 3
        return sum * 3
    } else {
        // simply return their sum
        return sum
    }
}
console.log("2,3 -> " + crazySum(2, 3))
console.log("2,2 -> " + crazySum(2, 2))

// EX3 Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
// It should return triple their absolute difference if the given number is greater than 19.
const crazyDiff = function (numberToSubtract) {
    let sub = Math.abs(numberToSubtract - 19)
    if (numberToSubtract > 19) {
        return sub * 3
    } else {
        return sub
    }
}
console.log("19 -> " + crazyDiff(19))
console.log("22 -> " + crazyDiff(22))
console.log("13 -> " + crazyDiff(13))


// EX4  Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 
// (included) or if it's equal to 400.
const boundary = function (n) {
    if(n >= 20 && n <=100) {
        return true
    } else if (n === 400)
    {
        return true
    } else{
        return false
    }

 }

// EX5 Write a function "strivify" which accepts a string.
// It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", 
// then it should just return the original string.
const strivify = function (inputString){
 if(inputString.startsWith("Strive")) {
     return inputString
 } else{
     return "Strive" + inputString
 }

}

// EX6 Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or 
// a multiple of 7.
// HINT: Module Operator

function check3and7(n) {
    if( n % 3 === 0) {
        return true
    } else if ( n % 7 === 0) {
        return true
    } else {
        return false
    }
}

console.log('------ check3and7 -------')
console.log('3->' + check3and7(3))
console.log('7->' + check3and7(7))
console.log('9->' + check3and7(9))
console.log('2->' + check3and7(2))
console.log('10->' + check3and7(10))

// EX7 Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS)

function reverseString(inputString) {

    let newString = ""

    for ( let i = inputString.length ; i > 0; i--) {
        newString = newString + inputString[i-1]
    }

    return newString
}

console.log('------ reverseString -------')
console.log('Alina Kivis -> ' + reverseString('Alina Kivis'))

// EX8  Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as 
// a parameter

function upperFirst(inputString) {
    return inputString[0].toUpperCase() + inputString.slice(1,inputString.length)
}


console.log('------ upperFirst -------')
console.log('kjhlkjhljkh -> ' + upperFirst('kjhlkjhljkh'))

// EX9 Write a function "cutString" to create a new string without the first and last character of a given string.
function cutString(inputString) {
    return inputString.slice(1, inputString.length-1)
}

console.log('------ cutString -------')
console.log('abcdefghij -> ' + cutString('abcdefghij'))
// EX10  Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers 
// between 0 and 10

function giveMeRandom(n) {
    let randomArray = []
    for( let i = 0 ; i < n ; ++i) {
        randomArray.push(Math.floor(Math.random() * 11))
    }
    return randomArray
}

console.log('------ giveMeRandom -------')
console.log('5 -> ' + giveMeRandom(5))

