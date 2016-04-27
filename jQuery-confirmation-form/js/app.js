//Problem:  Hints are shown even when form is valid.
//Solution: Hide and show hints at the appropriate times.

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints.
$("form span").hide();
//When event happens on password input.

function isPasswordValid(){
  return $password.val().length > 8;
}

function arePasswordsMatching(){
  return $password.val() === $confirmPassword.val();
}

function canSubmit(){
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
  //Find out if password is valid.
  if(isPasswordValid()){
    //Hide hint if valid.
    $password.next().hide();
  } else {
  //Show hint if invalid.
    $password.next().show();
  }
}

function confirmPasswordEvent(){
  //Find out if password and confirmation match.
  if(arePasswordsMatching()){
    //Hide hint if matched.
    $confirmPassword.next().hide();
  } else {
    //Else show hint.
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent(){
  $('#submit').prop("disabled", !canSubmit());
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);


//When event happens on password confirmation.

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();



