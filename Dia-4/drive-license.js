// gonna ask his/her name, age and if has drive licence

let nameUsu 
let ageUsu
let driveLicense = false
let carUsu = false

nameUsu = prompt("What's your name ?")
ageUsu = parseInt( prompt("How older are you?"))
let optDriveLicense = prompt("Do you have an a drive license? (yes/no)")
if (optDriveLicense === "yes") {
    driveLicense = true
}
let optCarUsu = prompt("Do you have a car? (yes/no)")
if (optCarUsu === "yes") {
    carUsu = true
}

if  (ageUsu < 18 && !driveLicense) {
    console.log(nameUsu + ", you can't drive")
} else if (ageUsu >=18 && driveLicense && !carUsu) {
    console.log(nameUsu + ", you can drive but you don't have a car")
} else {
    console.log(nameUsu + ", you gonna be the driver")
}