// reset js
'use strict'

console.log("Ciao mondo")


const btnGenerate = document.getElementById ("generate");
const btnReset = document.getElementById ("reset");

btnGenerate.addEventListener('click', function(){
    console.log("click button generate");
    let ChilometriDaPercorrere = Number(document.getElementById("ChilometriDaPercorrere").value)
    const StartingPrice = ChilometriDaPercorrere * 0.21;
    let sconto
    let userAge = Number(document.getElementById("UserAge").value)
    console.log(userAge)
    let nome = document.getElementById("name").value
    let distanza = document.getElementById("ChilometriDaPercorrere").value
    
    if(userAge < 18) {
    
        sconto = StartingPrice * (20 / 100);
        console.log ("Applicato lo sconto del 20%, il prezzo del biglietto è:");
    
    
    }else if(userAge > 65) {
        
        sconto = StartingPrice * (40 / 100);
        console.log ("Applicato lo sconto del 40%, il prezzo del biglietto è:");
    
    }else {
        sconto = 0;
        console.log ("Non è stato applicato alcuno sconto, il prezzo del biglietto è:");
    }

    let ticketprice = document.getElementById("ticketprice");
    ticketprice.append (`  ${StartingPrice}`);

    let ticketdiscount = document.getElementById("ticketdiscount");
    ticketdiscount.append (`  ${sconto}`);

    let ticketname = document.getElementById("ticketname");
    ticketname.append (`  ${nome}`);

    let ticketdistance = document.getElementById("ticketdistance");
    ticketdistance.append (`  ${distanza}`);

    let ticketage = document.getElementById("ticketage");
    ticketage.append (`  ${userAge}`);
    
});

