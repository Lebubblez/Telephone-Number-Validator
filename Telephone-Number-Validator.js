function telephoneCheck(str) {
  //
  var regex = /^[\(1]? [-. ]? ([0-9]{3}) \)? [-. ]? ([0-9]{3}) [-. ]? ([0-9]{4})$/;
if((str.value.match(regex))
{
  return true;
}
else {
  alert("Type a Real Phone Number");
  return false;
}
console.log(telephoneCheck("555-555-5555"));
