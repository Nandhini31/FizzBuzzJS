function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
    if (this._isDivisibleBy(15, number)) {
      return "fizzbuzz";
    }
    else if (this._isDivisibleBy(3, number)) {
      return "fizz";
    }
    else if (this._isDivisibleBy(5, number)) {
      return "buzz";
    }
    else {
      return number;
    }
}

FizzBuzz.prototype._isDivisibleBy = function (divisibleBy, number) {
    return number % divisibleBy === 0;
}
