/*
Convert HTML Entities 
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.

https://www.freecodecamp.com/challenges/convert-html-entities
*/

function convertHTML(str) {
  var replacements = {
    "&"  : "&amp;",
    "<"  : "&lt;",
    ">"  : "&gt;",
    "\"" : "&quot;",
    "'"  : "&apos;"
  };

//   v1: searches string once per replacement character  
//   var regex, needle;  
//   for (needle in replacements){
//     regex = new RegExp(needle, 'g');
//     str = str.replace(regex, replacements[needle]);
//   }
  

  // v2: searches string exactly once
  var needles = Object.keys(replacements).join('');
  var regex = new RegExp('['+needles+']','g');
  str = str.replace(regex, n => replacements[n]);
  
  return str;  
}

convertHTML("Dolce & Gabbana");

