const calculateEngravingPrice = function(message, pricePerWord, separator) {
  let lengthStr = message.split(separator);
  let costPhrath = lengthStr.length * pricePerWord;
  return costPhrath;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
let space = " ";

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10,
    space
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20,
    space
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40, space)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20, space)
); // 120
