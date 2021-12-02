function numberConfirm(...c) {
    if (!c.every((number1) => Number.isNumber(number1)))
      throw "All arguments must be numbers.";
    return c.reduce((number1, b) => number1 + b);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.
  