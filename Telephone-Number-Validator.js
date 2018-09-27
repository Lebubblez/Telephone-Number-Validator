function telephoneCheck(str) {
	//
	var regex = /^[1\(]?[-. ]?[\(]?([0-9]{3})[\){2}]?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(str.match(regex))
{
	return true;
}
else {
	return false;
}
}
console.log(telephoneCheck("555-555-5555"));
