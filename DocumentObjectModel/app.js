
// Access h1 and input element

//This message has been sent on the given number

function sendMessage(){

    let  inputElement =document.querySelector("input");
    let inputValue = inputElement.value;
    let headingElement =document.querySelector("h1> span").innerHTML=inputValue;
    
    console.log(headingElement);
    alert("This message has been sent on the given number")
}