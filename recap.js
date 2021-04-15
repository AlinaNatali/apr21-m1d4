let  striver = {
    firstName: "Alina",
    enrolled: true,
    roles: ["photographer", "illustrator", "developer"],
    country: {
        area: "UK",
        planet: "Earth"
    }
}
console.log("Is the striver enrolled?" , striver.enrolled)
console.log(striver["enrolled"])

let x = "firstName"
console.log(striver[x])
striver.x

console.log( "these are my roles",  striver.roles)
console.log( "just the first one",  striver.roles[0])

let arrayOfStrivers = [

{ firstName: "Guled",
    enrolled: true,
    roles: ["student", "apr-21"],
    country: {
        area: "Sweden",
        planet: "Earth"
    }
},


{ firstName: "Lola",
    enrolled: true,
    roles: ["student", "illustrator"],
    country: {
        area: "Italy",
        planet: "Earth"
    }
}
]
console.log(arrayOfStrivers[1])

for(let x=0; x<arrayOfStrivers.length; x++)


console.log(arrayOfStrivers[x].firstName)