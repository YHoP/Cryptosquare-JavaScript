var removeNonAlphanumeric = function(word){
  return word.replace(/\W/g, '');
}

var countLines = function(splitWord) {
  var num = Math.sqrt(splitWord.length);
  return Math.floor(num);
}

var perfectSquare = function(lines){

  if (lines.length % countLines(lines) === 0){
    return true;
  }
  return false;
}
