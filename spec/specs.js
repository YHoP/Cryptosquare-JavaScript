describe('removeNonAlphanumeric', function() {
  it("Check if the non-alphanumeric has been removed", function() {
    expect(removeNonAlphanumeric("Hello,.3!")).to.equal("Hello3");
  });
});

describe('countLines', function() {
  it("Check if returns correct closest square root", function() {
    expect(countLines("HelloThere")).to.equal(3);
  });
});
