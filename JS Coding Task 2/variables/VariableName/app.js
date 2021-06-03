// Declare a variable using let inside a function. Add that same variable in another function and see what happens.



function checkPrice(){

    let x = 50;

}

checkPrice();



function checkCost(){

    let x = 50;
}

checkCost();

// Now declare a variable using var in a block and try reassigning the value to that variable in another block and see if it throws an error or not.

function  codeNumber(){
     var  y1 = 1234;
}

function pinNumber(){

    var y1 = 9291;

}

// Create a global variable and try using that variable in another function and see if you're able to access that variable.
 var z = "proved"

 function valueTpye(){

    console.log(z); // result is z ="proved" and typeof z = "string". there is no any error.
 }