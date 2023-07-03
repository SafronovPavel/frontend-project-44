// Получение рандомного числа (включая максимальное значение)
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomInt;
