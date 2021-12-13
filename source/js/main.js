'use strict';
(function () {
// Открытие модального окна по кнопке Заказать звонок
  var openModal = document.querySelector('.page-header__button');
  var closeModal = document.querySelector('.modal-window__button-close');
  var modalWindow = document.querySelector('.modal-window');
  var username = modalWindow.querySelector('[name=username]');
  var userForm = document.querySelector('#form-user');

  function showWindow() {
    modalWindow.classList.add('modal-window--show');
  }

  function hideModal() {
    modalWindow.classList.remove('modal-window--show');
  }

  function onOpenClick() {
    showWindow();
    username.focus();
  }

  function onCloseClick() {
    hideModal();
  }

  openModal.addEventListener('click', onOpenClick);
  closeModal.addEventListener('click', onCloseClick);

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modalWindow.classList.contains('modal-window--show')) {
        evt.preventDefault();
        modalWindow.classList.remove('modal-window--show');
      }
    }
  });

  // local storage
  var phone = modalWindow.querySelector('[name=phone]');
  var formPopup = modalWindow.querySelector('#form-popup');

  formPopup.addEventListener('submit', function (evt) {
    if (!username.value || !phone.value) {
      evt.preventDefault();
    } else {
      localStorage.setItem('username', username.value);
      localStorage.setItem('phone', phone.value);
    }
  });

  // Маска на номер телефона
  const Inputmask = window.Inputmask;

  if (formPopup) {
    const telInput = formPopup.querySelector('#tel-input');
    const mask = new Inputmask('+7(999)999-99-99');
    if (telInput) {
      mask.mask(telInput);
    }
  }

  if (userForm) {
    const tel = userForm.querySelector('#tel');
    const mask = new Inputmask('+7(999)999-99-99');
    if (tel) {
      mask.mask(tel);
    }
  }
})();
