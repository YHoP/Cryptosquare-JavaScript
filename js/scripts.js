var removeNonAlphanumeric = function(word){
  word = word.toLowerCase();
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

var splitArrayIntoColumns = function(wordArray) {
  var newArray = [];
  var newWord = "";
  for(var i = 0; i < wordArray.length; i++) {
    var count = 0;
    while(count < wordArray.length) {
      newWord = newWord.concat(wordArray[count].substring(0,1));
      wordArray[count] = wordArray[count].slice(1);
      count ++;
     }
  }
  return newWord;
}

var splitStringIntoArray = function(encryptedString) {
  var numWords = Math.ceil(encryptedString.length / 5);
  var encryptedArray = [];
  var updatedString = encryptedString;

  for(var i = 0; i < numWords; i++ ) {
    encryptedArray.push(updatedString.substring(0,5));
    updatedString = updatedString.slice(5);
  }
  return encryptedArray;
}

var countColumns = function(encryptedArray) {
  var num = Math.sqrt(encryptedArray.length);
  if (encryptedArray.length % num === 0) {
    return num;
  }
  return Math.ceil(num);
}

var encrypt = function(userInput) {
  var editedString = removeNonAlphanumeric(userInput);
  var squareArray = splitWordsIntoSquares(editedString);
  var encryptedString = splitArrayIntoColumns(squareArray);
  return splitStringIntoArray(encryptedString);

}

$(document).ready(function() {
  $("form#encrypter").submit(function(event) {
    var userInput = $("input#message").val();
    var encryptedString = encrypt(userInput);

    var num = countColumns(encryptedString);

    var newHTML = [];
    for(var i = 0; i < num; i++) {
      var newString = "";
      var count = 0;
      while(count < num && encryptedString[1]) {
        newString = newString.concat(" ");
        newString = newString.concat(encryptedString[0]);
        encryptedString.shift();
        count ++;
       }
       $(".result").append("<p>"+newString+"</p>");
    }

    $("#result").show();
    event.preventDefault();
  });
});
