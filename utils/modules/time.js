const time = (initial) => {
  const date = new Date(initial * 1000);
  console.log(date);
  const utc = date.toTimeString();
  console.log(utc);
  var options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  var result = date.toLocaleDateString("en", options); // 10/29/2013
  console.log(result);
  const dateArr = utc.split(" ");
  dateArr.push(result);
  console.log(dateArr);
  return date.toUTCString();
};

time(1560620519);
