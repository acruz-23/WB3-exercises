function convertCtoF(celsius) {
  // c to f (c *9/5) + 32
  //calc
  const fahrenheit = (celsius * 9) / 5 + 32;

  //output
  return fahrenheit.toFixed(1);
}

console.log(convertCtoF(100));
console.log(convertCtoF(45));
console.log(convertCtoF(19));
console.log(convertCtoF(0));
console.log(convertCtoF(-7));
console.log(convertCtoF(-40));
