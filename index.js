function formLogin() {
    var pass = "bls";
    let userpass = document.forms["login"]["pass"].value;
     if(userpass === pass) {
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