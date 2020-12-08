"use Strict";
//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];
let form = document.createElement("form");
let input = document.createElement("input");

//Function that calls all other functions in order
//--Don't modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

function initLoginForm() {
  //Add code here to:
  //create and add form element to the Dom.
   document.body.appendChild(form);
}

function initLabel() {
  //Add code here to:
  //create label element and set the lable to "username" (TIP: use .textContent).
  //Add it to the form element. (TIP: use .appendChild).
  let label = document.createElement("label");
  label.textContent = "Username";
  form.appendChild(label);
}

function initInput() {
  //Add code here to:
  //create input element and set it to be requried (TIP: use .required = true).
  //Add it to the form element. (TIP: use .appendChild).
  input.required = true;
  form.appendChild(input);
  
  
}

function initButton() {
  //create button element and set the text to "login" (TIP: use .textContent)
  ////Add it to the form element. (TIP: use .appendChild).
  let btn = document.createElement("button");
  btn.textContent = "Login";
  form.appendChild(btn);
  //Add click eventListener for button and call validateLoginInfo function inside it.
  //if validateLoginInfo is true alert user with "Welcome" text.
  //if validateLoginInfo is false add border style to the input element: "3px solid red". (TIP: use .style.border).
  btn.addEventListener("click",function (e){
    e.preventDefault(); 
    if (validateLoginInfo() == true ){
           alert("Welcome!");
       } else if (validateLoginInfo() == false){
          
        input.style.border = "3px solid red";
       }
           
    
  });
  
 
  
}


function validateLoginInfo() {
  //Get the input using form input element (TIP: use .value)
  //if the username is in the usernames array return true if not return false.
   
  let formInput = input.value;


  for  ( var i = 0; i < usernames.length; i++){
      if (formInput==usernames[i] ){
          return true;
      } 
  } if (formInput!==usernames){
      return false;
  }

 
}

//Write code here to call the init function only after the dom has been loaded (TIP: check "DOMContentLoaded" event)

window.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM Loaded");
    init();
});