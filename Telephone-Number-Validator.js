function telephoneCheck(str) {
  // Good luck!
  var por1 = /(\d|\))/g
  var space = /(\s)/g
  var spacedash = /(\s|\-)/g
  var par = /(\))/g
  var dash = /(\-)/g


  if(str.charCodeAt(0) === por1
  && str.charCode(1,5) === space
  && str.charCode(3,7,9) === spacedash
  && str.charcode(4) === par
  && str.charCode(8) === dash)) {
  true;
}

 else {
  false;
}

}

console.log(telephoneCheck("555-555-5555"));
