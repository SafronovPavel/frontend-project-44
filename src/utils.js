// Получение рандомного числа (включая максимальное значение)
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Проверка на простое число
const testPrime = (n) => {
  if (n === 1) {
    return false;
  } if (n === 2) {
    return true;
  }
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
};

// Реализация прогрессии
const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

// Условие для четного числа
const evenNumber = (number) => number % 2 === 0;

// Вычисление наибольшего общего делителя
const findNod = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return findNod(m, k);
  }
  return n;
};

export {
  getRandomInt,
  testPrime,
  getProgression,
  evenNumber,
  findNod,
};
