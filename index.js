function formLogin() {
    var pass = "bls";
    let userpass = document.forms["login"]["pass"].value;
     if(userpass === pass) {
        // Display will make sure it doesn't still take up space on the page
        document.getElementById("userlogin").style.display = "none";
        document.getElementById("output").style.display = "block";
     } else {
        alert("Wrong User Credentials. Please try again or contact an offical.");
     }
}