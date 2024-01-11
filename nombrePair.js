// Quelles valeurs affiche la boucle while ci-dessous?
'use strict';
// extraction des nombres pairs dans la boucle

// Utilisons la boucle for pour afficher les nombres pairs de 2 à 10
// Utilisons la boucle for pour afficher les nombres impairs de 1 à 10
let number = 1;
for ( n; n <= 10; n++) {
  if ( number % 2 !== 0 ) {
    console.log( `${number} est un nombre impair`);
  } else {
    console.log( `${number} est un nombre pair` );
  }
}
console.log('Merci pour toutes vos reponses correctes')