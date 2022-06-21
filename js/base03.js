function truncateString(string, number) {
  return string.split(" ").splice(0,number).join(" ");
}

console.log(truncateString('The quick brown fox jumps over the lazy dog', 4));