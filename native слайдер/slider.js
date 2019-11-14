var galery = document.querySelectorAll('.galery img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
console.log(galery);
var i = 0;

next.onclick = function() {
  galery[i].classList.remove('activ');
  i++;

  if (i >= galery.length) {
    i = 0;
  }
  galery[i].classList.add('activ');
  console.log(1);
};
prev.onclick = function() {
  galery[i].classList = '';
  i--;

  if (i < 0) {
    i = galery.length - 1;
  }
  galery[i].classList = 'activ';
  console.log(2);
};
