function fn(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers.";
    return c.reduce((a, b) => a + b);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.

 function banana() {
    this.val1 = "value1";
    this.val2 = "value2";
    let newBananaValue = this.val1;
    this.bananaMethod = function () {
        myBananaValue = newBananaValue;
        return myBananaValue;
    };
}
let bananaInstance = new banana();
alert(bananaInstance.bananaMethod());
  
