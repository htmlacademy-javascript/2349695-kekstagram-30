//Функция для проверки длины строки
const checkLength = function (string, maxLength) {
  return string.length <= maxLength;
};

checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом

const checkPalindrome = function (string) {
  const normalizeLine = string.toLowerCase().replaceAll(/\s/g,'');
  let emptyLine = '';
  for (let i = normalizeLine.length - 1; i >= 0; i--) {
    emptyLine += normalizeLine.at(i);
  }
  return emptyLine === normalizeLine;

};

checkPalindrome('топот');
checkPalindrome('Кекс');

//Дополнительное задание

const returnNumber = function (inputData) {
  const string = inputData.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
};

returnNumber('1 кефир, 0.5 батона');
