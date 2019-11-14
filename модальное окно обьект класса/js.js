function Popup() {
  this.modal = document.querySelector('.modal');
  this.overlay = document.querySelector('.overlay');
  let popup = this;
  this.open = function(con) {
    this.modal.innerHTML = con;
    this.modal.classList.add('show');
    this.overlay.classList.add('show');
  };

  this.close = function() {
    popup.modal.classList.remove('show');
    popup.overlay.classList.remove('show');
  };

  this.overlay.onclick = this.close;
}

window.onload = function(arguments) {
  let popup = new Popup();
  let popup1 = new Popup();
  document.querySelector('.singin').onclick = function() {
    let form = document.querySelector('.form_popup');

    popup.open(form.innerHTML);
  };

  // console.log(divmodal);
  document.querySelector('.sinreg').onclick = function() {
    popup1.open('форма регистрации');
  };
};
