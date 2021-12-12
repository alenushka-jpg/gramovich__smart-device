'use strict';
(function () {
// Открытие модального окна по кнопке Заказать звонок
  var openModal = document.querySelector('.page-header__button');
  var closeModal = document.querySelector('.modal-window__button-close');
  var modalWindow = document.querySelector('.modal-window');

  function showWindow() {
    modalWindow.classList.add('modal-window--show');
  }

  function hideModal() {
    modalWindow.classList.remove('modal-window--show');
  }

  function onOpenClick() {
    showWindow();
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
  var username = modalWindow.querySelector('[name=username]');
  var phone = modalWindow.querySelector('[name=phone]');
  var form = modalWindow.querySelector('#form-popup');

  form.addEventListener('submit', function (evt) {
    if (!username.value || !phone.value) {
      evt.preventDefault();
    } else {
      localStorage.setItem('username', username.value);
      localStorage.setItem('phone', phone.value);
    }
  });
})();
