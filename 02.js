// array
a = [false, 3, 'zeeshan', 1.9]
console.log(a);
console.table(a[-1]);
let b;
console.log(typeof b);
a.push("b");
console.log(a);
a.pop('b');
console.log(a);
a.shift();
console.log(a);
console.log(a.join());

let num = [1, 2, 3, 4, 5, 6, 7, 8];
let t = num.splice(2);
console.log(t);
console.log(num.slice(2, 5));

let movie = ["mam", 'dc', 'harrypotter'];
let rating = [1, 2, 3];
let a3 = [...movie, ...rating];
console.log(a3);
let a4 = [...a3, 10];
a4 = [10, ...a3];v
console.log(a4);
console.log(movie.concat(rating));