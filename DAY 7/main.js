// let isAdmin = true;
// let isLoggedIn = true;

// function checkAccess(){
//     if(isAdmin == true && isLoggedIn == true){
//         console.log("Welcome Admin")
//     }
//     else if(isAdmin == false && isLoggedIn == true){
//         console.log("welcome User")
//     }else (isAdmin == false && isLoggedIn == false);{
//         console.log("Access Denied")
//     }
// }

// checkAccess()

// let age = 35;
// let isStudent = true;
// let hasJob = false;

// function checkProfile(){
//     if (age <= 25 && isStudent == true && hasJob == false){
//         console.log("You are a student and eligible for scholarship")
//     } else if (age <= 25 && isStudent == false && hasJob == true){
//         console.log("You are employed")
//     }else if (age <= 25 && isStudent == false && hasJob == false){
//         console.log("you are not a student and you are not employed")
//     }else {
//         console.log("Profile Not Recognized")
//     }
// }

// checkProfile();

// let age = 18;
// let isActive = true; 

// let profile = age < 18 && isActive? 'you are a minor': age >= 18 && isActive? 'Active adult profile': 'inactive adult proile';
// console.log(profile)

// FINDING THE LAST LETTER OF A NAME
// let name = "immanuel";
// // firstName = name[5]
// let lastLetter = name[name.length - 2]
//  console.log(lastLetter)

let obj = { name: "Immanuel", age: 25 };
console.log(obj);                        
console.log("User: " + obj);              
console.log("User: " + JSON.stringify(obj));

