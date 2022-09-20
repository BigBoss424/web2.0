const initialCrypto = 1;

var amountInvested = document.getElementById("amountInvested");
var cryptoCurrentPrice = document.getElementById("cryptoCurrentPrice");
var submitButton = document.querySelector(".submitButton");


function calculateHowMany(x,y,z){
    x = initialCrypto;
    y = amountInvested;
    z = cryptoCurrentPrice;
    result = x*z/y;
// Create a query against the collection.
// let query = ref.where(/*field_name */, /* == */, /* value */);
    let query = ref.where(".submitButton" == btns);
    btns.forEach(function (query){
       query.addEventListener("click", function(e) {
         const styles = e.target.classList;
         if(styles.contains("submit"))
         {
            return result;
         }
       })
    });

    console.log(query);
    window.alert(query);
    
}