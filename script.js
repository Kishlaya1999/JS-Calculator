let num = document.querySelectorAll(".btn-number");       //selecting all the element having class btn-number
let clear = document.querySelector(".clear");             //selecting the button(element) having clear class
let inputBox = document.getElementById("input");          //selecting the input box
let allClear = document.querySelector(".all-clear")       //selecting the all-clear button
let operators= document.querySelectorAll(".btn-operators");
let equals=document.querySelector(".btn-equals");
// console.log(num);                                      //returns the nodeList having all  the tags having btn-number
// console.log(clear);

num.forEach(function (item) {                            //applying anything for all the elements of the nodeList 
     item.addEventListener("click", function () {        //applying eventListner to all the elements
          // inputBox=document.querySelector(".divide");
          // console.log(inputBox);                         // checking that inputBox is accessible inside the block or not; it is accesinble which means a variable decleraded with let is accisable inside the fuction but changes made in it will not reflect outsid function   
          inputBox.innerHTML += this.innerHTML;                 //taking the contents of the clicked button and inserting it into input box
          //TODO: decimal is not working. Error showing is: script.js:11 The specified value "." cannot be parsed, or is out of range.
          // #Resolve it
          // console.log(this); //to check what is this here
          // here this refers to the element wich is clicked  
     })
});

// console.log(inputBox);

allClear.addEventListener("click", function () {
     let inputBox = document.getElementById("input");
     inputBox.innerHTML = "";
});

clear.addEventListener("click",function(){
     let till=inputBox.innerHTML.length-1; 
     inputBox.innerHTML=inputBox.innerHTML.slice(0,till);
});

// console.log(operators)

operators.forEach(function(btnOperator){
     btnOperator.addEventListener("click",function(){
          inputBox.innerHTML+=this.innerHTML;
     })
});

equals.addEventListener("click",function(){
     let answers=eval(inputBox.innerHTML);
     inputBox.innerHTML=answers;
});