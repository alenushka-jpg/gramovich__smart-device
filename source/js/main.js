'use strict';

(function () {
  // Открытие модального окна по кнопке Заказать звонок
  var openModal = document.querySelector('.page-header__button');
  var closeModal = document.querySelector('.modal-window__button-close');
  var modalWindow = document.querySelector('.modal-window');
  var name = document.querySelector('[name=username]');
  var listNavigation = document.querySelector('.page-footer__list-navigation');
  var listContacts = document.querySelector('.page-footer__list-contacts');
  var inputsTel = document.querySelectorAll('input[type="tel"]');
  var overlay = document.querySelector('.overlay');

  var mainBody = document.querySelector('.main-body');
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

  var phoneInput = document.querySelector('.js-phone-input');
  var nameInput = document.querySelector('.js-name-input');
  var messageInput = document.querySelector('.js-message-input');
  var checkboxInput = document.querySelector('.js-checkbox-input');
  var questionsResult = document.querySelector('.js-questions-result');
  var questionsForm = document.querySelector('.js-question-form');
  var sendButton = document.querySelector('.js-send-button');

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

  function visibleBody() {
    document.body.style.overflow = 'visible';
  }

  function onOpenClick() {
    showWindow();
    bodyHidden();
    name.focus();
  }

  function onCloseClick() {
    hideModal();
    visibleBody();
  }

  openModal.addEventListener('click', onOpenClick);
  closeModal.addEventListener('click', onCloseClick);

  // eslint-disable-next-line no-shadow
  function validation(phone, name, isChecked) {
    var valid = true;
    var newLocal = name.trim() === 0 || phone.length < 17 || isChecked === false;

    if (newLocal) {
      valid = false;
    } else {
      sendButton.addEventListener('click', showQuestionsResult);
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

  function showQuestionsResult() {
    questionsResult.style.display = 'flex';
  }

  function onSubmitQuestionsForm(e) {
    e.preventDefault();

    var userPhone = phoneInput.value;
    var userName = nameInput.value;
    var userMessage = messageInput.value;
    var isChecked = checkboxInput.checked;

    if (validation(userPhone, userName, isChecked)) {
      localStorageData({
        userPhone: userPhone,
        userName: userName,
        userMessage: userMessage
      });
    }
  }

  function hideQuestionsResult() {
    questionsResult.style.display = 'none';
  }

  if (formModal) {
    formModal.addEventListener('submit', onSubmitModalForm);
  }

  if (questionsForm) {
    questionsForm.addEventListener('submit', onSubmitQuestionsForm);
  }

  if (overlay) {
    overlay.addEventListener('click', hideModal);
  }

  overlay.addEventListener('click', visibleBody);

  if (resultModal) {
    resultModal.addEventListener('click', hideModal);
  }

  if (questionsResult) {
    questionsResult.addEventListener('click', hideQuestionsResult);
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modalWindow.classList.contains('modal-window--show')) {
        evt.preventDefault();
        modalWindow.classList.remove('modal-window--show');
      }
    }
  });

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

  listNavigation.addEventListener('click', onNavigationClick);
  listContacts.addEventListener('click', onContactsClick);

  // Маска номера на инпут

  // eslint-disable-next-line no-undef
  var im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputsTel);
})();
