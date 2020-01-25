"use strict";

describe('ScoreCard', function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard()
  })

  describe('score', function() {
    it('starts a game with a score of 0', function() {
      expect(scoreCard.currentScore()).toEqual(0)
    })

    it('adds the two scores per frame', function(){
      expect(scoreCard.frame(2, 6)).toEqual(8)
    })

    it('adds the frame score to the total score', function() {
      scoreCard.frame(2,4)
      scoreCard.addScore(2,4)
      expect(scoreCard.score).toEqual(6)
    })
  })
})