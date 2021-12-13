'use strict';
(function () {
// Открытие модального окна по кнопке Заказать звонок
  var openModal = document.querySelector('.page-header__button');
  var closeModal = document.querySelector('.modal-window__button-close');
  var userForm = document.querySelector('#form-user');
  var modalWindow = document.querySelector('.modal-window');
  var formPopup = modalWindow.querySelector('#form-popup');
  var username = document.querySelector('[name=username]');
  var name = document.querySelector('[name=username]');
  var phone = document.querySelector('[name=phone]');
  var listNavigation = document.querySelector('.page-footer__list-navigation');
  var listContacts = document.querySelector('.page-footer__list-contacts');
  var contactsButton = document.querySelector('.page-footer__contacts-button');
  var navigationButton = document.querySelector('.page-footer__navigation-button');

  function showWindow() {
    modalWindow.classList.add('modal-window--show');
  }

  function hideModal() {
    modalWindow.classList.remove('modal-window--show');
  }

  function onOpenClick() {
    showWindow();
    name.focus();
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
  formPopup.addEventListener('submit', function (evt) {
    if (!username.value || !phone.value) {
      evt.preventDefault();
    } else {
      localStorage.setItem('username', username.value);
      localStorage.setItem('phone', phone.value);
    }
  });

  userForm.addEventListener('submit', function (evt) {
    if (!name.value || !phone.value) {
      evt.preventDefault();
    } else {
      localStorage.setItem('name', name.value);
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

  //Аккордеон в футере
  function showNavigation() {
    listNavigation.classList.toggle('page-footer__list-navigation--open');
  }

  function showContacts() {
    listContacts.classList.toggle('page-footer__list-contacts--open');
  }

  function closeNavigation() {
    listNavigation.classList.remove('page-footer__list-navigation--open');
  }

  function closeContacts() {
    listContacts.classList.remove('page-footer__list-contacts--open');
  }

  function onNavigationClick() {
    showNavigation();
    closeContacts();
  }

  function onContactsClick() {
    showContacts();
    closeNavigation();
  }

  navigationButton.addEventListener('click', onNavigationClick);
  contactsButton.addEventListener('click', onContactsClick);
})();
