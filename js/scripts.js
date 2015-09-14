var removeNonAlphanumeric = function(word){
  return word.replace(/\W/g, '');
}

var countLines = function(splitWord) {
  var num = Math.sqrt(splitWord.length);
  if (splitWord.length % num === 0) {
    return num;
  }
  return Math.ceil(num);
}



var splitWordsIntoSquares = function(splitLines) {
  var n = countLines(splitLines);

  var wordArray = [];
  var subStart = 0;
  var subStop = n;

  for(var i = 0; i < n; i ++) {
    var str = splitLines.substring(subStart, subStop);
    subStart += n;
    subStop += n;
    wordArray.push(str);
  }

  return wordArray;
}
