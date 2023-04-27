// varibili globali
let quantityKilometers, userAge, priceTicket, agePrice, finalPrice;


// definisci chilometri e eta'
quantityKilometers = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
userAge = parseInt(prompt("Quanti anni hai?"));
// console.log(quantityKilometers, userAge);


// definisci prezzo biglietto per chilometri da percorrere
priceTicket = quantityKilometers * 0.21;
// console.log(priceTicket);


// definisci prezzo biglietto in base all'eta
if (userAge < 18) {
    agePrice = priceTicket * 0.8;
} else if (userAge > 65) {
    agePrice = priceTicket * 0.6;
} else {
    agePrice = priceTicket;
}

finalPrice = agePrice.toFixed(2)
console.log(finalPrice);


// scrivi sull'HTML
document.getElementById('ticket').innerHTML = finalPrice;