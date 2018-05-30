// размер фаербола
var fireballSize = 22;

//Функция скорости фаербола
var getFireballSpeed = function (left) {
  return left ? 5 : 2;
};

// Скорость мага
var wizardSpeed = 3;

// Ширина мага
var wizardWidth = 70;

// Функция высоты мага
var getWizardHeight = function (wizardWidth) {
  var heightWidth = 1.337 * wizardWidth;
  return heightWidth;
};

// Функция центрирования персонажа по оси-х
var getWizardX = function (width) {
  var wizardXcentering = width / 2 - (wizardWidth / 2);
  return wizardXcentering;
};

// Функция центрирования персонажа по оси-y
var getWizardY = function (height) {
  // Нахожу расстояния от начала координат(неба) до волшебника(верхнего края),
  // height * (1 / 3)
  //
  // вычитаю половину высоты волшебника для центрирования.
  // - (getWizardHeight(wizardWidth)) / 2

  var wizardYcentering = height * (1 / 3) - (getWizardHeight(wizardWidth)) / 2;
  return wizardYcentering;
};
