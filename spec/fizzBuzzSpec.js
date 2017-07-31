describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
      fizzBuzz = new FizzBuzz();
  });

  describe("fizz for multiples of 3", function() {
    it("should print fizz for 3", function() {
      expect(fizzBuzz.play(3)).toEqual("fizz");
    });
    it("should print fizz for 9", function() {
      expect(fizzBuzz.play(9)).toEqual("fizz");
    });
  });

  describe("buzz for multiples of 5", function() {
    it("should print buzz for 5", function() {
      expect(fizzBuzz.play(5)).toEqual("buzz");
    });
    it("should print buzz for 10", function() {
      expect(fizzBuzz.play(10)).toEqual("buzz");
    });
  });

  describe("fizzbuzz for multiples of 3 and 5", function() {
    it("should print fizzbuzz for 15", function() {
      expect(fizzBuzz.play(15)).toEqual("fizzbuzz");
    });
    it("should print fizzbuzz for 90", function() {
      expect(fizzBuzz.play(90)).toEqual("fizzbuzz");
    })
  });

  describe("print number when not divisible by 3 or 5", function() {
    it("should print 4", function() {
      expect(fizzBuzz.play(4)).toEqual(4);
    });
    it("should print fizzbuzz for 8", function() {
      expect(fizzBuzz.play(8)).toEqual(8);
    });
  });
});
