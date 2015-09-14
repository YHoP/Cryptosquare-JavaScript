describe('removeNonAlphanumeric', function() {
  it("Check if the non-alphanumeric has been removed", function() {
    expect(removeNonAlphanumeric("Hello,.3!")).to.equal("Hello3");
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
    expect(splitArrayIntoColumns(["abc", "def", "ghi"])).to.equal("adgbehcfi");
  });
});
