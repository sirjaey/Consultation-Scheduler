var consultP = null;
var times = null;
var firstName = null;
var lastName = null;
var phoneNo = null;
var email = null;
var address = null;
var checkk  = document.getElementById("checks");
var checkss = document.getElementById("checkss");
function submit(){
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    phoneNo = document.getElementById("phoneNo").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;

    consultP = document.getElementById("consultP").value;

    times = document.querySelector('option[name="time"]:checked').value;
     
    var dates = document.getElementById("appointDate").value;

    var consultants = document.querySelector('option[name="one"]:checked').value;
    
    var comments = document.getElementById("comments").value;

    let cost = 7000

    var finale = document.getElementById("finale");
    finale.textContent = "Dear " + firstName + " " + lastName + ", You have been scheduled to see consultant " + consultants + " on " + dates + " at " + times + ". This counselling session costs " + cost + " Naira."
    
}

function check (){
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    phoneNo = document.getElementById("phoneNo").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    if(firstName !== "" && lastName !== "" && phoneNo !== "" && email !== "" && address !== ""){
        checkss.textContent = "Counsellors are available, You may proceed"
    }
    else{
        checkk.textContent = "Please fill the required fields correctly"
    }
}    