var date1 = 1559199600;

class dateConvert {
  constructor(date) {
    this._str = new Date(date * 1000).toString();
    this._strArr = this._str.split(" ");
    this._timeArr = this._strArr[4].split(":");
    this._weekDay = this._strArr[0],
      this._month = this._strArr[1],
      this._day = this._strArr[2],
      this._year = this._strArr[3],
      this._time = this._strArr[4],
      this._hour = this._timeArr[0],
      this._minute = this._timeArr[1],
      this._second = this._timeArr[2],
      this._GMT = this._strArr[5];
  }
  get weekDay() {
    return this._weekDay;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
  get date() {
    return this._dateConcat();
  }
  get time() {
    return this._time;
  }
  get hour() {
    return this._hour;
  }
  get minute() {
    return this._minute;
  }
  get second() {
    return this._second;
  }
  get GMT() {
    return this._GMT;
  }
  get timeZone() {
    return this._tz();
  }
  _tz() {
    const len = this._strArr.length - 1;
    let arr = [];
    let total = len - 5;
    for (let i = 6; i < this._strArr.length; i++) {
      arr.push(this._strArr[i]);
    }
    const str = arr
      .join(" ")
      .replace("(", "")
      .replace(")", "");
    return str;
  }
  _dateConcat() {
    return this._strArr[1].concat(" ", this._strArr[2], ", ", this._strArr[3]);
  }
}

module.exports = dateConvert;

const date = new dateConvert(date1);
console.log(
  date.date,
  //.toDateString()
  //.slice(0, 19)
  //.replace("T", " ")
);
