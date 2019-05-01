function countLetters(input) {
  input = input.split(' ').join('');
  let obj = new Object
  for (let i = 0; i < input.length; i++) {
    let character = input.charAt(i);
    if (obj[character]) {
      obj[character].push(i);
    } else {
      obj[character] = [i];
    }
  }
  return obj;
}
console.log(countLetters("lighthouse in the house"));
