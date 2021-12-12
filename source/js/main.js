'use strict';

(function () {
// Открытие модального окна по кнопке Заказать звонок
  var openModal = document.querySelector('.button-open');
  var closeModal = document.querySelector('.button-close');
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
})();
