function getSocSecTax(grossPay) {
  const ssTaxRate = 6.2 / 100;
  const taxedAmt = grossPay * ssTaxRate;

  return taxedAmt.toFixed(2);
}

function getMedicareTax(grossPay) {
  const medicareTaxRate = 1.45 / 100;
  const taxedAmt = grossPay * medicareTaxRate;

  return taxedAmt.toFixed(2);
}

function getTaxedAmt(grossPay, taxRate) {
  const taxedAmt = grossPay * taxRate;

  return taxedAmt;
}

function getFederalTax(grossPay, withholdingCode) {
  let fedTaxedRate;
  if (withholdingCode == 0) {
    fedTaxedRate = 23 / 100;
  } else if (withholdingCode == 1) {
    fedTaxedRate = 21 / 100;
  } else if (withholdingCode == 2) {
    fedTaxedRate = 19.5 / 100;
  } else if (withholdingCode == 3) {
    fedTaxedRate = 18.5 / 100;
  } else {
    fedTaxedRate = (18 - 0.5 * (withholdingCode - 4)) / 100;
  }
  const taxedAmt = grossPay * fedTaxedRate;
  return taxedAmt.toFixed(2);
}
console.log("Social Securtity tax: " + getSocSecTax(750));
console.log("Medicare tax: " + getMedicareTax(750));
console.log("Federal tax: " + getFederalTax(750, 0));
console.log("Federal tax: " + getFederalTax(1550, 2));
console.log("Federal tax: " + getFederalTax(1100, 6));

const value = 5;
function test(num) {
  // let value = 10;
  sum = value + num;
  console.log("value in funciton =", value);
  return sum;
}
console.log("value out of funciton =", value);
console.log(test(5));
