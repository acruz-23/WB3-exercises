window.onload = init;

function init() {
  const timeBtnEL = document.getElementById("timeBtn");
  timeBtnEL.onclick = ontimeBtnELClicked;
  const printDateBtnEL = document.getElementById("printDateBtn");
  printDateBtnEL.onclick = onprintDateBtnELClicked;
}
function ontimeBtnELClicked() {
  console.log("onTimeBtnClicked initiated");
  const now = new Date();

  document.getElementById("time").innerHTML = now;
  console.log("onTimeBtnClicked finished");
  console.log(now);
}
function onprintDateBtnELClicked() {
  console.log("onprintDateBtnElClicked initialized");
  const now = document.getElementById("dateInput").value;
  const newDate = new Date(now);
  document.getElementById("userDate").innerHTML = newDate.toUTCString();
  console.log("onprintDateBtnElClicked finished");
  console.log(now);
}
