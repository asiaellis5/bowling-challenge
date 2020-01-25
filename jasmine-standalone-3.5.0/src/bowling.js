"use strict";

var ScoreCard = function() {
  this.score = 0
};

ScoreCard.prototype.currentScore = function() {
  return this.score;
}

ScoreCard.prototype.frame = function(one, two) {
  return one + two;
}