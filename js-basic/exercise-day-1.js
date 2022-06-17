// input: 1*3
// ouput: thay * bằng 0 -> 9, Trả về các số chia hết cho 3

function checkString(str) {
  var result = [];
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== "*") {
      sum = sum + +str[i];
    }
  }
  for (var j = 0; j <= 9; j++) {
    if ((j + sum) % 3 === 0) {
      result.push(str.replace("*", j));
      j ++;
    }
  }
  return result;
}
console.log(checkString("1*3"));
// input: a > b
// ouput: a + b
// input: a <b
// ouput: (a+b)*3
function checkSum(a, b) {
  if (a > b) {
    return a + b;
  }
  return (a + b) * 3;
}
console.log(checkSum(5,4));
// Calendar
const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const calendar = [
  {
    date: "Wed",
    room: "Mars",
    team: "FE",
  },
  {
    date: "Sun",
    room: "Saturn",
    team: "IOS",
  }
];
const sortCalendar = () => {
  const result = [];
  week.forEach((date) => {
    result.push({
      date: date,
      booking: calendar.filter((calendar) => {
        return calendar.date == date;
      }),
    });
  });
  return result;
};

console.log(sortCalendar());
