'use strict';

// String to store lowercase and uppercase letters
// let alphabetComplet = ''; 


// for (let smallLetter = 'a'; smallLetter <= 'z'; smallLetter = String.fromCharCode(smallLetter.charCodeAt(0) + 1)) {
//     // Shows lowercase letters from 'a' to 'z'
//     alphabetComplet += smallLetter;
// }

// // Add a space between the two sets of letters
// alphabetComplet += ' ';

// for (let capitalLetter = 'A'; capitalLetter <= 'Z'; capitalLetter = String.fromCharCode(capitalLetter.charCodeAt(0) + 1)) {
//     // 
//     //Show uppercase letters from 'a newline 'A' to 'Z'
//     alphabetComplet += capitalLetter;
// }

// // Show the full channel
// console.log(alphabetComplet); 

for (let smallLetter = 'a'; smallLetter <= 'z'; smallLetter = String.fromCharCode(smallLetter.charCodeAt(0) + 1)) {
    
    // Showing lowercase letters from 'a' to 'z'.
    console.log(smallLetter);
}

console.log("\n");

for (let capitalLetter = 'A'; capitalLetter <= 'Z'; capitalLetter = String.fromCharCode(capitalLetter.charCodeAt(0) + 1)) {
    
    // Displaying uppercase letters from 'A' to 'Z'
    console.log(capitalLetter);
}