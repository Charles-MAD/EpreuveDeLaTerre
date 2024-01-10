'use strict';
// Extraction des nombres premiers
// let N = +prompt("Entrez un nombre", 2);
nextPrime:
for (let i = 2; i < 20; i++) { // Pour chaque i...
   for (let j = 2; j < i; j++) { // Cherche un diviseur
      if ( i % j == 0) continue nextPrime; // pas un premier, on passe au prochain i
   }
   alert(`${i} est un nombre premier`); // un nombre premier
}