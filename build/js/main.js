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
})();
