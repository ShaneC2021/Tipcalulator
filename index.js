let form = document.getElementById("mealForm");

// prevent form submitting
form.addEventListener("submit", function (event) {      
    event.preventDefault()
});



function calculate () { 
  let total = document.getElementById("total");
  
  // create meal object
  let meal = { price: document.getElementById("meal").value,
    tipPercentage: document.querySelector("#tipPercentage option:checked").value ,
    tip: document.getElementById("tipFreely").value,

    // calculates tip amount and cost of meal
    total: function() {
            let cost = 0;
            let tipAmount = 0;

           let tip = (parseFloat(this.tipPercentage)/100) * parseFloat(this.price);
           tipAmount = tip.toFixed(2); 
            
            if(this.tip==="") {  //   if user does not use tip freely option calculate cost using percentage tip
              cost = parseFloat(this.price) + parseFloat(tipAmount);
              document.getElementById("tipAmount").value = (tipAmount);
              return cost.toFixed(2);
            }
            else {
              cost = parseFloat(this.price) + parseFloat(this.tip);  // else use tip freely value to calculate cost
              document.getElementById("tipAmount").value = (this.tip);
              return cost.toFixed(2);
            }
            
        
        }
    };
  total.value = meal.total();
 }        