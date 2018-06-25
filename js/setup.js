'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_FAMILY = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARD_COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARD_EYESCOLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];


var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var doNumberRandom = function (number) {
  var randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
};


var wizards = [];
var doAvatartWizards = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    wizards[i] =
      {
        name: WIZARD_NAMES[doNumberRandom(WIZARD_NAMES.length)]
          + ' ' + WIZARD_FAMILY[doNumberRandom(WIZARD_FAMILY.length)],
        eyesColor: WIZARD_COAT_COLOR[doNumberRandom(WIZARD_COAT_COLOR.length)],
        coatColor: WIZARD_EYESCOLOR[doNumberRandom(WIZARD_EYESCOLOR.length)]
      };
  }
};
doAvatartWizards(4);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


// #14 Учебный проект: одеть Надежду

var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Элементы закрытия и открытия окна настроек
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var inputName = setup.querySelector('.setup-user-name');


// функция обработчика события закрытия окна настрок, кроме случая,
// когда фокус находится на поле имени
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.currentTarget.activeElement !== inputName) {
    closePopup();
  }
};

// функция обработчика открытия окна настроек
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

// функция обработчика закрытия окна настроек
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};


// отслеживаниe события клика по кпопке открыть
setupOpen.addEventListener('click', function () {
  openPopup();
});

// отслеживаниe события нажатия кнопки, если кнопка enter
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// отслеживаниe события клика по кнопке закрыть
setupClose.addEventListener('click', function () {
  closePopup();
});

// отслеживаниe события нажатия по кпопке, если эта кнопка esc
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
});

// отслеживаниe события нажатия по кпопке, если эта кнопка ENTER
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// функция генерации индекса случайного элемента массива + вывода его значения
var doElementArrayRandom = function (array) {
  element = array[Math.floor(Math.random() * array.length)];
  return element;
};

// Нахожу элемент мантии волшебника
var wizardCoat = setup.querySelector('.wizard-coat');

// Отслеживаниe события нажатия по мантии, + изменение её цвета.
wizardCoat.addEventListener('click', function () {
  var colorCoat = doElementArrayRandom(WIZARD_COAT_COLOR);
  wizardCoat.style.fill = colorCoat;

  // Нахожу элемент скрытого поля мантии и переписываю его значение
  setup.querySelector('input[name=coat-color]').value = colorCoat;
});

// Нахожу элемент глаза
var wizardEyes = setup.querySelector('.wizard-eyes');

wizardEyes.addEventListener('click', function () {
  var colorEyes = doElementArrayRandom(WIZARD_EYESCOLOR);
  wizardEyes.style.fill = colorEyes;

  setup.querySelector('input[name=eyes-color]').value = colorEyes;
});

// Нахожу элемент файрбол
var fireballWrap = setup.querySelector('.setup-fireball-wrap');

fireballWrap.addEventListener('click', function () {
  var colorFireball = doElementArrayRandom(FIREBALL_COLOR);
  fireballWrap.style.background = colorFireball;

  setup.querySelector('input[name=fireball-color]').value = colorFireball;
});

// Валидация ввода имени персонажа.
inputName.addEventListener('invalid', function () {
  if (inputName.validity.tooShort) {
    inputName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (inputName.validity.tooLong) {
    inputName.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (inputName.validity.valueMissing) {
    inputName.setCustomValidity('Обязательное поле');
  } else {
    inputName.setCustomValidity('');
  }
});
