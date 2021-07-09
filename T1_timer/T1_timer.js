const setDate = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const plusZeroAndTostring = (number) => {
    if (number < 10) {
      const plusZero = "0" + number.toString();
      return plusZero;
    } else {
      return number.toString();
    }
  }

  const stringYear = plusZeroAndTostring(year);
  const stringMonth = plusZeroAndTostring(month);
  const stringDay = plusZeroAndTostring(day);
  const stringHour = plusZeroAndTostring(hour);
  const stringMin = plusZeroAndTostring(min);
  const stringSec = plusZeroAndTostring(sec);

  const present = stringYear + "-" + stringMonth + "-" + stringDay + " " + stringHour + ":" + stringMin + ":" + stringSec;
  console.log(present)

  const words = document.querySelector('.words')
  words.innerHTML = present;
}

setInterval(setDate, 1000);

setDate();