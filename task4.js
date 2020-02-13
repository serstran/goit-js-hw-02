let longStr, maxLongStr, fourthChStr, strLong;

maxLongStr = [40];

const formatString = function(string) {
  longStr = string.split();
  if (longStr.length > maxLongStr.length) {
    longStr.length == maxLongStr.length;
    return longStr;
  } else {
    return string;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
