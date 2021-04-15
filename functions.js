// functions

// function declaration
const bark = function(){
    console.log("a dog barks!")
    console.log("a dog barks all the time!")
}

bark()
// anotherBark()

// function anotherBark(){
    // console.log("another bark!")
// }
let variable = "stefano"
console.log(variable)

// 
const sum5to3 = function(){
    let result = 5 + 3
    return result
}

console.log(sum5to3())
console.log(typeof sum5to3())
// let eight = sum5to3()

// const greetSarah = function (){
    // return "Hello Sarah!"
// }

// const x = greetSarah()
// console.log(x)

console.log(2+sum5to3())


const sumAnyNumbers = function(n1, n2){
let result = n1 + n2
return result
}

let strive1 = sumAnyNumbers(6,7) //13
let strive2 = sumAnyNumbers(1,4) //5

console.log(strive1 + strive2) //18 

const greetUserWithParameter = function(striver){
    return `Hello ${striver}`

}
let greeting = greetUserWithParameter("Vardan")
console.log(greeting)

const saveJustTheFirstLetter = function(name){
    let JustTheFirstLetter = name.slice(0,1)
    return JustTheFirstLetter
}
console.log(saveJustTheFirstLetter("janusz"))

const barkOrBork = function(size){
    if(size === "little") {
        return "bark"
    } else {
        return "bork"
    }
}
console.log(barkOrBork("little"))
console.log(barkOrBork("big"))

const calculatearea = function(L1, L2){
    let area = L1 * L2
return area
}

// const crazySum = function(n1, n2){
//     if(){
// //  
//     } else {

//     }
// }

// const crazyDiff = function(numberToSubtract){

// }