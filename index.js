function formLogin() {
    var pass = "bls";
    var users = ["blsadmin", "mattvd", "eviep", "kennyc"];
    let userpass = document.forms["login"]["pass"].value;
    let username = document.forms["login"]["username"].value;
     if(userpass === pass && users.includes(username)) {
        // Display will make sure it doesn't still take up space on the page
        document.getElementById("initalStage").style.display = "none";
        document.getElementById("maincontent").style.display = "block";
     } else {
        alert("Wrong User Credentials. Please try again or contact an official.");
     }
}

window.addEventListener("load", function() {
   const form = document.getElementById('numberform');
   form.addEventListener("submit", function(e) {
       e.preventDefault();
       const data = new FormData(form);
       const action = e.target.action;
       fetch(action, {
       method: 'POST',
       body: data,
       })
       .then(() => {
       alert("Success! Thank you for recording numbers.");
       document.getElementById("numberform").reset();
       })
   });
   });

document.onkeydown = function(e) {
   if(event.keyCode == 123) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
   }
}

// Trying to test popup for reminders
// function myFunction() {
//    alert("hello!");
// }

// setInterval(function() {
//    myFunction()
// }, 1800000)