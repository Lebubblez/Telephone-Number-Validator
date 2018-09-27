function telephoneCheck(str) {
  //check to start with 1 or /W (any nonword, number or underscore)
  //make an or (|) statement if it starts with parenthesis, so it must end with parenthesis after 3 digits
  //if no parenthesis, just the 3 digits part of or statment will continue
  var regex = /^(1\s)?(\d{3}|\(\d{3}\))(\s|\-)?(\d{3})(-|\s)?(\d{4})$/;
if(str.match(regex))
{
  return true;
}
else {
  return false;
}
}
console.log(telephoneCheck("1 555)555-5555"));
