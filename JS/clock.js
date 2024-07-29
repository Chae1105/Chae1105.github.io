const clock = document.getElementById("clock");
const todayDate = document.getElementById("date");

function getClock() {
  const nowDate = new Date();
  const hours = String(nowDate.getHours()).padStart(2, "0");
  const minuetes = String(nowDate.getMinutes()).padStart(2, "0");
  const seconds = String(nowDate.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minuetes}:${seconds}`;
}

function getTodayDate() {
  const nowDate = new Date();
  const day = nowDate.getDay();
  const realDay = getDay(day);
  const date = nowDate.getDate();
  const month = nowDate.getMonth() + 1;
  const year = nowDate.getFullYear();
  todayDate.innerText = `${year}-${month}-${date}, ${realDay}`;
}


function getDay(day) {
  let nowDay = "";
  if (day === 0) nowDay = "Sunday";
  else if (day === 1) nowDay = "Monday";
  else if (day === 2) nowDay = "Tuesday";
  else if (day === 3) nowDay = "Wednesday";
  else if (day === 4) nowDay = "Thursday";
  else if (day === 5) nowDay = "Friday";
  else nowDay = "Saturday"

  return nowDay;
}


getTodayDate();
getClock();
setInterval(getClock, 1000);
