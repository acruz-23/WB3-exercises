function getSupplier(code) {
  const colonLocation = code.indexOf(":");
  const supplierCode = code.slice(0, colonLocation);
  return supplierCode;
}

function getProductNumber(code) {
  const colonLocation = code.indexOf(":");
  const dashLocation = code.indexOf("-");
  const productNumber = code.slice(colonLocation + 1, dashLocation);
  return productNumber;
}
function getSize(code) {
  const dashLocation = code.indexOf("-");
  const size = code.slice(dashLocation + 1, code.length);
  return size;
}
function printCodeDetails(code) {
  console.log("Supplier:", getSupplier(code));
  console.log("Product Number:", getProductNumber(code));
  console.log("Size:", getSize(code));
  console.log("-".repeat(15));
}
printCodeDetails("ACME:123-L");
printCodeDetails("DI:12345-M");
printCodeDetails("ACE:1-12 ");
