// Assignment

// 0 - what is string ?
// Ans - It is a type a data which is always written within quotes (either single o double) or in other words,any data written within quotes, is called String.


// 1 - how to find length of a string in js ?
// Ans -
let strng = "I like the webdev class";
let lngth = strng.length
document.write(lngth)
document.write("<br>")



// 2 - how to check a variable is empty in js ?
// Ans -
var name = "Afzal";
var age = 44
var DOB = 11121978
var student =
apple = 300

lngth1 = name.length

document.write(lngth1)
document.write("<br>")
document.write(age.toString().length)
document.write("<br>")
document.write(DOB.toString().length)
document.write("<br>")

if (student.toString().length === 0) {

    console.log("This is an empty varibale")
}
    
    else {

    console.log("This is NOT an empty varibale")    

    }

    document.write("<br>")

if (apple.toString().length === 0) {

    console.log("This is an empty varibale")
    }
    
    else {
    
    console.log("This is NOT an empty varibale")    
    
        }


        // 3 - study on OR operator in js (how does it work)


// 4 - take two variables name and email. If any of them is empty, the output will be failed, otherwiseoutput will  be success.

name = "Unknown Name"
email = ""

if (name.length === 0) {

console.log("failed")
}

else {

console.log("success")
}

if (email.length === 0) {

    console.log("failed")
    }
    
    else {
    
    console.log("success")
    }
