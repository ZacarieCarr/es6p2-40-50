let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

const cakeAmount = 20;
const cakes = ['mudcake', 'hotdog', 'donut'];

const coolCakes = cakes.map((cake) => `We love ${cake}s`);
