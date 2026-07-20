// Date du prochain événement
const dateEvenement = new Date("July 26, 2026 08:30:00").getTime();

function mettreAJourCompteur() {

    const maintenant = new Date().getTime();

    const difference = dateEvenement - maintenant;

    const jours = Math.floor(difference / (1000 * 60 * 60 * 24));

    const heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const secondes = Math.floor((difference % (1000 * 60)) / 1000);

document.getElementById("jours").innerHTML = jours;
document.getElementById("heures").innerHTML = heures;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("secondes").innerHTML = secondes;
    if (difference < 0) {

    document.getElementById("jours").innerHTML = "0";
    document.getElementById("heures").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("secondes").innerHTML = "0";

}

}

mettreAJourCompteur();

setInterval(mettreAJourCompteur, 1000);