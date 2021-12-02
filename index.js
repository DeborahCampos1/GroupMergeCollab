function numberConfirm(...c) {
    if (!c.every((number1) => Number.isNumber(number1)))
      throw "All arguments must be numbers.";
    return c.reduce((b, a) => a + b);
  }

  function square(number) {
    return number * number;
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.
  