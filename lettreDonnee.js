let smallLetter = prompt("Entrer your letter: ", 'a');

for (smallLetter;  smallLetter <= 'z'; smallLetter = String.fromCharCode(smallLetter.charCodeAt(0) + 1)) {
    
    
    // Affichage de l'alphabet a partir de la lttre donnee
    alert(smallLetter);

}