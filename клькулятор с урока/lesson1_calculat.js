var inps = document.querySelectorAll('[type="text"]');
var bts = document.querySelectorAll('[type="button"]');
var res = document.querySelector('button');
var span = document.body.querySelector('span');
// первый  способа через слушатель событий 2 собития

for (var i = 0; i < bts.length; i++) {
  bts[i].addEventListener('click', function(e) {
    var op = e.target.getAttribute('data-prise');
    console.log(op);
    calc(op);
  });
}
//второй через он клик  только одно событие
// for (var i = 0; i < bts.length; i++) {
//   bts[i].onclick = function() {
//     var op = this.getAttribute('data-prise');
//     calc(op);
//   };
// }
//вызываем функцию расчета
function calc(op) {
  var a = parseInt(inps[0].value);
  var b = parseInt(inps[1].value);
  var sum;
  if (op == '-') {
    sum = a - b;
  } else if (op == '+') {
    sum = a + b;
  } else if (op == '*') {
    sum = a * b;
  } else if (op == '/') {
    sum = a / b;
  }
  span.innerHTML = sum;
}
// блокируем не все кнопки а ту на которую кликнули
for (var i = 0; i < bts.length; i++) {
  bts[i].addEventListener('click', function(e) {
    this.disabled = true;
  });
}

for (let i = 0; i < inps.length; i++) {
  inps[i].onfocus = function() {
    for (var i = 0; i < bts.length; i++) {
      if (bts[i].hasAttribute('disabled')) {
        bts[i].classList.add('border');
        bts[i].disabled = false;
      }
    }
  };
}

//суммируем цену товаров записанную в див data атрибуте
// var divs = document.querySelectorAll('div');

// for (i = 0; i < divs.length; i++) {
//   divs[i].onclick = active;
// }

// function active() {
//   this.classList.toggle('borderGreen');
//   calc(); // вызываем функцию calc() после события onclick
// }

// function calc() {
//   var prise = 0;
//   for (i = 0; i < divs.length; i++) {
//     if (divs[i].classList.contains('borderGreen'))
//       prise = prise + parseInt(divs[i].getAttribute('data-prise'));
//   }
//   span.innerHTML = prise;
// }

// делаем рандомный выбор элементов  устанавливаем класс setInterval вызывает функцию
// mtRand каждые 1000милисек
// setInterval(function() {
//   var rand = mtRand(0, divs.length - 1);

//   active.call(divs[rand]);
// }, 1000);

// function mtRand(min, max) {
//   return Math.floor(Math.random() * (max - min + 1));
// }

// делаем таймер через замыкание
// var div = document.querySelector('div');
// console.log(div);

// function tik() {
//   var t = 50;
//   return function aaa() {
//     return t--;
//   };
// }
// var sss = tik();
// function timer() {
//   var resl = sss();
//   div.innerHTML = resl;
//   // body
// }
// setInterval(timer, 500);

// создаем таймер через обьект

// var div = document.querySelector('div');

// function Timer(time, div) {
//   this.timer = time;
//   this.div = div;
//   this.tic = function() {
//     this.timer--;
//     this.div.innerHTML = this.timer;
//   };
// }

// var timer = new Timer(60, div);

// setInterval(function() {
//   timer.tic();
// }, 1000);

// простой калькулятор
// var inpts = document.querySelectorAll("[type='text']");
// var input2 = document.querySelector("[name='delete']");
// var input1 = document.querySelector("[name='save']");
// var span = document.querySelector('span');
// var btn = document.querySelector('button');

// btn.onclick = function() {
//   var res = parseInt(input1.value) + parseInt(input2.value);
//   span.innerHTML = res;
//   btn.disabled = true;
// };
// for (var i = 0; i < inpts.length; i++) {
//   this.oninput = function() {
//     btn.disabled = false;
//   };
// }
