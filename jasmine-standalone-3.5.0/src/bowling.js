"use strict";

var ScoreCard = function() {
  this.score = 0
};

ScoreCard.prototype.currentScore = function() {
  return this.score;
}