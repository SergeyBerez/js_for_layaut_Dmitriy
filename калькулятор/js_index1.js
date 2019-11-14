//------1 неправильный кальк задание вариант калькулятора------------
// var inp1 = document.querySelector('[name = num1]');
// var inp2 = document.querySelector('[name = num2]');
// var sum = document.querySelector('[name=sum]');
// var min = document.querySelector('[name=min]');
// var div = document.querySelector('[name=div] ');
// var mul = document.querySelector('[name=mul] ');

// var divcalc = document.querySelector('.calc');
// var span = document.querySelector('.res');

// divcalc.addEventListener('click', function(e) {
//   var a = parseInt(inp1.value);
//   var b = parseInt(inp2.value);
//   var res;

//   if (e.target == sum) {
//     res = a + b;
//   }

//   if (e.target == min) {
//     res = a - b;
//   }

//   if (e.target == div) {
//     res = a / b;
//   }

//   if (e.target == mul) {
//     res = a * b;
//   }
//   span.innerHTML = res;
// });

//------2 задание отслеживаем событие нажатия на кнопки
// var button = document.querySelectorAll("button");
// console.log(button);

// for (var i = 0; i < button.length; i++) {
//   button[i].onclick = btnEn;
// }
// function btnEn(e) {
//   var set = this.getAttribute("name");
//   if (set == "1") {
//     span.innerHTML = "нажали на 1 кнопку";
//   }
//   if (set == "2") {
//     span.innerHTML = "нажали на 2 кнопку";
//   }
// }

//------------3 задание  вариант  калькулятора-----
// var inp1 = document.querySelector('[name = num1]');
// var inp2 = document.querySelector('[name = num2]');
// var span = document.querySelector('.res');

// var btns = document.querySelectorAll('[type=button]');

// for (var i = 0; i < btns.length; i++) {
//   btns[i].onclick = function() {
//     var op = this.getAttribute('data-op'); // получаем значение атрибута
//     calc(op); //вызываем функцию
//   };
// }

// function calc(op) {
//   // обьявляем функцию с параметром ОР который это полученный атрибут
//   var a = parseInt(inp1.value);
//   var b = parseInt(inp2.value);
//   var res;

//   if (op === '+') {
//     res = a + b;
//   } else if (op === '-') {
//     res = a - b;
//   } else if (op === '/') {
//     res = a / b;
//   } else if (op === '*') {
//     res = a * b;
//   }

//   span.textContent = res;
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].disabled = true; // ставим класс блокировки и стиль сss через селктор атрибутов
//   }
// }
// var inpts = document.querySelectorAll('input[type=text]');

// for (var i = 0; i < inpts.length; i++) {
//   inpts[i].onfocus = function() {
//     // подвешиваем событие и  перебираем , реагируем на зменения поля в инпутах
//     for (var i = 0; i < btns.length; i++) {
//       btns[i].disabled = false; // перебираем все кнопки и удаляем класс блокировки
//     }
//   };
// }
