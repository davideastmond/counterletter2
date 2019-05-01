function countLetters(input) {
  let input1 = input.split(' ').join('');
  let obj = new Object
  for (let i = 0; i < input1.length; i++) {
    let character = input1.charAt(i);
    if (obj[character]) {
      obj[character].push(i);
    } else {
      obj[character] = [i];
    }

  }
  return obj;
}
console.log(countLetters("lighthouse in the house"));
