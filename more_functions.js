function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(`${city}, ${state}, ${zip}`);
  console.log("-".repeat(20));
}

function addNumbers(num1, num2) {
  const sum = num1 + num2;
  console.log(`${num1} + ${num2} = ${sum}`);
  console.log("-".repeat(20));
}

function displayReceipt(totalDue, amountPaid) {
  //calculations and var declarations
  const change = totalDue - amountPaid;
  const need = Math.abs(change);

  //output
  console.log(`Total Due: $${totalDue} `);
  console.log(`Amount Paid: $${amountPaid} \n`);
  if (totalDue < amountPaid) {
    console.log(`I need $${need} more`);
  } else {
    console.log(`Change Due: $${change}`);
  }
  console.log("-".repeat(20));
}

displayMailingLabel("ben", "123 main st", "city", "Chicago", "12345");
displayMailingLabel("ned", "456 Downtown Ave.", "Metro", "NY", "67891");

addNumbers(1, 2);
addNumbers(-1, -2);

displayReceipt(5, 10);
displayReceipt(10, 5);
displayReceipt(5, 5);
