var removeNonAlphanumeric = function(word){
  return word.replace(/\W/g, '');
}

var countLines = function(splitWord) {
  var num = Math.sqrt(splitWord.length);
  return Math.floor(num);
}
