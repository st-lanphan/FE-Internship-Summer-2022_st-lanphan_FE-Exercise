function randomHexa() {
  let string = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += string[Math.floor(Math.random() * string.length)];
  }
  return color;
}
console.log(randomHexa());