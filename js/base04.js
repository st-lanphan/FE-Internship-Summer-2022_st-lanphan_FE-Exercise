function uniqueRandom(length, min, max) {
  let array = [];
  for (let i = 0; i < length; i++) {
    let number = Math.floor(min + Math.random() * (max - min));
    while (array.indexOf(number) != -1) {
      number = Math.floor(min + Math.random() * (max - min));
    }
    array.push(number);
  }
  return array;
}
console.log(uniqueRandom(4, 1, 10));