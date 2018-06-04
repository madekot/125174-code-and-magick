'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;

var GAP = CLOUD_GAP + 20;

var FONT_GAP = 10;
var TEXT_HEIGHT = 10;

var BAR_HEIGHT = 150;
var BAR_WIGHT = 40;
var BAR_GAP = BAR_WIGHT + 50;

var TEXT_COLOR = 'blue';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  renderText(ctx, 'Ура вы победили!',
      CLOUD_X + GAP, CLOUD_Y + GAP);
  renderText(ctx, 'Список результатов:',
      CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT + FONT_GAP);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  var maxTime = getMaxElement(times);
  // var players = ['Вы', 'Иван', 'Юлия', 'Юрий'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillRect(
        CLOUD_X + GAP + BAR_GAP * i,
        CLOUD_Y + FONT_GAP + (GAP + TEXT_HEIGHT) * 2,
        BAR_WIGHT, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillText(players[i],
        CLOUD_X + GAP + BAR_GAP * i,
        CLOUD_Y + BAR_HEIGHT + (GAP + TEXT_HEIGHT + FONT_GAP) * 2);
  }
};

// var playerIndex = 0;
// var playerName = 'Вы';
//
//   ctx.fillStyle = 'rgba(255, 0, 0, 1)';
//   ctx.fillRect(
//       CLOUD_X + GAP + BAR_GAP * playerIndex,
//       CLOUD_Y + FONT_GAP + (GAP + TEXT_HEIGHT) * 2,
//       BAR_WIGHT, BAR_HEIGHT);
//   ctx.fillText(playerName,
//       CLOUD_X + GAP + (BAR_GAP) * 0,
//       CLOUD_Y + BAR_HEIGHT + (GAP + TEXT_HEIGHT + FONT_GAP) * 2);
//
// var playerIndex = 1;
// var playerName = 'Иван';
//
//   ctx.fillStyle = 'blue';
//   ctx.fillRect(
//       CLOUD_X + GAP + BAR_GAP * playerIndex,
//       CLOUD_Y + FONT_GAP + (GAP + TEXT_HEIGHT) * 2,
//       BAR_WIGHT, BAR_HEIGHT);
//   ctx.fillText(playerName,
//       CLOUD_X + GAP + (BAR_GAP) * 1,
//       CLOUD_Y + BAR_HEIGHT + (GAP + TEXT_HEIGHT + FONT_GAP) * 2 );
//
// var playerIndex = 2;
// var playerName = 'Юлия';
//
//   ctx.fillRect(
//       CLOUD_X + GAP + (BAR_GAP) * playerIndex,
//       CLOUD_Y + FONT_GAP + (TEXT_HEIGHT + GAP) * 2,
//       BAR_WIGHT, BAR_HEIGHT);
//   ctx.fillText(playerName,
//       CLOUD_X + GAP + (BAR_GAP) * 2,
//       CLOUD_Y + BAR_HEIGHT + (GAP + TEXT_HEIGHT + FONT_GAP) * 2);
//
// var playerIndex = 3;
// var playerName = 'Юрий';
//
//   ctx.fillRect(
//       CLOUD_X + GAP + (BAR_GAP) * playerIndex,
//       CLOUD_Y + FONT_GAP + (GAP + TEXT_HEIGHT) * 2,
//       BAR_WIGHT, BAR_HEIGHT);
//   ctx.fillText(playerName,
//       CLOUD_X + GAP + (BAR_GAP) * 3,
//       CLOUD_Y + BAR_HEIGHT + (GAP + TEXT_HEIGHT + FONT_GAP) * 2 );
// };
