function myFunction() {
  document.getElementById("registration").reset();
}

var email = document.registration.email;
var number = document.registration.number;

function ValidateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    alert("Successfully Submitted");
  } else {
    alert("You have entered an invalid email address!");
    email.focus();
    return false;
  }
}
function validatePhone(number) {
  if (number.value.length == 10) return true;
  else {
    alert("Invalid Phone No");
  }
}
function formValidation() {
  if (ValidateEmail(email)) {
    if (validatePhone(number)) {
      alert("Registered Succesfully");
    }
  }
}
