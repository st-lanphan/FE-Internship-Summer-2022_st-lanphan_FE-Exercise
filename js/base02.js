function occurrenceSubtring(string, substring) {
  string += '';
  substring += '';

  if (substring.length <= 0) 
  {
      return string.length + 1;
  }

     substring = substring.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
     return (string.match(new RegExp(substring, 'gi')) || []).length;
}
console.log(occurrenceSubtring("The quick brown fox jumps over the lazy dog", "the"));