function printCurrTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  printCurrTime();
  setInterval(printCurrTime, 1000);