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
  })
})