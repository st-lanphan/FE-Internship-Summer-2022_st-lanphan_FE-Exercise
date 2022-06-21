function repeatString(string, time) {
  if (time > 0)
    return string.repeat(time);
  else
    return "";
}
console.log(repeatString("abc", 3));
