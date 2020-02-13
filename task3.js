let wordMaxL, arrLength, space;

const findLongestWord = function(string, separeted) {
  arrLength = string.split(separeted);
  wordMaxL = " ";

  for (i = 0; i < arrLength.length; i++) {
    if (arrLength[i].length > wordMaxL.length) {
      wordMaxL = arrLength[i];
    }
  }
  return wordMaxL;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
space = " ";
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog", space)
); // 'jumped'

console.log(findLongestWord("Google do a roll", space)); // 'Google'

console.log(findLongestWord("May the force be with you", space)); // 'force'
