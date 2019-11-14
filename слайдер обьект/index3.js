//-----калькулятор простой + одно действие-------
// window.onload = function(e) {
//   var inpt1 = document.querySelector('[name=num1]');
//   var inpt2 = document.querySelector('[name=num2]');
//   var btn = document.querySelector('[name=sum]');
//   var span = document.querySelector('.res');
//   var inputs = document.querySelectorAll('input[type=text]');
//   console.log(inputs);

//   btn.addEventListener('click', function() {
//     var res = parseInt(inpt1.value) + parseInt(inpt2.value);
//     span.innerHTML = res;
//     this.disabled = true;
//   });
//   for (var i = 0; i < inputs.length; i++) {
//     inputs[i].oninput = function() {
//       btn.disabled = false;
//     };
//   }
// };

//--------проверка формы на валидность
// window.onload = function(e) {
//   var inputs = document.querySelectorAll('.check');
//   var submitForm = document.querySelector('form');
//   submitForm.onsubmit = function(e) {
//     var error = false;
//     for (var i = 0; i < inputs.length; i++) {
//       if (inputs[i].value === '') {
//         inputs[i].classList.add('err');
//         error = true;

//       }
//     }
//     if (error) {
//       return false;
//     }
//   };
// };

//--------добавляем красную рамку через css селектор в форму input----
// for (var i = 0; i < inpts.length; i++) {
//   inpts[i].onfocus = function() {
//     this.classList.add('inptBdr');
//   };
// }

// for (var i = 0; i < inpts.length; i++) {
//   inpts[i].onblur = function() {
//     //if (this.getAttribute('class') === 'inptBdr') {
//     this.classList.remove('inptBdr');
//     // }
//   };
// }
//-------------отменяем дейстивия браузера по умолчанию----
// var aLink = document.querySelectorAll('a[target=blank]');
// console.log(aLink);
// for (var i = 0; i < aLink.length; i++) {
//   aLink[i].onclick = stop;
// }
// function stop(e) {
//   if (!confirm('хотите перейти ')) {
//     e.preventDefault();
//   }
// }

//------слайдер-------------
window.onload = function(e) {
  var next = document.querySelector('.galery-1 .next');
  var prev = document.querySelector('.galery-1 .prev');
  var imeges = document.querySelectorAll('.galery-1 img ');

  var slider = new Slider(imeges); // создаем обьект слайдера из конструктора
  next.onclick = function() {
    slider.next();
  };
  prev.onclick = function() {
    slider.prev();
  };
  //------------создаем новый обьект слайдера slider2-------
  var next2 = document.querySelector('.galery-2 .next');
  var prev2 = document.querySelector('.galery-2 .prev');
  var imeges2 = document.querySelectorAll('.galery-2 img ');

  var slider2 = new Slider(imeges2);
  next2.onclick = function() {
    slider2.next();
  };
  prev2.onclick = function() {
    slider2.prev();
  };
  //---------------конструктор функция слайдера
  function Slider(imeges) {
    this.imeges = imeges;
    this.i = 0;

    this.next = function() {
      this.imeges[this.i].classList.remove('show');
      this.i++;
      if (this.i >= this.imeges.length) {
        this.i = 0;
      }
      this.imeges[this.i].classList.add('show');
    };

    this.prev = function(e) {
      this.imeges[this.i].classList.remove('show');
      this.i--;
      if (this.i < 0) {
        this.i = this.imeges.length - 1;
      }
      this.imeges[this.i].classList.add('show');
    };
  }
};
