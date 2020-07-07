const fruits = ['pommes', 'mangues', 'bananes'];
const fruits2 = fruits;
fruits2.push('ananas'); //Point sur la meme reference que fruits

const fruits3 = [...fruits];
fruits3.push('orange');

const fruitVert = [...fruits, 'blablabla'];
const fruit4 = [fruits, 'blablabla'];
