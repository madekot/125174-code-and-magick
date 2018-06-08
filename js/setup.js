'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizardNames = [
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

var wizardFamily = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var wizardCoatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyescolor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var doNumberRandom = function (number) {
  var randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
};

var wizards = [];
var doAvatartWizards = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    wizards[i] =
      {
        name: wizardNames[doNumberRandom(wizardNames.length)]
          + ' ' + wizardFamily[doNumberRandom(wizardFamily.length)],
        eyesColor: wizardCoatColor[doNumberRandom(wizardCoatColor.length)],
        coatColor: wizardEyescolor[doNumberRandom(wizardEyescolor.length)]
      };
  }
};

doAvatartWizards(4);


document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
