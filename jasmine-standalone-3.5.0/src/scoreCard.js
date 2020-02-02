"use strict";

function ScoreCard() {
  this.game = []
  this.score = 0
}

ScoreCard.prototype.play = function(one, two) {
  var frame = new Frame(one, two)
  this.game.push(frame)
  this.score += this.frameScore()
}

ScoreCard.prototype.currentRound = function() {
  return this.game.length;
}

ScoreCard.prototype.frameScore = function() {
    return this.game[this.currentRound()- 1].ballOne + this.game[this.currentRound() - 1].ballTwo
  }
  

ScoreCard.prototype.currentScore = function() {
  return this.score
}

ScoreCard.prototype.isSpare = function() {
  return (this.game[this.currentRound() - 1].ballOne + this.game[this.currentRound() -1].ballTwo === 10)
}

ScoreCard.prototype.isStrike = function() {
  return  (this.game[this.currentRound() - 1].ballOne === 10)
}
