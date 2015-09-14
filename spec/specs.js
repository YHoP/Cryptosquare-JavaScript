describe('removeNonAlphanumeric', function() {
  it("Check if the non-alphanumeric has been removed", function() {
    expect(removeNonAlphanumeric("Hello,.3!")).to.equal("hello3");
  });
});

describe('countLines', function() {
  it("Check if returns correct closest square root", function() {
    expect(countLines("HelloThere")).to.equal(4);
  });
});

describe('splitWordsIntoSquares', function() {
  it("Check if returns array of split words", function() {
    expect(splitWordsIntoSquares("TodayIsMondayLO")[3]).to.equal("yLO");
  });
});

describe('splitArrayIntoColumns', function() {
  it("Check if returns expected String", function() {
    expect(splitArrayIntoColumns(["abc", "def", "ghi", "j"])).to.equal("adgjbehcfi");
  });
});

describe('splitStringIntoArray', function() {
  it("Check if returns expected String", function() {
    expect(splitStringIntoArray("HeythereHowAreYou")[1]).to.equal("ereHo");
  });
});

describe('countColumns', function() {
  it("Check if returns expected number of column", function() {
    expect(countColumns(["pet", "dog", "cat"])).to.equal(2);
  });
});

describe('encrypt', function() {
  it("Check that encrypted array is returned", function() {
    expect(encrypt("Hello,.3!")[1]).to.equal("3");
  });
});
