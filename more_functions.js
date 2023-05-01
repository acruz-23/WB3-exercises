function displayMailingLabel(name, address, city, state, zip) {
  console.log("\n" + name);
  console.log(address);
  console.log(`${city}, ${state}, ${zip}`);
}

function addNumbers(num1, num2) {
  const sum = num1 + num2;
  console.log(`\n ${num1} + ${num2} = ${sum}`);
}

function displayReceipt(totalDue, amountPaid) {
  const change = totalDue - amountPaid;
  console.log(`\n Total Due: $${totalDue} `);
  console.log(`Amount Paid: $${amountPaid} \n`);
  if (totalDue < amountPaid) {
    need = Math.abs(change);
    console.log(`I need $${need} more`);
  } else {
    console.log(`Change Due: $${change}`);
  }
}

displayMailingLabel("ben", "123 main st", "city", "Chicago", "12345");
displayMailingLabel("ned", "456 Downtown Ave.", "Metro", "NY", "67891");

addNumbers(1, 2);
addNumbers(-1, -2);

displayReceipt(5, 10);
displayReceipt(10, 5);
displayReceipt(5, 5);
