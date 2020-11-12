function truncateString(str, num) {
  var string = "";
  var finalString;
  string += str.substr(0,num);
  
  if (str.length > num) {
    finalString = string + "...";
  }
  else if(num >= str.length){
    finalString = string;
  }
  console.log(finalString);
  return finalString;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);
