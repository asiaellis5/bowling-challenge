"use strict";

function ScoreCard() {
  this.game = []
}

ScoreCard.prototype.play = function(one, two) {
  var frame = new Frame(one, two)
  this.game.push(frame)
}

ScoreCard.prototype.currentRound = function() {
  return this.game.length;
}

ScoreCard.prototype.frameScore = function() {
    return this.game[this.currentRound()- 1].ballOne + this.game[this.currentRound() - 1].ballTwo
  }

ScoreCard.prototype.isSpare = function() {
  return (this.game[this.currentRound() - 1].ballOne + this.game[this.currentRound() -1].ballTwo === 10)
}

ScoreCard.prototype.isStrike = function() {
  return  (this.game[this.currentRound() - 1].ballOne === 10)
}

ScoreCard.prototype.score = function() {
  var score = 0

  for( var i = 0; i < this.currentRound(); i++) {
    if (this.game[i].ballOne === 10) {
      score += (this.game[i + 1].ballOne + this.game[i + 1].ballTwo)
    }
    else if (this.game[i].ballOne + this.game[i].ballTwo === 10) {
      score += this.game[i + 1].ballOne
    }
      score += (this.game[i].ballOne + this.game[i].ballTwo)
    }
    return score
  }
  


