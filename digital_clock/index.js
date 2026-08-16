function time() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const meridien = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours.toString().padStart(2, 0);

  const timeString = `${hours}:${minutes}:${seconds} ${meridien}`
  document.getElementById("clock").textContent = timeString;
}

time();
setInterval(time, 1000);