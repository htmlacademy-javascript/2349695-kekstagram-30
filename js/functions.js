//Функция для проверки длины строки
const checkLength = function (string, maxLength) {
  return string.length <= maxLength;
};

//Функция для проверки, является ли строка палиндромом

const checkPalindrome = function (line) {
  const normalizeLine = line.toLowerCase().replaceAll(/\s/g,'');
  let emptyLine = '';
  for (let i = normalizeLine.length - 1; i >= 0; i--) {
    emptyLine += normalizeLine.at(i);
  }
  return emptyLine === normalizeLine;

};

//Дополнительное задание


