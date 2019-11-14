// var inpts = document.querySelectorAll('.input');
// var form = document.querySelector('form');

// form.onsubmit = function(e) {
//   for (var i = 0; i < inpts.length; i++) {
//     if (inpts[i].value == '') {
//       e.preventDefault();
//       inpts[i].classList.add('err');
//     } else {
//       inpts[i].classList.remove('err');
//     }
//   }
// };

// jquery отправка формы  НА ЧИСТОМ JQURY))))
$('form').submit(function(e) {
  $('.input').each(function(index, element) {
    if (element.value == '') {
      e.preventDefault();
      element.classList.add('err');

      $(element)
        .parent()
        .find('span')
        .css('display', 'block');
     
    } else {
      $(element)
        .parent()
        .find('span')
        .css('display', 'none');
      element.classList.remove('err');
    }
  });
});
$('.input').focus(function(e) {
  console.log(this);
  $(this)
    .parent()
    .find('span')
    .css('display', 'none');
  console.log(11111);
});

var button = document.querySelector('[type="button"]');
var p = document.querySelectorAll('p');

button.addEventListener('click', function(e) {
  for (var i = 0; i < p.length; i++) {
    this.hidden = true;
  }
});
