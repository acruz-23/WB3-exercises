function convertFtoC(tempF) {
  //F to C = (F-32) *5/9

  //calc
  const celsius = ((tempF - 32) * 5) / 9;

  //output
  return celsius;
}

console.log(convertFtoC(212).toFixed(1));
console.log(convertFtoC(90).toFixed(1));
console.log(convertFtoC(72).toFixed(1));
console.log(convertFtoC(32).toFixed(1));
console.log(convertFtoC(0).toFixed(1));
console.log(convertFtoC(-40).toFixed(1));
