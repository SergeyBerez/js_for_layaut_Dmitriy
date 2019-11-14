// function Timer(t) {
//   this.t = t;

//   this.tic = () => {
//     this.t--;
//     console.log(this.t);
//   };

// }

// let timer = new Timer(10);

// timer();
// timer();
// timer();
// timer();
// ================================2==============
// let timer2 = {
//   t: 10,

//   count(a) {
//     let res = this.t--;

//     console.log(res);
//   },
// };

//  let si = setInterval(function() {
//   timer2.count();

//   if (timer2.t ==0 ) {
//     clearInterval(si);

//   }
// }, 1000);

// ==================уменьшаем значенине числа от 1 до 0,1 использовать для прозрачности
let btn2 = document.querySelector('.btn2 ');
function fade(t) {
  let c = t;

  let si = setInterval(function() {
    c = c - 0.1;
    let x = c.toFixed(1); // возвращает строку округляет до 1 знака
    btn2.textContent = x;
    if (x === '0.0') {
      clearInterval(si);
      return x;
    }
  }, 1000);
  // body
}
fade(1);

// ==================разные способы для уменьшениея получения чисел
//=========== остаток от деления либо  1 либо 0 выдает
//  или можем задать число и длинну массива перебирать от 0 до ....

let btn1 = document.querySelector('.btn1 ');
let a = 0;
setInterval(function() {
  let i = a % 2;
  
  a++;
  btn1.textContent = i;
}, 1000);

// let j = 2;
// setInterval(function() {
//   console.log(j % 2);
//   j++;
// }, 1000);

//  =====случайный набор чисел от 1 до 10 включая 1 и 10 

let btn3 = document.querySelector('.btn3 ');

setInterval(function() {
  let x = Math.round(Math.random() * (10 - 1)) + 1;
  btn3.textContent = x;
}, 1000);

//  =====случайный набор чисел от 1 до 9 включая 1 и 9 
// setInterval(function() {
//   let x = Math.floor(Math.random() * (10 - 1)) + 1;
//   btn3.textContent = x;
// }, 1000);
//  =====случайный набор чисел от 0 до 9 включая 0 и 9 
// setInterval(function() {
//   let x = Math.floor(Math.random() * (11 - 1));
//   console.log(x);
// }, 500);

// setInterval(function() {
//   let random = Math.floor(Math.random() * (boxs.length + 1 - 1));

//   console.log(random);
// }, 200);