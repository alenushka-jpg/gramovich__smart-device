'use strict';

(function () {
  // Открытие модального окна по кнопке Заказать звонок
  var body = document.querySelector('body');
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
  var inputsTel = document.querySelectorAll('input[type="tel"]');
  var overlay = document.querySelector('.overlay');

  var mainBody= document.querySelector('.main-body');
  var links = mainBody.querySelectorAll('a');
  var inputs = mainBody.querySelectorAll('input');
  var buttons = mainBody.querySelectorAll('button');
  var textareas = mainBody.querySelectorAll('textarea');
  var labels = mainBody.querySelectorAll('label');

  var phoneInputModal = document.querySelector('.js-phone-input-modal');
  var nameInputModal = document.querySelector('.js-name-input-modal');
  var textareaInputModal = document.querySelector('.js-textarea-input-modal');
  var checkboxInputModal = document.querySelector('.js-checkbox-input-modal');
  var resultModal = document.querySelector('.js-result-modal');
  var formModal = document.querySelector('.js-popup-form');

  function setBlur(e) {
    e.forEach(function (v) {
      v.setAttribute('tabindex', '-1');
    });
  }

  function removeBlur(e) {
    e.forEach(function (v) {
      v.removeAttribute('tabindex');
    });
  }

  function showWindow() {
    modalWindow.classList.add('modal-window--show');
    setBlur(links);
    setBlur(inputs);
    setBlur(buttons);
    setBlur(textareas);
    setBlur(labels);
  }

  function hideModal() {
    modalWindow.classList.remove('modal-window--show');
    removeBlur(links);
    removeBlur(inputs);
    removeBlur(buttons);
    removeBlur(textareas);
    removeBlur(labels);
  }

  function bodyHidden() {
    document.body.style.overflow = 'hidden';
  }

  function visible() {
    document.body.style.overflow = 'visible';
  }

  function onOpenClick() {
    showWindow();
    bodyHidden();
    name.focus();
  }

  function onCloseClick() {
    hideModal();
    visible();
  }

  function validation(phone, name, isChecked) {
    var valid = true;

    if (name.trim() === 0 || phone.length < 17 || isChecked === false) {
      valid = false;
    }

    return valid;
  }

  function localStorageData(data) {
    localStorage.setItem('phone', data.userPhone);
    localStorage.setItem('name', data.userName);
    localStorage.setItem('message', data.userMessage);
  }

  function onSubmitModalForm(e) {
    e.preventDefault();
    var userPhone = phoneInputModal.value;
    var userName = nameInputModal.value;
    var userMessage = textareaInputModal.value;
    var isChecked = checkboxInputModal.checked;

    if (validation(userPhone, userName, isChecked)) {
      resultModal.style.display = 'flex';

      localStorageData({
        userPhone: userPhone,
        userName: userName,
        userMessage: userMessage
      });
    }
  }

  if (formModal) {
    formModal.addEventListener('submit', onSubmitModalForm);
  }

  if (overlay) {
    overlay.addEventListener('click', hideModal);
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

  // // local storage
  // formPopup.addEventListener('submit', function (evt) {
  //   if (!username.value || !phone.value) {
  //     evt.preventDefault();
  //   } else {
  //     localStorage.setItem('username', username.value);
  //     localStorage.setItem('phone', phone.value);
  //   }
  // });

  // userForm.addEventListener('submit', function (evt) {
  //   if (!name.value || !phone.value) {
  //     evt.preventDefault();
  //   } else {
  //     localStorage.setItem('name', name.value);
  //     localStorage.setItem('phone', phone.value);
  //   }
  // });

  // Аккордеон в футере
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

  // Маска номера на инпут

  var im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputsTel);
})();
