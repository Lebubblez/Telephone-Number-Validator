function telephoneCheck(str) {
  // Good luck!
  var por1 = /(\d{1}|\()/g
  var space = /(\s)/g
  var spacedash = /(\s|\-)/g
  var par = /(\))/g
  var dash = /(\-)/g


  if(str.charCodeAt(0) === por1
  && str.charCodeAt(1,5) === space
  && str.charCodeAt(3,7,9) === spacedash
  && str.charcodeAt(4) === par
  && str.charCodeAt((8) === dash)) {
  return true;
}



 else {
  return false;
}

}

console.log(telephoneCheck("555-555-5555"));
