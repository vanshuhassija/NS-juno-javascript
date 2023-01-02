setInterval(() => {
  const timeHeading = document.getElementById("time");
  const currentDate = new Date();
  timeHeading.innerText =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
}, 1000);
