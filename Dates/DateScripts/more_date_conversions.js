const bDay = new Date("1945-02-28T12:00:00");
const momBDay = new Date("1954-02-24T12:00:00");
const dadBDay = new Date("1945-02-28T12:00:00");

console.log(bDay.toLocaleString());
// console.log(momBDay);
function printBDay(date, type) {
  //   const basicDate = date.toLocaleString();
  let month = date.getMonth();
  let day = date.getDate();
  const year = date.getFullYear();

  if (type.toLowerCase() == "slash") {
    if (+month < 10) {
      month = "0" + month;
    }
    if (+day < 10) {
      day = "0" + day;
    }
    console.log(`${+month + 1}/${day}/${year}`);
  } else if (type.toLowerCase() == "space") {
    if (+month < 10) {
      month = "0" + month;
    }
    if (+day < 10) {
      day = "0" + day;
    }
    month = "0" + month;
    console.log(+month + 1, day, year);
  } else if (type.toLowerCase() == "comma")
    console.log(`${year}, ${+month + 1}, ${day}`);
}
printBDay(bDay, "slash");
printBDay(momBDay, "space");
printBDay(dadBDay, "comma");
