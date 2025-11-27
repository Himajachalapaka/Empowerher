let sec = Number(prompt("Enter the number of seconds for countdown:"));
let remaining = sec;

let timer = setInterval(() => {
  console.log(remaining);
  remaining--;

  if (remaining < 0) {
    clearInterval(timer);

    setTimeout(() => {
      console.log("Countdown Complete!");
    }, 500);
  }
}, 1000);

document.addEventListener("keydown", (event) => {
  if (event.key === "s") {
    clearInterval(timer);
    console.log("Countdown Stopped by User!");
  }
});