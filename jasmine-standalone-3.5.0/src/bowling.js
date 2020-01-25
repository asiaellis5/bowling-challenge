"use strict";

var ScoreCard = function() {
  this.score = 0
};

ScoreCard.prototype.currentScore = function() {
  return this.score;
}

ScoreCard.prototype.frame = function(ballOne, ballTwo) {
  return ballOne + ballTwo;
}

ScoreCard.prototype.addScore = function(scoreOne, scoreTwo) {
  this.score += (this.frame(scoreOne, scoreTwo));
}