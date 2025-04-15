personalInfo = {
    name: "ella",
    age: 13,
    class: "web2",
    hobbies: ["reading", "gaming", "sports"]
}

contactInfo = {
    name: "ola",
    age: 14,
    class: "web3"
}

let userProfile = Object.assign(personalInfo, contactInfo)

console.log(userProfile);


